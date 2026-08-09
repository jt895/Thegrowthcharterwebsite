import { useEffect, useRef } from "react";
import { homeContent } from "../data/content";
import { editableField } from "../data/editable";
import { goToContact } from "../lib/contactNav";
import type { Page } from "../routes";

import imgAccolade from "@/imports/accolade.png";
import imgFord from "@/imports/ford.png";
import imgHyundai from "@/imports/hyundai.png";
import imgIag from "@/imports/iag.png";
import imgKaplan from "@/imports/kaplan.png";
import imgPanasonic from "@/imports/panasonic.png";
import imgSaGovernment from "@/imports/sa-government.png";
import imgSmartraveller from "@/imports/smartraveller.jpeg";
import imgStockland from "@/imports/stockland.png";
import imgSubaru from "@/imports/subaru.png";
import imgToyota from "@/imports/toyota.png";
import imgYalumba from "@/imports/yalumba.png";

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

// Curated to 10-12 working logos. Previously included CommBank, Yellowtail and
// hipages marks that render as broken/boxed against the dark treatment.
const clientLogoImages: { src: string; alt: string }[] = [
  { src: imgToyota,        alt: "Toyota" },
  { src: imgFord,          alt: "Ford" },
  { src: imgHyundai,       alt: "Hyundai" },
  { src: imgSubaru,        alt: "Subaru" },
  { src: imgSmartraveller, alt: "DFAT Smartraveller" },
  { src: imgYalumba,       alt: "Yalumba Wines" },
  { src: imgAccolade,      alt: "Accolade Wines" },
  { src: imgIag,           alt: "IAG" },
  { src: imgPanasonic,     alt: "Panasonic" },
  { src: imgStockland,     alt: "Stockland" },
  { src: imgKaplan,        alt: "Kaplan" },
  { src: imgSaGovernment,  alt: "SA Government" },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };
  const scrollToPaths = () => {
    document.getElementById("two-paths")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const heroRef = useRef<SVGSVGElement>(null);
  const r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section {...editableField("home.hero")} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 40px 80px", maxWidth: 1280, margin: "0 auto", position: "relative" }}>

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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px, 6vw, 76px)", lineHeight: 1.08, color: "#F5F3EE", marginBottom: 32, fontWeight: 400 }} className="hero-title">
            {homeContent.hero.title}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, lineHeight: 1.7, color: "rgba(245,243,238,0.65)", marginBottom: 16, maxWidth: 620 }} className="hero-sub">
            {homeContent.hero.subA}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(245,243,238,0.45)", marginBottom: 48, maxWidth: 560 }} className="hero-sub">
            {homeContent.hero.subB}
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className="hero-cta">
            <button
              onClick={scrollToPaths}
              style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", letterSpacing: "0.02em", transition: "background 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
            >
              {homeContent.hero.ctaPrimary}
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 64 }}>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #2A9D78, transparent)" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B9B9B" }}>{homeContent.hero.scrollLabel}</span>
        </div>
      </section>

      {/* Two Paths */}
      <section id="two-paths" {...editableField("home.twoPaths")} style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r3} className="reveal" style={{ textAlign: "center", marginBottom: 72 }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 4vw, 48px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15 }}>
              {homeContent.twoPaths.title}
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {/* Advisory */}
            <div style={{ background: "#1E1E1E", padding: "56px 48px", borderTop: "2px solid rgba(155,155,155,0.3)", position: "relative", cursor: "pointer", transition: "border-color 0.3s" }}
              onClick={() => nav("strategic-advisory")}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "#9B9B9B"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "rgba(155,155,155,0.3)"; }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 12 }}>
                {homeContent.twoPaths.advisory.eyebrow}
              </p>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, color: "#F5F3EE", fontWeight: 400, marginBottom: 24 }}>{homeContent.twoPaths.advisory.title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", marginBottom: 40 }}>
                {homeContent.twoPaths.advisory.body}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#9B9B9B" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.05em" }}>{homeContent.twoPaths.advisory.cta}</span>
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
                {homeContent.twoPaths.growthCharter.eyebrow}
              </p>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, color: "#F5F3EE", fontWeight: 400, marginBottom: 24 }}>{homeContent.twoPaths.growthCharter.title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", marginBottom: 40 }}>
                {homeContent.twoPaths.growthCharter.body}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#2A9D78" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.05em" }}>{homeContent.twoPaths.growthCharter.cta}</span>
                <span style={{ fontSize: 16 }}>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TUR */}
      <section {...editableField("home.whyTur")} style={{ background: "#161616", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r4} className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>{homeContent.whyTur.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 4vw, 48px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, maxWidth: 600 }}>
              {homeContent.whyTur.title}
            </h2>
          </div>
          <div className="reveal reveal-delay-1" style={{ marginBottom: 80 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", maxWidth: 680 }}>
              {homeContent.whyTur.body}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {homeContent.whyTur.pillars.map((item, i) => (
              <div key={i} style={{ background: "#1C1C1C", padding: "40px", borderTop: "1px solid rgba(42,157,120,0.3)" }}>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#F5F3EE", fontWeight: 400, marginBottom: 16 }}>{item.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section {...editableField("home.credibility")} style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r5} className="reveal" style={{ marginBottom: 56, textAlign: "center" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>{homeContent.credibility.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 20 }}>
              {homeContent.credibility.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", maxWidth: 640, margin: "0 auto" }}>
              {homeContent.credibility.body}
            </p>
          </div>

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
      <section {...editableField("home.cta")} style={{ padding: "100px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 40px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 20 }}>
            {homeContent.cta.title}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.5)", marginBottom: 40 }}>
            {homeContent.cta.body}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => goToContact(onNavigate, "home")}
              style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
            >
              {homeContent.cta.ctaPrimary}
            </button>
            <button
              onClick={() => nav("how-we-work")}
              style={{ background: "none", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(245,243,238,0.6)", padding: "16px 32px", transition: "border-color 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
            >
              {homeContent.cta.ctaSecondary}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
