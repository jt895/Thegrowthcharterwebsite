import LogoMark from "./LogoMark";
import { footerContent, siteContent } from "../data/content";
import { editableField } from "../data/editable";
import { goToContact } from "../lib/contactNav";
import { pathForPage, type Page } from "../routes";

interface FooterProps {
  current: Page;
  onNavigate: (page: Page) => void;
}

export default function Footer({ current, onNavigate }: FooterProps) {
  const nav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0 });
  };

  return (
    <footer {...editableField("footer")} style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 80, paddingBottom: 48 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48, marginBottom: 80 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <LogoMark size={46} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#F5F3EE", lineHeight: 1.4 }}>
                {siteContent.brandNameLines[0]}<br />{siteContent.brandNameLines[1]}
              </span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.7, color: "#9B9B9B", maxWidth: 260 }}>
              {siteContent.blurb}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 20 }}>
              {footerContent.navHeading}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {(footerContent.navLinks as { label: string; page: Page }[]).map((l) => (
                <a
                  key={l.page}
                  href={pathForPage(l.page)}
                  onClick={(event) => { event.preventDefault(); nav(l.page); }}
                  style={{ cursor: "pointer", textDecoration: "none", fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.55)", textAlign: "left", padding: 0, transition: "color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#2A9D78"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(245,243,238,0.55)"; }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 20 }}>
              {footerContent.contactHeading}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href={`mailto:${siteContent.contact.email}`} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#2A9D78"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(245,243,238,0.55)"; }}
              >
                {siteContent.contact.email}
              </a>
              <a href={siteContent.contact.phoneHref} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.55)", textDecoration: "none" }}>
                {siteContent.contact.phone}
              </a>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.6, color: "#9B9B9B", marginTop: 8 }}>
                {siteContent.location}
              </p>
              <div style={{ marginTop: 4, display: "flex", flexDirection: "column", gap: 8 }}>
                {(footerContent.enquiryLabels as { label: string; anchor: string }[]).map((item) => (
                  <button
                    key={item.anchor}
                    onClick={() => goToContact(onNavigate, current, item.anchor)}
                    style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0, fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9B9B9B", transition: "color 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#2A9D78"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#9B9B9B"; }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9B9B9B", margin: 0 }}>
            {siteContent.copyright}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9B9B9B", margin: 0, fontStyle: "italic" }}>
            {siteContent.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
