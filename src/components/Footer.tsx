import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import powerpointHouseLogo from "figma:asset/62f66701ee04254327e2389f2e5095a4230b1544.png";

interface FooterProps {
  onNavigate?: (page: string, params?: { id?: string }) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      className="bg-white border-t"
      style={{ borderColor: "#F1F1F1" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={powerpointHouseLogo}
                alt="Powerpoint House Logo"
                className="h-10 w-10"
              />
              <span className="font-montserrat font-bold text-[#3b5998] text-xl">
                Powerpoint House
              </span>
            </div>

            <p className="mb-6 text-[#717182] leading-relaxed">
              Transformamos ideias em resultados através de
              estratégias inovadoras de marketing, formações
              especializadas e apresentações impactantes. Há
              mais de 5 anos ajudando empresas a crescer.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail
                  className="h-4 w-4 mr-2"
                  style={{ color: "#6A0DAD" }}
                />
                <span style={{ color: "#717182" }}>
                  contacto@ppthouse.co.mz
                </span>
              </div>
              <div className="flex items-center">
                <Phone
                  className="h-4 w-4 mr-2"
                  style={{ color: "#6A0DAD" }}
                />
                <span style={{ color: "#717182" }}>
                  +258 84 123 4567
                </span>
              </div>
              <div className="flex items-center">
                <MapPin
                  className="h-4 w-4 mr-2"
                  style={{ color: "#6A0DAD" }}
                />
                <span style={{ color: "#717182" }}>
                  Incubadora de Negócios da UEM - Cidade de
                  Maputo
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-montserrat font-semibold mb-4"
              style={{ color: "#3B5998" }}
            >
              Serviços
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicos"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#717182" }}
                >
                  Marketing Digital
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#717182" }}
                >
                  Formações Empresariais
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#717182" }}
                >
                  Criação de Apresentações
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#717182" }}
                >
                  Consultoria Estratégica
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-montserrat font-semibold mb-4"
              style={{ color: "#3B5998" }}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#717182" }}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#717182" }}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#717182" }}
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#717182" }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div
          className="border-t pt-8 mt-8"
          style={{ borderColor: "#F1F1F1" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p style={{ color: "#717182" }}>
              © 2025 Powerpoint House. Todos os direitos
              reservados.
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span
                className="font-montserrat font-medium mr-2"
                style={{ color: "#717182" }}
              >
                Siga-nos:
              </span>
              <a
                href="#"
                className="p-2 rounded-full transition-colors"
                style={{ backgroundColor: "#F1F1F1" }}
              >
                <Linkedin
                  className="h-5 w-5"
                  style={{ color: "#3B5998" }}
                />
              </a>
              <a
                href="#"
                className="p-2 rounded-full transition-colors"
                style={{ backgroundColor: "#F1F1F1" }}
              >
                <Instagram
                  className="h-5 w-5"
                  style={{ color: "#3B5998" }}
                />
              </a>
              <a
                href="#"
                className="p-2 rounded-full transition-colors"
                style={{ backgroundColor: "#F1F1F1" }}
              >
                <Facebook
                  className="h-5 w-5"
                  style={{ color: "#3B5998" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}