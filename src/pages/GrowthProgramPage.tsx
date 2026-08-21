import HoloGlass from "../components/HoloGlass";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import HeroMark from "../components/HeroMark";
import { growthProgramContent } from "../data/content";
import { editableField } from "../data/editable";
import { goToContact } from "../lib/contactNav";
import { trackCtaClick } from "../lib/analytics";
import type { Page } from "../routes";

interface GrowthProgramPageProps {
  onNavigate: (page: Page) => void;
}

export default function GrowthProgramPage({ onNavigate }: GrowthProgramPageProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };
  const contact = () => {
    trackCtaClick("free-call");
    goToContact(onNavigate, "growth-program", "growth-charter-enquiry");
  };
  const bookViability = () => {
    trackCtaClick("viability-session");
    goToContact(onNavigate, "growth-program", "viability-session-enquiry");
  };
  const scrollToWaysToWork = () => {
    document.getElementById("ways-to-work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: "#231F20", minHeight: "100vh" }}>

      {/* Hero */}
      <section {...editableField("growthProgram.hero")} style={{ padding: "100px 40px 64px", position: "relative", overflow: "hidden" }}>
        <HoloGlass />
        {/* V1 spinning rings - prominent, less subtle */}
        <div style={{ position: "absolute", right: "-2%", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", animation: "fade-in 2.4s ease 0.5s both", zIndex: 1 }}>
          <HeroMark variant="expand" size={640} opacity={0.55} speed={1.1} weight={1.6} />
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 800 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3AAC88", marginBottom: 28 }} className="hero-sub">
              {growthProgramContent.hero.eyebrow}
            </p>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5vw, 68px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 32 }} className="hero-title">
              {growthProgramContent.hero.title}
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(245,243,238,0.6)", maxWidth: 640, marginBottom: 16 }} className="hero-sub">
              {growthProgramContent.hero.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.45)", maxWidth: 580, marginBottom: 48 }} className="hero-sub">
              {growthProgramContent.hero.paraB}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className="hero-cta">
              <button
                onClick={contact}
                style={{ background: "#2E9677", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#268A67"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#2E9677"; }}
              >
                {growthProgramContent.hero.ctaPrimary}
              </button>
              <button
                onClick={scrollToWaysToWork}
                style={{ background: "none", border: "1px solid rgba(46,150,119,0.4)", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#3AAC88", padding: "16px 32px", transition: "border-color 0.25s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2E9677"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(46,150,119,0.4)"; }}
              >
                {growthProgramContent.hero.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is the Growth Program */}
      <section {...editableField("growthProgram.whatIs")} style={{ padding: "64px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3AAC88", marginBottom: 20 }}>
                {growthProgramContent.whatIs.eyebrow}
              </p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 32 }}>
                {growthProgramContent.whatIs.title}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)", marginBottom: 24 }}>
                {growthProgramContent.whatIs.paraA}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)" }}>
                {growthProgramContent.whatIs.paraB}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {growthProgramContent.whatIs.pillars.map((item, i) => (
                <div key={i} style={{ background: "#252122", padding: "28px 32px", borderLeft: "2px solid rgba(46,150,119,0.3)", display: "flex", gap: 20, alignItems: "flex-start" }}>
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
      <section id="ways-to-work" {...editableField("growthProgram.waysToWork")} style={{ background: "#1D191A", padding: "64px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3AAC88", marginBottom: 16 }}>{growthProgramContent.waysToWork.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 3vw, 38px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 16 }}>
              {growthProgramContent.waysToWork.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.5)", maxWidth: 620 }}>
              {growthProgramContent.waysToWork.intro}
            </p>
          </div>

          {/* Legend - sits tight against the table so it reads as the table's caption, not a continuation of the section intro above. */}
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.5)", maxWidth: 620, marginBottom: 20 }}>
            {growthProgramContent.waysToWork.legend}
          </p>

          {/* Desktop: real table */}
          <div className="matrix-table" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }} />
              {growthProgramContent.waysToWork.columns.map((col) => (
                <div key={col} style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)", borderLeft: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8AD0BF" }}>{col}</span>
                </div>
              ))}
            </div>
            {growthProgramContent.waysToWork.rows.map((row, ri) => (
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
                        style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#3AAC88", padding: 0, display: "flex", alignItems: "center", gap: 6 }}
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
            {growthProgramContent.waysToWork.rows.map((row) => (
              <div key={row.scope} style={{ background: "#231F20", padding: "24px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: "#F5F3EE", fontWeight: 400, marginBottom: 4 }}>{row.scope}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, lineHeight: 1.5, color: "rgba(245,243,238,0.45)", marginBottom: 16 }}>{row.note}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {row.cells.map((cell, ci) => (
                    <div key={ci} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 10 }}>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#939598", textTransform: "uppercase", letterSpacing: "0.04em" }}>{growthProgramContent.waysToWork.columns[ci]}</span>
                      {cell.page ? (
                        <button onClick={() => nav(cell.page as Page)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Instrument Serif', serif", fontSize: 18, color: "#3AAC88", padding: 0, display: "flex", alignItems: "center", gap: 6 }}>
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
            {growthProgramContent.waysToWork.note}{" "}
            <a href="#viability-session" style={{ color: "#3AAC88", textDecoration: "none" }}>
              {growthProgramContent.waysToWork.viabilityPointerLabel}
            </a>
          </p>

          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
              <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(19px, 2.2vw, 25px)", lineHeight: 1.3, color: "#F5F3EE", margin: 0, maxWidth: 620 }}>{growthProgramContent.waysToWork.customPackageNote}</p>
              <button onClick={contact} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#3AAC88", padding: 0, whiteSpace: "nowrap" }}>
                {growthProgramContent.waysToWork.customPackageCtaLabel} <span>→</span>
              </button>
            </div>
            <div style={{ paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.55)", margin: 0 }}>{growthProgramContent.waysToWork.growItYourselfNote}</p>
              <button onClick={() => nav("grow-it-yourself")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#3AAC88", padding: 0 }}>
                {growthProgramContent.waysToWork.growItYourselfLinkLabel} <span>→</span>
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

        /* All card styling lives here rather than inline: index.css narrows any
           element whose inline style contains "padding" on small screens, and
           the gradient's own "padding-box" keyword would trip that selector. */
        .viability-card {
          max-width: 880px;
          margin: 0 auto;
          padding: 64px;
          /* Gradient border: card fill layered over the gradient so only the
             2px border shows it. Reserved for this card alone. */
          border: 2px solid transparent;
          background: linear-gradient(#252122, #252122) padding-box,
                      linear-gradient(135deg, #3AAC88, #086F54) border-box;
        }
        .viability-steps {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          list-style: none;
          margin: 16px 0 36px;
          padding: 0;
        }
        @media (max-width: 860px) {
          .viability-steps { grid-template-columns: minmax(0, 1fr); gap: 20px; }
        }
        @media (max-width: 640px) {
          .viability-card { padding: 32px 24px; }
        }
      `}</style>

      {/* Viability Session */}
      {/* The card breaks the page's edge-to-edge rhythm deliberately: contained,
          centred, with clear space above and below so it reads as one thing.
          Padding and the steps grid live in CSS classes rather than inline
          styles so the global narrow-viewport overrides in index.css (which
          target [style*="padding"] and [style*="grid-template-columns"]) don't
          fight the values the brief specifies. */}
      <section id="viability-session" {...editableField("growthProgram.viabilitySession")} style={{ padding: "120px 40px" }}>
        <div className="viability-card">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#939598", marginBottom: 20 }}>
            {growthProgramContent.viabilitySession.eyebrow}
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 28 }}>
            {growthProgramContent.viabilitySession.title}
          </h2>
          <p style={{ display: "flex", alignItems: "baseline", gap: 20, flexWrap: "wrap", margin: "0 0 36px" }}>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(56px, 7vw, 88px)", lineHeight: 1, color: "#F5F3EE" }}>
              {growthProgramContent.viabilitySession.price}
            </span>{" "}
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(245,243,238,0.65)" }}>
              {growthProgramContent.viabilitySession.priceNote}
            </span>
          </p>
          {growthProgramContent.viabilitySession.body.map((para, i) => (
            <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.65)", maxWidth: "65ch", margin: "0 0 20px" }}>
              {para}
            </p>
          ))}
          <ol className="viability-steps">
            {growthProgramContent.viabilitySession.steps.map((step) => (
              <li key={step.num} style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
                <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: "#3AAC88", fontWeight: 400, marginBottom: 8 }}>{step.num}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.65)", margin: 0 }}>{step.text}</p>
              </li>
            ))}
          </ol>
          <button
            onClick={bookViability}
            style={{ background: "#2E9677", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#268A67"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#2E9677"; }}
          >
            {growthProgramContent.viabilitySession.ctaLabel}
          </button>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.7, color: "rgba(245,243,238,0.55)", margin: "16px 0 0" }}>
            {growthProgramContent.viabilitySession.ctaNote}
          </p>
        </div>
      </section>

      {/* What changes - simple centred text section, matching StrategicAdvisoryPage's theCase/theDifference pattern */}
      <section {...editableField("growthProgram.whatChanges")} style={{ padding: "64px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              {growthProgramContent.whatChanges.title}
            </h2>
          </div>
          <div style={{ maxWidth: 820, margin: "0 auto", background: "#252122", padding: "56px 64px", borderLeft: "2px solid #2E9677" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(245,243,238,0.65)", marginBottom: 28 }}>
              {growthProgramContent.whatChanges.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", margin: 0 }}>
              {growthProgramContent.whatChanges.paraB}
            </p>
          </div>
        </div>
      </section>

      {/* Central idea */}
      <section {...editableField("growthProgram.centralIdea")} style={{ padding: "64px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3AAC88", marginBottom: 20 }}>{growthProgramContent.centralIdea.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 32 }}>
              {growthProgramContent.centralIdea.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)", marginBottom: 24 }}>
              {growthProgramContent.centralIdea.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)", marginBottom: 24 }}>
              {growthProgramContent.centralIdea.paraB}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)" }}>
              {growthProgramContent.centralIdea.paraC}
            </p>
          </div>
          <div style={{ background: "#086F54", padding: "56px 48px" }}>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#8AD0BF", fontWeight: 400, lineHeight: 1.6, fontStyle: "italic", marginBottom: 32 }}>
              "{growthProgramContent.centralIdea.quote}"
            </p>
            <div style={{ width: 40, height: 1, background: "rgba(138,208,191,0.4)", marginBottom: 20 }} />
            {/* Matches the case-study attribution line style (CaseStudyTemplate.tsx) - the
                site's one established byline/credibility caption convention. */}
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.45)", margin: 0 }}>
              – {growthProgramContent.centralIdea.quoteAttribution}
            </p>
          </div>
        </div>
      </section>

      {/* How it works - 5 stages */}
      <section {...editableField("growthProgram.howItWorks")} style={{ background: "#1D191A", padding: "64px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 44 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3AAC88", marginBottom: 16 }}>{growthProgramContent.howItWorks.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 16 }}>
              {growthProgramContent.howItWorks.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.45)", maxWidth: 640 }}>
              {growthProgramContent.howItWorks.body}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {growthProgramContent.howItWorks.stages.map((stage, i) => (
              <div key={stage.num} style={{ display: "grid", gridTemplateColumns: "80px 200px 1fr", gap: 40, padding: "44px 0", borderTop: i === 0 ? "2px solid #2E9677" : "1px solid rgba(255,255,255,0.07)", alignItems: "start" }}>
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, color: "rgba(46,150,119,0.25)", fontWeight: 400, lineHeight: 1 }}>{stage.num}</span>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#939598", marginBottom: 8 }}>{stage.section}</p>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: "#F5F3EE", fontWeight: 400, lineHeight: 1.3 }}>{stage.title}</h3>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(245,243,238,0.5)" }}>{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TUR */}
      <section {...editableField("growthProgram.whyTur")} style={{ padding: "64px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3AAC88", marginBottom: 20 }}>{growthProgramContent.whyTur.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 32 }}>
              {growthProgramContent.whyTur.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)", marginBottom: 24 }}>
              {growthProgramContent.whyTur.paraA}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.45)" }}>
              {growthProgramContent.whyTur.paraB}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {growthProgramContent.whyTur.organisations.map((org) => (
              <div key={org} style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.5)" }}>{org}</span>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2E9677", opacity: 0.5 }} />
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
        background="#1D191A"
      />

      {/* Is The Growth Program right for you */}
      <section {...editableField("growthProgram.fitCheck")} style={{ background: "#086F54", padding: "64px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 32 }}>
              {growthProgramContent.fitCheck.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.6)", marginBottom: 32 }}>
              {growthProgramContent.fitCheck.body}
            </p>
            <button
              onClick={contact}
              style={{ background: "#2E9677", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#268A67"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#2E9677"; }}
            >
              {growthProgramContent.fitCheck.cta}
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {growthProgramContent.fitCheck.points.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 18, height: 18, border: "1px solid rgba(138,208,191,0.5)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8AD0BF" }} />
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
