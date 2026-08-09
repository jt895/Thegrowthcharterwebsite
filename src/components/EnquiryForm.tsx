import { useState, type CSSProperties, type FormEvent } from "react";
import { submitNetlifyForm } from "../lib/netlifyForms";
import { trackFormSubmit } from "../lib/analytics";

export interface EnquiryFormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
}

interface EnquiryFormProps {
  id: string;
  formName: string;
  fields: EnquiryFormField[];
  submitLabel: string;
  sourcePage: string;
  accent?: string;
}

const inputStyle: CSSProperties = {
  width: "100%",
  background: "#161616",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#F5F3EE",
  fontFamily: "'Inter', sans-serif",
  fontSize: 14,
  padding: "12px 14px",
  outline: "none",
};

const labelStyle: CSSProperties = {
  display: "block",
  fontFamily: "'Inter', sans-serif",
  fontSize: 12,
  color: "#9B9B9B",
  marginBottom: 8,
};

export default function EnquiryForm({ id, formName, fields, submitLabel, sourcePage, accent = "#2A9D78" }: EnquiryFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Honeypot: real users never fill this in — bots that fill every field do.
    if (values["bot-field"]) return;

    setStatus("submitting");
    try {
      await submitNetlifyForm({
        "form-name": formName,
        "source-page": sourcePage,
        ...values,
      });
      trackFormSubmit(formName);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div id={id} style={{ background: "#1A2820", borderLeft: `2px solid ${accent}`, padding: "40px 36px" }}>
        <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: "#F5F3EE", marginBottom: 12 }}>Thanks — that's through.</p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(245,243,238,0.65)", margin: 0 }}>
          We'll come back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      name={formName}
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 20 }}
    >
      {/* Netlify build-time form detection needs this literal input alongside the
          form's `name` attribute — React doesn't render it automatically the way
          a static HTML form submitted through Netlify's own build step would. */}
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="source-page" value={sourcePage} />

      {/* Honeypot — hidden from real visitors via an off-screen wrapper, not display:none. */}
      <p style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }} aria-hidden="true">
        <label>
          Leave this field blank
          <input
            type="text"
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            value={values["bot-field"] ?? ""}
            onChange={(e) => handleChange("bot-field", e.target.value)}
          />
        </label>
      </p>

      {fields.map((field) => (
        <div key={field.name}>
          <label style={labelStyle} htmlFor={`${id}-${field.name}`}>{field.label}</label>
          {field.type === "textarea" ? (
            <textarea
              id={`${id}-${field.name}`}
              name={field.name}
              required
              rows={4}
              style={{ ...inputStyle, resize: "vertical", fontFamily: "'Inter', sans-serif" }}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          ) : (
            <input
              id={`${id}-${field.name}`}
              name={field.name}
              type={field.type}
              required={field.type !== "tel"}
              style={inputStyle}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}

      {status === "error" && (
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#E38686", margin: 0 }}>
          Something went wrong sending that — please try again, or email {" "}
          <a href="mailto:jt@theunitedrepublic.com.au" style={{ color: "#E38686" }}>jt@theunitedrepublic.com.au</a> directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          background: accent, border: "none", cursor: status === "submitting" ? "default" : "pointer",
          opacity: status === "submitting" ? 0.6 : 1,
          fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#fff",
          padding: "14px 28px", alignSelf: "flex-start", transition: "background 0.25s",
        }}
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
