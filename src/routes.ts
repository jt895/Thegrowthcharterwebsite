export type Page =
  | "home"
  | "about"
  | "how-we-work"
  | "services"
  | "strategic-advisory"
  | "growth-charter";

export interface SiteRoute {
  page: Page;
  path: string;
  title: string;
  description: string;
}

export const siteRoutes: SiteRoute[] = [
  {
    page: "home",
    path: "/",
    title: "The United Republic | Strategy and Business Growth",
    description:
      "Independent strategic advisory and practical growth support for established Australian businesses and complex organisations.",
  },
  {
    page: "about",
    path: "/about/",
    title: "About | The United Republic",
    description:
      "Meet The United Republic, an independent Australian strategy, growth and communications advisory led by senior practitioners.",
  },
  {
    page: "how-we-work",
    path: "/how-we-work/",
    title: "How We Work | The United Republic",
    description:
      "Discover The United Republic's evidence-led process for defining opportunities, setting priorities and building practical capability.",
  },
  {
    page: "services",
    path: "/services/",
    title: "Services | The United Republic",
    description:
      "Explore strategic diagnostics, strategy development, implementation guidance and ongoing strategic leadership services.",
  },
  {
    page: "strategic-advisory",
    path: "/strategic-advisory/",
    title: "Strategic Advisory | The United Republic",
    description:
      "Independent strategic advisory for government, brands and complex organisations that need clarity before execution.",
  },
  {
    page: "growth-charter",
    path: "/growth-charter/",
    title: "The Growth Charter | The United Republic",
    description:
      "A practical growth program that helps Australian businesses identify commercial opportunities, choose priorities and act with confidence.",
  },
];

export function routeForPage(page: Page): SiteRoute {
  return siteRoutes.find((route) => route.page === page) ?? siteRoutes[0];
}

export function pathForPage(page: Page): string {
  return routeForPage(page).path;
}

export function pageFromPath(pathname: string): Page {
  const normalized = pathname === "/" ? "/" : `/${pathname.split("/").filter(Boolean).join("/")}/`;
  return siteRoutes.find((route) => route.path === normalized)?.page ?? "home";
}

export function updateDocumentMetadata(page: Page): void {
  const route = routeForPage(page);
  document.title = route.title;

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  description?.setAttribute("content", route.description);

  const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
  ogTitle?.setAttribute("content", route.title);

  const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
  ogDescription?.setAttribute("content", route.description);

  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  canonical?.setAttribute("href", new URL(route.path, window.location.origin).href);
}
