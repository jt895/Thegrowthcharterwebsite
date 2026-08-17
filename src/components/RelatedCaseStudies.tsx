import { caseStudiesContent } from "../data/content";
import { pathForPage, type Page } from "../routes";

interface RelatedCaseStudiesProps {
  eyebrow: string;
  title: string;
  slugs: Page[];
  onNavigate: (page: Page) => void;
  background?: string;
}

export default function RelatedCaseStudies({ eyebrow, title, slugs, onNavigate, background = "#1C1C1C" }: RelatedCaseStudiesProps) {
  const items = slugs
    .map((slug) => caseStudiesContent.items.find((item) => item.slug === slug))
    .filter((item): item is (typeof caseStudiesContent.items)[number] => Boolean(item));

  if (items.length === 0) return null;

  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };

  return (
    <section style={{ background, padding: "64px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 16, textAlign: "center" }}>
          {eyebrow}
        </p>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 3vw, 38px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, textAlign: "center", marginBottom: 48 }}>
          {title}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2, maxWidth: 1000, margin: "0 auto" }}>
          {items.map((item) => (
            <a
              key={item.slug}
              href={pathForPage(item.slug as Page)}
              onClick={(event) => {
                if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                nav(item.slug as Page);
              }}
              style={{
                background: "#1E1E1E", borderTop: "2px solid #2A9D78", padding: "28px",
                textDecoration: "none", display: "flex", flexDirection: "column", gap: 12,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#242424"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#1E1E1E"; }}
            >
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 19, color: "#F5F3EE", fontWeight: 400, margin: 0 }}>{item.title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.6, color: "rgba(245,243,238,0.5)", margin: 0, flexGrow: 1 }}>{item.summary}</p>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: "#2A9D78", display: "inline-flex", alignItems: "center", gap: 6 }}>
                Read the case study <span>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
