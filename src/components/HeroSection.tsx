import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";
import {
  Lightbulb,
  TrendingUp,
  Users,
  Presentation,
} from "lucide-react";

interface HeroSectionProps {
  onNavigate?: (page: string, params?: { id?: string }) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1622151835432-6e98c7118bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwbWFya2V0aW5nfGVufDF8fHx8MTc1NjIyMTE3MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Equipe de marketing em reunião"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r opacity-90"
          style={{
            background:
              "linear-gradient(135deg, rgba(59, 89, 152, 0.9) 0%, rgba(106, 13, 173, 0.9) 100%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <AnimatedSection delay={1}>
              <div className="flex items-center mb-6">
                <Lightbulb
                  className="h-12 w-12 mr-4"
                  style={{ color: "#FFC107" }}
                />
                <span
                  className="font-montserrat text-lg font-medium"
                  style={{ color: "#FFC107" }}
                >
                  Inovação em Marketing
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <h1
                className="font-montserrat font-bold mb-6 leading-tight"
                style={{ fontSize: "48px", color: "white" }}
              >
                Transformamos Ideias em
                <span style={{ color: "#FFC107" }}>
                  {" "}
                  Impacto
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <p className="text-lg mb-8 leading-relaxed opacity-90">
                Somos especialistas em marketing digital,
                formações empresariais e criação de
                apresentações impactantes. Ajudamos sua empresa
                a crescer com soluções personalizadas e
                resultados comprovados.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  className="px-8 py-3 rounded-lg font-montserrat font-medium"
                  style={{
                    backgroundColor: "#FF6F00",
                    color: "white",
                    fontSize: "20px",
                  }}
                  onClick={() => onNavigate?.("services")}
                >
                  Conhecer Nossos Serviços
                </Button>

                <Button
                  variant="outline"
                  className="px-8 py-3 rounded-lg font-montserrat font-medium border-2"
                  style={{
                    borderColor: "white",
                    color: "white",
                    backgroundColor: "transparent",
                    fontSize: "20px",
                  }}
                  onClick={() => onNavigate?.("contact")}
                >
                  Falar com Especialista
                </Button>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection speed="slow">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div
                    className="font-montserrat font-bold text-2xl"
                    style={{ color: "#FFC107" }}
                  >
                    150+
                  </div>
                  <p className="text-sm opacity-80">
                    Projetos Realizados
                  </p>
                </div>
                <div className="text-center">
                  <div
                    className="font-montserrat font-bold text-2xl"
                    style={{ color: "#FFC107" }}
                  >
                    98%
                  </div>
                  <p className="text-sm opacity-80">
                    Clientes Satisfeitos
                  </p>
                </div>
                <div className="text-center">
                  <div
                    className="font-montserrat font-bold text-2xl"
                    style={{ color: "#FFC107" }}
                  >
                    5+
                  </div>
                  <p className="text-sm opacity-80">
                    Anos de Experiência
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Service Icons */}
          <div
            className="hidden lg:block"
            style={{ marginLeft: "1.5em" }}
          >
            <div className="grid grid-cols-1 gap-8">
              {/* Marketing Digital */}
              <AnimatedSection delay={1} speed="slow">
                <div
                  className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <TrendingUp
                    className="h-12 w-12 mr-4"
                    style={{ color: "#FFC107" }}
                  />
                  <div>
                    <h3 className="font-montserrat font-semibold text-white text-lg">
                      Marketing Digital
                    </h3>
                    <p className="text-white opacity-80">
                      Estratégias para aumentar sua presença
                      online
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Formações */}
              <AnimatedSection delay={2} speed="slow">
                <div
                  className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Users
                    className="h-12 w-12 mr-4"
                    style={{ color: "#FFC107" }}
                  />
                  <div>
                    <h3 className="font-montserrat font-semibold text-white text-lg">
                      Formações Empresariais
                    </h3>
                    <p className="text-white opacity-80">
                      Capacitação para sua equipe
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Apresentações */}
              <AnimatedSection delay={3} speed="slow">
                <div
                  className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Presentation
                    className="h-12 w-12 mr-4"
                    style={{ color: "#FFC107" }}
                  />
                  <div>
                    <h3 className="font-montserrat font-semibold text-white text-lg">
                      Criação de Apresentações
                    </h3>
                    <p className="text-white opacity-80">
                      Designs impactantes para seus projetos
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}