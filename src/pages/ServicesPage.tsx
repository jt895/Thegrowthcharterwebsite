import { useEffect, useRef } from "react";
import HoloGlass from "../components/HoloGlass";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import { servicesContent } from "../data/content";
import { editableField } from "../data/editable";
import { goToContact } from "../lib/contactNav";
import type { Page } from "../routes";

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
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useReveal();
  return (
    <div
      id={service.id}
      ref={ref}
      className="reveal"
      {...editableField(`services.services.${index}`)}
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
        {service.execution && (
          <div style={{ background: "#161616", padding: "24px 28px", borderLeft: "2px solid rgba(42,157,120,0.3)" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 12 }}>Execution support</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.45)", margin: 0 }}>{service.execution}</p>
          </div>
        )}
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
      <section {...editableField("services.hero")} style={{ padding: "160px 40px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <HoloGlass />
        <div style={{ maxWidth: 840, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 28 }} className="hero-title">
            {servicesContent.hero.title}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(245,243,238,0.55)", maxWidth: 680, margin: "0 auto" }} className="hero-sub">
            {servicesContent.hero.body}
          </p>
        </div>
      </section>

      {/* Quote block — relocated here from the foot of the page */}
      <section {...editableField("services.quoteBlock")} style={{ padding: "0 40px 60px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", background: "#1A2820", borderLeft: "2px solid #2A9D78", padding: "28px 36px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.6)", margin: 0, fontStyle: "italic" }}>
              {servicesContent.quoteBlock}
            </p>
          </div>
        </div>
      </section>

      {/* Sequence */}
      <section {...editableField("services.sequence")} style={{ background: "#161616", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 3vw, 38px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, textAlign: "center", marginBottom: 48 }}>
            {servicesContent.sequence.title}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, marginBottom: 40 }}>
            {servicesContent.sequence.steps.map((step, i) => (
              <div key={step.num} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 24, padding: "24px 0", borderTop: i === 0 ? "2px solid #2A9D78" : "1px solid rgba(255,255,255,0.07)", alignItems: "center" }}>
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: "rgba(42,157,120,0.4)", fontWeight: 400 }}>{step.num}</span>
                <div style={{ display: "flex", gap: 16, alignItems: "baseline", flexWrap: "wrap" }}>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, color: "#F5F3EE", fontWeight: 400, margin: 0 }}>{step.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.5)", margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(245,243,238,0.55)", maxWidth: 720, margin: "0 auto 12px" }}>
            {servicesContent.sequence.noteA}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(245,243,238,0.45)", maxWidth: 720, margin: "0 auto" }}>
            {servicesContent.sequence.noteB}
          </p>
        </div>
      </section>

      {/* Services index */}
      <section {...editableField("services.services")} style={{ padding: "60px 40px" }}>
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

      {/* Service cards */}
      <section {...editableField("services.services")} style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 2 }}>
          {services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
        </div>
      </section>

      {/* Related case studies */}
      <RelatedCaseStudies
        eyebrow="Related work"
        title="See it in practice"
        slugs={["state-election-2022", "toyota-lifetime-advantages", "commbank-little-card-big-rewards"]}
        onNavigate={onNavigate}
        background="#1C1C1C"
      />

      {/* CTA */}
      <section {...editableField("services.cta")} style={{ background: "#161616", padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.25, marginBottom: 20 }}>
            {servicesContent.cta.title}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(245,243,238,0.45)", marginBottom: 36 }}>
            {servicesContent.cta.body}
          </p>
          <button
            onClick={() => goToContact(onNavigate, "services", "strategic-advisory-enquiry")}
            style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
          >
            {servicesContent.cta.ctaLabel}
          </button>
        </div>
      </section>

    </div>
  );
}
