import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  ExternalLink,
  Eye,
  Award,
  TrendingUp,
  Users,
  Presentation,
} from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";
import { useState } from "react";

interface PortfolioPageProps {
  onNavigate?: (page: string, params?: { id?: string }) => void;
}

export function PortfolioPage({
  onNavigate,
}: PortfolioPageProps) {
  const portfolioItems = [
    {
      id: 1,
      title: "Transformação Digital - Tech Solutions",
      category: "Marketing Digital",
      description:
        "Estratégia completa de marketing digital que resultou em 300% de aumento de leads qualificados.",
      image:
        "https://images.unsplash.com/photo-1590098563734-bcea80ce34c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByZXNlbnRhdGlvbiUyMHNsaWRlc3xlbnwxfHx8fDE3NTYyMzQ1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["SEO", "SEM", "Social Media", "Analytics"],
      results: [
        "300% aumento em leads",
        "150% crescimento ROI",
        "85% redução CAC",
      ],
      client: "Tech Solutions Lda.",
      duration: "6 meses",
    },
    {
      id: 2,
      title: "Rebranding Corporativo - Grupo Inovador",
      category: "Apresentações",
      description:
        "Criação de identidade visual completa e apresentações corporativas para novo posicionamento de marca.",
      image:
        "https://images.unsplash.com/photo-1731012189558-c2d035998542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NTYyMzQ1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Branding", "PowerPoint", "Design", "Estratégia"],
      results: [
        "Nova identidade visual",
        "50+ templates criados",
        "90% aprovação stakeholders",
      ],
      client: "Grupo Inovador",
      duration: "4 meses",
    },
    {
      id: 3,
      title: "Campanha Lançamento - StartUp Alpha",
      category: "Marketing Digital",
      description:
        "Campanha integrada de lançamento de produto com foco em geração de awareness e conversões.",
      image:
        "https://images.unsplash.com/photo-1532617074212-c503101ae0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjYW1wYWlnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc1NjIwMTYwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Campanha", "Social Media", "Influencers", "PR"],
      results: [
        "2M impressões",
        "15% engagement rate",
        "500 conversões primeira semana",
      ],
      client: "StartUp Alpha",
      duration: "3 meses",
    },
    {
      id: 4,
      title: "Formação Executiva - Grupo Financeiro",
      category: "Formações",
      description:
        "Programa de formação em liderança e comunicação para executivos C-level.",
      image:
        "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYWluaW5nJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU2MjIwNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: [
        "Liderança",
        "Comunicação",
        "Executivos",
        "Workshop",
      ],
      results: [
        "25 executivos formados",
        "95% satisfação",
        "40% melhoria comunicação",
      ],
      client: "Grupo Financeiro",
      duration: "2 meses",
    },
    {
      id: 5,
      title: "Apresentação Investidores - FinTech Pro",
      category: "Apresentações",
      description:
        "Pitch deck profissional para ronda de investimento Série A, com storytelling impactante.",
      image:
        "https://images.unsplash.com/photo-1590098563734-bcea80ce34c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByZXNlbnRhdGlvbiUyMHNsaWRlc3xlbnwxfHx8fDE3NTYyMzQ1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: [
        "Pitch Deck",
        "Investimento",
        "Storytelling",
        "Dados",
      ],
      results: [
        "€2M levantados",
        "12 investidores interessados",
        "Série A concluída",
      ],
      client: "FinTech Pro",
      duration: "1 mês",
    },
    {
      id: 6,
      title: "Estratégia Digital - Retail Chain",
      category: "Marketing Digital",
      description:
        "Transformação digital completa com foco em omnichannel e experiência do cliente.",
      image:
        "https://images.unsplash.com/photo-1532617074212-c503101ae0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjYW1wYWlnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc1NjIwMTYwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Omnichannel", "E-commerce", "CRM", "Automação"],
      results: [
        "45% aumento vendas online",
        "30% melhoria NPS",
        "25% redução custos",
      ],
      client: "Retail Chain",
      duration: "8 meses",
    },
  ];

  const categories = [
    "Todos",
    "Marketing Digital",
    "Apresentações",
    "Formações",
  ];
  const [selectedCategory, setSelectedCategory] =
    useState("Todos");

  const filteredItems =
    selectedCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === selectedCategory,
        );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1639485529326-a12df10446c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMHNob3djYXNlJTIwYnVzaW5lc3MlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2MzI1MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Portfolio criativo e workspace profissional"
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
                  <Award
                    className="h-12 w-12 mr-4"
                    style={{ color: "#FFC107" }}
                  />
                  <span
                    className="font-montserrat font-medium"
                    style={{
                      color: "#FFC107",
                      fontSize: "18px",
                    }}
                  >
                    Casos de Sucesso
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <h1
                  className="font-montserrat font-bold mb-6 leading-tight"
                  style={{ fontSize: "48px", color: "white" }}
                >
                  Projectos que{" "}
                  <span style={{ color: "#FFC107" }}>
                    Geram
                  </span>{" "}
                  Resultados
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={3}>
                <p className="text-lg mb-8 leading-relaxed opacity-90">
                  Explore os nossos projetos mais recentes e
                  descubra como ajudamos empresas de diferentes
                  sectores a alcançar resultados extraordinários
                  através de soluções personalizadas e
                  inovadoras. Cada projeto representa uma
                  história de transformação e crescimento.
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
                    onClick={() => onNavigate?.("contact")}
                  >
                    Começar Novo Projeto
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
                    onClick={() => onNavigate?.("services")}
                  >
                    Conhecer Serviços
                  </Button>
                </div>
              </AnimatedSection>

              {/* Portfolio Stats */}
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
                      Projetos Concluídos
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
                      Taxa de Sucesso
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className="font-montserrat font-bold text-2xl"
                      style={{ color: "#FFC107" }}
                    >
                      25+
                    </div>
                    <p className="text-sm opacity-80">
                      Sectores Atendidos
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Project Categories */}
            <div
              className="hidden lg:block"
              style={{ marginLeft: "1.5em" }}
            >
              <div className="grid grid-cols-1 gap-6">
                {/* Marketing Digital */}
                <AnimatedSection delay={1}>
                  <div
                    className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <TrendingUp
                      className="h-10 w-10 mr-4"
                      style={{ color: "#FFC107" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontSize: "18px" }}
                      >
                        Marketing Digital
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Campanhas que transformam visitantes em
                        clientes
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Apresentações */}
                <AnimatedSection delay={2}>
                  <div
                    className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Presentation
                      className="h-10 w-10 mr-4"
                      style={{ color: "#FFC107" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontSize: "18px" }}
                      >
                        Apresentações Impactantes
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Designs que cativam e convencem
                        audiências
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Formações */}
                <AnimatedSection delay={3}>
                  <div
                    className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Users
                      className="h-10 w-10 mr-4"
                      style={{ color: "#FFC107" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontSize: "18px" }}
                      >
                        Formações & Workshops
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Capacitação que acelera o crescimento
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Branding */}
                <AnimatedSection delay={4}>
                  <div
                    className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Eye
                      className="h-10 w-10 mr-4"
                      style={{ color: "#FFC107" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontSize: "18px" }}
                      >
                        Identidade Visual
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Marcas que se destacam no mercado
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 bg-white">
        {/* Portfolio Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className="font-montserrat font-semibold mb-4"
                style={{ fontSize: "40px", color: "#3B5998" }}
              >
                Histórias de Transformação
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{ color: "#717182" }}
              >
                Cada projeto é uma jornada única de crescimento
                e inovação. Descubra como ajudamos empresas a
                superar desafios e alcançar resultados
                extraordinários através de soluções criativas e
                estratégicas.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Filter Area - Sticky */}
        <div className="sticky top-16 z-40 bg-white py-6 border-b border-gray-100 shadow-sm mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                    className="rounded-lg font-montserrat font-medium"
                    style={{
                      backgroundColor:
                        selectedCategory === category
                          ? "#FF6F00"
                          : "white",
                      borderColor: "#3B5998",
                      color:
                        selectedCategory === category
                          ? "white"
                          : "#3B5998",
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <AnimatedSection
                key={index}
                delay={(index % 3) as 1 | 2 | 3}
              >
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 rounded-t-lg overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge
                          className="font-montserrat font-medium"
                          style={{
                            backgroundColor: "#FF6F00",
                            color: "white",
                          }}
                        >
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle
                        className="text-lg leading-tight"
                        style={{ color: "#3B5998" }}
                      >
                        {item.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="mb-4">
                      {item.description}
                    </CardDescription>

                    <div className="space-y-3 mb-4">
                      <div>
                        <h4
                          className="font-montserrat font-medium mb-2"
                          style={{ color: "#3B5998" }}
                        >
                          Resultados Alcançados:
                        </h4>
                        <ul className="space-y-1">
                          {item.results.map((result, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-2 text-sm"
                            >
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{
                                  backgroundColor: "#FF6F00",
                                }}
                              ></div>
                              <span
                                style={{ color: "#717182" }}
                              >
                                {result}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                            style={{
                              borderColor: "#3B5998",
                              color: "#3B5998",
                            }}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div
                        className="text-sm border-t pt-3"
                        style={{ borderColor: "#F1F1F1" }}
                      >
                        <div className="flex justify-between">
                          <span style={{ color: "#717182" }}>
                            Cliente:
                          </span>
                          <span style={{ color: "#3B5998" }}>
                            {item.client}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span style={{ color: "#717182" }}>
                            Duração:
                          </span>
                          <span style={{ color: "#3B5998" }}>
                            {item.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full rounded-lg font-montserrat font-medium group"
                      style={{
                        borderColor: "#3B5998",
                        color: "#3B5998",
                      }}
                      onClick={() => {
                        const projectIds = [
                          "tech-solutions-digital",
                          "startup-pitch-deck",
                          "tech-solutions-digital",
                          "startup-pitch-deck",
                          "startup-pitch-deck",
                          "tech-solutions-digital",
                        ];
                        onNavigate?.("project-detail", {
                          id: projectIds[item.id - 1],
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection speed="slow">
            <div
              className="text-center p-12 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #3B5998 0%, #6A0DAD 100%)",
              }}
            >
              <h2
                className="font-montserrat font-semibold text-white mb-4"
                style={{ fontSize: "32px" }}
              >
                Pronto para Criar o Próximo Caso de Sucesso?
              </h2>
              <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
                Vamos trabalhar juntos para transformar a sua
                visão em realidade. Entre em contacto e descubra
                como podemos ajudar o seu negócio a destacar-se
                e alcançar resultados extraordinários.
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
                  Iniciar Projeto
                  <ExternalLink className="ml-2 h-5 w-5" />
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
                  onClick={() => onNavigate?.("services")}
                >
                  Conhecer Serviços
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}