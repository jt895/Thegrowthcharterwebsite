import { useRef } from "react";
import { homeContent } from "../data/content";
import { editableField } from "../data/editable";
import { goToContact } from "../lib/contactNav";
import type { Page } from "../routes";
import HoloGlass from "../components/HoloGlass";

import imgToyota from "@/imports/toyota.png";
import imgFord from "@/imports/ford.png";
import imgHyundai from "@/imports/hyundai.png";
import imgCommbank from "@/imports/client-logos/commbank.png";
import imgMillers from "@/imports/client-logos/millers.png";
import imgHipages from "@/imports/client-logos/hipages.png";
import imgAdelaideHills from "@/imports/client-logos/adelaide-hills.png";
import imgEcsa from "@/imports/client-logos/ecsa-campaign.png";
import imgAqis from "@/imports/client-logos/aqis.png";
import imgAmbc from "@/imports/ambc.png";
import imgSaGovernment from "@/imports/client-logos/sa-government.png";
import imgTafeVictoria from "@/imports/tafe-victoria.png";
import imgDfat from "@/imports/client-logos/dfat.png";
import { useReveal } from "../hooks/useReveal";
import imgKettle from "@/imports/client-logos/kettle.svg";
import imgCommbankWhite from "@/imports/client-logos/commbank-white.png";
import imgHipagesWhite from "@/imports/client-logos/hipages-white.png";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

