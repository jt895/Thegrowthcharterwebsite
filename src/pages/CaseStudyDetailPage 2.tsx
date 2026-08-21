import CaseStudyTemplate, { type CaseStudyContent } from "../components/CaseStudyTemplate";
import { caseStudiesContent } from "../data/content";
import type { Page } from "../routes";

interface CaseStudyDetailPageProps {
  page: Page;
  onNavigate: (page: Page) => void;
}

export default function CaseStudyDetailPage({ page, onNavigate }: CaseStudyDetailPageProps) {
  const details = caseStudiesContent.details as Record<string, CaseStudyContent>;
  const content = details[page];

  return (
    <CaseStudyTemplate
      content={content}
      page={page}
      formId={`${page}-enquiry`}
      formName={`case-study-${page}-enquiry`}
      onNavigate={onNavigate}
    />
  );
}
