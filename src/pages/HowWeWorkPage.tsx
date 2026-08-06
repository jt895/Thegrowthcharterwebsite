import { useEffect, useRef } from "react";

type Page = "home" | "about" | "how-we-work" | "services" | "strategic-advisory" | "growth-charter";

interface HowWeWorkPageProps {
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

const phases = [
  {
    num: "01", title: "Diagnose", tagline: "We identify the problem behind the brief",
    body: "Before any strategy work begins, we need to understand what's really going on. This phase combines audience research, stakeholder insight, communications audits and strategic analysis to define the real challenge—not just the symptoms.",
    delivers: ["Audience and stakeholder insight", "Communications review and audit", "Brand and positioning diagnosis", "Behaviour change strategy", "Message and narrative assessment", "Strategic problem definition"],
    approach: "We can support this phase as a standalone diagnostic, or as the foundation for ongoing strategy and delivery work. The diagnostic output becomes the brief for everything that follows.",
  },
  {
    num: "02", title: "Design", tagline: "We turn complexity into a clear plan",
    body: "Once the problem is clear, we build the strategy. This means creating frameworks, plans and direction that guide decision-making, shape creative development, and ensure all activity is aligned to outcomes.",
    delivers: ["Communications strategy", "Campaign architecture", "Message frameworks", "Content planning", "Channel planning and media strategy", "Stakeholder engagement strategy", "Launch sequencing and phasing"],
    approach: "Strategy work can be delivered as a complete plan, or we can work alongside internal teams to co-create and build capability. Every strategy is designed to survive contact with reality.",
  },
  {
    num: "03", title: "Direct", tagline: "We help the strategy survive contact with reality",
    body: "Strategy only works if it's executed well. We help clients identify and brief the right agency and specialist partners, provide strategic oversight during implementation, and ensure the work stays true to the original intent.",
    delivers: ["Agency and partner briefing", "Implementation oversight and guidance", "Strategic project leadership", "Internal team support and capability building", "Creative and content review", "Alignment across stakeholders and partners"],
    approach: "This is where the tailored team model comes to life. We identify, brief and guide specialist partners—whether that's creative agencies, media partners, content producers, or delivery teams—to bring the strategy to life with the right expertise.",
  },
  {
    num: "04", title: "Measure", tagline: "We help clients understand what worked and what to do next",
    body: "Measuring outcomes is how we learn. We help clients evaluate campaign performance, test messages, review what worked, and plan refinements based on evidence.",
    delivers: ["Campaign evaluation and analysis", "Performance reporting against objectives", "Message testing and effectiveness studies", "Post-campaign review and debrief", "Refinement planning and optimisation"],
    approach: "Evaluation feeds back into strategy. We help clients build a cycle of learning that improves performance over time and ensures future work is smarter, sharper and more focused.",
  },
];

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
      style={{ display: "grid", gridTemplateColumns: "140px 1fr 1fr", gap: "0 64px", padding: "72px 0", borderTop: index === 0 ? "2px solid #2A9D78" : "1px solid rgba(255,255,255,0.07)", alignItems: "start" }}
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
      <section style={{ padding: "160px 40px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 24 }} className="hero-sub">How we work</p>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 28 }} className="hero-title">
            How we work
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", maxWidth: 640, margin: "0 auto" }} className="hero-sub">
            The United Republic works from strategy through to delivery. We can support one phase of the process or guide the full journey from problem definition to campaign execution.
          </p>
        </div>
      </section>

      <section style={{ background: "#161616", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r1} className="reveal" style={{ maxWidth: 720 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(245,243,238,0.55)" }}>
              We work with clients to define where strategic support is needed most. Some organisations need help defining the problem. Others have a clear brief but need strategy and direction. And some need ongoing guidance to ensure execution stays true to the strategic intent.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 40px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {phases.map((phase, i) => <PhaseItem key={phase.num} phase={phase} index={i} />)}
        </div>
      </section>

      <section style={{ background: "#0B5E48", padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(143,217,190,0.7)", marginBottom: 20 }}>Strategy through to delivery</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.3, marginBottom: 32 }}>
            The United Republic works from problem definition through to identifying, briefing and guiding the right execution partners.
          </h2>
          <button
            onClick={() => nav("services")}
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 36px", transition: "background 0.25s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.18)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
          >
            Explore our services
          </button>
        </div>
      </section>
    </div>
  );
}