// Case-study client roster, curated per JT (Aug 2026). Backgrounds cleaned to
// true transparent PNGs where the source had a white/opaque backing. CommBank
// and hipages sourced from seeklogo (higher-res, already transparent) rather
// than the older low-res site assets. DFAT's blue badge shape is part of the
// Smartraveller brand mark, so it's kept intact rather than stripped. ECSA
// uses the "Your vote. Your voice." campaign lockup (white keyline, includes
// the Electoral Commission SA name) per JT, replacing the plain crest.
// CommBank and hipages swap to a dedicated white version on hover instead of
// the grid's usual colour swap: their colour art has near-black elements
// (CommBank's wordmark/corner, hipages' "pages" text) that disappear against
// the black background at full colour. The white versions are generated from
// the same source art, with hipages' "hi" lettering knocked out to
// transparent (it's solid white-on-orange in the original, not a cutout, so
// a naive recolour would merge it into the house shape). Both use a larger
// 1.5x hover scale instead of the grid's default 1.4x, per JT.
const clientLogoImages: { src: string; alt: string; hoverSrc?: string; hoverScale?: number }[] = [
  { src: imgToyota,        alt: "Toyota" },
  { src: imgFord,          alt: "Ford" },
  { src: imgHyundai,       alt: "Hyundai" },
  { src: imgCommbank,      alt: "Commonwealth Bank", hoverSrc: imgCommbankWhite, hoverScale: 1.5 },
  { src: imgMillers,       alt: "Millers" },
  { src: imgHipages,       alt: "hipages", hoverSrc: imgHipagesWhite, hoverScale: 1.5 },
  { src: imgAdelaideHills, alt: "Adelaide Hills Wine Region" },
  { src: imgEcsa,          alt: "Electoral Commission SA" },
  { src: imgDfat,          alt: "DFAT Smartraveller" },
  { src: imgAqis,          alt: "AQIS" },
  { src: imgAmbc,          alt: "Australia Malaysia Business Council" },
  { src: imgSaGovernment,  alt: "SA Government" },
  { src: imgTafeVictoria,  alt: "TAFE Victoria" },
  { src: imgKettle,        alt: "Kettle Chips" },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };
  const scrollToPaths = () => {
    document.getElementById("two-paths")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const heroRef = useRef<SVGSVGElement>(null);
  const r3 = useReveal(), r4 = useReveal(), r5 = useReveal(), r6 = useReveal();

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section {...editableField("home.hero")} style={{ padding: "100px 40px 32px", maxWidth: 1280, margin: "0 auto", position: "relative", overflow: "hidden" }}>

        <HoloGlass />

        {/* Animated ring mark - exact v1 */}
        <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", opacity: 0.18, pointerEvents: "none", zIndex: 1 }} className="hero-ring">
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

        <div style={{ maxWidth: 760, position: "relative", zIndex: 2 }}>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px, 6vw, 76px)", lineHeight: 1.08, color: "#F5F3EE", marginBottom: 32, fontWeight: 400 }} className="hero-title">
            {homeContent.hero.title}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, lineHeight: 1.7, color: "rgba(245,243,238,0.65)", marginBottom: 16, maxWidth: 620 }} className="hero-sub">
            {homeContent.hero.subA}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(245,243,238,0.45)", marginBottom: 20, maxWidth: 560 }} className="hero-sub">
            {homeContent.hero.subB}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.6, color: "rgba(245,243,238,0.4)", marginBottom: 40, maxWidth: 560 }} className="hero-sub">
            {homeContent.hero.proofLine}
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
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 28 }}>
          <div style={{ width: 1, height: 28, background: "linear-gradient(to bottom, #2A9D78, transparent)" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B9B9B" }}>{homeContent.hero.scrollLabel}</span>
        </div>
      </section>

      {/* Two Paths */}
      <section id="two-paths" {...editableField("home.twoPaths")} style={{ padding: "40px 40px 36px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r3} className="reveal" style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 4vw, 48px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15 }}>
              {homeContent.twoPaths.title}
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {/* Growth Program */}
            <div style={{ background: "#1A2820", padding: "56px 48px", borderTop: "2px solid #2A9D78", position: "relative", cursor: "pointer", transition: "background 0.3s" }}
              onClick={() => nav("growth-program")}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#1E2E25"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#1A2820"; }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8FD9BE", marginBottom: 12 }}>
                {homeContent.twoPaths.growthProgram.eyebrow}
              </p>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, color: "#F5F3EE", fontWeight: 400, marginBottom: 24 }}>{homeContent.twoPaths.growthProgram.title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", marginBottom: 20 }}>
                {homeContent.twoPaths.growthProgram.body}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.6, fontStyle: "italic", color: "rgba(245,243,238,0.45)", marginBottom: 28 }}>
                {homeContent.twoPaths.growthProgram.fitNote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#2A9D78" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.05em" }}>{homeContent.twoPaths.growthProgram.cta}</span>
                <span style={{ fontSize: 16 }}>→</span>
              </div>
            </div>

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
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", marginBottom: 20 }}>
                {homeContent.twoPaths.advisory.body}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.6, fontStyle: "italic", color: "rgba(245,243,238,0.45)", marginBottom: 28 }}>
                {homeContent.twoPaths.advisory.fitNote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#9B9B9B" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, letterSpacing: "0.05em" }}>{homeContent.twoPaths.advisory.cta}</span>
                <span style={{ fontSize: 16 }}>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TUR */}
      <section {...editableField("home.whyTur")} style={{ background: "#161616", padding: "40px 40px 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r4} className="reveal" style={{ marginBottom: 24 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>{homeContent.whyTur.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 4vw, 48px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.15, maxWidth: 600 }}>
              {homeContent.whyTur.title}
            </h2>
          </div>
          <div ref={r6} className="reveal reveal-delay-1" style={{ marginBottom: 28 }}>
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
      <section {...editableField("home.credibility")} style={{ padding: "64px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r5} className="reveal" style={{ marginBottom: 40, textAlign: "center" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 20 }}>{homeContent.credibility.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 3.5vw, 44px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 20 }}>
              {homeContent.credibility.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", maxWidth: 640, margin: "0 auto" }}>
              {homeContent.credibility.body}
            </p>
          </div>

          {/* Client logo grid: transparent tiles, true grayscale-to-colour hover */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: 8,
            overflow: "visible",
          }}>
            {clientLogoImages.map(({ src, alt, hoverSrc, hoverScale }) => (
              <div
                key={alt}
                style={{
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px 16px",
                  height: 96,
                  position: "relative",
                  zIndex: 0,
                  transition: "z-index 0s 0.25s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.zIndex = "10"; e.currentTarget.style.transition = "z-index 0s"; }}
                onMouseLeave={(e) => { e.currentTarget.style.zIndex = "0"; e.currentTarget.style.transition = "z-index 0s 0.25s"; }}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: 48,
                    objectFit: "contain",
                    filter: "grayscale(100%)",
                    opacity: 0.6,
                    transform: "scale(1)",
                    transition: "opacity 0.3s, filter 0.3s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (hoverSrc) { img.src = hoverSrc; }
                    img.style.filter = "grayscale(0%)";
                    img.style.opacity = "1";
                    img.style.transform = `scale(${hoverScale ?? 1.4})`;
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (hoverSrc) { img.src = src; }
                    img.style.filter = "grayscale(100%)";
                    img.style.opacity = "0.6";
                    img.style.transform = "scale(1)";
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section {...editableField("home.cta")} style={{ padding: "64px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <HoloGlass intensity="subtle" />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 40px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 20 }}>
            {homeContent.cta.title}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.5)", marginBottom: 28 }}>
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
