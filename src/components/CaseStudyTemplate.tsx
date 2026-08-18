import { useEffect, useRef } from "react";
import EnquiryForm from "./EnquiryForm";
import { readContactSource } from "../lib/contactNav";
import { pathForPage, type Page } from "../routes";

export interface CaseStudyGalleryVideo {
  title: string;
  src: string;
  poster: string;
}

export interface CaseStudyGalleryDocument {
  title: string;
  src: string;
}

export interface CaseStudyGalleryImage {
  title: string;
  src: string;
}

export interface CaseStudyContent {
  sectorTags: string[];
  title: string;
  attribution: string;
  logo: string;
  situation: { heading: string; body: string };
  realProblem: { heading: string; body: string };
  whatWeDid: { heading: string; items: string[] };
  result: { heading: string; headline: string; body: string };
  gallery: {
    heading: string;
    videosHeading: string;
    imagesHeading: string;
    documentsHeading: string;
    videos: CaseStudyGalleryVideo[];
    images: CaseStudyGalleryImage[];
    documents: CaseStudyGalleryDocument[];
  };
  whyItMatters: { heading: string; body: string };
  cta: { eyebrow: string; title: string; body: string; ctaLabel: string; backLabel: string };
}

interface CaseStudyTemplateProps {
  content: CaseStudyContent;
  page: Page;
  formId: string;
  formName: string;
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

const sectionMax = { maxWidth: 900, margin: "0 auto" };

const H2 = {
  fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 3.2vw, 38px)",
  color: "#F5F3EE", fontWeight: 400, lineHeight: 1.2, marginBottom: 24,
} as const;

const bodyP = {
  fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.85, color: "rgba(245,243,238,0.65)", margin: 0,
} as const;

function videoMimeType(src: string): string {
  const ext = src.split(".").pop()?.toLowerCase();
  return ext === "mov" ? "video/quicktime" : "video/mp4";
}

function DocumentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <path d="M5 2h6l4 4v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" stroke="#2A9D78" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M11 2v4h4" stroke="#2A9D78" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export default function CaseStudyTemplate({ content, page, formId, formName, onNavigate }: CaseStudyTemplateProps) {
  const nav = (target: Page) => { onNavigate(target); window.scrollTo({ top: 0 }); };
  const sourcePage = readContactSource() || page;

  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal(), r6 = useReveal(), r7 = useReveal();

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>

      {/* Header */}
      <section style={{ padding: "100px 40px 64px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <a
            href={pathForPage("case-studies")}
            onClick={(event) => { event.preventDefault(); nav("case-studies"); }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#2A9D78", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 40 }}
          >
            ← {content.cta.backLabel}
          </a>

          <div style={{ background: "#F5F3EE", height: 64, width: 220, display: "flex", alignItems: "center", padding: "12px 18px", marginBottom: 32 }}>
            <img src={content.logo} alt="" style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
            {content.sectorTags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.06em",
                  textTransform: "uppercase", color: "rgba(245,243,238,0.55)",
                  border: "1px solid rgba(245,243,238,0.15)", padding: "4px 10px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.12, color: "#F5F3EE", fontWeight: 400, marginBottom: 20 }}>
            {content.title}
          </h1>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.45)", margin: 0 }}>
            {content.attribution}
          </p>
        </div>
      </section>

      {/* The situation */}
      <section style={{ background: "#161616", padding: "64px 40px" }}>
        <div ref={r1} className="reveal" style={sectionMax}>
          <h2 style={H2}>{content.situation.heading}</h2>
          <div style={{ background: "#1C1C1C", padding: "40px 44px", borderLeft: "2px solid #2A9D78" }}>
            <p style={bodyP}>{content.situation.body}</p>
          </div>
        </div>
      </section>

      {/* The real problem */}
      <section style={{ padding: "64px 40px" }}>
        <div ref={r2} className="reveal" style={sectionMax}>
          <h2 style={H2}>{content.realProblem.heading}</h2>
          <div style={{ background: "#161616", padding: "40px 44px", borderLeft: "2px solid #2A9D78" }}>
            <p style={bodyP}>{content.realProblem.body}</p>
          </div>
        </div>
      </section>

      {/* What we did */}
      <section style={{ background: "#161616", padding: "64px 40px" }}>
        <div ref={r3} className="reveal" style={sectionMax}>
          <h2 style={H2}>{content.whatWeDid.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {content.whatWeDid.items.map((item) => (
              <div key={item} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2A9D78", marginTop: 10, flexShrink: 0 }} />
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.65)", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The result - the payload of the page */}
      <section style={{ background: "#0B5E48", padding: "64px 40px" }}>
        <div ref={r4} className="reveal" style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8FD9BE", marginBottom: 24 }}>
            {content.result.heading}
          </p>
          <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.2, color: "#F5F3EE", fontWeight: 400, marginBottom: 24 }}>
            {content.result.headline}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(245,243,238,0.8)", maxWidth: 680, margin: "0 auto" }}>
            {content.result.body}
          </p>
        </div>
      </section>

      {/* Campaign assets gallery */}
      <section style={{ padding: "64px 40px" }}>
        <div ref={r5} className="reveal" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ ...H2, textAlign: "center", marginBottom: 56 }}>{content.gallery.heading}</h2>

          {content.gallery.videos.length > 0 && (
            <div style={{ marginBottom: 64 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 24 }}>
                {content.gallery.videosHeading}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
                {content.gallery.videos.map((video) => (
                  <div key={video.src}>
                    {/* preload="none" + poster: only the poster image is fetched on page load; video
                        data is not requested until the visitor presses play, and autoplay is never set. */}
                    <video
                      controls
                      preload="none"
                      poster={video.poster}
                      style={{ width: "100%", aspectRatio: "16 / 9", background: "#000", display: "block" }}
                    >
                      <source src={video.src} type={videoMimeType(video.src)} />
                    </video>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(245,243,238,0.55)", marginTop: 10, marginBottom: 0 }}>
                      {video.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {content.gallery.images.length > 0 && (
            <div style={{ marginBottom: 64 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 24 }}>
                {content.gallery.imagesHeading}
              </p>
              {/* Natural aspect ratio, not cropped to a fixed box - campaign stills here range from
                  landscape billboards to portrait social/press mockups. */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 24 }}>
                {content.gallery.images.map((image) => (
                  <div key={image.src}>
                    <img
                      src={image.src}
                      alt=""
                      loading="lazy"
                      style={{ width: "100%", height: "auto", display: "block", background: "#161616" }}
                    />
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(245,243,238,0.55)", marginTop: 10, marginBottom: 0 }}>
                      {image.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {content.gallery.documents.length > 0 && (
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 24 }}>
                {content.gallery.documentsHeading}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 2 }}>
                {content.gallery.documents.map((doc) => (
                  <a
                    key={doc.src}
                    href={doc.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: 12, background: "#161616",
                      padding: "18px 20px", textDecoration: "none", transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#1E1E1E"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#161616"; }}
                  >
                    <DocumentIcon />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(245,243,238,0.75)" }}>{doc.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why it matters to you */}
      <section style={{ background: "#161616", padding: "64px 40px" }}>
        <div ref={r6} className="reveal" style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D78", marginBottom: 24 }}>
            {content.whyItMatters.heading}
          </p>
          <p style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.5, color: "#F5F3EE", fontWeight: 400, margin: 0 }}>
            {content.whyItMatters.body}
          </p>
        </div>
      </section>

      {/* CTA + enquiry form */}
      <section id={formId} style={{ padding: "64px 40px" }}>
        <div ref={r7} className="reveal" style={{ maxWidth: 560, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9B9B9B", marginBottom: 20, textAlign: "center" }}>
            {content.cta.eyebrow}
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#F5F3EE", fontWeight: 400, lineHeight: 1.25, marginBottom: 20, textAlign: "center" }}>
            {content.cta.title}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(245,243,238,0.5)", marginBottom: 40, textAlign: "center" }}>
            {content.cta.body}
          </p>
          <EnquiryForm
            id={`${formId}-form`}
            formName={formName}
            submitLabel={content.cta.ctaLabel}
            sourcePage={sourcePage}
            accent="#2A9D78"
            fields={[
              { name: "name", label: "Name", type: "text" },
              { name: "organisation", label: "Organisation", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "phone", label: "Phone", type: "tel" },
              { name: "message", label: "What are you trying to shift?", type: "textarea" },
            ]}
          />
        </div>
      </section>

      <div style={{ textAlign: "center", padding: "0 40px 80px" }}>
        <button
          onClick={() => nav("case-studies")}
          style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#2A9D78" }}
        >
          ← {content.cta.backLabel}
        </button>
      </div>
    </div>
  );
}
