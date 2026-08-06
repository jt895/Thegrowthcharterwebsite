import { useEffect, useRef } from "react";
import AnimatedHeroMark from "../components/AnimatedHeroMark";

type Page = "home" | "about" | "how-we-work" | "services" | "strategic-advisory" | "growth-charter";

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
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal(), r6 = useReveal(), r7 = useReveal();

  const differences = [
    {
      title: "Your Business First",
      body: "If we don't understand your business and your objectives we can't find the right levers to pull, or the barriers holding you back, or know what success looks like.",
    },
    {
      title: "Customers and Audience First",
      body: "By understanding your customers and your audiences, we know what problem you're solving for them and why they buy, and where the opportunities for growth lie.",
    },
    {
      title: "Strategy before execution",
      body: "We start with the problem, not the solution. That means better briefs, clearer direction, and work that's focused on what matters most.",
    },
    {
      title: "Independent advice",
      body: "We don't have a vested interest in a particular channel, medium or approach. Our only interest is making sure the strategy is right.",
    },
    {
      title: "Senior practitioners",
      body: "You work with experienced strategists who've delivered complex, high-stakes communications programs — not junior account teams.",
    },
    {
      title: "The right partners",
      body: "We identify, brief and guide specialist partners based on what the work needs — not what we happen to have in-house.",
    },
    {
      title: "Evidence-led",
      body: "Our strategies are grounded in research, insight and data — not assumptions or creative instinct.",
    },
    {
      title: "Focused on outcomes",
      body: "We measure success by results, not outputs. Strategy is only as good as what it achieves.",
    },
  ];

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 100, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-4%", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", animation: "fade-in 2.4s ease 0.5s both" }}>
          <AnimatedHeroMark size={600} opacity={0.32} speedMultiplier={2.2} />
        </div>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 760 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 28 }} className="hero-sub">
              About
            </p>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5.5vw, 68px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 40 }} className="hero-title">
              The United Republic
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(245,243,238,0.65)", maxWidth: 640, marginBottom: 20 }} className="hero-sub">
              The United Republic is an Australian independent business strategy, growth and communications strategy advisory led by senior practitioners with deep experience across government, major brands, start-ups, SMEs, complex stakeholder environments and behaviour change.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", maxWidth: 620, marginBottom: 32 }} className="hero-sub">
              We help organisations define the real problem, shape the right strategic response, and guide the work through to delivery when needed.
            </p>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 19, lineHeight: 1.7, color: "#8FD9BE", maxWidth: 580, fontStyle: "italic" }} className="hero-sub">
              Our role is not to add noise. It is to bring clarity, direction and judgement at the point where communications decisions matter most.
            </p>
          </div>
        </div>
      </section>

      {/* The tailored team model */}
      <section style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r1} className="reveal" style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              The tailored team model
            </h2>
          </div>
          <div ref={r2} className="reveal reveal-delay-1" style={{ maxWidth: 760, margin: "0 auto", background: "#1C1C1C", padding: "56px 64px", borderLeft: "2px solid #2A9D78" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(245,243,238,0.65)", marginBottom: 24 }}>
              We do not force projects through a fixed agency structure. We build the right team around the challenge, drawing on specialist partners and senior talent to make sure strategy is carried through in the right way.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", margin: 0 }}>
              This means clients get strategic thinking that's independent of execution bias, combined with access to the best specialists for each part of the work — whether that's creative development, media strategy, content production, stakeholder engagement, or campaign delivery.
            </p>
          </div>
        </div>
      </section>

      {/* How we're different */}
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r3} className="reveal" style={{ marginBottom: 72 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20, textAlign: "center" }}>
              Approach
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, textAlign: "center" }}>
              How we're different
            </h2>
          </div>
          <div ref={r4} className="reveal reveal-delay-1" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
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

      {/* Experience */}
      <section style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r5} className="reveal" style={{ marginBottom: 56 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>
              Track record
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15 }}>
              Experience
            </h2>
          </div>
          <div style={{ maxWidth: 760, background: "#1C1C1C", padding: "56px 64px", borderTop: "1px solid rgba(42,157,120,0.3)", borderLeft: "1px solid rgba(42,157,120,0.15)" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(245,243,238,0.65)", marginBottom: 24 }}>
              The United Republic has delivered strategic advisory across government, public sector, purpose-led organisations, major brands and complex stakeholder environments, and helped grow businesses from a start-up in the garage to multi-million dollar enterprises.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)", marginBottom: 24 }}>
              Our work spans business strategy, business growth, behaviour change campaigns, brand repositioning, multi-stakeholder engagement programs, crisis and reputation management, campaign strategy and launch planning, and has engaged millions of Australians.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.45)", margin: 0 }}>
              We've led projects including state and local government elections, national awareness campaigns, product and brand launches, and long-term strategic consulting engagements with government and corporate clients.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Consultant */}
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }}>
          <div ref={r6} className="reveal">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>
              Leadership
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 3vw, 38px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 16 }}>
              Principal Consultant
            </h2>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, color: "#8FD9BE", fontWeight: 400, fontStyle: "italic", marginBottom: 40 }}>
              James Trebilcock
            </p>
            <a
              href="mailto:jt@theunitedrepublic.com.au"
              style={{ background: "#2A9D78", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", textDecoration: "none", transition: "background 0.25s", display: "inline-block" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#239068"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#2A9D78"; }}
            >
              Get in touch
            </a>
          </div>
          <div ref={r7} className="reveal reveal-delay-1">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(245,243,238,0.65)", marginBottom: 28 }}>
              With 25 years of experience across strategy, communications, engagement, customer experience and operational leadership, James helps organisations solve the right problems before they invest in execution. Through The United Republic, he works with government, community-facing organisations and major brands to uncover the real issues, identify the audiences that matter most, and build evidence-based strategies that connect insight, messaging and delivery.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.5)", margin: 0 }}>
              His work is grounded in research, customer and stakeholder understanding, and a clear view of what drives participation, trust and growth. He brings together strategy, communications and implementation planning to give clients a clear path forward, practical actions, and the right partners to deliver work that performs in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#161616", padding: "100px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 20 }}>
            Work with us
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 40px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 40 }}>
            Start with the right conversation.
          </h2>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:jt@theunitedrepublic.com.au"
              style={{ background: "#2A9D78", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", textDecoration: "none", transition: "background 0.25s", display: "inline-block" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#239068"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#2A9D78"; }}
            >
              Get in touch
            </a>
            <button
              onClick={() => nav("services")}
              style={{ background: "none", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(245,243,238,0.6)", padding: "16px 32px", transition: "border-color 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
            >
              Explore our services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
