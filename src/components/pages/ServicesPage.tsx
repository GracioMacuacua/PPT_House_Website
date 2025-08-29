import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { AnimatedSection } from "../AnimatedSection";
import {
  Target,
  Users,
  Presentation,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Lightbulb,
  ExternalLink,
} from "lucide-react";

interface ServicesPageProps {
  onNavigate?: (page: string, params?: { id?: string }) => void;
}

export function ServicesPage({
  onNavigate,
}: ServicesPageProps) {
  const services = [
    {
      id: 1,
      title: "Marketing Digital Estratégico",
      description:
        "Estratégias personalizadas para aumentar a sua presença digital e alcançar os seus objetivos de negócio.",
      image:
        "https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBkaWdpdGFsJTIwcHJlc2VudGF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTc1NjIzNDUzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Target,
      features: [
        "SEO & SEM",
        "Gestão de Redes Sociais",
        "Email Marketing",
        "Análise de Performance",
      ],
    },
    {
      id: 2,
      title: "Formações Empresariais",
      description:
        "Programas de formação customizados para desenvolver as competências da sua equipa.",
      image:
        "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYWluaW5nJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU2MjIwNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Users,
      features: [
        "Liderança",
        "Comunicação",
        "Vendas",
        "Produtividade",
      ],
    },
    {
      id: 3,
      title: "Criação de Apresentações",
      description:
        "Apresentações profissionais que cativam a audiência e transmitem a sua mensagem com impacto.",
      image:
        "https://images.unsplash.com/photo-1693763824819-965758f8f5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcmVzZW50YXRpb24lMjBkZXNpZ258ZW58MXx8fHwxNzU2MjM0NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Presentation,
      features: [
        "Design Gráfico",
        "Storytelling",
        "Animações",
        "Templates Personalizados",
      ],
    },
    {
      id: 4,
      title: "Consultoria Estratégica",
      description:
        "Consultoria especializada para otimizar os seus processos de negócio e estratégias de crescimento.",
      image:
        "https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBkaWdpdGFsJTIwcHJlc2VudGF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTc1NjIzNDUzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: TrendingUp,
      features: [
        "Análise de Mercado",
        "Planeamento Estratégico",
        "Optimização de Processos",
        "KPIs e Métricas",
      ],
    },
    {
      id: 5,
      title: "Workshops Intensivos",
      description:
        "Sessions práticas e intensivas para desenvolvimento rápido de competências específicas.",
      image:
        "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYWluaW5nJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU2MjIwNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: BookOpen,
      features: [
        "PowerPoint Avançado",
        "Técnicas de Apresentação",
        "Branding Pessoal",
        "Networking Efectivo",
      ],
    },
    {
      id: 6,
      title: "Soluções Criativas",
      description:
        "Desenvolvimento de conceitos criativos e inovadores para destacar a sua marca no mercado.",
      image:
        "https://images.unsplash.com/photo-1693763824819-965758f8f5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcmVzZW50YXRpb24lMjBkZXNpZ258ZW58MXx8fHwxNzU2MjM0NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Lightbulb,
      features: [
        "Brainstorming",
        "Design Thinking",
        "Inovação",
        "Campanhas Criativas",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBkaWdpdGFsJTIwcHJlc2VudGF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTc1NjIzNDUzNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Serviços profissionais de marketing e apresentações"
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
                  <Target
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
                    Soluções Especializadas
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <h1
                  className="font-montserrat font-bold mb-6 leading-tight"
                  style={{ fontSize: "48px", color: "white" }}
                >
                  Serviços que{" "}
                  <span style={{ color: "#FFC107" }}>
                    Transformam
                  </span>{" "}
                  Negócios
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={3}>
                <p className="text-lg mb-8 leading-relaxed opacity-90">
                  Oferecemos soluções completas e personalizadas
                  em marketing digital, formações empresariais e
                  criação de apresentações de alto impacto. Cada
                  serviço é desenvolvido especificamente para as
                  necessidades do seu negócio.
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
                    Solicitar Orçamento
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
                    onClick={() => onNavigate?.("portfolio")}
                  >
                    Ver Nosso Portfólio
                  </Button>
                </div>
              </AnimatedSection>

              {/* Quick Stats */}
              <AnimatedSection speed="slow">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div
                      className="font-montserrat font-bold text-2xl"
                      style={{ color: "#FFC107" }}
                    >
                      6
                    </div>
                    <p className="text-sm opacity-80">
                      Serviços Especializados
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className="font-montserrat font-bold text-2xl"
                      style={{ color: "#FFC107" }}
                    >
                      100%
                    </div>
                    <p className="text-sm opacity-80">
                      Personalização
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className="font-montserrat font-bold text-2xl"
                      style={{ color: "#FFC107" }}
                    >
                      24h
                    </div>
                    <p className="text-sm opacity-80">
                      Tempo de Resposta
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Service Categories */}
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
                        SEO, SEM, Social Media e Analytics
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Formações */}
                <AnimatedSection delay={2}>
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
                        Capacitação profissional personalizada
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Apresentações */}
                <AnimatedSection delay={3}>
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
                        Apresentações Profissionais
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Design impactante e storytelling
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Consultoria */}
                <AnimatedSection delay={4}>
                  <div
                    className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Lightbulb
                      className="h-10 w-10 mr-4"
                      style={{ color: "#FFC107" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontSize: "18px" }}
                      >
                        Consultoria Estratégica
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Soluções criativas e inovadoras
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className="font-montserrat font-semibold mb-4"
                style={{ fontSize: "40px", color: "#3B5998" }}
              >
                Transformamos Ideias em Resultados
              </h2>
              <p className="text-lg max-w-3xl mx-auto">
                Com uma abordagem integrada e personalizada,
                ajudamos empresas a alcançar os seus objetivos
                através de soluções inovadoras e eficazes.
              </p>
            </div>
          </AnimatedSection>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <AnimatedSection
                  key={service.id}
                  delay={((index % 3) + 1) as 1 | 2 | 3}
                >
                  <Card className="group hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="relative">
                      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 p-2 rounded-lg bg-white/90 backdrop-blur-sm">
                          <IconComponent
                            className="h-6 w-6"
                            style={{ color: "#6A0DAD" }}
                          />
                        </div>
                      </div>
                      <CardTitle
                        className="mb-2"
                        style={{ color: "#3B5998" }}
                      >
                        {service.title}
                      </CardTitle>
                      <CardDescription>
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {service.features.map(
                          (feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{
                                  backgroundColor: "#FF6F00",
                                }}
                              ></div>
                              <span
                                style={{
                                  color: "#717182",
                                  fontSize: "14px",
                                }}
                              >
                                {feature}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full rounded-lg"
                        style={{
                          backgroudColor: "#FF6F00",
                          borderColor: "#3B5998",
                          color: "#3B5998",
                        }}
                        onClick={() => {
                          const serviceIds = [
                            "marketing-digital",
                            "apresentacoes",
                            "formacoes",
                            "marketing-digital",
                            "formacoes",
                            "apresentacoes",
                          ];
                          onNavigate?.("service-detail", {
                            id: serviceIds[service.id - 1],
                          });
                        }}
                      >
                        Saber Mais
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Pronto para Transformar o Seu Negócio?
              </h3>
              <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
                Entre em contacto connosco para uma consulta
                gratuita e descubra como podemos ajudar a sua
                empresa a alcançar novos patamares de sucesso.
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
                  Agendar Consulta
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
                  Ver Portfólio
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}