import { editableField } from "../data/editable";
import { pathForPage, type Page } from "../routes";

interface StubPageProps {
  onNavigate: (page: Page) => void;
  eyebrow: string;
  heading: string;
  body: string;
  backLabel: string;
  backTo: Page;
  editableKey: string;
}

/**
 * Placeholder for routes that exist (so the nav and old-site URLs have
 * somewhere real to land) but whose full page copy hasn't been written yet.
 */
export default function StubPage({ onNavigate, eyebrow, heading, body, backLabel, backTo, editableKey }: StubPageProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>
      <section {...editableField(editableKey)} style={{ padding: "100px 40px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>
            {eyebrow}
          </p>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.15, color: "#F5F3EE", fontWeight: 400, marginBottom: 24 }}>
            {heading}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(245,243,238,0.6)", marginBottom: 48 }}>
            {body}
          </p>
          <a
            href={pathForPage(backTo)}
            onClick={(event) => { event.preventDefault(); nav(backTo); }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#2A9D78", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            ← {backLabel}
          </a>
        </div>
      </section>
    </div>
  );
}
