export type Page =
  | "home"
  | "about"
  | "how-we-work"
  | "services"
  | "strategic-advisory"
  | "growth-charter"
  | "contact";

export interface SiteRoute {
  page: Page;
  path: string;
  title: string;
  description: string;
  /** Path under /og/ for this route's share image. Falls back to /og/default.png when unset. */
  image?: string;
}

export const defaultOgImage = "/og/default.png";

export const siteRoutes: SiteRoute[] = [
  {
    page: "home",
    path: "/",
    title: "The United Republic | Strategy and Business Growth — Adelaide, South Australia",
    description:
      "Strategy and growth for Australian businesses and complex organisations. We find where growth is really available, set the priorities and build the capability to act. Based in South Australia.",
  },
  {
    page: "about",
    path: "/about/",
    title: "About | The United Republic",
    description:
      "The United Republic is an independent Australian strategy and growth advisory led by James Trebilcock — 25 years across government, major brands and owner-led business. Based in South Australia.",
  },
  {
    page: "how-we-work",
    path: "/how-we-work/",
    title: "How We Work | The United Republic",
    description:
      "How The United Republic works — diagnose, design, direct and measure. Problem definition through to briefing and guiding the specialists who deliver the work.",
  },
  {
    page: "services",
    path: "/services/",
    title: "Services | The United Republic",
    description:
      "Strategic diagnostics, strategy development, embedded strategic leadership and fractional CMO services for organisations that need the real problem defined before they invest.",
  },
  {
    page: "strategic-advisory",
    path: "/strategic-advisory/",
    title: "Strategic Advisory | The United Republic",
    description:
      "Independent strategic advisory for government, brands and complex organisations. We define the real problem, build the strategy and brief the specialists who deliver it.",
  },
  {
    page: "growth-charter",
    path: "/growth-charter/",
    title: "The Growth Charter | The United Republic",
    description:
      "The Growth Charter finds the growth that's already in your business, sizes it in dollars, and gives you a plan you own — for Australian businesses ready for their next stage.",
  },
  {
    page: "contact",
    path: "/contact/",
    title: "Contact | The United Republic",
    description:
      "Get in touch with The United Republic. A twenty-minute conversation about what you're trying to change, and whether we're the right people to help.",
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

  const canonicalUrl = new URL(route.path, window.location.origin).href;

  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  canonical?.setAttribute("href", canonicalUrl);

  const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
  ogUrl?.setAttribute("content", canonicalUrl);

  const imageUrl = new URL(route.image ?? defaultOgImage, window.location.origin).href;

  const ogImage = document.querySelector<HTMLMetaElement>('meta[property="og:image"]');
  ogImage?.setAttribute("content", imageUrl);

  const twitterImage = document.querySelector<HTMLMetaElement>('meta[name="twitter:image"]');
  twitterImage?.setAttribute("content", imageUrl);
}
