import { useState, useEffect, useRef, type MouseEvent as ReactMouseEvent, type KeyboardEvent as ReactKeyboardEvent } from "react";
import LogoMark from "./LogoMark";
import { navContent, siteContent } from "../data/content";
import { editableField } from "../data/editable";
import { pathForPage, type Page } from "../routes";

interface NavProps {
  current: Page;
  onNavigate: (page: Page) => void;
}

interface DropdownItem {
  label: string;
  page: Page;
}

type MenuKey = "growth" | "advisory";

export default function Nav({ current, onNavigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const growthRef = useRef<HTMLDivElement>(null);
  const advisoryRef = useRef<HTMLDivElement>(null);
  const growthTriggerRef = useRef<HTMLButtonElement>(null);
  const advisoryTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (growthRef.current && !growthRef.current.contains(e.target as Node) &&
          advisoryRef.current && !advisoryRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    setOpenMenu(null);
    window.scrollTo({ top: 0 });
  };

  const handleLink = (event: ReactMouseEvent<HTMLAnchorElement>, page: Page) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    handleNav(page);
  };

  const handleTriggerKeyDown = (event: ReactKeyboardEvent, menu: MenuKey) => {
    if (event.key === "Escape") {
      setOpenMenu(null);
      (menu === "growth" ? growthTriggerRef : advisoryTriggerRef).current?.focus();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpenMenu(menu);
    }
  };

  const handleMenuKeyDown = (event: ReactKeyboardEvent, menu: MenuKey) => {
    if (event.key === "Escape") {
      setOpenMenu(null);
      (menu === "growth" ? growthTriggerRef : advisoryTriggerRef).current?.focus();
    }
  };

  const growthCharterItems: DropdownItem[] = [
    { label: "Overview", page: "growth-charter" },
    { label: "LAUNCH", page: "launch-charter" },
    { label: "GROW - DO IT TOGETHER", page: "do-it-together" },
    { label: "GROW - DONE FOR YOU", page: "launch-complete" },
    { label: "SCALE", page: "scale" },
    { label: "GROW IT YOURSELF", page: "charter-course" },
  ];

  const advisoryItems: DropdownItem[] = [
    { label: "Overview", page: "strategic-advisory" },
    { label: navContent.services, page: "services" },
    { label: navContent.howWeWork, page: "how-we-work" },
  ];

  const growthActive = pathForPage(current).startsWith("/growth-program/") || current === "growth-charter";
  const advisoryActive = current === "strategic-advisory" || current === "services" || current === "how-we-work";
  const caseStudiesActive = pathForPage(current).startsWith("/case-studies/") || current === "case-studies";

  const linkStyle = (active: boolean) => ({
    cursor: "pointer" as const, textDecoration: "none" as const,
    fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400, letterSpacing: "0.03em",
    color: active ? "#2A9D78" : "rgba(245,243,238,0.6)",
    transition: "color 0.25s", padding: "4px 0",
    borderBottom: active ? "1px solid #2A9D78" : "1px solid transparent",
  });

  const DropdownPanel = ({ items, menu }: { items: DropdownItem[]; menu: MenuKey }) => (
    <div
      role="group"
      aria-label={menu === "growth" ? navContent.growthCharter : navContent.strategicAdvisory}
      onKeyDown={(e) => handleMenuKeyDown(e, menu)}
      style={{
        position: "absolute", top: "calc(100% + 16px)", left: 0,
        background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.08)",
        minWidth: 220, boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
        animation: "fade-in 0.15s ease",
      }}
    >
      {items.map((item, i) => (
        <div key={item.page}>
          {i > 0 && <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "0 20px" }} />}
          <a
            href={pathForPage(item.page)}
            onClick={(event) => handleLink(event, item.page)}
            style={{
              display: "block", width: "100%", cursor: "pointer", textDecoration: "none",
              fontFamily: "'Inter', sans-serif", fontSize: 13, color: current === item.page ? "#2A9D78" : "rgba(245,243,238,0.7)",
              textAlign: "left", padding: "14px 20px",
              borderLeft: current === item.page ? "2px solid #2A9D78" : "2px solid transparent",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#2A9D78"; e.currentTarget.style.background = "rgba(42,157,120,0.06)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = current === item.page ? "#2A9D78" : "rgba(245,243,238,0.7)"; e.currentTarget.style.background = "none"; }}
          >
            {item.label}
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <header
        {...editableField("navigation")}
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
          <a
            href={pathForPage("home")}
            onClick={(event) => handleLink(event, "home")}
            style={{ display: "flex", alignItems: "center", gap: 14, color: "inherit", textDecoration: "none" }}
          >
            <LogoMark size={42} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#F5F3EE", lineHeight: 1.3 }}>
              {siteContent.brandNameLines[0]}<br />{siteContent.brandNameLines[1]}
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="hidden-mobile">
            {/* The Growth Charter dropdown */}
            <div ref={growthRef} style={{ position: "relative" }}>
              <button
                ref={growthTriggerRef}
                onClick={() => setOpenMenu(openMenu === "growth" ? null : "growth")}
                onKeyDown={(e) => handleTriggerKeyDown(e, "growth")}
                aria-haspopup="true"
                aria-expanded={openMenu === "growth"}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400, letterSpacing: "0.03em",
                  color: growthActive ? "#2A9D78" : "rgba(245,243,238,0.6)",
                  transition: "color 0.25s", padding: "4px 0",
                  borderBottom: growthActive ? "1px solid #2A9D78" : "1px solid transparent",
                  display: "flex", alignItems: "center", gap: 6,
                }}
                onMouseEnter={(e) => { if (!growthActive) e.currentTarget.style.color = "#F5F3EE"; }}
                onMouseLeave={(e) => { if (!growthActive) e.currentTarget.style.color = "rgba(245,243,238,0.6)"; }}
              >
                {navContent.growthCharter}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 0.2s", transform: openMenu === "growth" ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openMenu === "growth" && <DropdownPanel items={growthCharterItems} menu="growth" />}
            </div>

            {/* Strategic Advisory dropdown */}
            <div ref={advisoryRef} style={{ position: "relative" }}>
              <button
                ref={advisoryTriggerRef}
                onClick={() => setOpenMenu(openMenu === "advisory" ? null : "advisory")}
                onKeyDown={(e) => handleTriggerKeyDown(e, "advisory")}
                aria-haspopup="true"
                aria-expanded={openMenu === "advisory"}
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
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 0.2s", transform: openMenu === "advisory" ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openMenu === "advisory" && <DropdownPanel items={advisoryItems} menu="advisory" />}
            </div>

            {/* Case Studies */}
            <a
              href={pathForPage("case-studies")}
              onClick={(event) => handleLink(event, "case-studies")}
              style={linkStyle(caseStudiesActive)}
              onMouseEnter={(e) => { if (!caseStudiesActive) e.currentTarget.style.color = "#F5F3EE"; }}
              onMouseLeave={(e) => { if (!caseStudiesActive) e.currentTarget.style.color = "rgba(245,243,238,0.6)"; }}
            >
              {navContent.caseStudies}
            </a>

            {/* About */}
            <a
              href={pathForPage("about")}
              onClick={(event) => handleLink(event, "about")}
              style={linkStyle(current === "about")}
              onMouseEnter={(e) => { if (current !== "about") e.currentTarget.style.color = "#F5F3EE"; }}
              onMouseLeave={(e) => { if (current !== "about") e.currentTarget.style.color = "rgba(245,243,238,0.6)"; }}
            >
              {navContent.about}
            </a>

            {/* Phone - persistent quick-contact, right-aligned next to the nav links */}
            <a
              href={siteContent.contact.phoneHref}
              style={{
                cursor: "pointer", textDecoration: "none",
                fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400, letterSpacing: "0.02em",
                color: "rgba(245,243,238,0.6)", transition: "color 0.25s", whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#F5F3EE"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(245,243,238,0.6)"; }}
            >
              {siteContent.contact.phone}
            </a>

            <a
              href={pathForPage("contact")}
              onClick={(event) => handleLink(event, "contact")}
              style={{
                background: "none",
                border: "1px solid rgba(42,157,120,0.5)",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: current === "contact" ? "#F5F3EE" : "#2A9D78",
                padding: "8px 20px",
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
            aria-expanded={mobileOpen}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: "block", width: 22, height: 1.5, background: "#F5F3EE", transition: "opacity 0.2s", opacity: mobileOpen && i === 1 ? 0 : 1 }} />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "#1C1C1C", overflowY: "auto", display: "flex", flexDirection: "column", paddingTop: 96, paddingLeft: 40, paddingRight: 40, paddingBottom: 40 }}>
          {/* Growth Charter group */}
          <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: "#F5F3EE", margin: "12px 0 4px" }}>{navContent.growthCharter}</p>
          {growthCharterItems.map((item) => (
            <a
              key={item.page}
              href={pathForPage(item.page)}
              onClick={(event) => handleLink(event, item.page)}
              style={{
                cursor: "pointer", textDecoration: "none",
                fontFamily: "'Inter', sans-serif", fontSize: 17,
                color: current === item.page ? "#2A9D78" : "rgba(245,243,238,0.75)",
                textAlign: "left", padding: "10px 0", paddingLeft: 20,
              }}
            >
              {item.label}
            </a>
          ))}

          {/* Strategic Advisory group */}
          <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: "#F5F3EE", margin: "20px 0 4px" }}>{navContent.strategicAdvisory}</p>
          {advisoryItems.map((item) => (
            <a
              key={item.page}
              href={pathForPage(item.page)}
              onClick={(event) => handleLink(event, item.page)}
              style={{
                cursor: "pointer", textDecoration: "none",
                fontFamily: "'Inter', sans-serif", fontSize: 17,
                color: current === item.page ? "#2A9D78" : "rgba(245,243,238,0.75)",
                textAlign: "left", padding: "10px 0", paddingLeft: 20,
              }}
            >
              {item.label}
            </a>
          ))}

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 20, paddingTop: 12 }}>
            {[
              { label: navContent.caseStudies, page: "case-studies" as Page },
              { label: navContent.about, page: "about" as Page },
              { label: navContent.contact, page: "contact" as Page },
            ].map((l) => (
              <a
                key={l.page}
                href={pathForPage(l.page)}
                onClick={(event) => handleLink(event, l.page)}
                style={{
                  cursor: "pointer", textDecoration: "none",
                  fontFamily: "'Instrument Serif', serif", fontSize: 32,
                  color: current === l.page ? "#2A9D78" : "#F5F3EE",
                  textAlign: "left", padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "block",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
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
