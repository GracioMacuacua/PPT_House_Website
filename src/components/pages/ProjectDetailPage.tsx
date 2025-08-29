import { Button } from "../ui/button";
import { AnimatedSection } from "../AnimatedSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  ArrowLeft,
  Calendar,
  Users,
  TrendingUp,
  CheckCircle,
  Target,
  Award,
  ExternalLink,
  Quote,
} from "lucide-react";

interface ProjectDetailPageProps {
  projectId: string;
  onNavigate: (page: string, params?: { id?: string }) => void;
}

export function ProjectDetailPage({
  projectId,
  onNavigate,
}: ProjectDetailPageProps) {
  // Mock data - em uma aplicação real, isto viria de uma API ou base de dados
  const projectData = {
    "tech-solutions-digital": {
      id: "tech-solutions-digital",
      title: "Transformação Digital - Tech Solutions",
      subtitle:
        "Uma revolução completa na presença digital da empresa",
      category: "Marketing Digital",
      client: "Tech Solutions Lda.",
      duration: "6 meses",
      year: "2024",
      description:
        "Desenvolvemos uma estratégia completa de marketing digital que transformou radicalmente a presença online da Tech Solutions. O projeto incluiu rebranding digital, optimização SEO, campanhas paid media e implementação de automação de marketing.",
      challenge:
        "A Tech Solutions tinha uma presença digital limitada e estava a perder quota de mercado para concorrentes mais digitalmente avançados. O desafio era criar uma presença online forte e gerar leads qualificados de forma consistente.",
      solution:
        "Implementámos uma estratégia digital integrada que incluiu novo website, optimização SEO, campanhas no Google Ads e Facebook, automação de email marketing e um sistema de CRM personalizado.",
      results: [
        {
          metric: "300%",
          description: "Aumento em leads qualificados",
        },
        {
          metric: "150%",
          description: "Crescimento no ROI de campanhas",
        },
        {
          metric: "85%",
          description: "Redução no custo por aquisição",
        },
        {
          metric: "200%",
          description: "Aumento no tráfego orgânico",
        },
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU2MjAyODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Dashboard de analytics implementado",
        },
        {
          url: "https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBkaWdpdGFsJTIwcHJlc2VudGF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTc1NjIzNDUzNnww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Novo website responsivo",
        },
        {
          url: "https://images.unsplash.com/photo-1532617074212-c503101ae0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjYW1wYWlnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc1NjIwMTYwOXww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Campanhas criativas desenvolvidas",
        },
      ],
      technologies: [
        "Google Ads",
        "Facebook Ads",
        "Google Analytics",
        "HubSpot",
        "WordPress",
        "Mailchimp",
      ],
      services: [
        "Estratégia Digital",
        "Website Development",
        "SEO Optimization",
        "Paid Media Campaigns",
        "Marketing Automation",
        "Analytics & Reporting",
      ],
      timeline: [
        {
          phase: "Fase 1",
          title: "Auditoria e Estratégia",
          duration: "2 semanas",
          description:
            "Análise completa da situação atual e desenvolvimento da estratégia digital.",
        },
        {
          phase: "Fase 2",
          title: "Website e SEO",
          duration: "6 semanas",
          description:
            "Desenvolvimento do novo website e implementação de optimização SEO.",
        },
        {
          phase: "Fase 3",
          title: "Campanhas Paid Media",
          duration: "4 semanas",
          description:
            "Lançamento de campanhas no Google Ads e Facebook Ads.",
        },
        {
          phase: "Fase 4",
          title: "Automação e CRM",
          duration: "8 semanas",
          description:
            "Implementação de automação de marketing e sistema CRM.",
        },
        {
          phase: "Fase 5",
          title: "Optimização Contínua",
          duration: "Ongoing",
          description:
            "Monitorização, análise e optimização contínua de todas as campanhas.",
        },
      ],
      testimonial: {
        text: "A parceria com a Powerpoint House foi transformadora para o nosso negócio. Em apenas 6 meses, vimos um crescimento extraordinário nos nossos leads e vendas. A equipa é extremamente profissional e os resultados falam por si.",
        author: "Carlos Mendes",
        position: "CEO, Tech Solutions",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBleGVjdXRpdmV8ZW58MXx8fHwxNzU2MjAyMzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      tags: [
        "Marketing Digital",
        "SEO",
        "Paid Media",
        "Automação",
        "CRM",
        "Analytics",
      ],
    },
    "startup-pitch-deck": {
      id: "startup-pitch-deck",
      title: "Pitch Deck Vencedor - FinTech Pro",
      subtitle:
        "A apresentação que garantiu €2M em investimento",
      category: "Apresentações",
      client: "FinTech Pro",
      duration: "3 semanas",
      year: "2024",
      description:
        "Criámos um pitch deck estratégico e visualmente impactante que ajudou a FinTech Pro a garantir €2M em investimento Série A. O projeto incluiu storytelling estratégico, design premium e coaching de apresentação.",
      challenge:
        "A FinTech Pro precisava de uma apresentação convincente para a sua ronda de investimento Série A. O desafio era comunicar eficazmente a proposta de valor, o modelo de negócio e o potencial de crescimento num formato envolvente.",
      solution:
        "Desenvolvemos um pitch deck de 15 slides com narrativa estratégica, visualizações de dados impactantes e design premium. Incluímos também sessões de coaching para preparar a equipa para as apresentações.",
      results: [
        {
          metric: "MZN 2M",
          description: "Investimento levantado",
        },
        {
          metric: "12",
          description: "Investidores interessados",
        },
        {
          metric: "100%",
          description: "Taxa de aprovação em pitches",
        },
        {
          metric: "3 semanas",
          description: "Tempo para conclusão",
        },
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1590098563734-bcea80ce34c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByZXNlbnRhdGlvbiUyMHNsaWRlc3xlbnwxfHx8fDE3NTYyMzQ1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Slide de abertura com branding forte",
        },
        {
          url: "https://images.unsplash.com/photo-1693763824819-965758f8f5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcmVzZW50YXRpb24lMjBkZXNpZ258ZW58MXx8fHwxNzU2MjM0NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Visualização de dados financeiros",
        },
        {
          url: "https://images.unsplash.com/photo-1731012189558-c2d035998542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NTYyMzQ1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Template corporativo desenvolvido",
        },
      ],
      technologies: [
        "PowerPoint",
        "Adobe Illustrator",
        "Figma",
        "Adobe After Effects",
      ],
      services: [
        "Pitch Deck Design",
        "Storytelling Strategy",
        "Data Visualization",
        "Brand Design",
        "Presentation Coaching",
        "Template Creation",
      ],
      timeline: [
        {
          phase: "Semana 1",
          title: "Estratégia e Estrutura",
          duration: "5 dias",
          description:
            "Desenvolvimento da narrativa estratégica e estrutura da apresentação.",
        },
        {
          phase: "Semana 2",
          title: "Design e Desenvolvimento",
          duration: "7 dias",
          description:
            "Criação do design visual e desenvolvimento de todos os slides.",
        },
        {
          phase: "Semana 3",
          title: "Refinamento e Coaching",
          duration: "5 dias",
          description:
            "Refinamentos finais e sessões de coaching de apresentação.",
        },
      ],
      testimonial: {
        text: "O pitch deck criado pela Powerpoint House foi absolutamente crucial para o sucesso da nossa ronda de investimento. O design profissional e a narrativa convincente impressionaram todos os investidores.",
        author: "Ricardo Ferreira",
        position: "CEO, FinTech Pro",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBleGVjdXRpdmV8ZW58MXx8fHwxNzU2MjAyMzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      tags: [
        "Pitch Deck",
        "Investimento",
        "Storytelling",
        "Design",
        "PowerPoint",
      ],
    },
  };

  const project =
    projectData[projectId as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4" style={{ color: "#3B5998" }}>
            Projeto não encontrado
          </h1>
          <Button onClick={() => onNavigate("portfolio")}>
            Voltar ao Portfolio
          </Button>
        </div>
      </div>
    );
  }

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
                onClick={() => onNavigate("portfolio")}
                className="hover:underline"
                style={{ color: "#717182" }}
              >
                Portfolio
              </button>
              <span style={{ color: "#717182" }}>/</span>
              <span style={{ color: "#3B5998" }}>
                {project.title}
              </span>
            </div>
            <Button
              variant="outline"
              onClick={() => onNavigate("portfolio")}
              className="inline-flex items-center"
              style={{
                borderColor: "#3B5998",
                color: "#3B5998",
              }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Portfolio
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={1}>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    className="font-montserrat font-medium"
                    style={{
                      backgroundColor: "#FF6F00",
                      color: "white",
                    }}
                  >
                    {project.category}
                  </Badge>
                  <Badge
                    variant="outline"
                    style={{
                      borderColor: "#3B5998",
                      color: "#3B5998",
                    }}
                  >
                    {project.year}
                  </Badge>
                </div>

                <h1
                  className="mb-4"
                  style={{
                    color: "#3B5998",
                    fontSize: "48px",
                    fontWeight: "700",
                    lineHeight: "1.2",
                    textTransform: "uppercase",
                  }}
                >
                  {project.title}
                </h1>
                <p
                  className="text-xl font-bold mb-6"
                  style={{ color: "#717182" }}
                >
                  {project.subtitle}
                </p>
                <p
                  className="mb-8"
                  style={{ color: "#717182" }}
                >
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4
                      className="font-montserrat font-medium mb-2"
                      style={{ color: "#3B5998" }}
                    >
                      Cliente
                    </h4>
                    <p style={{ color: "#717182" }}>
                      {project.client}
                    </p>
                  </div>
                  <div>
                    <h4
                      className="font-montserrat font-medium mb-2"
                      style={{ color: "#3B5998" }}
                    >
                      Duração
                    </h4>
                    <p style={{ color: "#717182" }}>
                      {project.duration}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      style={{
                        borderColor: "#6A0DAD",
                        color: "#6A0DAD",
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={project.images[0].url}
                    alt={project.title}
                    className="w-full h-96 object-cover"
                  />
                </div>

                {/* Floating Achievement */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "#FFC107" }}
                    >
                      <Award
                        className="h-6 w-6"
                        style={{ color: "#3B5998" }}
                      />
                    </div>
                    <div>
                      <div
                        className="font-montserrat font-bold text-xl"
                        style={{ color: "#3B5998" }}
                      >
                        {project.results[0].metric}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: "#717182" }}
                      >
                        {project.results[0].description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Results */}
      <section
        className="py-16"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="mb-4" style={{ color: "#3B5998" }}>
                Resultados Alcançados
              </h2>
              <p
                className="max-w-2xl mx-auto"
                style={{ color: "#717182" }}
              >
                Os números demonstram o impacto real do nosso
                trabalho no sucesso do cliente.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <AnimatedSection
                key={index}
                delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
              >
                <Card className="bg-white text-center">
                  <CardContent className="p-8">
                    <div
                      className="font-montserrat font-bold text-4xl mb-2"
                      style={{ color: "#FF6F00" }}
                    >
                      {result.metric}
                    </div>
                    <p style={{ color: "#717182" }}>
                      {result.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <AnimatedSection delay={1}>
              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "#FF6F00" }}
                    >
                      <Target
                        className="h-6 w-6"
                        style={{ color: "white" }}
                      />
                    </div>
                    <CardTitle style={{ color: "#3B5998" }}>
                      O Desafio
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "#717182" }}>
                    {project.challenge}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Solution */}
            <AnimatedSection delay={2}>
              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "#6A0DAD" }}
                    >
                      <CheckCircle
                        className="h-6 w-6"
                        style={{ color: "white" }}
                      />
                    </div>
                    <CardTitle style={{ color: "#3B5998" }}>
                      A Solução
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "#717182" }}>
                    {project.solution}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section
        className="py-16"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="mb-4" style={{ color: "#3B5998" }}>
                Galeria do Projeto
              </h2>
              <p
                className="max-w-2xl mx-auto"
                style={{ color: "#717182" }}
              >
                Veja alguns exemplos do trabalho desenvolvido
                para este projeto.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.images.map((image, index) => (
              <AnimatedSection
                key={index}
                delay={((index % 3) + 1) as 1 | 2 | 3}
              >
                <Card className="bg-white overflow-hidden">
                  <div className="relative h-64">
                    <ImageWithFallback
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p
                      className="text-sm"
                      style={{ color: "#717182" }}
                    >
                      {image.caption}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="mb-4" style={{ color: "#3B5998" }}>
                Timeline do Projeto
              </h2>
              <p
                className="max-w-2xl mx-auto"
                style={{ color: "#717182" }}
              >
                Como organizámos e executámos o projeto passo a
                passo.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {project.timeline.map((phase, index) => (
                <AnimatedSection
                  key={index}
                  delay={((index % 3) + 1) as 1 | 2 | 3}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-montserrat font-bold"
                        style={{
                          backgroundColor: "#3B5998",
                          color: "white",
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <Card className="flex-1 bg-white">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3
                            className="font-montserrat font-medium"
                            style={{ color: "#3B5998" }}
                          >
                            {phase.title}
                          </h3>
                          <Badge
                            variant="outline"
                            style={{
                              borderColor: "#FF6F00",
                              color: "#FF6F00",
                            }}
                          >
                            {phase.duration}
                          </Badge>
                        </div>
                        <p style={{ color: "#717182" }}>
                          {phase.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services & Technologies */}
      <section
        className="py-16"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services Used */}
            <AnimatedSection delay={1}>
              <div>
                <h2
                  className="mb-8 font-bold"
                  style={{ color: "#3B5998" }}
                >
                  Serviços Aplicados
                </h2>
                <div className="space-y-4">
                  {project.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle
                        className="h-5 w-5"
                        style={{ color: "#FF6F00" }}
                      />
                      <span style={{ color: "#717182" }}>
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Technologies */}
            <AnimatedSection delay={2}>
              <div>
                <h2
                  className="mb-8 font-bold"
                  style={{ color: "#3B5998" }}
                >
                  Tecnologias Utilizadas
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="px-4 py-2"
                      style={{
                        backgroundColor: "#6A0DAD",
                        color: "white",
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection speed="slow">
            <Card
              className="bg-gradient-to-r"
              style={{
                background:
                  "linear-gradient(135deg, #3B5998 0%, #6A0DAD 100%)",
              }}
            >
              <CardContent className="p-12 text-center">
                <Quote className="h-12 w-12 mx-auto mb-6 text-white opacity-30" />
                <p className="text-xl mb-6 italic text-white">
                  "{project.testimonial.text}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={project.testimonial.avatar}
                      alt={project.testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-montserrat font-medium text-white">
                      {project.testimonial.author}
                    </h4>
                    <p className="text-white opacity-90">
                      {project.testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
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
                Tem um Projeto Semelhante?
              </h2>
              <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
                Se tem um projeto que precisa de resultados como
                estes, vamos conversar! A nossa equipa está
                pronta para transformar a sua visão em realidade
                e gerar resultados concretos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="px-8 py-3 rounded-lg font-montserrat font-medium"
                  style={{
                    backgroundColor: "#FF6F00",
                    color: "white",
                    fontSize: "18px",
                  }}
                  onClick={() => onNavigate("contact")}
                >
                  Iniciar Projeto
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
                  onClick={() => onNavigate("portfolio")}
                >
                  Ver Mais Projetos
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}