import type { Page } from "../routes";
import { pathForPage } from "../routes";

export interface CaseStudyCardData {
  slug: string;
  logo: string;
  sectorTags: string[];
  filters: string[];
  title: string;
  summary: string;
  linked: boolean;
}

interface CaseStudyCardProps {
  item: CaseStudyCardData;
  comingSoonLabel: string;
  onNavigate: (page: Page) => void;
}

export default function CaseStudyCard({ item, comingSoonLabel, onNavigate }: CaseStudyCardProps) {
  const page = item.slug as Page;

  const inner = (
    <>
      <div style={{ background: "#F5F3EE", height: 56, display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "10px 16px", marginBottom: 24, alignSelf: "flex-start", maxWidth: "100%" }}>
        <img src={item.logo} alt="" style={{ maxHeight: "100%", maxWidth: 180, objectFit: "contain" }} />
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
        {item.sectorTags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.06em",
              textTransform: "uppercase", color: "rgba(245,243,238,0.55)",
              border: "1px solid rgba(245,243,238,0.15)", padding: "4px 10px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, lineHeight: 1.25, color: "#F5F3EE", fontWeight: 400, marginBottom: 14 }}>
        {item.title}
      </h3>

      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, lineHeight: 1.65, color: "rgba(245,243,238,0.55)", margin: 0, flexGrow: 1 }}>
        {item.summary}
      </p>

      <div style={{ marginTop: 24 }}>
        {item.linked ? (
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: "#3AAC88", display: "inline-flex", alignItems: "center", gap: 8 }}>
            Read the case study <span>→</span>
          </span>
        ) : (
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#E3B15E", border: "1px solid rgba(227,177,94,0.4)", padding: "3px 9px" }}>
            {comingSoonLabel}
          </span>
        )}
      </div>
    </>
  );

  const baseStyle = {
    background: "#252122",
    borderTop: "2px solid #2E9677",
    padding: "28px 28px 32px",
    display: "flex",
    flexDirection: "column" as const,
    height: "100%",
    transition: "background 0.25s, transform 0.25s, border-color 0.25s",
  };

  if (!item.linked) {
    return (
      <div style={{ ...baseStyle, borderTopColor: "rgba(46,150,119,0.3)" }}>
        {inner}
      </div>
    );
  }

  return (
    <a
      href={pathForPage(page)}
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        onNavigate(page);
        window.scrollTo({ top: 0 });
      }}
      style={{ ...baseStyle, textDecoration: "none", cursor: "pointer" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "#2B2728"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "#252122"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {inner}
    </a>
  );
}
