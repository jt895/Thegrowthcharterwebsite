import { useEffect, useRef } from "react";
import { strategicAdvisoryContent, siteContent } from "../data/content";

type Page = "home" | "about" | "how-we-work" | "services" | "strategic-advisory" | "growth-charter";

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
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal(), r6 = useReveal(), r7 = useReveal();

  const methodology = strategicAdvisoryContent.methodology.steps;
  const whatWeDo = strategicAdvisoryContent.whatWeDo.columns;
  const builtFor = strategicAdvisoryContent.builtFor.items;
  const highStakes = strategicAdvisoryContent.builtFor.highStakes;

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ minHeight: "85vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 40px 100px", position: "relative", overflow: "hidden" }}>
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
              <a
                href={`mailto:${siteContent.contact.email}`}
                style={{ background: "#2A9D78", border: "none", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", textDecoration: "none", display: "inline-block", transition: "background 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#239068"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#2A9D78"; }}
              >
                {strategicAdvisoryContent.hero.ctaPrimary}
              </a>
              <button
                onClick={() => nav("how-we-work")}
                style={{ background: "none", border: "1px solid rgba(42,157,120,0.4)", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 400, color: "#2A9D78", padding: "16px 32px", transition: "border-color 0.25s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2A9D78"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(42,157,120,0.4)"; }}
              >
                {strategicAdvisoryContent.hero.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What we do differently */}
      <section style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r1} className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              {strategicAdvisoryContent.differentiation.title}
            </h2>
          </div>
          <div ref={r2} className="reveal reveal-delay-1" style={{ maxWidth: 820, margin: "0 auto", background: "#1C1C1C", padding: "56px 64px", borderLeft: "2px solid #2A9D78" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(245,243,238,0.65)", marginBottom: 28 }}>
              {strategicAdvisoryContent.differentiation.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", margin: 0 }}>
              {strategicAdvisoryContent.differentiation.paraB}
            </p>
          </div>
        </div>
      </section>

      {/* Why clients engage us early */}
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r3} className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20, textAlign: "center" }}>
              {strategicAdvisoryContent.whyEngageEarly.eyebrow}
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              {strategicAdvisoryContent.whyEngageEarly.title}
            </h2>
          </div>
          <div ref={r4} className="reveal reveal-delay-1" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
            {strategicAdvisoryContent.whyEngageEarly.reasons.map((item, i) => (
              <div key={i} style={{ background: "#1E1E1E", padding: "32px 40px", display: "flex", gap: 20, alignItems: "flex-start", borderTop: i < 2 ? "2px solid #2A9D78" : "1px solid rgba(42,157,120,0.15)" }}>
                <span style={{ color: "#2A9D78", fontSize: 18, marginTop: 1, flexShrink: 0 }}>→</span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.65, color: "rgba(245,243,238,0.65)", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our methodology */}
      <section style={{ background: "#161616", padding: "100px 40px" }}>
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
              <div key={i} style={{ background: "#1C1C1C", display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: 48, padding: "56px 48px", borderTop: i === 0 ? "2px solid #2A9D78" : "1px solid rgba(255,255,255,0.06)" }}>
                <div>
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 52, color: "rgba(42,157,120,0.2)", fontWeight: 400, lineHeight: 1 }}>{step.num}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, color: "#F5F3EE", fontWeight: 400, marginBottom: 16 }}>{step.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", margin: 0 }}>{step.body}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {step.items.map((pair, j) => (
                    <div key={j} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      {pair.filter(Boolean).map((pt) => (
                        <div key={pt} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <span style={{ color: "#2A9D78", fontSize: 14, marginTop: 1, flexShrink: 0 }}>→</span>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.6, color: "rgba(245,243,238,0.5)", margin: 0 }}>{pt}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r6} className="reveal" style={{ marginBottom: 64 }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              {strategicAdvisoryContent.whatWeDo.title}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, alignItems: "stretch" }}>
            {whatWeDo.map((col, i) => (
              <div key={i} style={{ background: "#1E1E1E", padding: "40px 32px", borderTop: "2px solid #2A9D78", display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, color: "#F5F3EE", fontWeight: 400, marginBottom: 10 }}>{col.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.6, color: "#2A9D78", marginBottom: 28, fontStyle: "italic" }}>{col.sub}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {col.items.map((item) => (
                    <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#9B9B9B", marginTop: 8, flexShrink: 0 }} />
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.6, color: "rgba(245,243,238,0.5)", margin: 0 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for complex organisations */}
      <section style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r7} className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20, textAlign: "center" }}>
              {strategicAdvisoryContent.builtFor.eyebrow}
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              {strategicAdvisoryContent.builtFor.title}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginBottom: 64 }}>
            {builtFor.map((item, i) => (
              <div key={i} style={{ background: "#1C1C1C", padding: "28px 32px", borderLeft: "2px solid rgba(42,157,120,0.3)" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.6, color: "rgba(245,243,238,0.65)", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(22px, 2.5vw, 32px)", color: "#F5F3EE", fontWeight: 400, marginBottom: 32, textAlign: "center" }}>
            {strategicAdvisoryContent.builtFor.highStakesTitle}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {highStakes.map((item, i) => (
              <div key={i} style={{ background: "#1C1C1C", padding: "28px 32px", borderTop: "1px solid rgba(42,157,120,0.2)" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.6, color: "rgba(245,243,238,0.6)", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 20 }}>
            {strategicAdvisoryContent.cta.eyebrow}
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 40px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 40 }}>
            {strategicAdvisoryContent.cta.title}
          </h2>
          <a
            href={`mailto:${siteContent.contact.email}`}
            style={{ background: "#2A9D78", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", textDecoration: "none", display: "inline-block", transition: "background 0.25s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#239068"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#2A9D78"; }}
          >
            {strategicAdvisoryContent.cta.ctaLabel}
          </a>
        </div>
      </section>

    </div>
  );
}
