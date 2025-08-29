import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";
import { Target, Award, Lightbulb, Users } from "lucide-react";

interface AboutSectionProps {
  onNavigate?: (page: string, params?: { id?: string }) => void;
}

export function AboutSection({
  onNavigate,
}: AboutSectionProps) {
  return (
    <section
      id="sobre"
      className="py-20"
      style={{ backgroundColor: "#F1F1F1" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              className="font-montserrat font-semibold mb-4"
              style={{ fontSize: "40px", color: "#3B5998" }}
            >
              Sobre a Nossa Empresa
            </h2>
            <p className="text-[#717182] text-lg max-w-3xl mx-auto">
              Há mais de 5 anos, ajudamos empresas a crescer
              através de estratégias inovadoras de marketing,
              formações especializadas e apresentações
              impactantes.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection speed="slow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG9mZmljZSUyMHdvcmtzcGFjZSUyMHRlYW18ZW58MXx8fHwxNzU2MjIxMTk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Equipe criativa trabalhando"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Floating Card */}
              <div
                className="absolute -bottom-8 -right-8 p-6 rounded-xl shadow-xl"
                style={{ backgroundColor: "#6A0DAD" }}
              >
                <div className="text-center text-white">
                  <div
                    className="font-montserrat font-bold text-3xl"
                    style={{ color: "#FFC107" }}
                  >
                    150+
                  </div>
                  <p className="text-sm">Clientes Atendidos</p>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h3
                className="font-montserrat font-semibold mb-6 text-2xl"
                style={{ color: "#3B5998" }}
              >
                Nossa Missão e Visão
              </h3>

              <p className="text-lg text-[#717182] mb-6 leading-relaxed">
                Transformamos ideias em resultados concretos
                através de estratégias personalizadas que
                conectam marcas aos seus públicos de forma
                autêntica e eficaz.
              </p>

              <p className="text-lg text-[#717182] mb-8 leading-relaxed">
                Nossa equipe multidisciplinar combina
                criatividade, tecnologia e conhecimento de
                mercado para entregar soluções que realmente
                fazem a diferença no crescimento dos nossos
                clientes.
              </p>

              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target
                    className="h-6 w-6 mr-3 mt-1"
                    style={{ color: "#6A0DAD" }}
                  />
                  <div>
                    <h4
                      className="font-montserrat font-semibold"
                      style={{ color: "#3B5998" }}
                    >
                      Foco em Resultados
                    </h4>
                    <p style={{ color: "#717182" }}>
                      Cada estratégia é desenvolvida com metas
                      claras e métricas definidas
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Lightbulb
                    className="h-6 w-6 mr-3 mt-1"
                    style={{ color: "#6A0DAD" }}
                  />
                  <div>
                    <h4
                      className="font-montserrat font-semibold"
                      style={{ color: "#3B5998" }}
                    >
                      Inovação Constante
                    </h4>
                    <p style={{ color: "#717182" }}>
                      Utilizamos as mais recentes tendências e
                      tecnologias do mercado
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users
                    className="h-6 w-6 mr-3 mt-1"
                    style={{ color: "#6A0DAD" }}
                  />
                  <div>
                    <h4
                      className="font-montserrat font-semibold"
                      style={{ color: "#3B5998" }}
                    >
                      Parceria Verdadeira
                    </h4>
                    <p style={{ color: "#717182" }}>
                      Trabalhamos lado a lado com nossos
                      clientes em cada projeto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <AnimatedSection delay={1}>
            <div
              className="text-center p-6 rounded-xl"
              style={{ backgroundColor: "white" }}
            >
              <Award
                className="h-12 w-12 mx-auto mb-4"
                style={{ color: "#FFC107" }}
              />
              <h4
                className="font-montserrat font-semibold mb-2"
                style={{ color: "#3B5998" }}
              >
                Excelência
              </h4>
              <p
                className="text-sm"
                style={{ color: "#717182" }}
              >
                Comprometimento com a qualidade em cada detalhe
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={2}>
            <div
              className="text-center p-6 rounded-xl"
              style={{ backgroundColor: "white" }}
            >
              <Lightbulb
                className="h-12 w-12 mx-auto mb-4"
                style={{ color: "#FFC107" }}
              />
              <h4
                className="font-montserrat font-semibold mb-2"
                style={{ color: "#3B5998" }}
              >
                Criatividade
              </h4>
              <p
                className="text-sm"
                style={{ color: "#717182" }}
              >
                Soluções inovadoras que se destacam no mercado
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={3}>
            <div
              className="text-center p-6 rounded-xl"
              style={{ backgroundColor: "white" }}
            >
              <Target
                className="h-12 w-12 mx-auto mb-4"
                style={{ color: "#FFC107" }}
              />
              <h4
                className="font-montserrat font-semibold mb-2"
                style={{ color: "#3B5998" }}
              >
                Estratégia
              </h4>
              <p
                className="text-sm"
                style={{ color: "#717182" }}
              >
                Planejamento inteligente para resultados
                duradouros
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={4}>
            <div
              className="text-center p-6 rounded-xl"
              style={{ backgroundColor: "white" }}
            >
              <Users
                className="h-12 w-12 mx-auto mb-4"
                style={{ color: "#FFC107" }}
              />
              <h4
                className="font-montserrat font-semibold mb-2"
                style={{ color: "#3B5998" }}
              >
                Colaboração
              </h4>
              <p
                className="text-sm"
                style={{ color: "#000000" }}
              >
                Trabalho em equipe para alcançar objetivos
                comuns
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}