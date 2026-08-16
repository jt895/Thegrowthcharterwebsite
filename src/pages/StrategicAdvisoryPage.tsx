import { useEffect, useRef } from "react";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import { strategicAdvisoryContent } from "../data/content";
import { editableField } from "../data/editable";
import { goToContact } from "../lib/contactNav";
import type { Page } from "../routes";

interface StrategicAdvisoryPageProps {
  onNavigate: (page: Page) => void;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function StrategicAdvisoryPage({ onNavigate }: StrategicAdvisoryPageProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };
  const contact = (formAnchor?: string) => goToContact(onNavigate, "strategic-advisory", formAnchor);
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal(), r7 = useReveal();

  const methodology = strategicAdvisoryContent.methodology.steps;
  const builtFor = strategicAdvisoryContent.builtFor.items;

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section {...editableField("strategicAdvisory.hero")} style={{ minHeight: "85vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 40px 100px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", width: "100%" }}>
          <div style={{ maxWidth: 760 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 28 }} className="hero-sub">
              {strategicAdvisoryContent.hero.eyebrow}
            </p>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5.5vw, 68px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 36 }} className="hero-title">
              {strategicAdvisoryContent.hero.title}
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(245,243,238,0.65)", maxWidth: 620, marginBottom: 16 }} className="hero-sub">
              {strategicAdvisoryContent.hero.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(245,243,238,0.45)", maxWidth: 580, marginBottom: 52 }} className="hero-sub">
              {strategicAdvisoryContent.hero.paraB}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className="hero-cta">
              <button
                onClick={() => contact("strategic-advisory-enquiry")}
                style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
              >
                {strategicAdvisoryContent.hero.ctaPrimary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Case */}
      <section {...editableField("strategicAdvisory.theCase")} style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r1} className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              {strategicAdvisoryContent.theCase.title}
            </h2>
          </div>
          <div ref={r2} className="reveal reveal-delay-1" style={{ maxWidth: 820, margin: "0 auto", background: "#1C1C1C", padding: "56px 64px", borderLeft: "2px solid #2A9D78" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(245,243,238,0.65)", marginBottom: 28 }}>
              {strategicAdvisoryContent.theCase.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", marginBottom: 28 }}>
              {strategicAdvisoryContent.theCase.paraB}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", margin: 0 }}>
              {strategicAdvisoryContent.theCase.paraC}
            </p>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section {...editableField("strategicAdvisory.theDifference")} style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r3} className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              {strategicAdvisoryContent.theDifference.title}
            </h2>
          </div>
          <div ref={r4} className="reveal reveal-delay-1" style={{ maxWidth: 820, margin: "0 auto", background: "#1C1C1C", padding: "56px 64px", borderLeft: "2px solid #2A9D78" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(245,243,238,0.65)", marginBottom: 28 }}>
              {strategicAdvisoryContent.theDifference.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", marginBottom: 28 }}>
              {strategicAdvisoryContent.theDifference.paraB}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", margin: 0 }}>
              {strategicAdvisoryContent.theDifference.paraC}
            </p>
          </div>
        </div>
      </section>

      {/* Our methodology */}
      <section {...editableField("strategicAdvisory.methodology")} style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r5} className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 16, textAlign: "center" }}>
              {strategicAdvisoryContent.methodology.eyebrow}
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center", marginBottom: 12 }}>
              {strategicAdvisoryContent.methodology.title}
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {methodology.map((step, i) => (
              <div key={i} style={{ background: "#1C1C1C", display: "grid", gridTemplateColumns: "80px 1fr", gap: 48, padding: "56px 48px", borderTop: i === 0 ? "2px solid #2A9D78" : "1px solid rgba(255,255,255,0.06)" }}>
                <div>
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 52, color: "rgba(42,157,120,0.2)", fontWeight: 400, lineHeight: 1 }}>{step.num}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, color: "#F5F3EE", fontWeight: 400, marginBottom: 16 }}>{step.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", margin: 0, marginBottom: step.items?.length ? 24 : 0 }}>{step.body}</p>
                  {step.items?.length ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {step.items.map((item) => (
                        <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#9B9B9B", marginTop: 8, flexShrink: 0 }} />
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.6, color: "rgba(245,243,238,0.5)", margin: 0 }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 48, flexWrap: "wrap" }}>
            <button
              onClick={() => nav("services")}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#2A9D78", padding: 0 }}
            >
              {strategicAdvisoryContent.methodology.linkServices} <span>→</span>
            </button>
            <button
              onClick={() => nav("how-we-work")}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#2A9D78", padding: 0 }}
            >
              {strategicAdvisoryContent.methodology.linkProcess} <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section {...editableField("strategicAdvisory.evidence")} style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 64, textAlign: "center" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>
              {strategicAdvisoryContent.evidence.eyebrow}
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, marginBottom: 16 }}>
              {strategicAdvisoryContent.evidence.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.5)", maxWidth: 640, margin: "0 auto" }}>
              {strategicAdvisoryContent.evidence.body}
            </p>
          </div>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "220px 1fr", gap: 48, alignItems: "start", background: "#1C1C1C", padding: "48px", borderTop: "2px solid #2A9D78" }}>
            <div style={{ height: 220, background: "#242424", border: "1px dashed rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 16 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9B9B9B" }}>Photograph — to be supplied</span>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, color: "#F5F3EE", fontWeight: 400, marginBottom: 16 }}>{strategicAdvisoryContent.evidence.principal.name}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(245,243,238,0.6)", margin: 0 }}>{strategicAdvisoryContent.evidence.principal.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for complex organisations */}
      <section {...editableField("strategicAdvisory.builtFor")} style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r7} className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20, textAlign: "center" }}>
              {strategicAdvisoryContent.builtFor.eyebrow}
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              {strategicAdvisoryContent.builtFor.title}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {builtFor.map((item, i) => (
              <div key={i} style={{ background: "#1C1C1C", padding: "28px 32px", borderLeft: "2px solid rgba(42,157,120,0.3)" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.6, color: "rgba(245,243,238,0.65)", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related case studies */}
      <RelatedCaseStudies
        eyebrow="Related work"
        title="See the method in practice"
        slugs={["state-election-2022", "first-nations-voice-2024", "local-government-elections-2022"]}
        onNavigate={onNavigate}
        background="#1C1C1C"
      />

      {/* CTA */}
      <section {...editableField("strategicAdvisory.cta")} style={{ padding: "100px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 20 }}>
            {strategicAdvisoryContent.cta.eyebrow}
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 40px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 20 }}>
            {strategicAdvisoryContent.cta.title}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.5)", marginBottom: 40 }}>
            {strategicAdvisoryContent.cta.body}
          </p>
          <button
            onClick={() => contact("strategic-advisory-enquiry")}
            style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
          >
            {strategicAdvisoryContent.cta.ctaLabel}
          </button>
        </div>
      </section>

    </div>
  );
}
