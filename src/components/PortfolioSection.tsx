import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { AnimatedSection } from "./AnimatedSection";
import {
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Users,
  Presentation,
} from "lucide-react";

interface PortfolioSectionProps {
  onNavigate: (
    page: string,
    params?: { id?: string; slug?: string },
  ) => void;
}

export function PortfolioSection({
  onNavigate,
}: PortfolioSectionProps) {
  const projects = [
    {
      id: "1",
      title: "Rebranding Digital - TechStart",
      client: "TechStart",
      category: "Marketing Digital",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      description:
        "Transformação completa da presença digital de uma startup tecnológica, resultando em 300% de aumento no tráfego orgânico.",
      results: [
        "300% aumento no tráfego",
        "150% melhoria na conversão",
        "ROI de 400%",
      ],
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
    },
    {
      id: "2",
      title: "Formação Digital - FinanceCorp",
      client: "FinanceCorp",
      category: "Formação Empresarial",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      description:
        "Programa de formação digital para 50 colaboradores, aumentando significativamente a produtividade da equipa.",
      results: [
        "95% satisfação dos participantes",
        "40% melhoria na produtividade",
        "60% redução no tempo de relatórios",
      ],
      icon: <Users className="h-6 w-6 text-secondary" />,
    },
    {
      id: "3",
      title: "Apresentação Corporativa - InnovaCorp",
      client: "InnovaCorp",
      category: "Apresentações",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&h=400&fit=crop",
      description:
        "Criação de apresentação para captação de investimento que resultou numa ronda de financiamento de €2M.",
      results: [
        "€2M captados",
        "12 investidores interessados",
        "100% aprovação do pitch",
      ],
      icon: <Presentation className="h-6 w-6 text-accent" />,
    },
  ];

  return (
    <section
      className="py-20"
      style={{ backgroundColor: "#F1F1F1" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              className="font-montserrat font-semibold mb-4"
              style={{ fontSize: "40px", color: "#3B5998" }}
            >
              Projetos Que Transformaram Negócios
            </h2>
            <p className="text-lg text-[#717182] max-w-3xl mx-auto">
              Veja como ajudamos empresas como a sua a superar
              desafios e alcançar resultados extraordinários.
              Cada projeto é uma prova do nosso compromisso com
              a excelência.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={((index % 3) + 1) as 1 | 2 | 3}
            >
              <Card
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                onClick={() =>
                  onNavigate("project-detail", {
                    id: project.id,
                  })
                }
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="text-white"
                      style={{ backgroundColor: "#FF6F00" }}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    {project.icon}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="mb-2 text-blue-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Cliente: {project.client}
                    </p>
                    <p className="text-[#717182] text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Resultados Principais:
                    </h4>
                    <ul className="space-y-1">
                      {project.results
                        .slice(0, 2)
                        .map((result, index) => (
                          <li
                            key={index}
                            className="flex items-center text-sm text-[#717182]"
                          >
                            <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                            {result}
                          </li>
                        ))}
                      {project.results.length > 2 && (
                        <li className="text-sm text-primary font-medium">
                          +{project.results.length - 2} mais
                          resultados
                        </li>
                      )}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group hover:accent transition-colors text-[#3B5998]"
                    style={{ borderColor: "#3B5998" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate("project-detail", {
                        id: project.id,
                      });
                    }}
                  >
                    Ver Caso de Estudo
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection speed="slow">
          <div className="mt-20 bg-white text-center p-12 rounded-2xl">
            <h3
              className="font-montserrat font-semibold mb-4"
              style={{ fontSize: "28px", color: "#3B5998" }}
            >
              Mais de 100 Projetos Realizados
            </h3>
            <p className="text-lg text-[#717182] opacity-90 mb-8 max-w-2xl mx-auto">
              Desde startups até grandes corporações, ajudamos
              empresas de todos os tamanhos a atingir os seus
              objetivos. Explore o nosso portfolio completo e
              veja como podemos transformar o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="px-8 py-3 rounded-lg font-montserrat font-medium"
                style={{
                  backgroundColor: "#FF6F00",
                  color: "white",
                  fontSize: "18px",
                }}
                onClick={() => onNavigate?.("portfolio")}
              >
                Ver Todos os Projectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}