import { useEffect, useRef } from "react";

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

  const methodology = [
    {
      num: "01",
      title: "Start with the foundation, not the finish",
      body: "Brilliant work begins with the basics. We start by understanding audiences deeply, identifying the true challenge, quantifying what matters most, and mapping the barriers, segments and behaviours that will shape success. Strategy comes first, and everything else follows from that.",
      items: [
        ["We understand your business objectives and unique needs", "Understanding your audiences deeply"],
        ["Identifying the true challenge, not just the symptoms", "Quantifying the challenge and where influence matters most"],
        ["Mapping segments, barriers and behaviours", "Building strategy grounded in data and insight"],
      ],
    },
    {
      num: "02",
      title: "Ideas first, not creative concepts",
      body: "We develop what we call an Ideas Brief, not a traditional creative brief. This creates audience-first direction that guides everything that follows. We stay media-neutral from the start, build around what engages and influences, and shape execution by bringing together the right combination of message, medium and meaning.",
      items: [
        ["Ideas Brief, not traditional creative brief", "Media-neutral thinking from the outset"],
        ["Focus on what influences and shifts behaviour", "Build from message, medium and meaning"],
        ["Prioritise the right idea over the biggest idea", ""],
      ],
    },
    {
      num: "03",
      title: "The right team, every time",
      body: "We do not run a fixed creative department or force work through an agency machine. We build the right team around each challenge, bringing together the best senior specialists for the job. That keeps the work tailored, lean and focused on outcomes.",
      items: [
        ["No bloated departments or fixed agency structure", "Specialist teams built around the challenge"],
        ["Senior creative and execution partners selected for fit", "More flexibility, less overhead"],
        ["Focus on outcomes, not outputs", ""],
      ],
    },
  ];

  const whatWeDo = [
    {
      title: "Diagnose",
      sub: "We identify the problem behind the brief.",
      items: ["Business objectives", "Success measures", "Identify opportunities", "Uncover levers and barriers", "Audience and stakeholder insight", "Communications review", "Brand and positioning diagnosis", "Behaviour change strategy", "Message and narrative assessment", "Strategic problem definition"],
    },
    {
      title: "Design",
      sub: "We turn complexity into a clear plan.",
      items: ["Roadmap to success", "Clear roles and responsibilities", "Communications strategy", "Campaign architecture", "Message frameworks", "Content planning", "Channel planning", "Stakeholder engagement strategy", "Launch sequencing"],
    },
    {
      title: "Direct",
      sub: "We help the strategy survive contact with reality.",
      items: ["Agency and partner briefing", "Implementation oversight", "Strategic project leadership", "Internal team support", "Creative and content review", "Alignment across stakeholders"],
    },
    {
      title: "Measure",
      sub: "We help clients understand what worked and what to do next.",
      items: ["Campaign evaluation", "Performance reporting", "Message testing", "Post-campaign review", "Refinement planning"],
    },
  ];

  const builtFor = [
    "Government and public sector",
    "Purpose-led organisations",
    "Complex stakeholder environments",
    "Brand and reputation challenges",
    "Behaviour change programs",
    "Multi-channel campaigns",
    "Projects that need strategy, alignment and implementation discipline",
  ];

  const highStakes = [
    "Public trust and participation",
    "Brand and market repositioning",
    "Consumer awareness and education",
    "Complex multi-stakeholder communications",
    "Campaign and launch strategy",
    "Research-led strategic planning",
  ];

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ minHeight: "85vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 40px 100px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", width: "100%" }}>
          <div style={{ maxWidth: 760 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 28 }} className="hero-sub">
              Strategic Advisory
            </p>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5.5vw, 68px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 36 }} className="hero-title">
              Start with the right questions, then build the right response.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(245,243,238,0.65)", maxWidth: 620, marginBottom: 16 }} className="hero-sub">
              The United Republic helps organisations define the real problem, shape the right strategy, and guide the work that follows.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(245,243,238,0.45)", maxWidth: 580, marginBottom: 52 }} className="hero-sub">
              We work with government, brands and complex organisations to make sure they are solving the right problems before investing in campaigns, content, media, stakeholder activity or creative development.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className="hero-cta">
              <a
                href="mailto:jt@theunitedrepublic.com.au"
                style={{ background: "#2A9D78", border: "none", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", textDecoration: "none", display: "inline-block", transition: "background 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#239068"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#2A9D78"; }}
              >
                Start with a strategic diagnostic
              </a>
              <button
                onClick={() => nav("how-we-work")}
                style={{ background: "none", border: "1px solid rgba(42,157,120,0.4)", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 400, color: "#2A9D78", padding: "16px 32px", transition: "border-color 0.25s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2A9D78"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(42,157,120,0.4)"; }}
              >
                See how we work
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
              What we do differently
            </h2>
          </div>
          <div ref={r2} className="reveal reveal-delay-1" style={{ maxWidth: 820, margin: "0 auto", background: "#1C1C1C", padding: "56px 64px", borderLeft: "2px solid #2A9D78" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(245,243,238,0.65)", marginBottom: 28 }}>
              The United Republic helps organisations start with the right questions, define the real problem, and build the right response before investing in execution. We use strategic clarity, audience understanding, evidence-based planning and practical problem definition to make sure the work is focused on what matters most, where it can have the greatest influence, and how it can create the strongest outcome.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", margin: 0 }}>
              We then help bring that strategy to life by identifying and briefing the right partners for the task at hand. Rather than pushing work through a fixed agency model, we build the right team around each challenge, drawing on the best specialist talent to deliver campaign execution that stays true to the strategy. That means clients get clear thinking up front, the right expertise in delivery, and work designed to perform in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* Why clients engage us early */}
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r3} className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20, textAlign: "center" }}>
              Approach
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              Why clients engage us early
            </h2>
          </div>
          <div ref={r4} className="reveal reveal-delay-1" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
            {[
              "We understand the business, the objectives and what success looks like before we do anything else",
              "We focus on what matters most and where it can have the greatest influence",
              "We start with the real problem, not just the brief",
              "We combine strategic thinking with practical delivery direction",
              "We identify and brief the right partners to bring the work to life",
              "We stay focused on outcomes, not agency process",
            ].map((item, i) => (
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
              Our methodology
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center", marginBottom: 12 }}>
              The United Republic Creative Methodology
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
              What we do
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
              Who we work with
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              Built for complex organisations
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
            Experience across high-stakes work
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
            Start the conversation
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 40px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 40 }}>
            Book an initial conversation.
          </h2>
          <a
            href="mailto:jt@theunitedrepublic.com.au"
            style={{ background: "#2A9D78", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", textDecoration: "none", display: "inline-block", transition: "background 0.25s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#239068"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#2A9D78"; }}
          >
            Book an initial conversation
          </a>
        </div>
      </section>

    </div>
  );
}
