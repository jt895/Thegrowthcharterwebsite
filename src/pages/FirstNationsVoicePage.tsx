import CaseStudyTemplate, { type CaseStudyContent } from "../components/CaseStudyTemplate";
import { caseStudiesContent } from "../data/content";
import type { Page } from "../routes";

interface FirstNationsVoicePageProps {
  onNavigate: (page: Page) => void;
}

export default function FirstNationsVoicePage({ onNavigate }: FirstNationsVoicePageProps) {
  return (
    <CaseStudyTemplate
      content={caseStudiesContent.firstNationsVoice2024 as CaseStudyContent}
      page="first-nations-voice-2024"
      formId="voice-2024-enquiry"
      formName="case-study-voice-2024-enquiry"
      onNavigate={onNavigate}
    />
  );
}
