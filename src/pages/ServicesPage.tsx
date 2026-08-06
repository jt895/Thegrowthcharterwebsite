import { useEffect, useRef } from "react";
import { servicesContent, siteContent } from "../data/content";

type Page = "home" | "about" | "how-we-work" | "services" | "strategic-advisory" | "growth-charter";

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const services = servicesContent.services;

interface ServiceCardProps {
  service: typeof services[0];
}

function ServiceCard({ service }: ServiceCardProps) {
  const ref = useReveal();
  return (
    <div
      id={service.id}
      ref={ref}
      className="reveal"
      style={{ background: "#1C1C1C", border: "1px solid rgba(255,255,255,0.06)", padding: "64px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px 64px", scrollMarginTop: 100 }}
    >
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.07)", flexWrap: "wrap", gap: 16 }}>
        <div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 2.5vw, 32px)", color: "#F5F3EE", fontWeight: 400, marginBottom: 8 }}>{service.title}</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(245,243,238,0.5)", fontStyle: "italic", margin: 0 }}>{service.sub}</p>
        </div>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#2A9D78", border: "1px solid rgba(42,157,120,0.3)", padding: "6px 16px", whiteSpace: "nowrap", letterSpacing: "0.05em" }}>
          {service.duration}
        </span>
      </div>
      <div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", marginBottom: 32 }}>{service.body}</p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 16 }}>What's included</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {service.included.map((item) => (
            <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2A9D78", marginTop: 9, flexShrink: 0 }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.65, color: "rgba(245,243,238,0.6)" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 14 }}>When to use this</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(245,243,238,0.5)" }}>{service.when}</p>
        </div>
        <div style={{ background: "#161616", padding: "24px 28px", borderLeft: "2px solid rgba(42,157,120,0.3)" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 12 }}>Execution support</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.45)", margin: 0 }}>{service.execution}</p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "160px 40px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 28 }} className="hero-title">
            {servicesContent.hero.title}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", maxWidth: 680, margin: "0 auto" }} className="hero-sub">
            {servicesContent.hero.body}
          </p>
        </div>
      </section>

      {/* Services index */}
      <section style={{ background: "#161616", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 40, textAlign: "center" }}>
            {servicesContent.indexLabel}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  background: "#1C1C1C", border: "none", cursor: "pointer",
                  padding: "28px 32px", textAlign: "left",
                  borderTop: "2px solid rgba(42,157,120,0.25)",
                  transition: "border-color 0.25s, background 0.25s",
                  display: "flex", flexDirection: "column", gap: 8,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderTopColor = "#2A9D78"; (e.currentTarget as HTMLButtonElement).style.background = "#1E1E1E"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderTopColor = "rgba(42,157,120,0.25)"; (e.currentTarget as HTMLButtonElement).style.background = "#1C1C1C"; }}
              >
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: "#F5F3EE", fontWeight: 400, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {s.title}
                  <span style={{ color: "#2A9D78", fontSize: 16, marginLeft: 12 }}>↓</span>
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(245,243,238,0.45)", lineHeight: 1.5, fontStyle: "italic" }}>{s.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section style={{ background: "#161616", padding: "0 40px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ background: "#1A2820", borderLeft: "2px solid #2A9D78", padding: "28px 36px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.6)", margin: 0, fontStyle: "italic" }}>
              {servicesContent.note}
            </p>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 2 }}>
          {services.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#161616", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 16 }}>{servicesContent.cta.eyebrow}</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.25, marginBottom: 20 }}>
              {servicesContent.cta.title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(245,243,238,0.45)", marginBottom: 36 }}>
              {servicesContent.cta.body}
            </p>
            <a
              href={`mailto:${siteContent.contact.email}`}
              style={{ background: "#2A9D78", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", textDecoration: "none", display: "inline-block", transition: "background 0.25s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#239068"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#2A9D78"; }}
            >
              {servicesContent.cta.ctaLabel}
            </a>
          </div>
          <div style={{ background: "#1A2820", padding: "48px", borderLeft: "2px solid #2A9D78" }}>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, color: "#8FD9BE", fontWeight: 400, lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>
              "{servicesContent.cta.quote}"
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
