import type { Page } from "../routes";

export interface StubRouteConfig {
  page: Page;
  eyebrow: string;
  heading: string;
  body: string;
  backLabel: string;
  backTo: Page;
}

// The four Growth Charter product pages (launch-charter, do-it-together,
// launch-complete, charter-course) have real pages now — see ProductPage.tsx
// and CharterCoursePage.tsx. All nine case-studies routes (the index plus
// all eight case studies) have real pages too — see CaseStudiesIndexPage.tsx
// and CaseStudyDetailPage.tsx. Nothing currently needs a stub.
export const stubRoutes: StubRouteConfig[] = [];
