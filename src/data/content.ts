/**
 * Typed accessors for the Git-backed content document.
 *
 * Editors change content/site.json through Netlify Visual Editor. React
 * components import these named accessors so content and presentation remain
 * separate, while existing component APIs stay stable.
 */
import contentDocument from "../../content/site.json";

export const siteContent = contentDocument.site;
export const navContent = contentDocument.navigation;
export const footerContent = contentDocument.footer;
export const homeContent = contentDocument.home;
export const aboutContent = contentDocument.about;
export const growthProgramContent = contentDocument.growthProgram;
export const howWeWorkContent = contentDocument.howWeWork;
export const servicesContent = contentDocument.services;
export const strategicAdvisoryContent = contentDocument.strategicAdvisory;
export const contactContent = contentDocument.contact;
export const growItYourselfContent = contentDocument.growItYourself;
export const caseStudiesContent = contentDocument.caseStudies;
