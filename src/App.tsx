import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HowWeWorkPage from "./pages/HowWeWorkPage";
import ServicesPage from "./pages/ServicesPage";
import StrategicAdvisoryPage from "./pages/StrategicAdvisoryPage";
import GrowthCharterPage from "./pages/GrowthCharterPage";
import ContactPage from "./pages/ContactPage";
import { trackPageview } from "./lib/analytics";
import { pageFromPath, pathForPage, updateDocumentMetadata, type Page } from "./routes";

interface AppProps {
  initialPage?: Page;
}

export default function App({ initialPage = "home" }: AppProps) {
  const [page, setPage] = useState<Page>(initialPage);

  const navigate = (p: Page) => {
    const path = pathForPage(p);
    if (window.location.pathname !== path) {
      window.history.pushState({ page: p }, "", path);
    }
    setPage(p);
  };

  useEffect(() => {
    updateDocumentMetadata(page);
    window.scrollTo({ top: 0 });
    trackPageview(pathForPage(page));
  }, [page]);

  useEffect(() => {
    const handlePopState = () => setPage(pageFromPath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage onNavigate={navigate} />;
      case "about": return <AboutPage onNavigate={navigate} />;
      case "how-we-work": return <HowWeWorkPage onNavigate={navigate} />;
      case "strategic-advisory": return <StrategicAdvisoryPage onNavigate={navigate} />;
      case "services": return <ServicesPage onNavigate={navigate} />;
      case "growth-charter": return <GrowthCharterPage onNavigate={navigate} />;
      case "contact": return <ContactPage onNavigate={navigate} />;
    }
  };

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>
      <Nav current={page} onNavigate={navigate} />
      <main>{renderPage()}</main>
      <Footer current={page} onNavigate={navigate} />
    </div>
  );
}
