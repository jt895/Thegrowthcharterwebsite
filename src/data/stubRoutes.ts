import type { Page } from "../routes";

export interface StubRouteConfig {
  page: Page;
  eyebrow: string;
  heading: string;
  body: string;
  backLabel: string;
  backTo: Page;
}

const productBody = "Full product page in development.";
const caseStudyBody = "Full case study in development.";

export const stubRoutes: StubRouteConfig[] = [
  {
    page: "launch-charter",
    eyebrow: "The Growth Charter",
    heading: "Launch Charter",
    body: "Foundations done properly. Positioning, a 90-day growth plan, brand and a launch-ready website. " + productBody,
    backLabel: "Back to The Growth Charter",
    backTo: "growth-charter",
  },
  {
    page: "do-it-together",
    eyebrow: "The Growth Charter",
    heading: "Do It Together",
    body: "We guide the work, run the key sessions and help you make the decisions, while you and your team build the plan and the skills to carry it forward. " + productBody,
    backLabel: "Back to The Growth Charter",
    backTo: "growth-charter",
  },
  {
    page: "launch-complete",
    eyebrow: "The Growth Charter",
    heading: "Launch Complete",
    body: "Everything, built on your actual sales data, with pricing, conversion and 12 weeks of support. " + productBody,
    backLabel: "Back to The Growth Charter",
    backTo: "growth-charter",
  },
  {
    page: "charter-course",
    eyebrow: "The Growth Charter",
    heading: "The Charter Course",
    body: "A guided program for owners who want to work through The Growth Charter themselves, using structured tools, templates and training. " + productBody,
    backLabel: "Back to The Growth Charter",
    backTo: "growth-charter",
  },
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
    page: "first-nations-voice-2024",
    eyebrow: "Case Study",
    heading: "2024 First Nations Voice",
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
  {
    page: "case-studies",
    eyebrow: "Our Work",
    heading: "Case Studies",
    body: "Case studies from 25 years of strategy, marketing and growth work across government, major brands and owner-led businesses — in production, check back soon.",
    backLabel: "Back to Home",
    backTo: "home",
  },
];
