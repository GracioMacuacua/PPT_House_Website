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
  Calendar,
  MapPin,
  Users,
  Clock,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "../AnimatedSection";

interface EventsPageProps {
  onNavigate?: (page: string, params?: { id?: string }) => void;
}

export function EventsPage({ onNavigate }: EventsPageProps) {
  const [selectedTab, setSelectedTab] = useState("upcoming");

  const upcomingEvents = [
    {
      id: 1,
      title: "Masterclass: PowerPoint para Executivos",
      date: "15 Março 2025",
      time: "14:00 - 18:00",
      location: "Cidade de Maputo - Hotel Glória",
      participants: "25 vagas",
      price: "MZN 650",
      category: "Workshop",
      description:
        "Domine as técnicas avançadas de PowerPoint para criar apresentações executivas que impressionam e convencem.",
      image:
        "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXIlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU2MjM0NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Templates Exclusivos",
        "Técnicas Avançadas",
        "Networking",
        "Certificado",
      ],
      status: "available",
    },
    {
      id: 2,
      title: "Conferência: O Futuro do Marketing Digital",
      date: "28 Março 2025",
      time: "09:00 - 17:00",
      location: "Cidade da Beira - Palácio da Bolsa",
      participants: "150 vagas",
      price: "MZN 500",
      category: "Conferência",
      description:
        "Tendências, insights e estratégias para o marketing digital em 2025. Com especialistas nacionais e internacionais.",
      image:
        "https://images.unsplash.com/photo-1550305080-4e029753abcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBldmVudHxlbnwxfHx8fDE3NTYyMjM3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "6 Palestrantes",
        "AI & Marketing",
        "Casos Práticos",
        "Material Exclusivo",
      ],
      status: "filling-fast",
    },
    {
      id: 3,
      title: "Workshop: Storytelling em Apresentações",
      date: "10 Abril 2025",
      time: "10:00 - 16:00",
      location: "Online - Zoom",
      participants: "50 vagas",
      price: "MZN 650",
      category: "Workshop Online",
      description:
        "Aprenda a contar histórias poderosas que capturam a atenção e movem a ação nas suas apresentações.",
      image:
        "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXIlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU2MjM0NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Exercícios Práticos",
        "Feedback Personalizado",
        "Templates",
        "Gravação Incluída",
      ],
      status: "available",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Summit: Transformação Digital 2024",
      date: "20 Novembro 2024",
      location: "Cidade de Quelimane - Centro de Congressos",
      participants: "200 participantes",
      description:
        "Evento de sucesso sobre transformação digital com cases reais de empresas nacionais.",
      image:
        "https://images.unsplash.com/photo-1550305080-4e029753abcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBldmVudHxlbnwxfHx8fDE3NTYyMjM3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      feedback: "4.9/5 - Excelente",
      materials: "Disponíveis",
    },
    {
      id: 5,
      title: "Bootcamp: Design de Apresentações",
      date: "15 Outubro 2024",
      location: "C. Vilankulos - Hotel majestoso",
      participants: "30 participantes",
      description:
        "Bootcamp intensivo de 2 dias focado em design e criação de apresentações profissionais.",
      image:
        "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHNlbWluYXIlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU2MjM0NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      feedback: "4.8/5 - Muito Bom",
      materials: "Disponíveis",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1712971404080-87271ce2e473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBldmVudCUyMG5ldHdvcmtpbmclMjB3b3Jrc2hvcCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTYzMzAxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Eventos de negócios e conferências profissionais"
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
                  <Calendar
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
                    Eventos Exclusivos
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <h1
                  className="font-montserrat font-bold mb-6 leading-tight"
                  style={{ fontSize: "48px", color: "white" }}
                >
                  Eventos que{" "}
                  <span style={{ color: "#FFC107" }}>
                    Transformam
                  </span>{" "}
                  Carreiras
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={3}>
                <p className="text-lg mb-8 leading-relaxed opacity-90">
                  Participe nos nossos eventos exclusivos,
                  workshops práticos e conferências com
                  especialistas. Desenvolva as suas
                  competências, expanda a sua rede de contactos
                  profissionais e mantenha-se na vanguarda das
                  melhores práticas do sector.
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
                    onClick={() => setSelectedTab("upcoming")}
                  >
                    Ver Próximos Eventos
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
                    Organizar Evento
                  </Button>
                </div>
              </AnimatedSection>

              {/* Event Stats */}
              <AnimatedSection speed="slow">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div
                      className="font-montserrat font-bold text-2xl"
                      style={{ color: "#FFC107" }}
                    >
                      50+
                    </div>
                    <p className="text-sm opacity-80">
                      Eventos Realizados
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className="font-montserrat font-bold text-2xl"
                      style={{ color: "#FFC107" }}
                    >
                      2.5K+
                    </div>
                    <p className="text-sm opacity-80">
                      Participantes
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className="font-montserrat font-bold text-2xl"
                      style={{ color: "#FFC107" }}
                    >
                      4.9★
                    </div>
                    <p className="text-sm opacity-80">
                      Avaliação Média
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Event Types */}
            <div
              className="hidden lg:block"
              style={{ marginLeft: "1.5em" }}
            >
              <div className="grid grid-cols-1 gap-6">
                {/* Workshops */}
                <AnimatedSection delay={1}>
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
                        Workshops Práticos
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Formações hands-on com especialistas
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Conferências */}
                <AnimatedSection delay={2}>
                  <div
                    className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Calendar
                      className="h-10 w-10 mr-4"
                      style={{ color: "#FFC107" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontSize: "18px" }}
                      >
                        Conferências & Summits
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Eventos com palestrantes de renome
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Networking */}
                <AnimatedSection delay={3}>
                  <div
                    className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <MapPin
                      className="h-10 w-10 mr-4"
                      style={{ color: "#FFC107" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontSize: "18px" }}
                      >
                        Networking Premium
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Conecte-se com líderes da indústria
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Online Events */}
                <AnimatedSection delay={4}>
                  <div
                    className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Clock
                      className="h-10 w-10 mr-4"
                      style={{ color: "#FFC107" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontSize: "18px" }}
                      >
                        Eventos Online
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Participe de qualquer lugar do mundo
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Introduction */}
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className="font-montserrat font-semibold mb-4"
                style={{ fontSize: "40px", color: "#3B5998" }}
              >
                Aprendizagem & Networking
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{ color: "#717182" }}
              >
                Os nossos eventos são cuidadosamente desenhados
                para proporcionar experiências de aprendizagem
                únicas, networking de qualidade e crescimento
                profissional. Cada evento é uma oportunidade de
                estar à frente das tendências e conectar-se com
                os melhores da indústria.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex justify-center gap-4">
              <Button
                variant={
                  selectedTab === "upcoming"
                    ? "default"
                    : "outline"
                }
                onClick={() => setSelectedTab("upcoming")}
                className="rounded-lg font-montserrat font-medium"
                style={{
                  backgroundColor:
                    selectedTab === "upcoming"
                      ? "#FF6F00"
                      : "white",
                  borderColor: "#3B5998",
                  color:
                    selectedTab === "upcoming"
                      ? "white"
                      : "#3B5998",
                }}
              >
                Próximos Eventos
              </Button>
              <Button
                variant={
                  selectedTab === "past" ? "default" : "outline"
                }
                onClick={() => setSelectedTab("past")}
                className="rounded-lg font-montserrat font-medium"
                style={{
                  backgroundColor:
                    selectedTab === "past"
                      ? "#FF6F00"
                      : "white",
                  borderColor: "#3B5998",
                  color:
                    selectedTab === "past"
                      ? "white"
                      : "#3B5998",
                }}
              >
                Eventos Passados
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedTab === "upcoming" && (
            <>
              <AnimatedSection>
                <div className="text-center mb-12">
                  <p
                    className="max-w-2xl mx-auto"
                    style={{ color: "#717182" }}
                  >
                    Não perca as oportunidades de aprendizagem e
                    networking. Inscreva-se já nos nossos
                    próximos eventos e formações.
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <AnimatedSection
                    key={event.id}
                    delay={((index % 3) + 1) as 1 | 2 | 3}
                  >
                    <Card className="group hover:shadow-xl transition-shadow duration-300">
                      <CardHeader className="p-0">
                        <div className="relative h-48 rounded-t-lg overflow-hidden">
                          <ImageWithFallback
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge
                              className="font-montserrat font-medium"
                              style={{
                                backgroundColor: "#FF6F00",
                                color: "white",
                              }}
                            >
                              {event.category}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge
                              variant="secondary"
                              className="font-montserrat font-medium"
                              style={{
                                backgroundColor:
                                  event.status ===
                                  "filling-fast"
                                    ? "#d4183d"
                                    : "#6A0DAD",
                                color: "white",
                              }}
                            >
                              {event.status === "filling-fast"
                                ? "Últimas Vagas"
                                : "Disponível"}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle
                          className="mb-2 leading-tight"
                          style={{ color: "#3B5998" }}
                        >
                          {event.title}
                        </CardTitle>
                        <CardDescription className="mb-4">
                          {event.description}
                        </CardDescription>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center space-x-2 text-sm">
                            <Calendar
                              className="h-4 w-4"
                              style={{ color: "#FF6F00" }}
                            />
                            <span style={{ color: "#717182" }}>
                              {event.date}
                            </span>
                            <Clock
                              className="h-4 w-4 ml-2"
                              style={{ color: "#FF6F00" }}
                            />
                            <span style={{ color: "#717182" }}>
                              {event.time}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <MapPin
                              className="h-4 w-4"
                              style={{ color: "#FF6F00" }}
                            />
                            <span style={{ color: "#717182" }}>
                              {event.location}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Users
                              className="h-4 w-4"
                              style={{ color: "#FF6F00" }}
                            />
                            <span style={{ color: "#717182" }}>
                              {event.participants}
                            </span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4
                            className="font-montserrat font-medium mb-2"
                            style={{ color: "#3B5998" }}
                          >
                            Inclui:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {event.highlights.map(
                              (highlight) => (
                                <Badge
                                  key={highlight}
                                  variant="outline"
                                  className="text-xs"
                                  style={{
                                    borderColor: "#3B5998",
                                    color: "#3B5998",
                                  }}
                                >
                                  {highlight}
                                </Badge>
                              ),
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span
                              className="text-2xl font-montserrat font-bold"
                              style={{ color: "#3B5998" }}
                            >
                              {event.price}
                            </span>
                          </div>
                          <Button
                            className="rounded-lg font-montserrat font-medium group"
                            style={{
                              backgroundColor: "#FF6F00",
                              color: "white",
                            }}
                            onClick={() => {
                              const eventIds = [
                                "powerpoint-workshop",
                                "marketing-seminar",
                                "powerpoint-workshop",
                              ];
                              onNavigate?.("event-detail", {
                                id: eventIds[event.id - 1],
                              });
                            }}
                          >
                            Ver Detalhes
                            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </>
          )}

          {selectedTab === "past" && (
            <>
              <AnimatedSection>
                <div className="text-center mb-12">
                  <p
                    className="max-w-2xl mx-auto"
                    style={{ color: "#717182" }}
                  >
                    Veja alguns dos nossos eventos passados e o
                    sucesso alcançado. Materiais e recursos
                    ainda estão disponíveis para participantes.
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {pastEvents.map((event, index) => (
                  <AnimatedSection
                    key={event.id}
                    delay={((index % 2) + 1) as 1 | 2}
                  >
                    <Card className="group hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <div className="flex-shrink-0">
                            <ImageWithFallback
                              src={event.image}
                              alt={event.title}
                              className="w-32 h-24 object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex-1">
                            <CardTitle
                              className="mb-2"
                              style={{ color: "#3B5998" }}
                            >
                              {event.title}
                            </CardTitle>
                            <CardDescription className="mb-3">
                              {event.description}
                            </CardDescription>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center space-x-2">
                                <Calendar
                                  className="h-4 w-4"
                                  style={{ color: "#FF6F00" }}
                                />
                                <span
                                  style={{ color: "#717182" }}
                                >
                                  {event.date}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin
                                  className="h-4 w-4"
                                  style={{ color: "#FF6F00" }}
                                />
                                <span
                                  style={{ color: "#717182" }}
                                >
                                  {event.location}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Users
                                  className="h-4 w-4"
                                  style={{ color: "#FF6F00" }}
                                />
                                <span
                                  style={{ color: "#717182" }}
                                >
                                  {event.participants}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex flex-col">
                                <span
                                  className="text-sm font-medium"
                                  style={{ color: "#3B5998" }}
                                >
                                  Avaliação: {event.feedback}
                                </span>
                                <span
                                  className="text-sm"
                                  style={{ color: "#717182" }}
                                >
                                  Materiais: {event.materials}
                                </span>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-lg font-montserrat font-medium"
                                style={{
                                  borderColor: "#3B5998",
                                  color: "#3B5998",
                                }}
                                onClick={() =>
                                  onNavigate?.("contact")
                                }
                              >
                                Aceder Materiais
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16 bg-white">
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
                Pronto para Transformar a Sua Carreira?
              </h2>
              <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de profissionais que já
                transformaram as suas carreiras através dos
                nossos eventos. Reserve já o seu lugar nos
                próximos eventos e formações exclusivas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="px-8 py-3 rounded-lg font-montserrat font-medium"
                  style={{
                    backgroundColor: "#FF6F00",
                    color: "white",
                    fontSize: "18px",
                  }}
                  onClick={() => setSelectedTab("upcoming")}
                >
                  Ver Próximos Eventos
                  <ChevronRight className="ml-2 h-5 w-5" />
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
                  Organizar Evento Privado
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}