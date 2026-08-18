export type Page =
  | "home"
  | "about"
  | "how-we-work"
  | "services"
  | "strategic-advisory"
  | "growth-charter"
  | "contact"
  | "launch-charter"
  | "do-it-together"
  | "launch-complete"
  | "charter-course"
  | "case-studies"
  | "toyota-lifetime-advantages"
  | "ford-six-model-launches"
  | "commbank-little-card-big-rewards"
  | "snack-brands-kettle-popcorn"
  | "state-election-2022"
  | "local-government-elections-2022"
  | "first-nations-voice-2024"
  | "adelaide-hills-wine-region";

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
    title: "The United Republic | Strategy and Business Growth in Adelaide, South Australia",
    description:
      "Strategy and growth for Australian businesses and complex organisations. We find where growth is really available, set the priorities and build the capability to act. Based in South Australia.",
  },
  {
    page: "about",
    path: "/about/",
    title: "About | The United Republic",
    description:
      "The United Republic is an independent Australian strategy and growth advisory led by James Trebilcock, with 25 years across government, major brands and owner-led business. Based in South Australia.",
  },
  {
    page: "how-we-work",
    path: "/advisory-process/",
    title: "The Advisory Process | The United Republic",
    description:
      "How The United Republic works: diagnose, design, direct and measure. Problem definition through to briefing and guiding the specialists who deliver the work.",
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
    path: "/growth-program/",
    title: "The Growth Program | The United Republic",
    description:
      "The Growth Program finds the growth that's already in your business, sizes it in dollars, and gives you a plan you own. For Australian businesses ready for their next stage.",
  },
  {
    page: "contact",
    path: "/contact/",
    title: "Contact | The United Republic",
    description:
      "Get in touch with The United Republic. A twenty-minute conversation about what you're trying to change, and whether we're the right people to help.",
  },

  // Growth Program product pages - stubs pending full product copy.
  {
    page: "launch-charter",
    path: "/growth-program/launch/",
    title: "Launch | The Growth Program | The United Republic",
    description:
      "Foundations done properly. Positioning, a 90-day growth plan, brand and a launch-ready website.",
  },
  {
    page: "do-it-together",
    path: "/growth-program/do-it-together/",
    title: "Do It Together | The Growth Program | The United Republic",
    description:
      "We guide the work, run the key sessions and help you make the decisions, while you and your team build the plan and the skills to carry it forward.",
  },
  {
    page: "launch-complete",
    path: "/growth-program/grow/",
    title: "Grow | The Growth Program | The United Republic",
    description:
      "Everything, built on your actual sales data, with pricing, conversion and 12 weeks of support.",
  },
  {
    page: "charter-course",
    path: "/growth-program/grow-it-yourself/",
    title: "Grow It Yourself | The Growth Program | The United Republic",
    description:
      "A guided course for owners who want to work through The Growth Program themselves, using structured tools, templates and training.",
  },

  // Case studies - slugs preserved from the old site so no redirects are needed.
  // Stubs pending the full case-studies rewrite.
  {
    page: "case-studies",
    path: "/case-studies/",
    title: "Case Studies | The United Republic",
    description:
      "Case studies from 25 years of strategy, marketing and growth work across government, major brands and owner-led businesses.",
  },
  {
    page: "toyota-lifetime-advantages",
    path: "/case-studies/toyota-lifetime-advantages/",
    title: "Toyota: Lifetime Advantages | Case Studies | The United Republic",
    description: "How this campaign built long-term value for Toyota owners.",
  },
  {
    page: "ford-six-model-launches",
    path: "/case-studies/ford-six-model-launches/",
    title: "Ford: Six Model Launches | Case Studies | The United Republic",
    description: "Six model launches for Ford, planned and delivered.",
  },
  {
    page: "commbank-little-card-big-rewards",
    path: "/case-studies/commbank-little-card-big-rewards/",
    title: "CommBank: Little Card, Big Rewards | Case Studies | The United Republic",
    description: "A rewards campaign for Commonwealth Bank.",
  },
  {
    page: "snack-brands-kettle-popcorn",
    path: "/case-studies/snack-brands-kettle-popcorn/",
    title: "Snack Brands Kettle: Popcorn Launch | Case Studies | The United Republic",
    description: "Bringing Kettle popcorn to market for Snack Brands.",
  },
  {
    page: "state-election-2022",
    path: "/case-studies/state-election-2022/",
    title: "2022 State Election | Case Studies | The United Republic",
    description: "Strategy and communications for the 2022 South Australian state election.",
  },
  {
    page: "local-government-elections-2022",
    path: "/case-studies/local-government-elections-2022/",
    title: "2022 Local Government Elections | Case Studies | The United Republic",
    description: "Strategy and communications for the 2022 local government elections.",
  },
  {
    page: "first-nations-voice-2024",
    path: "/case-studies/first-nations-voice-2024/",
    title: "2024 First Nations Voice | Case Studies | The United Republic",
    description: "Strategy and communications for the 2024 First Nations Voice referendum.",
  },
  {
    page: "adelaide-hills-wine-region",
    path: "/case-studies/adelaide-hills-wine-region/",
    title: "Adelaide Hills Wine Region | Case Studies | The United Republic",
    description: "Brand and growth work for the Adelaide Hills Wine Region.",
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
