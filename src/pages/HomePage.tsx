import { useEffect, useRef } from "react";
import LogoMark from "../components/LogoMark";

import imgAccolade from "@/imports/accolade.png";
import imgAmbc from "@/imports/ambc.png";
import imgAustraliaPost from "@/imports/australia-post.png";
import imgAustralianAvocados from "@/imports/australian-avocados.jpg";
import imgBarnardos from "@/imports/barnardos.png";
import imgBws from "@/imports/bws.png";
import imgCaltex from "@/imports/caltex.png";
import imgCcs from "@/imports/ccs.jpeg";
import imgClipal500 from "@/imports/clipsal-500.jpg";
import imgCommbank from "@/imports/commbank.png";
import imgCreditUnionSa from "@/imports/credit-union-sa.png";
import imgEcsa from "@/imports/ecsa.png";
import imgFcmb from "@/imports/fcmb.png";
import imgFord from "@/imports/ford.png";
import imgGmDaewoo from "@/imports/gm-daewoo.png";
import imgHipages from "@/imports/hipages.png";
import imgHyundai from "@/imports/hyundai.png";
import imgIag from "@/imports/iag.png";
import imgKaplan from "@/imports/kaplan.png";
import imgKettle from "@/imports/kettle.png";
import imgKu from "@/imports/ku.png";
import imgLocalGov from "@/imports/local-government-logo.png";
import imgMac from "@/imports/mac.png";
import imgMillers from "@/imports/millers.png";
import imgNova from "@/imports/nova.png";
import imgOnce from "@/imports/once.jpeg";
import imgPanasonic from "@/imports/panasonic.png";
import imgPetaluma from "@/imports/petaluma.png";
import imgQbe from "@/imports/qbe.jpeg";
import imgQuarantine from "@/imports/quarantine.png";
import imgSaGovernment from "@/imports/sa-government.png";
import imgSaLotteries from "@/imports/sa-lotteries.png";
import imgSmartraveller from "@/imports/smartraveller.jpeg";
import imgStHallett from "@/imports/st-hallett.png";
import imgStockland from "@/imports/stockland.png";
import imgSubaru from "@/imports/subaru.png";
import imgTafeVictoria from "@/imports/tafe-victoria.png";
import imgTaubmans from "@/imports/taubmans.png";
import imgToyota from "@/imports/toyota.png";
import imgYalumba from "@/imports/yalumba.png";
import imgYellowtail from "@/imports/yellowtail.png";

