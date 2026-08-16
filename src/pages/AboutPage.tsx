import { useEffect, useRef } from "react";
import AnimatedHeroMark from "../components/AnimatedHeroMark";
import HoloGlass from "../components/HoloGlass";
import { aboutContent } from "../data/content";
import { editableField } from "../data/editable";
import { goToContact } from "../lib/contactNav";
import type { Page } from "../routes";

interface AboutPageProps {
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

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal(), r6 = useReveal();

  const differences = aboutContent.differentiators.items;

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section {...editableField("about.hero")} style={{ paddingTop: 160, paddingBottom: 100, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
        <HoloGlass />
        <div style={{ position: "absolute", right: "-4%", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", animation: "fade-in 2.4s ease 0.5s both", zIndex: 1 }}>
          <AnimatedHeroMark size={600} opacity={0.32} speedMultiplier={2.2} />
        </div>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 760 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 28 }} className="hero-sub">
              {aboutContent.hero.eyebrow}
            </p>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5.5vw, 68px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 40 }} className="hero-title">
              {aboutContent.hero.title}
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(245,243,238,0.65)", maxWidth: 640, marginBottom: 20 }} className="hero-sub">
              {aboutContent.hero.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", maxWidth: 620 }} className="hero-sub">
              {aboutContent.hero.paraB}
            </p>
          </div>
        </div>
      </section>

      {/* James */}
      <section {...editableField("about.james")} style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }}>
          <div ref={r1} className="reveal">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>
              {aboutContent.james.eyebrow}
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 3vw, 38px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 16 }}>
              {aboutContent.james.title}
            </h2>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, color: "#8FD9BE", fontWeight: 400, fontStyle: "italic", marginBottom: 32 }}>
              {aboutContent.james.name}
            </p>
            <div style={{ height: 220, background: "#1C1C1C", border: "1px dashed rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 16 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9B9B9B" }}>Photograph — to be supplied</span>
            </div>
          </div>
          <div ref={r2} className="reveal reveal-delay-1">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(245,243,238,0.65)", marginBottom: 28 }}>
              {aboutContent.james.bioA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", marginBottom: 24 }}>
              {aboutContent.james.bioB}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", marginBottom: 24 }}>
              {aboutContent.james.bioC}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", margin: 0 }}>
              {aboutContent.james.bioD}
            </p>
          </div>
        </div>
      </section>

      {/* The model */}
      <section {...editableField("about.tailoredTeam")} style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r3} className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              {aboutContent.tailoredTeam.title}
            </h2>
          </div>
          <div style={{ maxWidth: 760, margin: "0 auto", background: "#1C1C1C", padding: "56px 64px", borderLeft: "2px solid #2A9D78" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(245,243,238,0.65)", marginBottom: 24 }}>
              {aboutContent.tailoredTeam.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", marginBottom: 32 }}>
              {aboutContent.tailoredTeam.paraB}
            </p>
            <button
              onClick={() => nav("how-we-work")}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#2A9D78", padding: 0 }}
            >
              {aboutContent.tailoredTeam.link} <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* How we're different */}
      <section {...editableField("about.differentiators")} style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r4} className="reveal" style={{ marginBottom: 72 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20, textAlign: "center" }}>
              {aboutContent.differentiators.eyebrow}
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              {aboutContent.differentiators.title}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
            {differences.map((item, i) => (
              <div key={i} style={{ background: "#1E1E1E", padding: "44px 48px", borderTop: i < 2 ? "2px solid #2A9D78" : "1px solid rgba(42,157,120,0.2)" }}>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#F5F3EE", fontWeight: 400, marginBottom: 16 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section {...editableField("about.experience")} style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r5} className="reveal" style={{ marginBottom: 56 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>
              {aboutContent.experience.eyebrow}
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15 }}>
              {aboutContent.experience.title}
            </h2>
          </div>
          <div style={{ maxWidth: 760, background: "#1C1C1C", padding: "56px 64px", borderTop: "1px solid rgba(42,157,120,0.3)", borderLeft: "1px solid rgba(42,157,120,0.15)" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.6)", marginBottom: 24 }}>
              {aboutContent.experience.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)", marginBottom: 24 }}>
              {aboutContent.experience.paraB}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", marginBottom: 24 }}>
              {aboutContent.experience.paraC}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.45)", margin: 0 }}>
              {aboutContent.experience.paraD}
            </p>
          </div>
        </div>
      </section>

      {/* Route out */}
      <section {...editableField("about.routeOut")} style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r6} className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15 }}>
              {aboutContent.routeOut.title}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 56 }}>
            {aboutContent.routeOut.paths.map((path) => (
              <div
                key={path.target}
                style={{ background: "#1E1E1E", padding: "48px", borderTop: "2px solid #2A9D78", cursor: "pointer", transition: "background 0.3s" }}
                onClick={() => nav(path.target as Page)}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#242424"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#1E1E1E"; }}
              >
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, color: "#F5F3EE", fontWeight: 400, marginBottom: 16 }}>{path.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", marginBottom: 28 }}>{path.body}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#2A9D78" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.05em" }}>{path.cta}</span>
                  <span style={{ fontSize: 16 }}>→</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => goToContact(onNavigate, "about")}
              style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
            >
              {aboutContent.routeOut.buttonLabel}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
