import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Euro,
  Users,
  Star,
  Target,
  Zap,
  Award,
  Phone,
  TrendingUp,
} from "lucide-react";

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (page: string, params?: { id?: string }) => void;
}

export function ServiceDetailPage({
  serviceId,
  onNavigate,
}: ServiceDetailPageProps) {
  // Mock data - em uma aplicação real, isto viria de uma API ou base de dados
  const serviceData = {
    "marketing-digital": {
      id: "marketing-digital",
      title: "Marketing Digital Estratégico",
      subtitle:
        "Transforme a sua presença digital em resultados concretos",
      description:
        "Desenvolvemos estratégias de marketing digital personalizadas que aumentam a visibilidade da sua marca, geram leads qualificados e impulsionam as vendas. A nossa abordagem integrada combina SEO, publicidade paga, marketing de conteúdo e análise de dados para maximizar o retorno do seu investimento.",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU2MjAyODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "Desde €1.200/mês",
      duration: "3-12 meses",
      includes: [
        "Auditoria digital completa",
        "Estratégia personalizada",
        "Gestão de campanhas",
        "Relatórios mensais detalhados",
        "Consultoria estratégica",
        "Suporte técnico dedicado",
      ],
      process: [
        {
          step: "1",
          title: "Auditoria Digital",
          description:
            "Análise completa da sua presença digital atual, identificação de oportunidades e definição de objetivos.",
        },
        {
          step: "2",
          title: "Estratégia Personalizada",
          description:
            "Desenvolvimento de uma estratégia sob medida baseada nos seus objetivos de negócio e mercado-alvo.",
        },
        {
          step: "3",
          title: "Implementação",
          description:
            "Execução das campanhas e táticas definidas com monitorização constante e otimização contínua.",
        },
        {
          step: "4",
          title: "Análise e Otimização",
          description:
            "Análise detalhada dos resultados e otimização das estratégias para maximizar o ROI.",
        },
      ],
      results: [
        "300% aumento médio em leads qualificados",
        "150% melhoria no ROI de campanhas",
        "85% redução no custo por aquisição",
        "200% crescimento no tráfego orgânico",
      ],
      testimonials: [
        {
          text: "A estratégia de marketing digital da Powerpoint House transformou completamente os nossos resultados online. Em 6 meses, triplicámos os nossos leads.",
          author: "Sofia Martins",
          position: "CEO, TechStart",
          avatar:
            "https://images.unsplash.com/photo-1494790108755-2616c46c5c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NTYyMDIzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          text: "Profissionalismo excecional e resultados que superaram todas as nossas expectativas. Recomendo vivamente os serviços da Powerpoint House.",
          author: "Miguel Santos",
          position: "Director de Marketing, InnovateCorp",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBleGVjdXRpdmV8ZW58MXx8fHwxNzU2MjAyMzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
      faqs: [
        {
          question: "Quanto tempo demora a ver resultados?",
          answer:
            "Os primeiros resultados são visíveis entre 4-8 semanas, mas o impacto completo da estratégia é alcançado em 3-6 meses.",
        },
        {
          question: "Que relatórios recebo?",
          answer:
            "Fornecemos relatórios mensais detalhados com métricas de performance, análise de ROI e recomendações estratégicas.",
        },
        {
          question:
            "Posso cancelar o serviço a qualquer momento?",
          answer:
            "Sim, oferecemos flexibilidade contratual com aviso prévio de 30 dias.",
        },
      ],
    },
    apresentacoes: {
      id: "apresentacoes",
      title: "Criação de Apresentações Profissionais",
      subtitle:
        "Apresentações que capturam a atenção e vendem as suas ideias",
      description:
        "Criamos apresentações visuais impactantes que comunicam a sua mensagem de forma clara e persuasiva. Desde pitch decks para investidores até relatórios executivos, cada slide é cuidadosamente desenhado para maximizar o impacto da sua comunicação.",
      image:
        "https://images.unsplash.com/photo-1590098563734-bcea80ce34c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByZXNlbnRhdGlvbiUyMHNsaWRlc3xlbnwxfHx8fDE3NTYyMzQ1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "Desde €500",
      duration: "5-15 dias úteis",
      includes: [
        "Design profissional personalizado",
        "Storytelling estratégico",
        "Infografias e visualizações",
        "Animações subtis",
        "Templates reutilizáveis",
        "Revisões ilimitadas",
      ],
      process: [
        {
          step: "1",
          title: "Briefing Detalhado",
          description:
            "Reunião para compreender os seus objetivos, audiência-alvo e mensagem principal.",
        },
        {
          step: "2",
          title: "Estrutura e Storyboard",
          description:
            "Desenvolvimento da estrutura narrativa e criação de um storyboard visual.",
        },
        {
          step: "3",
          title: "Design e Desenvolvimento",
          description:
            "Criação dos slides com design profissional, gráficos e elementos visuais.",
        },
        {
          step: "4",
          title: "Revisão e Entrega",
          description:
            "Processo de revisão colaborativo até à aprovação final e entrega dos ficheiros.",
        },
      ],
      results: [
        "95% taxa de aprovação em pitches",
        "3x mais engagement em apresentações",
        "80% redução no tempo de criação",
        "Feedback 4.9/5 de satisfação",
      ],
      testimonials: [
        {
          text: "A apresentação criada pela Powerpoint House foi fundamental para conseguirmos o investimento. O design e a narrativa foram perfeitos.",
          author: "André Costa",
          position: "Founder, StartupTech",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBleGVjdXRpdmV8ZW58MXx8fHwxNzU2MjAyMzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
      faqs: [
        {
          question: "Que formatos de ficheiro recebo?",
          answer:
            "Entregamos em PowerPoint (.pptx), PDF de alta qualidade e, se solicitado, também em Keynote.",
        },
        {
          question: "Quantas revisões estão incluídas?",
          answer:
            "Incluímos revisões ilimitadas até à aprovação final, garantindo a sua total satisfação.",
        },
        {
          question: "Podem criar animações personalizadas?",
          answer:
            "Sim, incluímos animações subtis e profissionais que valorizam a apresentação sem distrair da mensagem.",
        },
      ],
    },
    formacoes: {
      id: "formacoes",
      title: "Formações Empresariais",
      subtitle:
        "Desenvolva as competências da sua equipa para o sucesso",
      description:
        "Oferecemos programas de formação personalizados que desenvolvem as competências essenciais da sua equipa. Desde workshops práticos de PowerPoint até formações em marketing digital e liderança, cada programa é adaptado às necessidades específicas da sua organização.",
      image:
        "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYWluaW5nJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU2MjIwNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "Desde €299/pessoa",
      duration: "1-5 dias",
      includes: [
        "Conteúdo personalizado",
        "Material de apoio",
        "Exercícios práticos",
        "Certificado de participação",
        "Suporte pós-formação",
        "Avaliação de competências",
      ],
      process: [
        {
          step: "1",
          title: "Diagnóstico de Necessidades",
          description:
            "Avaliação das competências atuais da equipa e identificação das áreas de desenvolvimento.",
        },
        {
          step: "2",
          title: "Programa Personalizado",
          description:
            "Desenvolvimento de um programa de formação específico para os seus objetivos.",
        },
        {
          step: "3",
          title: "Formação Prática",
          description:
            "Sessões de formação interativas com exercícios práticos e casos reais.",
        },
        {
          step: "4",
          title: "Acompanhamento",
          description:
            "Suporte pós-formação e avaliação do impacto no desempenho da equipa.",
        },
      ],
      results: [
        "40% melhoria nas competências",
        "95% satisfação dos participantes",
        "80% aplicação prática no trabalho",
        "60% aumento na produtividade",
      ],
      testimonials: [
        {
          text: "A formação em PowerPoint transformou a qualidade das nossas apresentações internas. A equipa ficou muito mais confiante.",
          author: "Carla Ferreira",
          position: "HR Manager, BusinessCorp",
          avatar:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NTYyMDIzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
      faqs: [
        {
          question: "Qual o número mínimo de participantes?",
          answer:
            "Para formações in-company, o mínimo são 8 participantes. Para workshops públicos, 12 participantes.",
        },
        {
          question: "Podem fazer formações online?",
          answer:
            "Sim, oferecemos formações tanto presenciais como online, adaptadas ao formato digital.",
        },
        {
          question: "Há certificação incluída?",
          answer:
            "Todos os participantes recebem certificado de participação reconhecido no mercado.",
        },
      ],
    },
  };

  const service =
    serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4" style={{ color: "#3B5998" }}>
            Serviço não encontrado
          </h1>
          <Button onClick={() => onNavigate("services")}>
            Voltar aos Serviços
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
              onClick={() => onNavigate("services")}
              className="hover:underline"
              style={{ color: "#717182" }}
            >
              Serviços
            </button>
            <span style={{ color: "#717182" }}>/</span>
            <span style={{ color: "#3B5998" }}>
              {service.title}
            </span>
          </div>
          <Button
            variant="outline"
            onClick={() => onNavigate("services")}
            className="inline-flex items-center"
            style={{ borderColor: "#3B5998", color: "#3B5998" }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Serviços
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6" style={{ color: "#3B5998" }}>
                {service.title}
              </h1>
              <p
                className="text-xl mb-6"
                style={{ color: "#717182" }}
              >
                {service.subtitle}
              </p>
              <p className="mb-8" style={{ color: "#000000" }}>
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Euro
                    className="h-5 w-5"
                    style={{ color: "#FF6F00" }}
                  />
                  <span
                    className="font-medium"
                    style={{ color: "#3B5998" }}
                  >
                    {service.price}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock
                    className="h-5 w-5"
                    style={{ color: "#FF6F00" }}
                  />
                  <span style={{ color: "#717182" }}>
                    {service.duration}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="px-8 py-3 rounded-lg font-montserrat font-medium"
                  style={{
                    backgroundColor: "#FF6F00",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  Solicitar Orçamento
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-3 rounded-lg font-montserrat font-medium inline-flex items-center"
                  style={{
                    borderColor: "#3B5998",
                    color: "#3B5998",
                    fontSize: "18px",
                  }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Falar Connosco
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "#FF6F00" }}
                  >
                    <Star
                      className="h-6 w-6"
                      style={{ color: "white" }}
                    />
                  </div>
                  <div>
                    <div
                      className="font-montserrat font-bold text-xl"
                      style={{ color: "#3B5998" }}
                    >
                      4.9/5
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: "#717182" }}
                    >
                      Satisfação Cliente
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Tabs */}
      <section
        className="py-16"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="includes" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="includes">
                O que Inclui
              </TabsTrigger>
              <TabsTrigger value="process">
                Processo
              </TabsTrigger>
              <TabsTrigger value="results">
                Resultados
              </TabsTrigger>
              <TabsTrigger value="faqs">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="includes" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.includes.map((item, index) => (
                  <Card key={index} className="bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle
                          className="h-6 w-6 mt-1"
                          style={{ color: "#FF6F00" }}
                        />
                        <div>
                          <h4
                            className="font-montserrat font-medium mb-2"
                            style={{ color: "#3B5998" }}
                          >
                            {item}
                          </h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="process" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.process.map((step, index) => (
                  <Card key={index} className="bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center font-montserrat font-bold text-lg"
                          style={{
                            backgroundColor: "#3B5998",
                            color: "white",
                          }}
                        >
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3
                            className="font-montserrat font-medium mb-2"
                            style={{ color: "#3B5998" }}
                          >
                            {step.title}
                          </h3>
                          <p style={{ color: "#717182" }}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.results.map((result, index) => (
                  <Card key={index} className="bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className="p-3 rounded-full"
                          style={{ backgroundColor: "#FF6F00" }}
                        >
                          <TrendingUp
                            className="h-6 w-6"
                            style={{ color: "white" }}
                          />
                        </div>
                        <div>
                          <p
                            className="font-montserrat font-medium"
                            style={{ color: "#3B5998" }}
                          >
                            {result}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-6">
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <Card key={index} className="bg-white">
                    <CardContent className="p-6">
                      <h3
                        className="font-montserrat font-medium mb-3"
                        style={{ color: "#3B5998" }}
                      >
                        {faq.question}
                      </h3>
                      <p style={{ color: "#717182" }}>
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: "#3B5998" }}>
              O Que Dizem os Nossos Clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <p
                    className="mb-6 italic"
                    style={{ color: "#717182" }}
                  >
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4
                        className="font-montserrat font-medium"
                        style={{ color: "#3B5998" }}
                      >
                        {testimonial.author}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "#717182" }}
                      >
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-gradient-to-r"
        style={{
          background:
            "linear-gradient(135deg, #3B5998 0%, #6A0DAD 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-white mb-4"
            style={{ fontSize: "32px" }}
          >
            Interessado neste Serviço?
          </h2>
          <p
            className="text-white opacity-90 mb-8"
            style={{ fontSize: "18px" }}
          >
            Entre em contacto connosco para uma consulta
            gratuita e descobrir como podemos ajudar a sua
            empresa a alcançar os seus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="rounded-lg px-8 py-3 font-montserrat font-medium"
              style={{
                backgroundColor: "#FFC107",
                color: "#3B5998",
                fontSize: "18px",
              }}
            >
              Solicitar Orçamento
            </Button>
            <Button
              variant="outline"
              className="rounded-lg px-8 py-3 font-montserrat font-medium border-2"
              style={{
                borderColor: "white",
                color: "white",
                backgroundColor: "transparent",
                fontSize: "18px",
              }}
              onClick={() => onNavigate("contact")}
            >
              Falar Connosco
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}