import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import powerpointHouseLogo from "figma:asset/62f66701ee04254327e2389f2e5095a4230b1544.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, params?: { id?: string }) => void;
}

export function Header({
  currentPage,
  onNavigate,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "início" },
    { id: "services", label: "Serviços" },
    { id: "portfolio", label: "Portfólio" },
    { id: "events", label: "Eventos" },
    { id: "about", label: "Sobre Nós" },
    { id: "contact", label: "Contactos" },
  ];

  const handleNavigation = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigation("home")}
          >
            <img
              src={powerpointHouseLogo}
              alt="Powerpoint House Logo"
              className="h-10 w-10"
            />
            <span
              className="font-montserrat font-bold text-xl"
              style={{ color: "#3B5998" }}
            >
              Powerpoint House
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`font-montserrat font-medium hover:opacity-80 transition-opacity ${
                  currentPage === item.id ? "border-b-2" : ""
                }`}
                style={{
                  color: "#3B5998",
                  borderColor:
                    currentPage === item.id
                      ? "#FF6F00"
                      : "transparent",
                }}
              >
                {item.label}
              </button>
            ))}
            <Button
              className="rounded-lg px-6 py-2 font-montserrat font-medium ml-4"
              style={{
                backgroundColor: "#FF6F00",
                color: "white",
                fontSize: "18px",
              }}
              onClick={() => handleNavigation("contact")}
            >
              Fale Connosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: "#3B5998" }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="lg:hidden py-4 border-t"
            style={{ borderColor: "#F1F1F1" }}
          >
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`font-montserrat font-medium py-2 text-left ${
                    currentPage === item.id ? "font-bold" : ""
                  }`}
                  style={{ color: "#3B5998" }}
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="w-full rounded-lg mt-4 font-montserrat font-medium"
                style={{
                  backgroundColor: "#FF6F00",
                  color: "white",
                  fontSize: "18px",
                }}
                onClick={() => handleNavigation("contact")}
              >
                Fale Connosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}