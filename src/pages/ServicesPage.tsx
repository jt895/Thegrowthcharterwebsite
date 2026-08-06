import { useEffect, useRef } from "react";

type Page = "home" | "about" | "how-we-work" | "services" | "strategic-advisory" | "growth-charter";

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const services = [
  {
    id: "fractional-cmo",
    title: "Fractional CMO", sub: "Senior marketing leadership without the full-time overhead", duration: "Ongoing / retainer",
    body: "Access experienced, senior marketing leadership on a fractional basis — embedded in your business to own the strategy, lead the team and drive commercial outcomes without the cost of a full-time executive hire.",
    included: ["Marketing strategy ownership and accountability", "Brand positioning and messaging direction", "Team leadership and capability development", "Agency and partner management", "Budget planning and channel allocation", "Performance reporting and optimisation", "Board and executive-level reporting"],
    when: "Use this when you need senior marketing leadership but aren't ready or resourced for a full-time CMO. Ideal for growth-stage businesses, organisations in transition, or teams that need experienced direction.",
    execution: "Operates as part of your leadership team. Typically engaged on a monthly retainer with defined scope, regular reviews and clear performance measures.",
  },
  {
    id: "strategy-workshops",
    title: "Strategy Workshops", sub: "Focused sessions to align thinking and unlock direction", duration: "Half-day to 2 days",
    body: "Facilitated strategy sessions designed to align your team, clarify the challenge, define priorities and build shared direction — fast. Each workshop is designed around your specific need, from problem definition to planning.",
    included: ["Pre-workshop discovery and preparation", "Facilitated problem definition session", "Audience and market insight review", "Priority-setting and decision frameworks", "Strategic direction and next steps", "Workshop summary and action plan"],
    when: "Use this when your team needs to get aligned quickly, when you're at a strategic crossroads, or when you need structured thinking to unblock a decision.",
    execution: "Can be delivered as a standalone session or as the first phase of a broader strategy engagement. Remote or in-person.",
  },
  {
    id: "strategic-diagnostic",
    title: "Strategic Diagnostic", sub: "Define the real problem before you invest", duration: "2–4 weeks",
    body: "A focused diagnostic to understand the challenge, map the landscape, and define where strategic focus will have the greatest impact.",
    included: ["Audience and stakeholder insight analysis", "Problem definition and strategic framing", "Communications landscape review", "Barrier and opportunity mapping", "Strategic recommendations and next steps"],
    when: "Use this when you need clarity on the problem before committing to strategy or execution. Ideal for organisations that want to make sure they're solving the right challenge.",
    execution: "Can lead directly into strategy development, or be used as a standalone diagnostic to inform internal planning.",
  },
  {
    id: "strategy-build",
    title: "Strategy Build", sub: "Create the plan that guides everything", duration: "6–12 weeks",
    body: "A complete communications or campaign strategy—from problem definition through to delivery frameworks, partner briefing and implementation guidance.",
    included: ["Full communications or campaign strategy", "Message frameworks and narrative architecture", "Channel and media strategy", "Campaign architecture and phasing", "Creative and content direction (Ideas Brief)", "Partner and agency briefing materials", "Implementation roadmap"],
    when: "Use this when you have a clear challenge and need a comprehensive strategy to guide execution. Includes identification of delivery partners and briefing support.",
    execution: "Includes agency/partner identification and briefing. Can be delivered as a handover, or we can provide ongoing strategic oversight during implementation.",
  },
  {
    id: "strategic-lead",
    title: "Strategic Lead", sub: "Ongoing strategic guidance from problem to delivery", duration: "3–12 months (or longer)",
    body: "Embedded strategic leadership across the full project lifecycle—from initial problem definition through strategy development, partner briefing, and implementation oversight.",
    included: ["Full diagnostic and strategy development", "Identification and briefing of delivery partners", "Strategic project leadership", "Implementation oversight and review", "Creative and content direction", "Stakeholder alignment and management", "Performance tracking and refinement"],
    when: "Use this for high-stakes, complex or long-term programs that need senior strategic leadership from start to finish.",
    execution: "Full integration with your team and delivery partners. We identify, brief and guide specialist agencies and partners throughout, ensuring strategy is carried through to execution.",
  },
  {
    id: "review-refine",
    title: "Review and Refine", sub: "Evaluate what worked and improve what's next", duration: "2–4 weeks",
    body: "Post-campaign evaluation, performance analysis and strategic refinement to learn from what worked and plan smarter next steps.",
    included: ["Campaign performance evaluation", "Audience and stakeholder feedback analysis", "Message effectiveness review", "Strategic debrief and learnings", "Refinement recommendations"],
    when: "Use this after a campaign or program to evaluate performance and feed insights back into future strategy.",
    execution: "Can inform next-phase planning or be used as a standalone review to close out a program.",
  },
];

