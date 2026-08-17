import { useEffect, useRef, useState } from "react";
import CaseStudyCard from "../components/CaseStudyCard";
import HoloGlass from "../components/HoloGlass";
import { caseStudiesContent } from "../data/content";
import { editableField } from "../data/editable";
import type { Page } from "../routes";

interface CaseStudiesIndexPageProps {
  onNavigate: (page: Page) => void;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

type Filter = "all" | "strategic-advisory" | "growth-charter";

export default function CaseStudiesIndexPage({ onNavigate }: CaseStudiesIndexPageProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const r1 = useReveal();

  const { index, items } = caseStudiesContent;

  const filtered = filter === "all" ? items : items.filter((item) => item.filters.includes(filter));

  const filterOptions: { key: Filter; label: string }[] = [
    { key: "all", label: index.filterAll },
    { key: "strategic-advisory", label: index.filterStrategicAdvisory },
    { key: "growth-charter", label: index.filterGrowthCharter },
  ];

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section {...editableField("caseStudies.index")} style={{ padding: "100px 40px 64px", position: "relative", overflow: "hidden" }}>
        <HoloGlass />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 780 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 28 }} className="hero-sub">
              {index.eyebrow}
            </p>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5.5vw, 68px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 32 }} className="hero-title">
              {index.title}
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.8, color: "rgba(245,243,238,0.65)", maxWidth: 640, marginBottom: 32 }} className="hero-sub">
              {index.paraA}
            </p>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 22, lineHeight: 1.5, color: "#8FD9BE", maxWidth: 620, borderLeft: "2px solid #2A9D78", paddingLeft: 24, margin: 0 }} className="hero-sub">
              {index.paraB}
            </p>
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section style={{ background: "#161616", padding: "64px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div ref={r1} className="reveal" style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
            {filterOptions.map((option) => {
              const active = filter === option.key;
              return (
                <button
                  key={option.key}
                  onClick={() => setFilter(option.key)}
                  style={{
                    background: active ? "#2A9D78" : "transparent",
                    border: active ? "1px solid #2A9D78" : "1px solid rgba(255,255,255,0.14)",
                    cursor: "pointer",
                    fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500,
                    color: active ? "#fff" : "rgba(245,243,238,0.65)",
                    padding: "10px 22px",
                    transition: "background 0.2s, border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => { if (!active) { e.currentTarget.style.borderColor = "rgba(42,157,120,0.6)"; e.currentTarget.style.color = "#F5F3EE"; } }}
                  onMouseLeave={(e) => { if (!active) { e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; e.currentTarget.style.color = "rgba(245,243,238,0.65)"; } }}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
            {filtered.map((item) => (
              <CaseStudyCard key={item.slug} item={item} comingSoonLabel={index.comingSoonLabel} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
