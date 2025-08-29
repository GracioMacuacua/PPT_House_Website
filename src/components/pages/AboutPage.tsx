import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Target,
  Users,
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
  Shield,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";

interface AboutPageProps {
  onNavigate?: (page: string, params?: { id?: string }) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const teamMembers = [
    {
      id: 1,
      name: "Ana Silva",
      role: "CEO & Founder",
      description:
        "Especialista em marketing digital com mais de 15 anos de experiência em transformação empresarial.",
      image:
        "https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc1NjIzNDY5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      expertise: [
        "Estratégia Digital",
        "Liderança",
        "Business Development",
      ],
    },
    {
      id: 2,
      name: "Carlos Santos",
      role: "Creative Director",
      description:
        "Designer com paixão por storytelling visual e criação de apresentações que marcam pela diferença.",
      image:
        "https://images.unsplash.com/photo-1686771416537-bf4a4f263d88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NjIxODQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
      expertise: ["Design Gráfico", "PowerPoint", "Branding"],
    },
    {
      id: 3,
      name: "Maria Costa",
      role: "Training Manager",
      description:
        "Formadora certificada com especialização em desenvolvimento de competências e liderança empresarial.",
      image:
        "https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc1NjIzNDY5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      expertise: ["Formação", "Coaching", "Comunicação"],
    },
    {
      id: 4,
      name: "João Ferreira",
      role: "Marketing Strategist",
      description:
        "Especialista em marketing digital e análise de dados com foco em ROI e performance.",
      image:
        "https://images.unsplash.com/photo-1686771416537-bf4a4f263d88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NjIxODQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
      expertise: ["SEM/SEO", "Analytics", "Automação"],
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description:
        "Procuramos constantemente novas formas de resolver desafios e criar soluções criativas.",
    },
    {
      icon: Heart,
      title: "Paixão",
      description:
        "Fazemos o que amamos e amamos o que fazemos. A paixão move todos os nossos projetos.",
    },
    {
      icon: Shield,
      title: "Confiança",
      description:
        "Construímos relações duradouras baseadas na transparência e no cumprimento de promessas.",
    },
    {
      icon: Zap,
      title: "Excelência",
      description:
        "Comprometemo-nos com a qualidade superior em cada projeto e interação com os clientes.",
    },
  ];

  const stats = [
    { number: "50+", label: "Projetos Concluídos" },
    { number: "25+", label: "Clientes Satisfeitos" },
    { number: "500+", label: "Participantes Formados" },
    { number: "98%", label: "Taxa de Satisfação" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1629787177096-9fbe3e2ef6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTYzMzI3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Equipa profissional colaborando em workspace moderno"
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
                    className="font-montserrat font-medium"
                    style={{
                      color: "#FFC107",
                      fontSize: "18px",
                    }}
                  >
                    Sobre Nós
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <h1
                  className="font-montserrat font-bold mb-6 leading-tight"
                  style={{ fontSize: "48px", color: "white" }}
                >
                  Uma Equipa que{" "}
                  <span style={{ color: "#FFC107" }}>
                    Transforma
                  </span>{" "}
                  Visões
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={3}>
                <p className="text-lg mb-8 leading-relaxed opacity-90">
                  Somos uma empresa especializada em transformar
                  ideias em apresentações impactantes,
                  estratégias de marketing eficazes e programas
                  de formação que desenvolvem talentos. Fundada
                  em 2020, já ajudamos mais de 25 empresas a
                  alcançar os seus objetivos através de soluções
                  personalizadas e inovadoras.
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
                    Trabalhar Connosco
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
                    Ver Nosso Trabalho
                  </Button>
                </div>
              </AnimatedSection>

              {/* Company Stats */}
              <AnimatedSection speed="slow">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    return (
                      <div key={index} className="text-center">
                        <div
                          className="font-montserrat font-bold text-2xl"
                          style={{ color: "#FFC107" }}
                        >
                          {stat.number}
                        </div>
                        <p className="text-sm opacity-80">
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Company Values */}
            <div
              className="hidden lg:block"
              style={{ marginLeft: "1.5em" }}
            >
              <div className="grid grid-cols-1 gap-6">
                {/* Inovação */}
                <AnimatedSection delay={1}>
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
                        Inovação
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Soluções criativas para desafios únicos
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Paixão */}
                <AnimatedSection delay={2}>
                  <div
                    className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Heart
                      className="h-10 w-10 mr-4"
                      style={{ color: "#FFC107" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontSize: "18px" }}
                      >
                        Paixão
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Amor pelo que fazemos reflete-se nos
                        resultados
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Confiança */}
                <AnimatedSection delay={3}>
                  <div
                    className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Shield
                      className="h-10 w-10 mr-4"
                      style={{ color: "#FFC107" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontSize: "18px" }}
                      >
                        Confiança
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Relações duradouras baseadas na
                        transparência
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Excelência */}
                <AnimatedSection delay={4}>
                  <div
                    className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Zap
                      className="h-10 w-10 mr-4"
                      style={{ color: "#FFC107" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontSize: "18px" }}
                      >
                        Excelência
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Compromisso com a qualidade superior
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className="font-montserrat font-semibold mb-4"
                style={{ fontSize: "40px", color: "#3B5998" }}
              >
                Quem Somos?
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{ color: "#717182" }}
              >
                A nossa missão é simples: ajudar organizações a
                comunicar melhor, a crescer de forma sustentável
                e a desenvolver as competências das suas equipas
                através de soluções personalizadas que geram
                resultados mensuráveis e duradouros.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="mb-4" style={{ color: "#3B5998" }}>
                Os Nossos Valores
              </h2>
              <p
                className="max-w-2xl mx-auto"
                style={{ color: "#717182" }}
              >
                Estes são os princípios que guiam o nosso
                trabalho e as nossas relações com clientes,
                parceiros e colaboradores.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <AnimatedSection
                  key={index}
                  delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div
                        className="p-4 rounded-full"
                        style={{ backgroundColor: "white" }}
                      >
                        <IconComponent
                          className="h-8 w-8"
                          style={{ color: "#6A0DAD" }}
                        />
                      </div>
                    </div>
                    <h3
                      className="mb-3"
                      style={{ color: "#3B5998" }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "#717182" }}
                    >
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="mb-4" style={{ color: "#3B5998" }}>
                A Nossa Equipa
              </h2>
              <p
                className="max-w-2xl mx-auto"
                style={{ color: "#717182" }}
              >
                Conheça os profissionais experientes e
                apaixonados que tornam possível o sucesso dos
                nossos clientes e a excelência dos nossos
                serviços.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={member.id}
                delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle style={{ color: "#3B5998" }}>
                      {member.name}
                    </CardTitle>
                    <CardDescription
                      className="font-medium"
                      style={{ color: "#FF6F00" }}
                    >
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p
                      className="mb-4 text-sm"
                      style={{ color: "#717182" }}
                    >
                      {member.description}
                    </p>
                    <div className="space-y-2">
                      <h4
                        className="font-montserrat font-medium text-sm"
                        style={{ color: "#3B5998" }}
                      >
                        Especialidades:
                      </h4>
                      <div className="flex flex-wrap justify-center gap-1">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs rounded-full"
                            style={{
                              backgroundColor: "#6A0DAD",
                              color: "white",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={1}>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1686771416537-bf4a4f263d88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NjIxODQyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Missão da empresa"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <div>
                <h2
                  className="mb-6"
                  style={{ color: "#3B5998" }}
                >
                  A Nossa Missão
                </h2>
                <p
                  className="mb-6"
                  style={{ color: "#717182" }}
                >
                  Acreditamos que cada empresa tem uma história
                  única para contar. O nosso papel é ajudar a
                  contar essa história da forma mais impactante
                  possível, seja através de apresentações
                  envolventes, estratégias de marketing eficazes
                  ou programas de formação transformadores.
                </p>
                <p
                  className="mb-6"
                  style={{ color: "#717182" }}
                >
                  Trabalhamos em parceria com os nossos clientes
                  para compreender os seus desafios, objetivos e
                  visão, criando soluções personalizadas que
                  geram resultados mensuráveis e duradouros.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "white" }}
                  >
                    <h4
                      className="font-montserrat font-medium mb-2"
                      style={{ color: "#3B5998" }}
                    >
                      Visão
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: "#717182" }}
                    >
                      Ser a referência nacional em soluções
                      integradas de comunicação empresarial.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "white" }}
                  >
                    <h4
                      className="font-montserrat font-medium mb-2"
                      style={{ color: "#3B5998" }}
                    >
                      Missão
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: "#717182" }}
                    >
                      Transformar ideias em resultados através
                      da comunicação eficaz e formação de
                      qualidade.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection speed="slow">
            <div className="bg-white text-center p-12 rounded-2xl">
              <h2
                className="font-montserrat font-semibold text-white mb-4"
                style={{ fontSize: "32px", color: "#3B5998" }}
              >
                Pronto para Trabalhar Connosco?
              </h2>
              <p className="text-lg text-[#717182] opacity-90 mb-8 max-w-2xl mx-auto">
                Vamos conhecer os seus desafios e trabalhar
                juntos para criar soluções inovadoras que
                transformem a forma como a sua empresa comunica
                e cresce. Entre em contacto e descubra o que
                podemos fazer por si.
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
                  Falar Connosco
                </Button>
                <Button
                  variant="outline"
                  className="text-[#3B5998] px-8 py-3 rounded-lg font-montserrat font-medium border-2 hover:text-white"
                  style={{
                    borderColor: "#3B5998",
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