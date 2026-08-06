import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HowWeWorkPage from "./pages/HowWeWorkPage";
import ServicesPage from "./pages/ServicesPage";
import StrategicAdvisoryPage from "./pages/StrategicAdvisoryPage";
import GrowthCharterPage from "./pages/GrowthCharterPage";

type Page = "home" | "about" | "how-we-work" | "services" | "strategic-advisory" | "growth-charter";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => {
    setPage(p);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage onNavigate={navigate} />;
      case "about": return <AboutPage onNavigate={navigate} />;
      case "how-we-work": return <HowWeWorkPage onNavigate={navigate} />;
      case "strategic-advisory": return <StrategicAdvisoryPage onNavigate={navigate} />;
      case "services": return <ServicesPage onNavigate={navigate} />;
      case "growth-charter": return <GrowthCharterPage onNavigate={navigate} />;
    }
  };

  return (
    <div style={{ background: "#1C1C1C", minHeight: "100vh" }}>
      <Nav current={page} onNavigate={navigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
