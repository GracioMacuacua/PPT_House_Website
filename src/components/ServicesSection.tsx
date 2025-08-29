import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";
import {
  TrendingUp,
  Users,
  Presentation,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface ServicesSectionProps {
  onNavigate: (
    page: string,
    params?: { id?: string; slug?: string },
  ) => void;
}

export function ServicesSection({
  onNavigate,
}: ServicesSectionProps) {
  const services = [
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description:
        "Estratégias completas para aumentar sua presença online e gerar mais vendas",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU2MjAyODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Gestão de Redes Sociais",
        "Google Ads e Meta Ads",
        "SEO e Marketing de Conteúdo",
        "Email Marketing",
        "Análise de Métricas",
      ],
    },
    {
      icon: Users,
      title: "Formações Empresariais",
      description:
        "Capacitação especializada para desenvolver as competências da sua equipe",
      image:
        "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaFwxfHxidXNpbmVzcyUyMHRyYWluaW5nJTIwc2VtaW5hcnxlbnwxfHx8fDE3NTYyMjEyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Liderança e Gestão",
        "Marketing e Vendas",
        "Comunicação Empresarial",
        "Inovação e Criatividade",
        "Transformação Digital",
      ],
    },
    {
      icon: Presentation,
      title: "Criação de Apresentações",
      description:
        "Designs profissionais e impactantes para suas apresentações corporativas",
      image:
        "https://images.unsplash.com/photo-1605119690691-3fb1a130663a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzZW50YXRpb24lMjBkZXNpZ24lMjBzbGlkZXN8ZW58MXx8fHwxNzU2MjIxMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Design Corporativo",
        "Pitch Decks",
        "Relatórios Executivos",
        "Treinamentos Internos",
        "Apresentações Comerciais",
      ],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              className="font-montserrat font-semibold mb-4"
              style={{ fontSize: "40px", color: "#3B5998" }}
            >
              Nossos Serviços
            </h2>
            <p className="text-lg text-[#717182] max-w-3xl mx-auto">
              Oferecemos soluções completas e personalizadas
              para atender às necessidades específicas do seu
              negócio e impulsionar seus resultados.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;

            return (
              <AnimatedSection key={index} speed="slow">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Image Column */}
                  <div
                    className={`${!isEven ? "lg:col-start-2" : ""}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-tr opacity-20"
                        style={{
                          background:
                            "linear-gradient(135deg, #3B5998 0%, #6A0DAD 100%)",
                        }}
                      ></div>
                      {/* Floating Icon */}
                      <div
                        className="absolute top-6 left-6 p-4 rounded-xl"
                        style={{ backgroundColor: "#FFC107" }}
                      >
                        <IconComponent
                          className="h-8 w-8"
                          style={{ color: "#3B5998" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  >
                    <div className="flex items-center mb-4">
                      <IconComponent
                        className="h-8 w-8 mr-3"
                        style={{ color: "#6A0DAD" }}
                      />
                      <span
                        className="font-montserrat text-lg font-medium"
                        style={{ color: "#6A0DAD" }}
                      >
                        Serviço Especializado
                      </span>
                    </div>

                    <h3
                      className="font-montserrat font-semibold mb-4"
                      style={{
                        fontSize: "32px",
                        color: "#3B5998",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-lg text-[#717182] mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {service.features.map(
                        (feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center"
                          >
                            <CheckCircle
                              className="h-5 w-5 mr-3"
                              style={{ color: "#FFC107" }}
                            />
                            <span className="text-[#717182]">
                              {feature}
                            </span>
                          </div>
                        ),
                      )}
                    </div>

                    <Button
                      className="inline-flex items-center px-6 py-3 rounded-lg font-montserrat font-medium"
                      style={{
                        backgroundColor: "#FF6F00",
                        color: "white",
                        fontSize: "18px",
                      }}
                      onClick={() => {
                        const serviceIds = [
                          "marketing-digital",
                          "formacoes",
                          "apresentacoes",
                        ];
                        onNavigate?.("service-detail", {
                          id: serviceIds[index],
                        });
                      }}
                    >
                      Saiba Mais
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA Section */}
        <AnimatedSection speed="slow">
          <div
            className="mt-20 text-center p-12 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, #3B5998 0%, #6A0DAD 100%)",
            }}
          >
            <h3
              className="font-montserrat font-semibold text-white mb-4"
              style={{ fontSize: "28px" }}
            >
              Precisa de Uma Solução Personalizada?
            </h3>
            <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Combinamos os nossos serviços para criar soluções
              integradas que abordam todas as necessidades do
              seu negócio. Cada projeto é único e desenvolvido
              especificamente para os seus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="px-8 py-3 rounded-lg font-montserrat font-medium"
                style={{
                  backgroundColor: "#FF6F00",
                  color: "white",
                  fontSize: "18px",
                }}
                onClick={() => onNavigate?.("contact")}
              >
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 rounded-lg font-montserrat font-medium border-2"
                style={{
                  borderColor: "white",
                  color: "white",
                  backgroundColor: "transparent",
                  fontSize: "18px",
                }}
                onClick={() => onNavigate?.("contact")}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}