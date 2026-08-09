import { useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import { contactContent, siteContent } from "../data/content";
import { editableField } from "../data/editable";
import { readContactSource } from "../lib/contactNav";
import type { Page } from "../routes";

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

export default function ContactPage(_props: ContactPageProps) {
  const [sourcePage] = useState(() => readContactSource());

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section {...editableField("contact.hero")} style={{ padding: "160px 40px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.08, color: "#F5F3EE", fontWeight: 400, marginBottom: 24 }} className="hero-title">
            {contactContent.hero.title}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(245,243,238,0.6)" }} className="hero-sub">
            {contactContent.hero.body}
          </p>
        </div>
      </section>

      {/* The two forms */}
      <section {...editableField("contact.forms")} style={{ padding: "40px 40px 100px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 3vw, 38px)", color: "#F5F3EE", fontWeight: 400, textAlign: "center", marginBottom: 56 }}>
            {contactContent.forms.title}
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {/* Growth Charter form */}
            <div style={{ background: "#1E1E1E", padding: "48px", borderTop: "2px solid #2A9D78" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 12 }}>
                {contactContent.forms.growthCharter.displayName}
              </p>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, color: "#F5F3EE", fontWeight: 400, marginBottom: 16 }}>
                {contactContent.forms.growthCharter.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.55)", marginBottom: 32 }}>
                {contactContent.forms.growthCharter.intro}
              </p>
              <EnquiryForm
                id={contactContent.forms.growthCharter.id}
                formName={contactContent.forms.growthCharter.formName}
                submitLabel={contactContent.forms.growthCharter.submitLabel}
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

            {/* Strategic Advisory form */}
            <div style={{ background: "#1E1E1E", padding: "48px", borderTop: "2px solid rgba(155,155,155,0.5)" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 12 }}>
                {contactContent.forms.strategicAdvisory.displayName}
              </p>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, color: "#F5F3EE", fontWeight: 400, marginBottom: 16 }}>
                {contactContent.forms.strategicAdvisory.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.55)", marginBottom: 32 }}>
                {contactContent.forms.strategicAdvisory.intro}
              </p>
              <EnquiryForm
                id={contactContent.forms.strategicAdvisory.id}
                formName={contactContent.forms.strategicAdvisory.formName}
                submitLabel={contactContent.forms.strategicAdvisory.submitLabel}
                sourcePage={sourcePage}
                accent="#9B9B9B"
                fields={[
                  { name: "name", label: "Name", type: "text" },
                  { name: "organisation", label: "Organisation", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "phone", label: "Phone", type: "tel" },
                  { name: "message", label: "What are you trying to change?", type: "textarea" },
                ]}
              />
            </div>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.7, color: "rgba(245,243,238,0.4)", textAlign: "center", maxWidth: 620, margin: "32px auto 0" }}>
            {contactContent.forms.note}
          </p>
        </div>
      </section>

      {/* Charter Course waitlist */}
      <section {...editableField("contact.waitlist")} style={{ background: "#161616", padding: "80px 40px" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 12, textAlign: "center" }}>
            {contactContent.waitlist.eyebrow}
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(22px, 2.5vw, 30px)", color: "#F5F3EE", fontWeight: 400, textAlign: "center", marginBottom: 12 }}>
            {contactContent.waitlist.title}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.55)", textAlign: "center", marginBottom: 32 }}>
            {contactContent.waitlist.intro}
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: 480 }}>
              <EnquiryForm
                id={contactContent.waitlist.id}
                formName={contactContent.waitlist.formName}
                submitLabel={contactContent.waitlist.submitLabel}
                sourcePage={sourcePage}
                fields={[
                  { name: "name", label: "Name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "business", label: "Business name", type: "text" },
                  { name: "message", label: contactContent.waitlist.messageFieldLabel, type: "textarea" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Direct */}
      <section {...editableField("contact.direct")} style={{ padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(22px, 2.5vw, 30px)", color: "#F5F3EE", fontWeight: 400, marginBottom: 24 }}>
            {contactContent.direct.title}
          </h2>
          <a href={`mailto:${siteContent.contact.email}`} style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(245,243,238,0.7)", textDecoration: "none", marginBottom: 8 }}>
            {siteContent.contact.email}
          </a>
          <a href={siteContent.contact.phoneHref} style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(245,243,238,0.7)", textDecoration: "none", marginBottom: 16 }}>
            {siteContent.contact.phone}
          </a>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#9B9B9B", margin: 0 }}>
            {siteContent.location}
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section {...editableField("contact.whatHappensNext")} style={{ background: "#161616", padding: "80px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 34px)", color: "#F5F3EE", fontWeight: 400, textAlign: "center", marginBottom: 48 }}>
            {contactContent.whatHappensNext.title}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {contactContent.whatHappensNext.steps.map((step, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 20, padding: "20px 0", borderTop: i === 0 ? "2px solid #2A9D78" : "1px solid rgba(255,255,255,0.07)", alignItems: "center" }}>
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: "rgba(42,157,120,0.5)" }}>{i + 1}</span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(245,243,238,0.65)", margin: 0 }}>{step}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.45)", textAlign: "center", marginTop: 32 }}>
            {contactContent.whatHappensNext.footnote}
          </p>
        </div>
      </section>
    </div>
  );
}
