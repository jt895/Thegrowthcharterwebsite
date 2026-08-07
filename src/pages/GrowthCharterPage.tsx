import { useEffect, useRef } from "react";
import SpinningRingMark from "../components/SpinningRingMark";
import { growthCharterContent } from "../data/content";
import { editableField } from "../data/editable";
import type { Page } from "../routes";

interface GrowthCharterPageProps {
  onNavigate: (page: Page) => void;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function GrowthCharterPage({ onNavigate }: GrowthCharterPageProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section {...editableField("growthCharter.hero")} style={{ padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
        {/* V1 spinning rings — prominent, less subtle */}
        <div style={{ position: "absolute", right: "-2%", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", animation: "fade-in 2.4s ease 0.5s both" }}>
          <SpinningRingMark size={640} opacity={0.55} speed={1.3} weight={1.6} />
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 800 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 28 }} className="hero-sub">
              {growthCharterContent.hero.eyebrow}
            </p>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5vw, 68px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 32 }} className="hero-title">
              {growthCharterContent.hero.title}
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(245,243,238,0.6)", maxWidth: 640, marginBottom: 16 }} className="hero-sub">
              {growthCharterContent.hero.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.45)", maxWidth: 580, marginBottom: 12 }} className="hero-sub">
              {growthCharterContent.hero.paraB}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.7, color: "rgba(245,243,238,0.3)", maxWidth: 560, marginBottom: 48, fontStyle: "italic" }} className="hero-sub">
              {growthCharterContent.hero.paraC}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className="hero-cta">
              <button
                style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
              >
                {growthCharterContent.hero.ctaPrimary}
              </button>
              <button
                onClick={() => nav("how-we-work")}
                style={{ background: "none", border: "1px solid rgba(42,157,120,0.4)", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#2A9D78", padding: "16px 32px", transition: "border-color 0.25s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2A9D78"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(42,157,120,0.4)"; }}
              >
                {growthCharterContent.hero.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is the Growth Charter */}
      <section {...editableField("growthCharter.whatIs")} style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>
                {growthCharterContent.whatIs.eyebrow}
              </p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 32 }}>
                {growthCharterContent.whatIs.title}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)", marginBottom: 24 }}>
                {growthCharterContent.whatIs.paraA}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)" }}>
                {growthCharterContent.whatIs.paraB}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {growthCharterContent.whatIs.pillars.map((item, i) => (
                <div key={i} style={{ background: "#1E1E1E", padding: "28px 32px", borderLeft: "2px solid rgba(42,157,120,0.3)", display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div>
                    <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, color: "#F5F3EE", fontWeight: 400, marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.5)", margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ways to work together */}
      <section {...editableField("growthCharter.waysToWork")} style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 16 }}>{growthCharterContent.waysToWork.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 3vw, 38px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2 }}>
              {growthCharterContent.waysToWork.title}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
            {growthCharterContent.waysToWork.modes.map((mode, i) => (
              <div key={mode.title} style={{ background: "#1C1C1C", padding: "40px 32px", borderTop: i === 0 ? "2px solid rgba(155,155,155,0.5)" : i === 1 || i === 2 ? "2px solid #2A9D78" : "2px solid rgba(143,217,190,0.4)" }}>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#F5F3EE", fontWeight: 400, marginBottom: 16 }}>{mode.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.5)", marginBottom: 24 }}>{mode.sub}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#2A9D78", fontStyle: "italic" }}>{mode.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why good businesses plateau */}
      <section {...editableField("growthCharter.plateau")} style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 24 }}>
                {growthCharterContent.plateau.title}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(245,243,238,0.5)" }}>
                {growthCharterContent.plateau.body}
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {growthCharterContent.plateau.points.map((item, i) => (
                <div key={i} style={{ background: "#1C1C1C", padding: "28px 24px", borderLeft: "2px solid #2A9D78", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2A9D78", marginTop: 9, flexShrink: 0 }} />
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.65, color: "rgba(245,243,238,0.65)", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Central idea */}
      <section {...editableField("growthCharter.centralIdea")} style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>{growthCharterContent.centralIdea.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 32 }}>
              {growthCharterContent.centralIdea.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)", marginBottom: 24 }}>
              {growthCharterContent.centralIdea.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)" }}>
              {growthCharterContent.centralIdea.paraB}
            </p>
          </div>
          <div style={{ background: "#0B5E48", padding: "56px 48px" }}>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#8FD9BE", fontWeight: 400, lineHeight: 1.6, fontStyle: "italic", marginBottom: 32 }}>
              "{growthCharterContent.centralIdea.quote}"
            </p>
            <div style={{ width: 40, height: 1, background: "rgba(143,217,190,0.4)" }} />
          </div>
        </div>
      </section>

      {/* How it works - 5 stages */}
      <section {...editableField("growthCharter.howItWorks")} style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 16 }}>{growthCharterContent.howItWorks.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 16 }}>
              {growthCharterContent.howItWorks.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.45)", maxWidth: 640 }}>
              {growthCharterContent.howItWorks.body}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {growthCharterContent.howItWorks.stages.map((stage, i) => (
              <div key={stage.num} style={{ display: "grid", gridTemplateColumns: "80px 200px 1fr", gap: 40, padding: "44px 0", borderTop: i === 0 ? "2px solid #2A9D78" : "1px solid rgba(255,255,255,0.07)", alignItems: "start" }}>
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, color: "rgba(42,157,120,0.25)", fontWeight: 400, lineHeight: 1 }}>{stage.num}</span>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 8 }}>{stage.section}</p>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: "#F5F3EE", fontWeight: 400, lineHeight: 1.3 }}>{stage.title}</h3>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(245,243,238,0.5)" }}>{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you leave with */}
      <section {...editableField("growthCharter.whatYouLeaveWith")} style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 16 }}>{growthCharterContent.whatYouLeaveWith.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 3vw, 38px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2 }}>
              {growthCharterContent.whatYouLeaveWith.title}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {growthCharterContent.whatYouLeaveWith.points.map((item, i) => (
              <div key={i} style={{ background: "#1E1E1E", padding: "32px 28px", display: "flex", gap: 16, alignItems: "flex-start", borderTop: "1px solid rgba(42,157,120,0.25)" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2A9D78", marginTop: 8, flexShrink: 0 }} />
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.6)", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why TUR */}
      <section {...editableField("growthCharter.whyTur")} style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>{growthCharterContent.whyTur.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 32 }}>
              {growthCharterContent.whyTur.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)", marginBottom: 24 }}>
              {growthCharterContent.whyTur.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)", marginBottom: 24 }}>
              {growthCharterContent.whyTur.paraB}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.45)" }}>
              {growthCharterContent.whyTur.paraC}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {growthCharterContent.whyTur.organisations.map((org) => (
              <div key={org} style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.5)" }}>{org}</span>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2A9D78", opacity: 0.5 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is The Growth Charter right for you */}
      <section {...editableField("growthCharter.fitCheck")} style={{ background: "#0B5E48", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 32 }}>
              {growthCharterContent.fitCheck.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.6)", marginBottom: 32 }}>
              {growthCharterContent.fitCheck.body}
            </p>
            <button
              style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
            >
              {growthCharterContent.fitCheck.cta}
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {growthCharterContent.fitCheck.points.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 18, height: 18, border: "1px solid rgba(143,217,190,0.5)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8FD9BE" }} />
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.65)", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
