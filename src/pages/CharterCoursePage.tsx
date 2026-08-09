import EnquiryForm from "../components/EnquiryForm";
import { charterCourseContent, contactContent } from "../data/content";
import { editableField } from "../data/editable";
import { readContactSource } from "../lib/contactNav";
import type { Page } from "../routes";

interface CharterCoursePageProps {
  onNavigate: (page: Page) => void;
}

export default function CharterCoursePage({ onNavigate }: CharterCoursePageProps) {
  const nav = (page: Page) => { onNavigate(page); window.scrollTo({ top: 0 }); };
  const sourcePage = readContactSource() || "charter-course";

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Hero */}
      <section {...editableField("charterCourse.hero")} style={{ padding: "160px 40px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 24 }}>
            {charterCourseContent.eyebrow}
          </p>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.1, color: "#F5F3EE", fontWeight: 400, marginBottom: 28 }}>
            {charterCourseContent.title}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.75, color: "rgba(245,243,238,0.6)", marginBottom: 24 }}>
            {charterCourseContent.subtitle}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(245,243,238,0.5)" }}>
            {charterCourseContent.intro}
          </p>
        </div>
      </section>

      {/* What it will cover */}
      <section style={{ background: "#161616", padding: "80px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#F5F3EE", fontWeight: 400, marginBottom: 28 }}>
            {charterCourseContent.covers.heading}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            {charterCourseContent.covers.items.map((item) => (
              <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2A9D78", marginTop: 9, flexShrink: 0 }} />
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(245,243,238,0.65)", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.45)", fontStyle: "italic" }}>
            {charterCourseContent.covers.note}
          </p>
        </div>
      </section>

      {/* Honest note */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", background: "#1E1E1E", padding: "40px 48px", borderLeft: "2px solid #2A9D78" }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#F5F3EE", fontWeight: 400, marginBottom: 16 }}>
            {charterCourseContent.honestNote.heading}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(245,243,238,0.6)", margin: 0 }}>
            {charterCourseContent.honestNote.body}
          </p>
        </div>
      </section>

      {/* Waitlist */}
      <section style={{ background: "#0B5E48", padding: "80px 40px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#F5F3EE", fontWeight: 400, textAlign: "center", marginBottom: 16 }}>
            {charterCourseContent.waitlist.heading}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.75)", textAlign: "center", marginBottom: 40 }}>
            {charterCourseContent.waitlist.intro}
          </p>
          <EnquiryForm
            id={contactContent.waitlist.id}
            formName={contactContent.waitlist.formName}
            submitLabel={contactContent.waitlist.submitLabel}
            sourcePage={sourcePage}
            accent="#8FD9BE"
            fields={[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "business", label: "Business name", type: "text" },
              { name: "message", label: contactContent.waitlist.messageFieldLabel, type: "textarea" },
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
