import { useEffect, useRef } from "react";
import SpinningRingMark from "../components/SpinningRingMark";

type Page = "home" | "about" | "how-we-work" | "services" | "strategic-advisory" | "growth-charter";

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
      <section style={{ padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
        {/* V1 spinning rings — prominent, less subtle */}
        <div style={{ position: "absolute", right: "-2%", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", animation: "fade-in 2.4s ease 0.5s both" }}>
          <SpinningRingMark size={640} opacity={0.55} speed={1.3} weight={1.6} />
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 800 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 28 }} className="hero-sub">
              The United Republic
            </p>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5vw, 68px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 32 }} className="hero-title">
              Your business is working. The next stage needs a clearer plan.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(245,243,238,0.6)", maxWidth: 640, marginBottom: 16 }} className="hero-sub">
              The Growth Charter helps established Australian businesses find their strongest commercial opportunities, choose the right priorities and build the capability to act on them.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.45)", maxWidth: 580, marginBottom: 12 }} className="hero-sub">
              We combine executive-level strategy, customer evidence and practical implementation. You own the roadmap, and your business is stronger and more capable when the work is finished.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.7, color: "rgba(245,243,238,0.3)", maxWidth: 560, marginBottom: 48, fontStyle: "italic" }} className="hero-sub">
              Based in South Australia, working with businesses across Adelaide, the Adelaide Hills, Mount Barker, Murray Bridge and nationally.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className="hero-cta">
              <button
                style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
              >
                Book a Growth Charter conversation
              </button>
              <button
                onClick={() => nav("how-we-work")}
                style={{ background: "none", border: "1px solid rgba(42,157,120,0.4)", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#2A9D78", padding: "16px 32px", transition: "border-color 0.25s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2A9D78"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(42,157,120,0.4)"; }}
              >
                See how it works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why good businesses plateau */}
      <section style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 24 }}>
                Why good businesses plateau
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(245,243,238,0.5)" }}>
                Growth rarely stops because the owner lacks ambition. It usually slows because the business has outgrown the decisions, habits and systems that got it this far.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {[
                "The business is busy, but revenue or profit has stopped moving",
                "Too much depends on the owner",
                "The business is attracting work, but not always the right work",
                "Pricing has grown from habit rather than clear commercial logic",
                "Marketing activity is disconnected from sales and profit",
                "Past agency work created activity without lasting internal capability",
              ].map((item, i) => (
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
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>The central idea</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 32 }}>
              What you believe. What the evidence says.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)", marginBottom: 24 }}>
              Every owner holds a view of why customers buy, which work is most valuable and where growth will come from. Some of it will be right. Some of it will be incomplete. Some of it may be costing the business money.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)" }}>
              The Growth Charter deliberately surfaces the gap between belief and evidence. That is where better decisions, stronger margins and clearer growth priorities are found.
            </p>
          </div>
          <div style={{ background: "#0B5E48", padding: "56px 48px" }}>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#8FD9BE", fontWeight: 400, lineHeight: 1.6, fontStyle: "italic", marginBottom: 32 }}>
              "The product is not a website, a campaign or an AI tool. The product is a stronger business, with clearer commercial choices and the ability to keep moving after the engagement ends."
            </p>
            <div style={{ width: 40, height: 1, background: "rgba(143,217,190,0.4)" }} />
          </div>
        </div>
      </section>

      {/* How it works - 5 stages */}
      <section style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 16 }}>How it works</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 16 }}>
              Five stages. One commercial plan.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.45)", maxWidth: 640 }}>
              Each stage produces the evidence and decisions required for the next. We do not jump to marketing activity before the commercial direction is clear.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              { num: "01", section: "Discovery", title: "The Business Now", body: "We capture how you and your team see the business today, including your goals, customers, commercial model, capacity, risks and personal endgame." },
              { num: "02", section: "Evidence and analysis", title: "The Opportunity", body: "We test those beliefs against customer research, commercial data and market reality, then size and rank the opportunities in dollars, effort and time to impact." },
              { num: "03", section: "A clearer place in the market", title: "Branding & Positioning", body: "We define what you are really selling, why the right customers should choose you and how your business can stand apart in a way you can deliver." },
              { num: "04", section: "Who matters and how to reach them", title: "Audiences, Messaging & Channel Planning", body: "We set customer priorities, shape the messages that matter and choose the channels that fit how people actually make decisions." },
              { num: "05", section: "Turn the plan into action", title: "Go To Market & Implementation", body: "We create a staged plan with responsibilities, timing, budgets, measures and the practical tools your team needs to deliver it." },
            ].map((stage, i) => (
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
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 16 }}>What you leave with</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 3vw, 38px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2 }}>
              A clear commercial direction and the practical means to act on it.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {[
              "A clear view of which customers and services create the most value",
              "Commercial opportunities ranked by impact, effort and time to return",
              "Sharper positioning grounded in evidence, not preference",
              "A practical plan tied to revenue, profit, capacity and owner goals",
              "Tools, templates and skills your team can keep using",
              "Clear measures so you know what is working and what needs to change",
            ].map((item, i) => (
              <div key={i} style={{ background: "#1E1E1E", padding: "32px 28px", display: "flex", gap: 16, alignItems: "flex-start", borderTop: "1px solid rgba(42,157,120,0.25)" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2A9D78", marginTop: 8, flexShrink: 0 }} />
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.6)", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to work together */}
      <section style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 16 }}>Ways to work together</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 3vw, 38px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2 }}>
              The same method, with the level of support you need.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
            {[
              { title: "Business Launch Essentials", sub: "For new, newly established or small businesses that need the right commercial, brand and digital foundations from the start, including positioning, messaging and a launch-ready website.", note: "A focused path for new ventures and small businesses wanting to grow" },
              { title: "DIY", sub: "A guided program for owners who want to work through The Growth Charter themselves using structured tools, templates and training.", note: "Online program in development" },
              { title: "Do It Together", sub: "We guide the work, run the key sessions and help you make the decisions, while you and your team build the plan and the skills to carry it forward.", note: "Best for hands-on owners and capable internal teams" },
              { title: "Done For You", sub: "We conduct the research, analysis and strategic work, build the plan and support implementation with the right specialists where required.", note: "Best for speed, complexity or limited internal capacity" },
            ].map((mode, i) => (
              <div key={mode.title} style={{ background: "#1C1C1C", padding: "40px 32px", borderTop: i === 0 ? "2px solid rgba(155,155,155,0.5)" : i === 1 || i === 2 ? "2px solid #2A9D78" : "2px solid rgba(143,217,190,0.4)" }}>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#F5F3EE", fontWeight: 400, marginBottom: 16 }}>{mode.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.5)", marginBottom: 24 }}>{mode.sub}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#2A9D78", fontStyle: "italic" }}>{mode.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TUR */}
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>Why The United Republic</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 32 }}>
              Big business experience, applied to your business.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)", marginBottom: 24 }}>
              The Growth Charter draws on more than 25 years of work with national and international brands, government agencies, industry groups and owner-led businesses.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.55)", marginBottom: 24 }}>
              James Trebilcock has led strategy, marketing, communications and business growth work for organisations including Toyota, Ford, Commonwealth Bank, Hyundai, Subaru, the Electoral Commission of South Australia, Hort Innovation, DFAT, Austrade, Adelaide Hills Wine Region and The Bend Motorsport Park.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.45)" }}>
              The same questions used to build major brands, increase sales and change public behaviour can help an established local business make better commercial decisions. The scale changes. The quality of the thinking should not.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              "Local Government", "Toyota Australia", "Ford Australia", "Commonwealth Bank", "Hyundai", "Subaru", "DFAT / Smartraveller", "Hort Innovation", "SA Electoral Commission", "Adelaide Hills Wine Region",
            ].map((org) => (
              <div key={org} style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.5)" }}>{org}</span>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2A9D78", opacity: 0.5 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is The Growth Charter right for you */}
      <section style={{ background: "#0B5E48", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 32 }}>
              Is The Growth Charter right for your business?
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.6)", marginBottom: 32 }}>
              You're a good fit if you're an established business that's working but could be performing better, a new business that wants to get the foundations right from the start, or an early-stage startup ready to move from idea to commercial reality. In every case, you're ready to look at the evidence before making the next decision.
            </p>
            <button
              style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
            >
              Book a Growth Charter conversation
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              "You're generating revenue but growth has plateaued or slowed",
              "You're not sure which customers, services or channels are most valuable",
              "You want to grow but don't want to add complexity or cost before clarity",
              "You've tried marketing activity before but it hasn't moved the needle",
              "You want a roadmap you own and a team that can help you execute it",
              "You need someone senior who has done this before",
            ].map((item, i) => (
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
