import { ImageWithFallback } from "../figma/ImageWithFallback";
import { AnimatedSection } from "../AnimatedSection";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  Star,
  Euro,
  Target,
  Quote,
} from "lucide-react";

interface EventDetailPageProps {
  eventId: string;
  onNavigate: (page: string, params?: { id?: string }) => void;
}

export function EventDetailPage({
  eventId,
  onNavigate,
}: EventDetailPageProps) {
  // Mock data - em uma aplicação real, isto viria de uma API ou base de dados
  const eventData = {
    "powerpoint-workshop": {
      id: "powerpoint-workshop",
      title: "Workshop: PowerPoint Avançado para Executivos",
      subtitle:
        "Domine técnicas profissionais para apresentações impactantes",
      description:
        "Um workshop intensivo onde irá aprender técnicas avançadas de PowerPoint para criar apresentações que capturam a atenção, comunicam eficazmente e vendem as suas ideias. Ideal para executivos, gestores e profissionais que fazem apresentações regularmente.",
      image:
        "https://images.unsplash.com/photo-1590098563734-bcea80ce34c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByZXNlbnRhdGlvbiUyMHNsaWRlc3xlbnwxfHx8fDE3NTYyMzQ1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "15 de Novembro, 2025",
      time: "09:00 - 17:00",
      duration: "8 horas",
      location: "Maputo - Centro de Convenções Tivoli",
      address: "Avenida da Liberdade, 185, 1269-050 Matola",
      price: "MZN 650",
      originalPrice: "MZN 1200",
      category: "Workshop",
      level: "Avançado",
      maxParticipants: 25,
      currentParticipants: 18,
      instructor: {
        name: "João Santos",
        title: "Director Criativo, Powerpoint House",
        bio: "12+ anos de experiência em design de apresentações e storytelling visual. Especialista certificado em PowerPoint e Adobe Creative Suite.",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBleGVjdXRpdmV8ZW58MXx8fHwxNzU2MjAyMzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      agenda: [
        {
          time: "09:00 - 09:30",
          title: "Recepção e Networking",
          description:
            "Check-in, boas-vindas e networking com café",
        },
        {
          time: "09:30 - 11:00",
          title: "Fundamentos do Design Profissional",
          description:
            "Princípios de design, tipografia e composição visual",
        },
        {
          time: "11:00 - 11:15",
          title: "Coffee Break",
          description: "Pausa para café e networking",
        },
        {
          time: "11:15 - 12:30",
          title: "Storytelling Visual",
          description:
            "Como estruturar narrativas visuais persuasivas",
        },
        {
          time: "12:30 - 13:30",
          title: "Almoço",
          description: "Almoço networking (incluído)",
        },
        {
          time: "13:30 - 15:00",
          title: "Técnicas Avançadas de PowerPoint",
          description:
            "Animações, transições e funcionalidades avançadas",
        },
        {
          time: "15:00 - 15:15",
          title: "Coffee Break",
          description: "Pausa para café",
        },
        {
          time: "15:15 - 16:30",
          title: "Projeto Prático",
          description:
            "Criação de uma apresentação com feedback individual",
        },
        {
          time: "16:30 - 17:00",
          title: "Apresentações e Encerramento",
          description:
            "Apresentação dos projetos e entrega de certificados",
        },
      ],
      includes: [
        "Material de formação completo",
        "Acesso a templates premium",
        "Almoço e coffee breaks",
        "Certificado de participação",
        "Suporte pós-workshop (30 dias)",
        "Recursos digitais exclusivos",
      ],
      targetAudience: [
        "Executivos e gestores",
        "Profissionais de vendas",
        "Consultores",
        "Empreendedores",
        "Profissionais de marketing",
      ],
      learningOutcomes: [
        "Criar slides visualmente impactantes",
        "Estruturar apresentações persuasivas",
        "Usar animações profissionalmente",
        "Aplicar princípios de design",
        "Comunicar com confiança",
      ],
      testimonials: [
        {
          name: "Esmeralda Oliveira",
          position: "Sales Manager",
          company: "Railway Corp",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
          content:
            "Este workshop transformou completamente a forma como faço apresentações. As técnicas aprendidas já me ajudaram a fechar novos negócios.",
          rating: 5,
        },
        {
          name: "Maria Costa",
          position: "CEO",
          company: "Bench Inc",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
          content:
            "Conteúdo prático e muito bem estruturado. O João é um excelente formador com exemplos reais muito úteis.",
          rating: 5,
        },
      ],
    },
    "marketing-seminar": {
      id: "marketing-seminar",
      title:
        "Seminário: Marketing Digital 2025 - Tendências e Estratégias",
      subtitle:
        "Fique à frente da concorrência com as últimas tendências",
      description:
        "Um seminário exclusivo onde irá descobrir as principais tendências do marketing digital para 2025 e aprender estratégias práticas para implementar na sua empresa. Inclui insights sobre IA, automação e novas plataformas digitais.",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU2MjAyODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "22 de Dezembro, 2025",
      time: "14:00 - 18:00",
      duration: "4 horas",
      location: "Maputo - Hotel Vila Galé",
      address: "Avenida da Boavista, 1466, 4100-114 Maputo",
      price: "MZN 500",
      originalPrice: "MZN 999",
      category: "Seminário",
      level: "Intermédio",
      maxParticipants: 50,
      currentParticipants: 32,
      instructor: {
        name: "Ana Silva",
        title: "CEO & Digital Marketing Expert",
        bio: "15+ anos de experiência em marketing digital e estratégia empresarial. Palestrante internacional e consultora de grandes empresas.",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616c46c5c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NTYyMDIzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      agenda: [
        {
          time: "14:00 - 14:30",
          title: "Recepção e Networking",
          description: "Check-in e networking com café",
        },
        {
          time: "14:30 - 15:30",
          title: "Tendências Marketing Digital 2025",
          description:
            "IA, automação e novas plataformas emergentes",
        },
        {
          time: "15:30 - 15:45",
          title: "Coffee Break",
          description: "Pausa para café e networking",
        },
        {
          time: "15:45 - 16:45",
          title: "Estratégias Práticas",
          description:
            "Como implementar as tendências na sua empresa",
        },
        {
          time: "16:45 - 17:30",
          title: "Casos de Estudo",
          description: "Análise de campanhas de sucesso",
        },
        {
          time: "17:30 - 18:00",
          title: "Q&A e Networking",
          description: "Sessão de perguntas e networking final",
        },
      ],
      includes: [
        "Guia de tendências 2025",
        "Templates de estratégia",
        "Coffee breaks incluídos",
        "Acesso ao grupo LinkedIn exclusivo",
        "Recursos digitais",
        "Certificado de participação",
      ],
      targetAudience: [
        "Gestores de marketing",
        "Empresários",
        "Consultores",
        "Profissionais de comunicação",
        "Estudantes de marketing",
      ],
      learningOutcomes: [
        "Identificar tendências emergentes",
        "Planear estratégias 2025",
        "Implementar automação",
        "Usar IA no marketing",
        "Medir ROI eficazmente",
      ],
      testimonials: [
        {
          name: "Carlos Mendes",
          position: "Marketing Director",
          company: "Oásis Technologies",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
          content:
            "Seminário muito informativo com insights valiosos sobre o futuro do marketing digital. Recomendo vivamente!",
          rating: 5,
        },
      ],
    },
  };

  const event = eventData[eventId as keyof typeof eventData];

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4" style={{ color: "#3B5998" }}>
            Evento não encontrado
          </h1>
          <Button onClick={() => onNavigate("events")}>
            Voltar aos Eventos
          </Button>
        </div>
      </div>
    );
  }

  const progressPercentage =
    (event.currentParticipants / event.maxParticipants) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Header with breadcrumb */}
      <section
        className="py-8 border-b"
        style={{ borderColor: "#F1F1F1" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center space-x-2 text-sm mb-4">
              <button
                onClick={() => onNavigate("home")}
                className="hover:underline"
                style={{ color: "#717182" }}
              >
                Início
              </button>
              <span style={{ color: "#717182" }}>/</span>
              <button
                onClick={() => onNavigate("events")}
                className="hover:underline"
                style={{ color: "#717182" }}
              >
                Eventos
              </button>
              <span style={{ color: "#717182" }}>/</span>
              <span style={{ color: "#3B5998" }}>
                {event.title}
              </span>
            </div>
            <Button
              variant="outline"
              onClick={() => onNavigate("events")}
              className="inline-flex items-center"
              style={{
                borderColor: "#3B5998",
                color: "#3B5998",
              }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Eventos
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Event Info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={1}>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    className="font-montserrat font-medium"
                    style={{
                      backgroundColor: "#FF6F00",
                      color: "white",
                    }}
                  >
                    {event.category}
                  </Badge>
                  <Badge
                    variant="outline"
                    style={{
                      borderColor: "#3B5998",
                      color: "#3B5998",
                    }}
                  >
                    {event.level}
                  </Badge>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <h1
                  className="mb-4"
                  style={{ color: "#3B5998" }}
                >
                  {event.title}
                </h1>
                <p
                  className="text-xl font-bold mb-6"
                  style={{ color: "#717182" }}
                >
                  {event.subtitle}
                </p>
                <p
                  className="mb-8"
                  style={{ color: "#717182" }}
                >
                  {event.description}
                </p>
              </AnimatedSection>

              {/* Event Details */}
              <AnimatedSection delay={3}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar
                        className="h-5 w-5"
                        style={{ color: "#FF6F00" }}
                      />
                      <div>
                        <div
                          className="font-medium"
                          style={{ color: "#3B5998" }}
                        >
                          {event.date}
                        </div>
                        <div
                          className="text-sm"
                          style={{ color: "#717182" }}
                        >
                          {event.time}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock
                        className="h-5 w-5"
                        style={{ color: "#FF6F00" }}
                      />
                      <div>
                        <div
                          className="font-medium"
                          style={{ color: "#3B5998" }}
                        >
                          Duração
                        </div>
                        <div
                          className="text-sm"
                          style={{ color: "#717182" }}
                        >
                          {event.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin
                        className="h-5 w-5 mt-1"
                        style={{ color: "#FF6F00" }}
                      />
                      <div>
                        <div
                          className="font-medium"
                          style={{ color: "#3B5998" }}
                        >
                          {event.location}
                        </div>
                        <div
                          className="text-sm"
                          style={{ color: "#717182" }}
                        >
                          {event.address}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users
                        className="h-5 w-5"
                        style={{ color: "#FF6F00" }}
                      />
                      <div>
                        <div
                          className="font-medium"
                          style={{ color: "#3B5998" }}
                        >
                          {event.currentParticipants}/
                          {event.maxParticipants} participantes
                        </div>
                        <div
                          className="text-sm"
                          style={{ color: "#717182" }}
                        >
                          {event.maxParticipants -
                            event.currentParticipants}{" "}
                          vagas disponíveis
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Event Image */}
              <AnimatedSection delay={4}>
                <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <AnimatedSection speed="slow">
                <Card className="sticky top-8 shadow-xl">
                  <CardHeader>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        {event.originalPrice && (
                          <span
                            className="text-lg line-through"
                            style={{ color: "#717182" }}
                          >
                            {event.originalPrice}
                          </span>
                        )}
                        <span
                          className="text-3xl font-montserrat font-bold"
                          style={{ color: "#3B5998" }}
                        >
                          {event.price}
                        </span>
                      </div>
                      <p
                        className="text-sm"
                        style={{ color: "#717182" }}
                      >
                        por pessoa
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span style={{ color: "#717182" }}>
                          Vagas preenchidas
                        </span>
                        <span style={{ color: "#3B5998" }}>
                          {Math.round(progressPercentage)}%
                        </span>
                      </div>
                      <Progress
                        value={progressPercentage}
                        className="h-3"
                      />
                      <p
                        className="text-xs mt-1 text-center"
                        style={{ color: "#717182" }}
                      >
                        {event.maxParticipants -
                          event.currentParticipants}{" "}
                        vagas restantes
                      </p>
                    </div>

                    {/* Instructor */}
                    <div
                      className="border-t pt-6"
                      style={{ borderColor: "#F1F1F1" }}
                    >
                      <h4
                        className="font-montserrat font-medium mb-3"
                        style={{ color: "#3B5998" }}
                      >
                        Formador
                      </h4>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <ImageWithFallback
                            src={event.instructor.avatar}
                            alt={event.instructor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div
                            className="font-medium"
                            style={{ color: "#3B5998" }}
                          >
                            {event.instructor.name}
                          </div>
                          <div
                            className="text-sm"
                            style={{ color: "#717182" }}
                          >
                            {event.instructor.title}
                          </div>
                        </div>
                      </div>
                      <p
                        className="text-sm mt-3"
                        style={{ color: "#717182" }}
                      >
                        {event.instructor.bio}
                      </p>
                    </div>

                    <Button
                      className="w-full py-3 rounded-lg font-montserrat font-medium"
                      style={{
                        backgroundColor: "#FF6F00",
                        color: "white",
                        fontSize: "18px",
                      }}
                    >
                      Inscrever-me Agora
                    </Button>

                    <div className="text-center">
                      <p
                        className="text-xs"
                        style={{ color: "#717182" }}
                      >
                        Pagamento seguro • Cancelamento até 48h
                        antes
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section
        className="py-16"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="mb-4" style={{ color: "#3B5998" }}>
                Programa do Evento
              </h2>
              <p
                className="max-w-2xl mx-auto"
                style={{ color: "#717182" }}
              >
                Um programa estruturado para maximizar a sua
                aprendizagem e networking.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {event.agenda.map((item, index) => (
                <AnimatedSection
                  key={index}
                  delay={((index % 3) + 1) as 1 | 2 | 3}
                >
                  <Card className="bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-center min-w-[80px]">
                          <div
                            className="font-montserrat font-bold"
                            style={{ color: "#FF6F00" }}
                          >
                            {item.time}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3
                            className="font-montserrat font-medium mb-2"
                            style={{ color: "#3B5998" }}
                          >
                            {item.title}
                          </h3>
                          <p style={{ color: "#717182" }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included & Learning Outcomes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What's Included */}
            <AnimatedSection delay={1}>
              <div>
                <h2
                  className="mb-8 font-bold"
                  style={{ color: "#3B5998" }}
                >
                  O que está incluído
                </h2>
                <div className="space-y-4">
                  {event.includes.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle
                        className="h-5 w-5"
                        style={{ color: "#FF6F00" }}
                      />
                      <span style={{ color: "#717182" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Learning Outcomes */}
            <AnimatedSection delay={2}>
              <div>
                <h2
                  className="mb-8 font-bold"
                  style={{ color: "#3B5998" }}
                >
                  O que vai aprender
                </h2>
                <div className="space-y-4">
                  {event.learningOutcomes.map(
                    (outcome, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3"
                      >
                        <Target
                          className="h-5 w-5"
                          style={{ color: "#6A0DAD" }}
                        />
                        <span style={{ color: "#717182" }}>
                          {outcome}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section
        className="py-16"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="mb-4" style={{ color: "#3B5998" }}>
                Para quem é este evento
              </h2>
              <p
                className="max-w-2xl mx-auto"
                style={{ color: "#717182" }}
              >
                Este evento foi especialmente desenvolvido para
                profissionais que querem elevar as suas
                competências ao próximo nível.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {event.targetAudience.map((audience, index) => (
              <AnimatedSection
                key={index}
                delay={((index % 3) + 1) as 1 | 2 | 3}
              >
                <Card className="bg-white text-center">
                  <CardContent className="p-6">
                    <Users
                      className="h-8 w-8 mx-auto mb-3"
                      style={{ color: "#FF6F00" }}
                    />
                    <p
                      className="font-medium"
                      style={{ color: "#3B5998" }}
                    >
                      {audience}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className="font-montserrat font-semibold mb-4"
                style={{ fontSize: "40px", color: "#3B5998" }}
              >
                O que dizem os participantes
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {event.testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                delay={((index % 2) + 1) as 1 | 2}
              >
                <Card className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <Quote className="h-10 w-10 text-primary/20 mr-4 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {[...Array(testimonial.rating)].map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-current"
                                style={{ color: "#FFC107" }}
                              />
                            ),
                          )}
                        </div>
                        <p
                          className="mb-4"
                          style={{ color: "#717182" }}
                        >
                          {testimonial.content}
                        </p>
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage
                              src={testimonial.image}
                              alt={testimonial.name}
                            />
                            <AvatarFallback>
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div
                              className="font-medium"
                              style={{ color: "#3B5998" }}
                            >
                              {testimonial.name}
                            </div>
                            <div
                              className="text-sm"
                              style={{ color: "#717182" }}
                            >
                              {testimonial.position},{" "}
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
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
                Pronto para Se Inscrever?
              </h2>
              <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
                Não perca esta oportunidade única de desenvolver
                as suas competências e expandir a sua rede
                profissional. Inscreva-se já e garante o seu
                lugar!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="px-8 py-3 rounded-lg font-montserrat font-medium"
                  style={{
                    backgroundColor: "#FF6F00",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  Inscrever-me Agora
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
                  onClick={() => onNavigate("events")}
                >
                  Ver Outros Eventos
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}