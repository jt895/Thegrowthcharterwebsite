import { defineStackbitConfig, type Field } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";
import siteDocument from "./content/site.json";

type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
type JsonObject = { [key: string]: JsonValue };

function labelFor(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/^./, (character) => character.toUpperCase());
}

function textType(name: string, value: string): "string" | "text" {
  return value.length > 80 || /body|blurb|description|intro|para|quote|when|execution|label/i.test(name)
    ? "text"
    : "string";
}

function fieldFor(name: string, value: JsonValue): Field {
  const common = { name, label: labelFor(name) };

  if (name === "type") {
    return { ...common, type: "string", hidden: true, const: value };
  }

  if (typeof value === "string") {
    return { ...common, type: textType(name, value), default: "" } as Field;
  }

  if (typeof value === "number") {
    return { ...common, type: "number" };
  }

  if (typeof value === "boolean") {
    return { ...common, type: "boolean" };
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return { ...common, type: "list", items: { type: "string", default: "" } } as Field;
    }

    if (value.every((item) => typeof item === "string")) {
      const longest = value.reduce((result, item) =>
        typeof item === "string" && item.length > result.length ? item : result, "");
      return { ...common, type: "list", items: { type: textType(name, longest), default: "" } } as Field;
    }

    if (value.every((item) => typeof item === "object" && item !== null && !Array.isArray(item))) {
      const sample = value[0] as JsonObject;
      return {
        ...common,
        type: "list",
        items: {
          type: "object",
          fields: Object.entries(sample).map(([childName, childValue]) => fieldFor(childName, childValue)),
        },
      };
    }

    return { ...common, type: "json" };
  }

  if (value && typeof value === "object") {
    return {
      ...common,
      type: "object",
      fields: Object.entries(value).map(([childName, childValue]) => fieldFor(childName, childValue)),
    };
  }

  return { ...common, type: "string" };
}

const fields = Object.entries(siteDocument as JsonObject).map(([name, value]) => fieldFor(name, value));

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  useESM: true,
  nodeVersion: "22",
  installCommand: "pnpm install",
  devCommand: "pnpm dev --host {HOSTNAME} --port {PORT}",
  buildCommand: "pnpm build",
  publishDir: "dist",
  contentSources: [
    new GitContentSource({
      // Netlify evaluates an ESM copy of this config from `.stackbit/cache`.
      // The process working directory remains the checked-out repository root.
      rootPath: process.cwd(),
      contentDirs: ["content"],
      models: [
        {
          name: "SiteContent",
          label: "Website copy",
          type: "data",
          filePath: "content/site.json",
          singleInstance: true,
          canDelete: false,
          fields,
        },
      ],
    }),
  ],
  sitemap: () => [
    { stableId: "home", label: "Home", urlPath: "/", isHomePage: true },
    { stableId: "growth-charter", label: "The Growth Program", urlPath: "/growth-program/" },
    { stableId: "strategic-advisory", label: "Strategic Advisory", urlPath: "/strategic-advisory/" },
    { stableId: "services", label: "Services", urlPath: "/services/" },
    { stableId: "how-we-work", label: "How We Work", urlPath: "/how-we-work/" },
    { stableId: "about", label: "About", urlPath: "/about/" },
  ],
});
