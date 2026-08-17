import { useEffect, useRef } from "react";
import EnquiryForm from "../components/EnquiryForm";
import HoloGlass from "../components/HoloGlass";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import { growthCharterContent } from "../data/content";
import { editableField } from "../data/editable";
import { readContactSource } from "../lib/contactNav";
import type { Page } from "../routes";

interface ProductGroup {
  heading?: string;
  items: string[];
}
interface ProductIncluded {
  heading: string;
  groups: ProductGroup[];
  note?: string;
  notePending?: boolean;
}
interface ProductIntro {
  heading?: string;
  body: string[];
}
interface ProductViability {
  heading: string;
  body: string[];
}
interface ProductAddOns {
  heading: string;
  rows: string[][];
  note?: string;
}
interface ProductSuppliers {
  heading: string;
  body: string[];
}
interface ProductFitList {
  heading: string;
  items: string[];
  trailingNote?: string;
}
interface ProductHowItRuns {
  heading: string;
  steps: string[][];
}

export interface ProductContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  price: string;
  pricePending?: boolean;
  ctaLabel: string;
  intro?: ProductIntro;
  included: ProductIncluded;
  viabilitySession?: ProductViability;
  addOns?: ProductAddOns;
  suppliers?: ProductSuppliers;
  showFiveStages?: boolean;
  fitList: ProductFitList;
  howItRuns?: ProductHowItRuns;
  paymentNote?: string;
  bespokeNote?: string;
  relatedCaseStudies?: string[];
}

