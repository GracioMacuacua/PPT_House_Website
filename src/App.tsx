import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { AboutSection } from "./components/AboutSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ServicesPage } from "./components/pages/ServicesPage";
import { PortfolioPage } from "./components/pages/PortfolioPage";
import { EventsPage } from "./components/pages/EventsPage";
import { AboutPage } from "./components/pages/AboutPage";
import { ContactPage } from "./components/pages/ContactPage";
import { ServiceDetailPage } from "./components/pages/ServiceDetailPage";
import { EventDetailPage } from "./components/pages/EventDetailPage";
import { ProjectDetailPage } from "./components/pages/ProjectDetailPage";

export interface NavigationState {
  page: string;
  params?: {
    id?: string;
    slug?: string;
  };
}

export default function App() {
  const [currentNavigation, setCurrentNavigation] = useState<NavigationState>({
    page: "home"
  });

  const handleNavigation = (page: string, params?: { id?: string; slug?: string }) => {
    setCurrentNavigation({ page, params });
  };

  const renderCurrentPage = () => {
    const { page, params } = currentNavigation;

    switch (page) {
      case "services":
        return <ServicesPage onNavigate={handleNavigation} />;
      case "service-detail":
        return <ServiceDetailPage serviceId={params?.id || ""} onNavigate={handleNavigation} />;
      case "portfolio":
        return <PortfolioPage onNavigate={handleNavigation} />;
      case "project-detail":
        return <ProjectDetailPage projectId={params?.id || ""} onNavigate={handleNavigation} />;
      case "events":
        return <EventsPage onNavigate={handleNavigation} />;
      case "event-detail":
        return <EventDetailPage eventId={params?.id || ""} onNavigate={handleNavigation} />;
      case "about":
        return <AboutPage onNavigate={handleNavigation} />;
      case "contact":
        return <ContactPage onNavigate={handleNavigation} />;
      case "home":
      default:
        return (
          <main>
            {/* 1. Header - já incluído externamente */}
            {/* 2. Hero Section (pode incluir uma introdução ao problema) */}
            <HeroSection onNavigate={handleNavigation} />
            {/* 3. Solução / Serviços */}
            <ServicesSection onNavigate={handleNavigation} />
            {/* 4. Portfólio */}
            <PortfolioSection onNavigate={handleNavigation} />
            {/* 5. Testemunhos */}
            <TestimonialsSection onNavigate={handleNavigation} />
            {/* 6. Sobre nós */}
            <AboutSection onNavigate={handleNavigation} />
            {/* 7. Por que nós? */}
            <WhyUsSection onNavigate={handleNavigation} />
            {/* 8. Formulário de contacto */}
            <ContactSection onNavigate={handleNavigation} />
            {/* 9. Footer - já incluído externamente */}
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentNavigation.page} onNavigate={handleNavigation} />
      {renderCurrentPage()}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}