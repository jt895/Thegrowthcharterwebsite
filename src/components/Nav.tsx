import { useState, useEffect, useRef } from "react";
import LogoMark from "./LogoMark";
import { navContent, siteContent } from "../data/content";

type Page = "home" | "about" | "how-we-work" | "services" | "strategic-advisory" | "growth-charter";

interface NavProps {
  current: Page;
  onNavigate: (page: Page) => void;
}

export default function Nav({ current, onNavigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [advisoryOpen, setAdvisoryOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAdvisoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    setAdvisoryOpen(false);
    window.scrollTo({ top: 0 });
  };

  const advisoryActive = current === "strategic-advisory" || current === "services";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s, border-color 0.4s",
          background: scrolled ? "rgba(28,28,28,0.96)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            style={{ display: "flex", alignItems: "center", gap: 14, background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <LogoMark size={42} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#F5F3EE", lineHeight: 1.3 }}>
              {siteContent.brandNameLines[0]}<br />{siteContent.brandNameLines[1]}
            </span>
          </button>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="hidden-mobile">
            {/* The Growth Charter */}
            <button
              onClick={() => handleNav("growth-charter")}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400, letterSpacing: "0.03em",
                color: current === "growth-charter" ? "#2A9D78" : "rgba(245,243,238,0.6)",
                transition: "color 0.25s", padding: "4px 0",
                borderBottom: current === "growth-charter" ? "1px solid #2A9D78" : "1px solid transparent",
              }}
              onMouseEnter={(e) => { if (current !== "growth-charter") e.currentTarget.style.color = "#F5F3EE"; }}
              onMouseLeave={(e) => { if (current !== "growth-charter") e.currentTarget.style.color = "rgba(245,243,238,0.6)"; }}
            >
              {navContent.growthCharter}
            </button>

            {/* Strategic Advisory dropdown */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <button
                onClick={() => setAdvisoryOpen(!advisoryOpen)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400, letterSpacing: "0.03em",
                  color: advisoryActive ? "#2A9D78" : "rgba(245,243,238,0.6)",
                  transition: "color 0.25s", padding: "4px 0",
                  borderBottom: advisoryActive ? "1px solid #2A9D78" : "1px solid transparent",
                  display: "flex", alignItems: "center", gap: 6,
                }}
                onMouseEnter={(e) => { if (!advisoryActive) e.currentTarget.style.color = "#F5F3EE"; }}
                onMouseLeave={(e) => { if (!advisoryActive) e.currentTarget.style.color = "rgba(245,243,238,0.6)"; }}
              >
                {navContent.strategicAdvisory}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 0.2s", transform: advisoryOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {advisoryOpen && (
                <div style={{
                  position: "absolute", top: "calc(100% + 16px)", left: 0,
                  background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.08)",
                  minWidth: 200, boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                  animation: "fade-in 0.15s ease",
                }}>
                  <button
                    onClick={() => handleNav("strategic-advisory")}
                    style={{
                      display: "block", width: "100%", background: "none", border: "none", cursor: "pointer",
                      fontFamily: "'Inter', sans-serif", fontSize: 13, color: current === "strategic-advisory" ? "#2A9D78" : "rgba(245,243,238,0.7)",
                      textAlign: "left", padding: "14px 20px",
                      borderLeft: current === "strategic-advisory" ? "2px solid #2A9D78" : "2px solid transparent",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#2A9D78"; e.currentTarget.style.background = "rgba(42,157,120,0.06)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = current === "strategic-advisory" ? "#2A9D78" : "rgba(245,243,238,0.7)"; e.currentTarget.style.background = "none"; }}
                  >
                    {navContent.strategicAdvisory}
                  </button>
                  <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "0 20px" }} />
                  <button
                    onClick={() => handleNav("services")}
                    style={{
                      display: "block", width: "100%", background: "none", border: "none", cursor: "pointer",
                      fontFamily: "'Inter', sans-serif", fontSize: 13, color: current === "services" ? "#2A9D78" : "rgba(245,243,238,0.7)",
                      textAlign: "left", padding: "14px 20px",
                      borderLeft: current === "services" ? "2px solid #2A9D78" : "2px solid transparent",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#2A9D78"; e.currentTarget.style.background = "rgba(42,157,120,0.06)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = current === "services" ? "#2A9D78" : "rgba(245,243,238,0.7)"; e.currentTarget.style.background = "none"; }}
                  >
                    {navContent.services}
                  </button>
                </div>
              )}
            </div>

            {/* How We Work */}
            <button
              onClick={() => handleNav("how-we-work")}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400, letterSpacing: "0.03em",
                color: current === "how-we-work" ? "#2A9D78" : "rgba(245,243,238,0.6)",
                transition: "color 0.25s", padding: "4px 0",
                borderBottom: current === "how-we-work" ? "1px solid #2A9D78" : "1px solid transparent",
              }}
              onMouseEnter={(e) => { if (current !== "how-we-work") e.currentTarget.style.color = "#F5F3EE"; }}
              onMouseLeave={(e) => { if (current !== "how-we-work") e.currentTarget.style.color = "rgba(245,243,238,0.6)"; }}
            >
              {navContent.howWeWork}
            </button>

            {/* About */}
            <button
              onClick={() => handleNav("about")}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400, letterSpacing: "0.03em",
                color: current === "about" ? "#2A9D78" : "rgba(245,243,238,0.6)",
                transition: "color 0.25s", padding: "4px 0",
                borderBottom: current === "about" ? "1px solid #2A9D78" : "1px solid transparent",
              }}
              onMouseEnter={(e) => { if (current !== "about") e.currentTarget.style.color = "#F5F3EE"; }}
              onMouseLeave={(e) => { if (current !== "about") e.currentTarget.style.color = "rgba(245,243,238,0.6)"; }}
            >
              {navContent.about}
            </button>

            <a
              href={`mailto:${siteContent.contact.email}`}
              style={{
                background: "none",
                border: "1px solid rgba(42,157,120,0.5)",
                fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "#2A9D78", padding: "8px 20px",
                textDecoration: "none", display: "inline-block",
                transition: "border-color 0.25s, background 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(42,157,120,0.08)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2A9D78"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "none"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(42,157,120,0.5)"; }}
            >
              {navContent.contact}
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="show-mobile"
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: 5, padding: 4 }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: "block", width: 22, height: 1.5, background: "#F5F3EE", transition: "opacity 0.2s", opacity: mobileOpen && i === 1 ? 0 : 1 }} />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "#1C1C1C", display: "flex", flexDirection: "column", paddingTop: 96, paddingLeft: 40 }}>
          {(navContent.mobileLinks as { label: string; page: Page }[]).map((l) => (
            <button
              key={l.page}
              onClick={() => handleNav(l.page)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: l.page === "services" ? "'Inter', sans-serif" : "'Instrument Serif', serif",
                fontSize: l.page === "services" ? 20 : 36,
                color: current === l.page ? "#2A9D78" : "#F5F3EE",
                textAlign: "left", padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                paddingLeft: l.page === "services" ? 24 : 0,
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
