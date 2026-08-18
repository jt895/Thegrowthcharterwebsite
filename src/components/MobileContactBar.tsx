import { siteContent } from "../data/content";

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.5 2h2l1 3-1.5 1.2a8 8 0 0 0 3.8 3.8L10 8.5l3 1v2a1.5 1.5 0 0 1-1.6 1.5A11 11 0 0 1 2 3.6 1.5 1.5 0 0 1 3.5 2Z"
        stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="3.5" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2.5 4.5 8 8.5l5.5-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Fixed bottom bar shown only on narrow viewports (same <=768px breakpoint as
 * Nav's mobile menu). Sits at z-index 90 - below Nav's header (100) and full-screen
 * mobile menu (99), so the mobile menu correctly covers it when open. body's
 * mobile padding-bottom (index.css) keeps this from permanently obscuring the
 * end of any page's content, including the Contact page's form fields.
 */
export default function MobileContactBar() {
  return (
    <div
      className="mobile-contact-bar"
      style={{
        position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 90,
        display: "none",
        background: "#1A1A1A",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        // Clears the home-indicator gesture area on notched iOS devices.
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <a
        href={siteContent.contact.phoneHref}
        style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: "16px 0", textDecoration: "none",
          fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: "0.02em",
          color: "#2A9D78",
        }}
      >
        <PhoneIcon /> Call
      </a>
      <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
      <a
        href={`mailto:${siteContent.contact.email}`}
        style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: "16px 0", textDecoration: "none",
          fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: "0.02em",
          color: "rgba(245,243,238,0.75)",
        }}
      >
        <MailIcon /> Email
      </a>

      <style>{`
        @media (max-width: 768px) {
          .mobile-contact-bar { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
