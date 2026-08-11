import type { Page } from "../routes";

export interface StubRouteConfig {
  page: Page;
  eyebrow: string;
  heading: string;
  body: string;
  backLabel: string;
  backTo: Page;
}

const caseStudyBody = "Full case study in development.";

// The four Growth Charter product pages (launch-charter, do-it-together,
// launch-complete, charter-course) have real pages now — see ProductPage.tsx
// and CharterCoursePage.tsx — so they're no longer in this stub list.
// "case-studies" and "first-nations-voice-2024" also have real pages now —
// see CaseStudiesIndexPage.tsx and FirstNationsVoicePage.tsx.
export const stubRoutes: StubRouteConfig[] = [
  {
    page: "toyota-lifetime-advantages",
    eyebrow: "Case Study",
    heading: "Toyota — Lifetime Advantages",
    body: caseStudyBody,
    backLabel: "Back to Case Studies",
    backTo: "case-studies",
  },
  {
    page: "ford-six-model-launches",
    eyebrow: "Case Study",
    heading: "Ford — Six Model Launches",
    body: caseStudyBody,
    backLabel: "Back to Case Studies",
    backTo: "case-studies",
  },
  {
    page: "commbank-little-card-big-rewards",
    eyebrow: "Case Study",
    heading: "CommBank — Little Card, Big Rewards",
    body: caseStudyBody,
    backLabel: "Back to Case Studies",
    backTo: "case-studies",
  },
  {
    page: "snack-brands-kettle-popcorn",
    eyebrow: "Case Study",
    heading: "Snack Brands Kettle — Popcorn Launch",
    body: caseStudyBody,
    backLabel: "Back to Case Studies",
    backTo: "case-studies",
  },
  {
    page: "state-election-2022",
    eyebrow: "Case Study",
    heading: "2022 State Election",
    body: caseStudyBody,
    backLabel: "Back to Case Studies",
    backTo: "case-studies",
  },
  {
    page: "local-government-elections-2022",
    eyebrow: "Case Study",
    heading: "2022 Local Government Elections",
    body: caseStudyBody,
    backLabel: "Back to Case Studies",
    backTo: "case-studies",
  },
  {
    page: "adelaide-hills-wine-region",
    eyebrow: "Case Study",
    heading: "Adelaide Hills Wine Region",
    body: caseStudyBody,
    backLabel: "Back to Case Studies",
    backTo: "case-studies",
  },
];