interface ProductPageProps {
  onNavigate: (page: Page) => void;
  page: Page;
  product: ProductContent;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const sectionMax = { maxWidth: 900, margin: "0 auto" };
const H2 = { fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 28 } as const;
const bodyP = { fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.6)", marginBottom: 20 } as const;

function PendingTag() {
  return (
    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#E3B15E", border: "1px solid rgba(227,177,94,0.4)", padding: "2px 8px", marginLeft: 10, verticalAlign: "middle" }}>
      Pending confirmation
    </span>
  );
}

export default function ProductPage({ onNavigate, page, product }: ProductPageProps) {
  const nav = (target: Page) => { onNavigate(target); window.scrollTo({ top: 0 }); };
  const scrollToForm = () => {
    document.getElementById("product-enquiry-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const sourcePage = readContactSource() || page;

  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal(), r6 = useReveal();

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section {...editableField(`growthCharter.products.${page}`)} style={{ padding: "100px 40px 64px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <HoloGlass />
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 24 }}>
            {product.eyebrow}
          </p>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.1, color: "#F5F3EE", fontWeight: 400, marginBottom: 28 }}>
            {product.title}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(245,243,238,0.6)", marginBottom: 32, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
            {product.subtitle}
          </p>
          <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: "#8FD9BE", fontWeight: 400, marginBottom: 40 }}>
            {product.price}
            {product.pricePending && <PendingTag />}
          </p>
          <button
            onClick={scrollToForm}
            style={{ background: "#2A9D78", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff", padding: "16px 32px", transition: "background 0.25s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#239068"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#2A9D78"; }}
          >
            {product.ctaLabel}
          </button>
        </div>
      </section>

      {/* Intro / problem */}
      {product.intro && (
        <section style={{ background: "#161616", padding: "64px 40px" }}>
          <div ref={r1} className="reveal" style={sectionMax}>
            {product.intro.heading && <h2 style={H2}>{product.intro.heading}</h2>}
            {product.intro.body.map((p, i) => <p key={i} style={bodyP}>{p}</p>)}
          </div>
        </section>
      )}

      {/* What's included */}
      <section style={{ padding: "64px 40px" }}>
        <div ref={r2} className="reveal" style={sectionMax}>
          <h2 style={H2}>{product.included.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {product.included.groups.map((group, gi) => (
              <div key={gi}>
                {group.heading && (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 18 }}>
                    {group.heading}
                  </p>
                )}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {group.items.map((item) => (
                    <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2A9D78", marginTop: 9, flexShrink: 0 }} />
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(245,243,238,0.65)", margin: 0 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {product.included.note && (
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.5)", marginTop: 32, fontStyle: "italic" }}>
              {product.included.note}
              {product.included.notePending && <PendingTag />}
            </p>
          )}
        </div>
      </section>

      {/* Viability session callout */}
      {product.viabilitySession && (
        <section style={{ background: "#0B5E48", padding: "64px 40px" }}>
          <div ref={r3} className="reveal" style={sectionMax}>
            <h2 style={{ ...H2, color: "#F5F3EE" }}>{product.viabilitySession.heading}</h2>
            {product.viabilitySession.body.map((p, i) => (
              <p key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(245,243,238,0.75)", marginBottom: 20 }}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {/* Add-ons */}
      {product.addOns && (
        <section style={{ padding: "64px 40px" }}>
          <div style={sectionMax}>
            <h2 style={H2}>{product.addOns.heading}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {product.addOns.rows.map(([label, price], i) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: 24, padding: "18px 0", borderTop: i === 0 ? "2px solid #2A9D78" : "1px solid rgba(255,255,255,0.07)" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.6, color: "rgba(245,243,238,0.65)", margin: 0 }}>{label}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#8FD9BE", margin: 0, whiteSpace: "nowrap" }}>{price}</p>
                </div>
              ))}
            </div>
            {product.addOns.note && (
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.7, color: "rgba(245,243,238,0.4)", marginTop: 24 }}>{product.addOns.note}</p>
            )}
          </div>
        </section>
      )}

      {/* Suppliers */}
      {product.suppliers && (
        <section style={{ background: "#161616", padding: "64px 40px" }}>
          <div ref={r4} className="reveal" style={sectionMax}>
            <h2 style={H2}>{product.suppliers.heading}</h2>
            {product.suppliers.body.map((p, i) => <p key={i} style={bodyP}>{p}</p>)}
          </div>
        </section>
      )}

      {/* Five stages (reused from the Growth Charter overview page) */}
      {product.showFiveStages && (
        <section style={{ padding: "64px 40px" }}>
          <div style={sectionMax}>
            <h2 style={H2}>{growthCharterContent.howItWorks.title}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {growthCharterContent.howItWorks.stages.map((stage, i) => (
                <div key={stage.num} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 20, padding: "24px 0", borderTop: i === 0 ? "2px solid #2A9D78" : "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: "rgba(42,157,120,0.4)" }}>{stage.num}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, color: "#F5F3EE", fontWeight: 400, marginBottom: 6 }}>{stage.title}</h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.5)", margin: 0 }}>{stage.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fit list */}
      <section style={{ background: "#161616", padding: "64px 40px" }}>
        <div ref={r5} className="reveal" style={sectionMax}>
          <h2 style={H2}>{product.fitList.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: product.fitList.trailingNote ? 28 : 0 }}>
            {product.fitList.items.map((item) => (
              <div key={item} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 18, height: 18, border: "1px solid rgba(42,157,120,0.5)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2A9D78" }} />
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(245,243,238,0.7)", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
          {product.fitList.trailingNote && (
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.5)" }}>{product.fitList.trailingNote}</p>
          )}
        </div>
      </section>

      {/* How it runs */}
      {product.howItRuns && (
        <section style={{ padding: "64px 40px" }}>
          <div ref={r6} className="reveal" style={sectionMax}>
            <h2 style={H2}>{product.howItRuns.heading}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, marginBottom: 32 }}>
              {product.howItRuns.steps.map(([num, label], i) => (
                <div key={num} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 20, padding: "18px 0", alignItems: "center", borderTop: i === 0 ? "2px solid #2A9D78" : "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, color: "rgba(42,157,120,0.5)" }}>{num}</span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(245,243,238,0.7)", margin: 0 }}>{label}</p>
                </div>
              ))}
            </div>
            {product.paymentNote && <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.5)" }}>{product.paymentNote}</p>}
          </div>
        </section>
      )}

      {product.bespokeNote && (
        <section style={{ padding: "0 40px 64px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(245,243,238,0.45)", maxWidth: 560, margin: "0 auto" }}>{product.bespokeNote}</p>
        </section>
      )}

      {/* Related case studies */}
      {product.relatedCaseStudies && product.relatedCaseStudies.length > 0 && (
        <RelatedCaseStudies
          eyebrow="Related work"
          title="See it applied"
          slugs={product.relatedCaseStudies as Page[]}
          onNavigate={onNavigate}
          background="#1C1C1C"
        />
      )}

      {/* Growth Charter enquiry form */}
      <section id="product-enquiry-form" style={{ background: "#161616", padding: "64px 40px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ ...H2, textAlign: "center" }}>Ready to talk it through?</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.5)", textAlign: "center", marginBottom: 40 }}>
            Tell us what you're trying to grow — we'll come back to you within one business day.
          </p>
          <EnquiryForm
            id="growth-charter-enquiry"
            formName="growth-charter-enquiry"
            submitLabel="Send enquiry"
            sourcePage={sourcePage}
            accent="#2A9D78"
            fields={[
              { name: "name", label: "Name", type: "text" },
              { name: "business", label: "Business name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "phone", label: "Phone", type: "tel" },
              { name: "message", label: "What's slowed down, or what are you trying to grow?", type: "textarea" },
            ]}
          />
        </div>
      </section>

      <div style={{ textAlign: "center", padding: "32px 40px 80px" }}>
        <button
          onClick={() => nav("growth-charter")}
          style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#2A9D78" }}
        >
          ← Back to The Growth Charter
        </button>
      </div>
    </div>
  );
}
