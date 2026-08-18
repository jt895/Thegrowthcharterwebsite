import HoloGlass from "../components/HoloGlass";
import { howWeWorkContent } from "../data/content";
import { editableField } from "../data/editable";
import { goToContact } from "../lib/contactNav";
import type { Page } from "../routes";
import { useReveal } from "../hooks/useReveal";

interface HowWeWorkPageProps {
  onNavigate: (page: Page) => void;
}

const phases = howWeWorkContent.phases;

interface PhaseProps {
  phase: typeof phases[0];
  index: number;
}

function PhaseItem({ phase, index }: PhaseProps) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      {...editableField(`howWeWork.phases.${index}`)}
      style={{ display: "grid", gridTemplateColumns: "140px 1fr 1fr", gap: "0 64px", padding: "52px 0", borderTop: index === 0 ? "2px solid #2A9D78" : "1px solid rgba(255,255,255,0.07)", alignItems: "start" }}
    >
      <div style={{ paddingTop: 4 }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 64, color: index === 0 ? "#2A9D78" : "rgba(42,157,120,0.2)", fontWeight: 400, lineHeight: 1, display: "block" }}>
          {phase.num}
        </span>
        <div style={{ width: 2, height: 48, background: index === 0 ? "#2A9D78" : "rgba(42,157,120,0.2)", marginTop: 16 }} />
      </div>
      <div>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 3vw, 36px)", color: "#F5F3EE", fontWeight: 400, marginBottom: 8 }}>{phase.title}</h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#2A9D78", marginBottom: 24, fontStyle: "italic" }}>{phase.tagline}</p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", marginBottom: 36 }}>{phase.body}</p>
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 16 }}>What we deliver</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {phase.delivers.map((d) => (
              <div key={d} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2A9D78", marginTop: 9, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.65, color: "rgba(245,243,238,0.6)" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: "#161616", padding: "36px", borderLeft: "2px solid rgba(42,157,120,0.2)", marginTop: 60 }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 16 }}>Our approach</p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(245,243,238,0.5)", margin: 0 }}>{phase.approach}</p>
      </div>
    </div>
  );
}

export default function HowWeWorkPage({ onNavigate }: HowWeWorkPageProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };
  const r1 = useReveal();

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>
      <section {...editableField("howWeWork.hero")} style={{ padding: "100px 40px 64px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <HoloGlass />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 24 }} className="hero-sub">{howWeWorkContent.hero.eyebrow}</p>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 28 }} className="hero-title">
            {howWeWorkContent.hero.title}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", maxWidth: 640, margin: "0 auto" }} className="hero-sub">
            {howWeWorkContent.hero.body}
          </p>
        </div>
      </section>

      <section {...editableField("howWeWork.intro")} style={{ background: "#161616", padding: "64px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r1} className="reveal" style={{ maxWidth: 720 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(245,243,238,0.55)" }}>
              {howWeWorkContent.intro}
            </p>
          </div>
        </div>
      </section>

      <section {...editableField("howWeWork.phases")} style={{ padding: "0 40px 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {phases.map((phase, i) => <PhaseItem key={phase.num} phase={phase} index={i} />)}
        </div>
      </section>

      <section {...editableField("howWeWork.cta")} style={{ background: "#0B5E48", padding: "64px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(143,217,190,0.7)", marginBottom: 20 }}>{howWeWorkContent.cta.eyebrow}</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.3, marginBottom: 20 }}>
            {howWeWorkContent.cta.title}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.7)", marginBottom: 32 }}>
            {howWeWorkContent.cta.body}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => goToContact(onNavigate, "how-we-work", "strategic-advisory-enquiry")}
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 36px", transition: "background 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.18)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
            >
              {howWeWorkContent.cta.ctaLabel}
            </button>
            <button
              onClick={() => nav("services")}
              style={{ background: "none", border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.8)", padding: "16px 36px", transition: "border-color 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
            >
              {howWeWorkContent.cta.ctaSecondaryLabel}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