type Page = "home" | "about" | "how-we-work" | "services" | "strategic-advisory" | "growth-charter";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const clientLogoImages: { src: string; alt: string }[] = [
  { src: imgAustraliaPost,      alt: "Australia Post" },
  { src: imgToyota,             alt: "Toyota" },
  { src: imgFord,               alt: "Ford" },
  { src: imgHyundai,            alt: "Hyundai" },
  { src: imgSubaru,             alt: "Subaru" },
  { src: imgCommbank,           alt: "CommBank" },
  { src: imgIag,                alt: "IAG" },
  { src: imgQbe,                alt: "QBE" },
  { src: imgPanasonic,          alt: "Panasonic" },
  { src: imgKaplan,             alt: "Kaplan" },
  { src: imgStockland,          alt: "Stockland" },
  { src: imgSaLotteries,        alt: "SA Lotteries" },
  { src: imgTafeVictoria,       alt: "TAFE Victoria" },
  { src: imgSmartraveller,      alt: "DFAT Smartraveller" },
  { src: imgYellowtail,         alt: "Yellowtail" },
  { src: imgYalumba,            alt: "Yalumba Wines" },
  { src: imgAccolade,           alt: "Accolade Wines" },
  { src: imgCaltex,             alt: "Caltex / Woolworths Petroleum JV" },
  { src: imgBws,                alt: "BWS" },
  { src: imgBarnardos,          alt: "Barnardos Australia" },
  { src: imgHipages,            alt: "hipages" },
  { src: imgKettle,             alt: "Snack Brands Kettle" },
  { src: imgCcs,                alt: "Snack Brands CC's" },
  { src: imgMillers,            alt: "Millers" },
  { src: imgTaubmans,           alt: "Taubmans" },
  { src: imgCreditUnionSa,      alt: "Credit Union SA" },
  { src: imgGmDaewoo,           alt: "GM Daewoo" },
  { src: imgFcmb,               alt: "FCMB" },
  { src: imgSaGovernment,       alt: "SA Government" },
  { src: imgMac,                alt: "Motor Accident Commission" },
  { src: imgQuarantine,         alt: "AQIS Quarantine Matters" },
  { src: imgAustralianAvocados, alt: "Australian Avocados" },
  { src: imgEcsa,               alt: "ECSA" },
  { src: imgKu,                 alt: "KU Children Services" },
  { src: imgNova,               alt: "Nova Systems" },
  { src: imgOnce,               alt: "OnceDirect" },
  { src: imgPetaluma,           alt: "Petaluma Wines" },
  { src: imgStHallett,          alt: "St Hallett" },
  { src: imgClipal500,          alt: "Clipsal 500" },
  { src: imgAmbc,               alt: "AMBC" },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };

  const heroRef = useRef<SVGSVGElement>(null);
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal(), r6 = useReveal();

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 40px 80px", maxWidth: 1280, margin: "0 auto", position: "relative" }}>

        {/* Animated ring mark — exact v1 */}
        <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", opacity: 0.18, pointerEvents: "none" }} className="hero-ring">
          <svg width="520" height="520" viewBox="0 0 520 520" fill="none" ref={heroRef}>
            <defs>
              <clipPath id="hero-left"><rect x="0" y="0" width="260" height="520" /></clipPath>
              <clipPath id="hero-right"><rect x="260" y="0" width="260" height="520" /></clipPath>
            </defs>
            <g className="ring-outer">
              <circle cx="260" cy="260" r="250" stroke="#2A9D78" strokeWidth="1" clipPath="url(#hero-left)" />
              <circle cx="260" cy="260" r="250" stroke="#9B9B9B" strokeWidth="1" clipPath="url(#hero-right)" />
            </g>
            <g className="ring-inner" style={{ transformOrigin: "260px 260px" }}>
              <circle cx="260" cy="260" r="175" stroke="#2A9D78" strokeWidth="1" strokeDasharray="4 6" clipPath="url(#hero-left)" />
              <circle cx="260" cy="260" r="175" stroke="#9B9B9B" strokeWidth="1" strokeDasharray="4 6" clipPath="url(#hero-right)" />
            </g>
            <circle cx="260" cy="260" r="100" stroke="#2A9D78" strokeWidth="0.8" clipPath="url(#hero-left)" />
            <circle cx="260" cy="260" r="100" stroke="#9B9B9B" strokeWidth="0.8" clipPath="url(#hero-right)" />
            <circle cx="260" cy="260" r="40" stroke="#2A9D78" strokeWidth="0.6" clipPath="url(#hero-left)" />
            <circle cx="260" cy="260" r="40" stroke="#9B9B9B" strokeWidth="0.6" clipPath="url(#hero-right)" />
            <circle cx="260" cy="260" r="6" fill="#2A9D78" />
            <line x1="260" y1="0" x2="260" y2="520" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          </svg>
        </div>

        <div style={{ maxWidth: 760, position: "relative" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 32 }} className="hero-sub">
            The Growth Charter
          </p>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px, 6vw, 76px)", lineHeight: 1.08, color: "#F5F3EE", marginBottom: 32, fontWeight: 400 }} className="hero-title">
            Business growth needs sharper choices, not more activity.
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, lineHeight: 1.7, color: "rgba(245,243,238,0.65)", marginBottom: 16, maxWidth: 620 }} className="hero-sub">
            The United Republic helps established businesses find where growth is really available, decide what matters most and build the practical capability to act.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(245,243,238,0.45)", marginBottom: 48, maxWidth: 560 }} className="hero-sub">
            The Growth Charter brings executive-level strategy, customer evidence and commercial discipline to owner-led businesses ready for their next stage.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className="hero-cta">
            <button
              onClick={() => nav("growth-charter")}
              style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", letterSpacing: "0.02em", transition: "background 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
            >
              Book a discovery session
            </button>
            <button
              onClick={() => nav("how-we-work")}
              style={{ background: "none", border: "1px solid rgba(42,157,120,0.4)", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 400, color: "#2A9D78", padding: "16px 32px", letterSpacing: "0.02em", transition: "border-color 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2A9D78"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(42,157,120,0.4)"; }}
            >
              See how it works
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 64 }}>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #2A9D78, transparent)" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B9B9B" }}>Scroll</span>
        </div>
      </section>

      {/* The Problem */}
      <section style={{ background: "#161616", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r1} className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>The Problem</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 4vw, 52px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, maxWidth: 640 }}>
              You need growth, you don't need more marketing.<br />Good businesses plateau when the next decision is unclear.
            </h2>
          </div>
          <div ref={r2} className="reveal reveal-delay-1" style={{ marginBottom: 64 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(245,243,238,0.6)", maxWidth: 560 }}>
              Growth usually slows because the business has outgrown the assumptions, habits and systems that got it this far. More marketing won't fix a commercial problem that has not been properly defined.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "rgba(255,255,255,0.06)" }}>
            {[
              "Revenue is holding, but profit or momentum has stopped improving",
              "Marketing activity is happening, but the commercial return is unclear",
              "Too much of the growth plan still lives in the owner's head",
              "The business attracts work, but not always the most valuable work",
            ].map((item, i) => (
              <div key={i} style={{ background: "#1C1C1C", padding: "36px 40px", borderLeft: "2px solid #2A9D78", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: "#2A9D78", opacity: 0.5, minWidth: 28, marginTop: 2 }}>0{i + 1}</span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.65, color: "rgba(245,243,238,0.7)", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r3} className="reveal" style={{ textAlign: "center", marginBottom: 72 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>Choose Your Path</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 4vw, 48px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, marginBottom: 16 }}>
              One advisory practice. Two clear ways to engage.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#9B9B9B", maxWidth: 480, margin: "0 auto" }}>
              Start with the path that matches the decision you need to make.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {/* Advisory */}
            <div style={{ background: "#1E1E1E", padding: "56px 48px", borderTop: "2px solid rgba(155,155,155,0.3)", position: "relative", cursor: "pointer", transition: "border-color 0.3s" }}
              onClick={() => nav("about")}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "#9B9B9B"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "rgba(155,155,155,0.3)"; }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 12 }}>
                Government, corporate and complex organisations
              </p>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, color: "#F5F3EE", fontWeight: 400, marginBottom: 24 }}>Strategic Advisory</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", marginBottom: 40 }}>
                Independent strategic advisory for organisations that need to define the real problem before investing in campaigns, content, engagement or delivery. Whether you need Business Strategy, a Fractional CMO, Brand Positioning, Marketing and Communications Strategy, Audience Research and Segmentation, Channel Strategy, Pr and Crisis Communications or Implementation, The United Republic can help to simplify your complex problems, manage multiple stakeholders, work out what to do and just make it happen.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#9B9B9B" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.05em" }}>Explore Strategic Advisory</span>
                <span style={{ fontSize: 16 }}>→</span>
              </div>
            </div>

            {/* Growth Charter */}
            <div style={{ background: "#1A2820", padding: "56px 48px", borderTop: "2px solid #2A9D78", position: "relative", cursor: "pointer", transition: "background 0.3s" }}
              onClick={() => nav("growth-charter")}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#1E2E25"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#1A2820"; }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8FD9BE", marginBottom: 12 }}>
                Australian start-ups & established businesses
              </p>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, color: "#F5F3EE", fontWeight: 400, marginBottom: 24 }}>The Growth Charter</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", marginBottom: 40 }}>
                The Growth Charter helps Australian start-ups and established businesses to grow by finding their strongest commercial opportunities, choosing the right priorities and building the capability to act on them. With multiple way to engage, there is a solution to grow your business and achieve you goals.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#2A9D78" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.05em" }}>Explore The Growth Charter</span>
                <span style={{ fontSize: 16 }}>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TUR */}
      <section style={{ background: "#161616", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r4} className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>Why The United Republic</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 4vw, 48px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, maxWidth: 600 }}>
              Senior strategic thinking, scaled for practical business growth.
            </h2>
          </div>
          <div ref={r5} className="reveal reveal-delay-1" style={{ marginBottom: 80 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", maxWidth: 680 }}>
              We bring the the proven experience and discipline used to drive growth for Australia's favourite brands and engage millions of Australians to grow and scale your business.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
            {[
              { title: "Commercial first", body: "We connect customer, brand, sales, margin and capacity decisions so growth is tied to business value, not activity." },
              { title: "Evidence led", body: "We test owner belief against customer insight, business data and market reality before choosing priorities." },
              { title: "Built to implement", body: "The output is a staged plan with owners, measures, tools and decisions your team can keep using." },
              { title: "Capability not Dependency", body: "You own what we build and know how to use it. Our job is to make ourselves unnecessary, not indispensable. But we're always here when you need support or advice." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#1C1C1C", padding: "40px", borderTop: "1px solid rgba(42,157,120,0.3)" }}>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#F5F3EE", fontWeight: 400, marginBottom: 16 }}>{item.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div ref={r6} className="reveal">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>Results</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 24 }}>
              Evidence of growth, not just intent.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", marginBottom: 40 }}>
              Whether you're engaging through Strategic Advisory or the Growth Charter,&nbsp;&nbsp;the thinking behind it comes from decades of measurable commercial and behavioural outcomes.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Building brands that earn trust and preference",
                "Targeting the right customers with sharper positioning",
                "Growing businesses through clearer commercial priorities",
                "Improving capability so teams can keep acting without us",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2A9D78", marginTop: 8, flexShrink: 0 }} />
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.65)", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ padding: "48px", background: "#161616", borderLeft: "2px solid #2A9D78" }}>
              <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 52, color: "#2A9D78", fontWeight: 400, lineHeight: 1, marginBottom: 8 }}>25+</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#9B9B9B", lineHeight: 1.6 }}>
                years of building brands, targeting the right customers, growing businesses and improving capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section style={{ background: "#161616", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 56, textAlign: "center" }}>
            Experience behind the thinking — We've worked with Australia's Favourite Brands:
          </p>

          {/* Image logos grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 2,
            marginBottom: 2,
            overflow: "visible",
          }}>
            {clientLogoImages.map(({ src, alt }) => (
              <div
                key={alt}
                style={{
                  background: "#1E1E1E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "28px 24px",
                  height: 100,
                  position: "relative",
                  zIndex: 0,
                  transition: "z-index 0s 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.zIndex = "10"; e.currentTarget.style.transition = "z-index 0s"; }}
                onMouseLeave={(e) => { e.currentTarget.style.zIndex = "0"; e.currentTarget.style.transition = "z-index 0s 0.3s"; }}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: 52,
                    objectFit: "contain",
                    filter: "grayscale(100%) brightness(180%)",
                    opacity: 0.55,
                    transform: "scale(1)",
                    transition: "opacity 0.3s, filter 0.3s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.filter = "grayscale(0%) brightness(100%)";
                    img.style.opacity = "1";
                    img.style.transform = "scale(2)";
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.filter = "grayscale(100%) brightness(180%)";
                    img.style.opacity = "0.55";
                    img.style.transform = "scale(1)";
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 40px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 20 }}>
            Find the growth decision your business needs next.
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.5)", marginBottom: 40 }}>
            The first session is a practical conversation about your business, what are the challenges, what has slowed, where the opportunity may be and what a useful outcome would look like.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => nav("growth-charter")}
              style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
            >
              Book a discovery session
            </button>
            <button
              onClick={() => nav("about")}
              style={{ background: "none", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(245,243,238,0.6)", padding: "16px 32px", transition: "border-color 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
            >
              Review the program
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
