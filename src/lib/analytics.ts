declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Set via the VITE_GA_MEASUREMENT_ID environment variable at build time.
// Vite inlines import.meta.env.VITE_* statically, so this is undefined (and
// analytics stays fully off) in any build/deploy that doesn't set it - local
// dev included.
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

let initialized = false;

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/** Loads gtag.js and configures GA4. No-ops if VITE_GA_MEASUREMENT_ID isn't set. Client-only. */
export function initAnalytics(): void {
  if (initialized || !MEASUREMENT_ID || typeof window === "undefined") return;
  initialized = true;

  window.gtag = gtag;
  gtag("js", new Date());
  // We send page_view manually on route changes (see trackPageview) since this
  // is a client-routed SPA, so the initial automatic pageview is turned off.
  gtag("config", MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function trackPageview(path: string): void {
  if (typeof window === "undefined" || !MEASUREMENT_ID || !window.gtag) return;
  window.gtag("event", "page_view", { page_path: path });
}

/** Fired on successful Netlify form submission - the site's conversion event. */
export function trackFormSubmit(formName: string): void {
  if (typeof window === "undefined" || !MEASUREMENT_ID || !window.gtag) return;
  window.gtag("event", "generate_lead", { form_name: formName });
}
