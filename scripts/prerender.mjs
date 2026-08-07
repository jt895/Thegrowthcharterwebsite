import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const distDir = resolve(root, "dist");
const serverEntry = resolve(root, ".prerender/entry-server.js");
const { render, siteRoutes } = await import(`${pathToFileURL(serverEntry).href}?t=${Date.now()}`);
const template = await readFile(resolve(distDir, "index.html"), "utf8");
const siteUrl = (process.env.URL || "https://thegrowthcharter.netlify.app").replace(/\/$/, "");

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceMeta(html, route) {
  const canonicalUrl = `${siteUrl}${route.path}`;
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`)
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${escapeHtml(route.description)}">`,
    )
    .replace(
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${escapeHtml(route.title)}">`,
    )
    .replace(
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${escapeHtml(route.description)}">`,
    )
    .replace(
      /<link rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${escapeHtml(canonicalUrl)}">`,
    );
}

for (const route of siteRoutes) {
  const renderedApp = render(route.path);
  const html = replaceMeta(
    template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`),
    route,
  );
  const destination = route.path === "/"
    ? resolve(distDir, "index.html")
    : resolve(distDir, route.path.slice(1), "index.html");

  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html, "utf8");
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...siteRoutes.map((route) => `  <url><loc>${siteUrl}${route.path}</loc></url>`),
  "</urlset>",
  "",
].join("\n");

await writeFile(resolve(distDir, "sitemap.xml"), sitemap, "utf8");
await writeFile(
  resolve(distDir, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`,
  "utf8",
);
await rm(resolve(root, ".prerender"), { recursive: true, force: true });
