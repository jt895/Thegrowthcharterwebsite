import LogoMark from "./LogoMark";

type Page = "home" | "about" | "how-we-work" | "services" | "strategic-advisory" | "growth-charter";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const nav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0 });
  };

  return (
    <footer style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 80, paddingBottom: 48 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48, marginBottom: 80 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <LogoMark size={44} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#F5F3EE", lineHeight: 1.4 }}>
                The United<br />Republic
              </span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.7, color: "#9B9B9B", maxWidth: 260 }}>
              Independent strategic advisory for complex organisations and practical business growth support through The Growth Charter.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 20 }}>
              Ways to work with us
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Strategic Advisory", page: "about" as Page },
                { label: "The Growth Charter", page: "growth-charter" as Page },
                { label: "How We Work", page: "how-we-work" as Page },
                { label: "Services", page: "services" as Page },
              ].map((l) => (
                <button
                  key={l.page}
                  onClick={() => nav(l.page)}
                  style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.55)", textAlign: "left", padding: 0, transition: "color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#2A9D78"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(245,243,238,0.55)"; }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 20 }}>
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="mailto:jt@theunitedrepublic.com.au" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#2A9D78"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(245,243,238,0.55)"; }}
              >
                jt@theunitedrepublic.com.au
              </a>
              <a href="tel:+61407744388" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.55)", textDecoration: "none" }}>
                +61 407 744 388
              </a>
              <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9B9B9B", margin: 0 }}>Growth Charter enquiry</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9B9B9B", margin: 0 }}>Strategic Advisory enquiry</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9B9B9B", margin: 0 }}>
            © 2026 The United Republic. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9B9B9B", margin: 0, fontStyle: "italic" }}>
            Strategy, growth and practical implementation
          </p>
        </div>
      </div>
    </footer>
  );
}
