import type { Page } from "../routes";

const SOURCE_KEY = "tur-contact-source";

/**
 * Navigate to the Contact page, remembering which page the visitor came from
 * (read by ContactPage into each form's hidden "source page" field) and
 * optionally scrolling straight to one of the three forms once it has mounted.
 */
export function goToContact(onNavigate: (page: Page) => void, sourcePage: Page, formAnchor?: string) {
  try {
    sessionStorage.setItem(SOURCE_KEY, sourcePage);
  } catch {
    // sessionStorage unavailable (e.g. private browsing) — hidden field just stays blank
  }
  onNavigate("contact");
  if (formAnchor) {
    // App.tsx scrolls to top on every page change; wait for that to settle
    // before overriding it with the anchor scroll.
    setTimeout(() => {
      document.getElementById(formAnchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }
}

/** Reads and clears the source page recorded by goToContact. */
export function readContactSource(): string {
  try {
    const value = sessionStorage.getItem(SOURCE_KEY) ?? "";
    sessionStorage.removeItem(SOURCE_KEY);
    return value;
  } catch {
    return "";
  }
}