interface ServiceCardProps {
  service: typeof services[0];
}

function ServiceCard({ service }: ServiceCardProps) {
  const ref = useReveal();
  return (
    <div
      id={service.id}
      ref={ref}
      className="reveal"
      style={{ background: "#1C1C1C", border: "1px solid rgba(255,255,255,0.06)", padding: "64px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px 64px", scrollMarginTop: 100 }}
    >
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.07)", flexWrap: "wrap", gap: 16 }}>
        <div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 2.5vw, 32px)", color: "#F5F3EE", fontWeight: 400, marginBottom: 8 }}>{service.title}</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(245,243,238,0.5)", fontStyle: "italic", margin: 0 }}>{service.sub}</p>
        </div>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#2A9D78", border: "1px solid rgba(42,157,120,0.3)", padding: "6px 16px", whiteSpace: "nowrap", letterSpacing: "0.05em" }}>
          {service.duration}
        </span>
      </div>
      <div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", marginBottom: 32 }}>{service.body}</p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 16 }}>What's included</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {service.included.map((item) => (
            <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2A9D78", marginTop: 9, flexShrink: 0 }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.65, color: "rgba(245,243,238,0.6)" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 14 }}>When to use this</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(245,243,238,0.5)" }}>{service.when}</p>
        </div>
        <div style={{ background: "#161616", padding: "24px 28px", borderLeft: "2px solid rgba(42,157,120,0.3)" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 12 }}>Execution support</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.45)", margin: 0 }}>{service.execution}</p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "160px 40px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 28 }} className="hero-title">
            Services
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", maxWidth: 680, margin: "0 auto" }} className="hero-sub">
            The United Republic is designed to be easy to buy from. Our services are structured around clear offers that can be scaled to suit the challenge, the timeline and the level of support you need.
          </p>
        </div>
      </section>

      {/* Services index */}
      <section style={{ background: "#161616", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 40, textAlign: "center" }}>
            What we offer
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  background: "#1C1C1C", border: "none", cursor: "pointer",
                  padding: "28px 32px", textAlign: "left",
                  borderTop: "2px solid rgba(42,157,120,0.25)",
                  transition: "border-color 0.25s, background 0.25s",
                  display: "flex", flexDirection: "column", gap: 8,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderTopColor = "#2A9D78"; (e.currentTarget as HTMLButtonElement).style.background = "#1E1E1E"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderTopColor = "rgba(42,157,120,0.25)"; (e.currentTarget as HTMLButtonElement).style.background = "#1C1C1C"; }}
              >
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: "#F5F3EE", fontWeight: 400, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {s.title}
                  <span style={{ color: "#2A9D78", fontSize: 16, marginLeft: 12 }}>↓</span>
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(245,243,238,0.45)", lineHeight: 1.5, fontStyle: "italic" }}>{s.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section style={{ background: "#161616", padding: "0 40px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ background: "#1A2820", borderLeft: "2px solid #2A9D78", padding: "28px 36px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.6)", margin: 0, fontStyle: "italic" }}>
              Every service can include campaign execution support — we help identify, brief and guide the right specialist partners to bring the strategy to life.
            </p>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 2 }}>
          {services.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#161616", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 16 }}>Not sure which service you need?</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.25, marginBottom: 20 }}>
              Every project is different. We can tailor our approach to suit your challenge, your timeline, and where you need support most.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(245,243,238,0.45)", marginBottom: 36 }}>
              Let's talk about what you're trying to achieve.
            </p>
            <a
              href="mailto:jt@theunitedrepublic.com.au"
              style={{ background: "#2A9D78", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", textDecoration: "none", display: "inline-block", transition: "background 0.25s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#239068"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#2A9D78"; }}
            >
              Book an initial conversation
            </a>
          </div>
          <div style={{ background: "#1A2820", padding: "48px", borderLeft: "2px solid #2A9D78" }}>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, color: "#8FD9BE", fontWeight: 400, lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>
              "The United Republic doesn't run a fixed agency structure. We build the right team around each challenge — bringing together specialist partners for creative, media, content, production and delivery based on what the work needs, not what we happen to have in-house."
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
