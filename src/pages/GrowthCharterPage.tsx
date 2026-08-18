import HoloGlass from "../components/HoloGlass";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import SpinningRingMark from "../components/SpinningRingMark";
import { growthCharterContent } from "../data/content";
import { editableField } from "../data/editable";
import { goToContact } from "../lib/contactNav";
import type { Page } from "../routes";
import { useReveal } from "../hooks/useReveal";

interface GrowthCharterPageProps {
  onNavigate: (page: Page) => void;
}

export default function GrowthCharterPage({ onNavigate }: GrowthCharterPageProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };
  const contact = () => goToContact(onNavigate, "growth-charter", "growth-charter-enquiry");
  const scrollToWaysToWork = () => {
    document.getElementById("ways-to-work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section {...editableField("growthCharter.hero")} style={{ padding: "100px 40px 64px", position: "relative", overflow: "hidden" }}>
        <HoloGlass />
        {/* V1 spinning rings - prominent, less subtle */}
        <div style={{ position: "absolute", right: "-2%", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", animation: "fade-in 2.4s ease 0.5s both", zIndex: 1 }}>
          <SpinningRingMark size={640} opacity={0.55} speed={1.3} weight={1.6} />
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
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
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.45)", maxWidth: 580, marginBottom: 48 }} className="hero-sub">
              {growthCharterContent.hero.paraB}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className="hero-cta">
              <button
                onClick={contact}
                style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
              >
                {growthCharterContent.hero.ctaPrimary}
              </button>
              <button
                onClick={scrollToWaysToWork}
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
      <section {...editableField("growthCharter.whatIs")} style={{ padding: "64px 40px" }}>
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

      {/* Ways to engage - scope × delivery matrix */}
      <section id="ways-to-work" {...editableField("growthCharter.waysToWork")} style={{ background: "#161616", padding: "64px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 16 }}>{growthCharterContent.waysToWork.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 3vw, 38px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 16 }}>
              {growthCharterContent.waysToWork.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.5)", maxWidth: 620 }}>
              {growthCharterContent.waysToWork.intro}
            </p>
          </div>

          {/* Legend - sits tight against the table so it reads as the table's caption, not a continuation of the section intro above. */}
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.5)", maxWidth: 620, marginBottom: 20 }}>
            {growthCharterContent.waysToWork.legend}
          </p>

          {/* Desktop: real table */}
          <div className="matrix-table" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }} />
              {growthCharterContent.waysToWork.columns.map((col) => (
                <div key={col} style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)", borderLeft: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8FD9BE" }}>{col}</span>
                </div>
              ))}
            </div>
            {growthCharterContent.waysToWork.rows.map((row, ri) => (
              <div key={row.scope} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: ri > 0 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ padding: "24px" }}>
                  <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: "#F5F3EE", fontWeight: 400, marginBottom: 6 }}>{row.scope}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, lineHeight: 1.5, color: "rgba(245,243,238,0.45)", margin: 0 }}>{row.note}</p>
                </div>
                {row.cells.map((cell, ci) => (
                  <div key={ci} style={{ padding: "24px", borderLeft: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {cell.page ? (
                      <button
                        onClick={() => nav(cell.page as Page)}
                        style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#2A9D78", padding: 0, display: "flex", alignItems: "center", gap: 6 }}
                      >
                        {cell.value}
                        {('pending' in cell && cell.pending) && <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#E3B15E", border: "1px solid rgba(227,177,94,0.4)", padding: "2px 6px" }}>Pending</span>}
                      </button>
                    ) : (
                      <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "rgba(245,243,238,0.3)" }}>{cell.value}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile: stacked cards */}
          <div className="matrix-stack" style={{ display: "none", flexDirection: "column", gap: 2 }}>
            {growthCharterContent.waysToWork.rows.map((row) => (
              <div key={row.scope} style={{ background: "#1C1C1C", padding: "24px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: "#F5F3EE", fontWeight: 400, marginBottom: 4 }}>{row.scope}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, lineHeight: 1.5, color: "rgba(245,243,238,0.45)", marginBottom: 16 }}>{row.note}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {row.cells.map((cell, ci) => (
                    <div key={ci} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 10 }}>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9B9B9B", textTransform: "uppercase", letterSpacing: "0.04em" }}>{growthCharterContent.waysToWork.columns[ci]}</span>
                      {cell.page ? (
                        <button onClick={() => nav(cell.page as Page)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Instrument Serif', serif", fontSize: 18, color: "#2A9D78", padding: 0, display: "flex", alignItems: "center", gap: 6 }}>
                          {cell.value}
                          {('pending' in cell && cell.pending) && <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 600, color: "#E3B15E", border: "1px solid rgba(227,177,94,0.4)", padding: "2px 6px" }}>Pending</span>}
                        </button>
                      ) : (
                        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, color: "rgba(245,243,238,0.3)" }}>{cell.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.7, color: "rgba(245,243,238,0.4)", marginTop: 24 }}>
            {growthCharterContent.waysToWork.note}
          </p>

          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.55)", margin: 0 }}>{growthCharterContent.waysToWork.charterCourseNote}</p>
              <button onClick={() => nav("charter-course")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#2A9D78", padding: 0 }}>
                {growthCharterContent.waysToWork.charterCourseLinkLabel} <span>→</span>
              </button>
            </div>
            <div style={{ paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.55)", margin: 0 }}>{growthCharterContent.waysToWork.customPackageNote}</p>
              <button onClick={contact} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#2A9D78", padding: 0 }}>
                {growthCharterContent.waysToWork.customPackageCtaLabel} <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .matrix-table { display: none !important; }
          .matrix-stack { display: flex !important; }
        }
      `}</style>

      {/* Central idea */}
      <section {...editableField("growthCharter.centralIdea")} style={{ padding: "64px 40px" }}>
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
            <div style={{ width: 40, height: 1, background: "rgba(143,217,190,0.4)", marginBottom: 20 }} />
            {/* Matches the case-study attribution line style (CaseStudyTemplate.tsx) - the
                site's one established byline/credibility caption convention. */}
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.45)", margin: 0 }}>
              – {growthCharterContent.centralIdea.quoteAttribution}
            </p>
          </div>
        </div>
      </section>

      {/* How it works - 5 stages */}
      <section {...editableField("growthCharter.howItWorks")} style={{ background: "#161616", padding: "64px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 44 }}>
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

      {/* Why TUR */}
      <section {...editableField("growthCharter.whyTur")} style={{ padding: "64px 40px" }}>
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

      {/* Related case studies */}
      <RelatedCaseStudies
        eyebrow="Related work"
        title="Businesses and organisations who've used it"
        slugs={["adelaide-hills-wine-region", "snack-brands-kettle-popcorn", "local-government-elections-2022"]}
        onNavigate={onNavigate}
        background="#161616"
      />

      {/* Is The Growth Charter right for you */}
      <section {...editableField("growthCharter.fitCheck")} style={{ background: "#0B5E48", padding: "64px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 32 }}>
              {growthCharterContent.fitCheck.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.6)", marginBottom: 32 }}>
              {growthCharterContent.fitCheck.body}
            </p>
            <button
              onClick={contact}
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
