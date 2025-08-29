import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { AnimatedSection } from "../AnimatedSection";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Calendar,
  Users,
} from "lucide-react";

interface ContactPageProps {
  onNavigate?: (page: string, params?: { id?: string }) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: [
        "Rua da Inovação, 123",
        "1200-456 Lisboa",
        "Cidade de Maputo",
      ],
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["+258 84 123 4567", "+258 87 123 4567"],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "geral@ppthouse.co.mz",
        "comercial@ppthouse.co.mz",
      ],
    },
    {
      icon: Clock,
      title: "Horário",
      details: [
        "Segunda a Sexta: 8:00 - 15:00",
        "Sábado: 8:00 - 13:00",
        "Domingo: Fechado",
      ],
    },
  ];

  const serviceOptions = [
    "Marketing Digital",
    "Criação de Apresentações",
    "Formações Empresariais",
    "Consultoria Estratégica",
    "Workshops",
    "Eventos Corporativos",
    "Outro",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1640323240640-ee731d18dcb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0JTIwYnVzaW5lc3MlMjBtZWV0aW5nJTIwY29uc3VsdGF0aW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NjM0NDg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Atendimento ao cliente e consultoria profissional"
            className="w-full h-full object-cover"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(59, 89, 152, 0.9) 0%, rgba(106, 13, 173, 0.9) 100%)",
              zIndex: 1,
            }}
          ></div>
        </div>

        {/* Content */}
        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          style={{ zIndex: 2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              <AnimatedSection delay={1}>
                <div className="flex items-center mb-6">
                  <MessageCircle
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
                    Contactos
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <h1
                  className="font-montserrat font-bold mb-6 leading-tight"
                  style={{ fontSize: "48px", color: "white" }}
                >
                  Vamos{" "}
                  <span style={{ color: "#FFC107" }}>
                    Conversar
                  </span>{" "}
                  Sobre o Seu Projeto
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={3}>
                <p className="text-lg mb-8 leading-relaxed opacity-90">
                  Tem um projeto em mente? Quer saber mais sobre
                  os nossos serviços? Estamos aqui para ajudar.
                  Entre em contacto connosco e descubra como
                  podemos impulsionar o seu negócio através de
                  soluções personalizadas e resultados
                  comprovados.
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
                    onClick={() => {
                      document
                        .getElementById("contact-form")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                  >
                    Enviar Mensagem
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
                    onClick={() => {
                      window.open("tel:+351211234567", "_self");
                    }}
                  >
                    Ligar Agora
                  </Button>
                </div>
              </AnimatedSection>

              {/* Contact Stats */}
              <AnimatedSection speed="slow">
                <div className="grid grid-cols-2 gap-6">
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
                  <div className="text-center">
                    <div
                      className="font-montserrat font-bold text-2xl"
                      style={{ color: "#FFC107" }}
                    >
                      Grátis
                    </div>
                    <p className="text-sm opacity-80">
                      Primeira Consulta
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className="font-montserrat font-bold text-2xl"
                      style={{ color: "#FFC107" }}
                    >
                      8-15h
                    </div>
                    <p className="text-sm opacity-80">
                      Atendimento Seg-Sex
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
                      Apoio Personalizado
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Quick Contact Info */}
            <div
              className="hidden lg:block"
              style={{ marginLeft: "1.5em" }}
            >
              <div className="grid grid-cols-1 gap-6">
                {/* Phone */}
                <AnimatedSection delay={1} speed="slow">
                  <div
                    className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Phone
                      className="h-10 w-10 mr-4"
                      style={{ color: "#FFC107" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontSize: "18px" }}
                      >
                        Telefone
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        +258 84 123 4567
                      </p>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        +258 87 123 4567
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Email */}
                <AnimatedSection delay={2} speed="slow">
                  <div
                    className="flex items-center p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Mail
                      className="h-10 w-10 mr-4"
                      style={{ color: "#FFC107" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-white mb-1"
                        style={{ fontSize: "18px" }}
                      >
                        Email
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        geral@pptthouse.co.mz
                      </p>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        comercial@ppthouse.co.mz
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Location */}
                <AnimatedSection delay={3} speed="slow">
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
                        Localização
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Rua da Inovação, 123
                      </p>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        1200-456 Cidade de Maputo
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Hours */}
                <AnimatedSection delay={4} speed="slow">
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
                        Horário
                      </h3>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Seg-Sex: 8:00 - 15:30
                      </p>
                      <p
                        className="text-white opacity-80"
                        style={{ fontSize: "14px" }}
                      >
                        Sáb: 8:00 - 13:00
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Introduction */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className="font-montserrat font-semibold mb-4"
                style={{ fontSize: "40px", color: "#3B5998" }}
              >
                Como Podemos Ajudar?
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{ color: "#717182" }}
              >
                Preencha o formulário abaixo com os detalhes do
                seu projeto ou entre em contacto direto
                connosco. A primeira consulta é sempre gratuita
                e sem compromisso.
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection delay={1} speed="slow">
              <Card className="p-2">
                <CardHeader>
                  <CardTitle style={{ color: "#3B5998" }}>
                    Envie-nos uma Mensagem
                  </CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entraremos em
                    contacto consigo brevemente.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        Primeiro Nome *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="João"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        Último Nome *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Silva"
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="joao.silva@empresa.pt"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+351 96 123 4567"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      placeholder="Nome da sua empresa"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">
                      Serviço de Interesse
                    </Label>
                    <select
                      id="service"
                      className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="">
                        Selecione um serviço
                      </option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos mais sobre o seu projeto e objetivos..."
                      className="rounded-lg min-h-32"
                    />
                  </div>

                  <Button
                    className="w-full rounded-lg py-3 font-montserrat font-medium"
                    style={{
                      backgroundColor: "#FF6F00",
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    Enviar Mensagem
                    <Send className="ml-2 h-4 w-4" />
                  </Button>

                  <p
                    className="text-xs text-center"
                    style={{ color: "#717182" }}
                  >
                    Ao enviar este formulário, concorda com a
                    nossa política de privacidade e o tratamento
                    dos seus dados pessoais.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={2} speed="slow">
              <div className="space-y-8">
                <div>
                  <h4
                    className="mb-6"
                    style={{ color: "#3B5998" }}
                  >
                    Informações de Contacto
                  </h4>
                  <p
                    className="mb-8"
                    style={{ color: "#717182" }}
                  >
                    Estamos sempre disponíveis para responder às
                    suas questões e discutir como podemos ajudar
                    o seu negócio a crescer.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-4"
                      >
                        <div
                          className="flex-shrink-0 p-3 rounded-lg"
                          style={{ backgroundColor: "#F1F1F1" }}
                        >
                          <IconComponent
                            className="h-6 w-6"
                            style={{ color: "#6A0DAD" }}
                          />
                        </div>
                        <div>
                          <h4
                            className="font-montserrat font-medium mb-2"
                            style={{ color: "#3B5998" }}
                          >
                            {info.title}
                          </h4>
                          <div className="space-y-1">
                            {info.details.map(
                              (detail, detailIndex) => (
                                <p
                                  key={detailIndex}
                                  className="text-sm"
                                  style={{ color: "#717182" }}
                                >
                                  {detail}
                                </p>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Map Placeholder */}
                <div className="mt-8">
                  <h3
                    className="font-montserrat font-medium mb-4"
                    style={{ color: "#3B5998" }}
                  >
                    Localização
                  </h3>
                  <div
                    className="w-full h-64 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#F1F1F1" }}
                  >
                    <div className="text-center">
                      <MapPin
                        className="h-12 w-12 mx-auto mb-4"
                        style={{ color: "#6A0DAD" }}
                      />
                      <p style={{ color: "#717182" }}>
                        Mapa Interativo
                      </p>
                      <p
                        className="text-sm mt-2"
                        style={{ color: "#717182" }}
                      >
                        Rua da Inovação, 123 - Lisboa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="mb-4" style={{ color: "#3B5998" }}>
                Perguntas Frequentes
              </h2>
              <p style={{ color: "#717182" }}>
                Respostas às questões mais comuns dos nossos
                clientes.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection delay={1}>
              <Card>
                <CardContent className="p-6">
                  <h4
                    className="font-montserrat font-medium mb-3"
                    style={{ color: "#3B5998" }}
                  >
                    Qual é o tempo médio de entrega de um
                    projeto?
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: "#717182" }}
                  >
                    Depende da complexidade do projeto.
                    Apresentações simples: 3-5 dias. Projetos de
                    marketing digital: 2-4 semanas. Formações:
                    consulte-nos.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <Card>
                <CardContent className="p-6">
                  <h4
                    className="font-montserrat font-medium mb-3"
                    style={{ color: "#3B5998" }}
                  >
                    Trabalham com empresas de que dimensão?
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: "#717182" }}
                  >
                    Trabalhamos com startups, PMEs e grandes
                    empresas. Adaptamos as nossas soluções às
                    necessidades e orçamento de cada cliente.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <Card>
                <CardContent className="p-6">
                  <h4
                    className="font-montserrat font-medium mb-3"
                    style={{ color: "#3B5998" }}
                  >
                    Oferecem consultoria gratuita?
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: "#717182" }}
                  >
                    Sim! A primeira consulta é sempre gratuita.
                    Reunimos para conhecer o seu projeto e
                    propor soluções adequadas.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={4}>
              <Card>
                <CardContent className="p-6">
                  <h4
                    className="font-montserrat font-medium mb-3"
                    style={{ color: "#3B5998" }}
                  >
                    Como funciona o processo de trabalho?
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: "#717182" }}
                  >
                    1) Consulta inicial, 2) Proposta
                    personalizada, 3) Desenvolvimento, 4)
                    Revisões, 5) Entrega final. Mantemos
                    comunicação constante.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="pb-16"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection speed="slow">
            <div className="bg-white text-center p-12 rounded-2xl">
              <h2
                className="font-montserrat font-semibold text-white mb-4"
                style={{ fontSize: "28px", color: "#3B5998" }}
              >
                Prontos para Começar?
              </h2>
              <p className="text-lg text-[#717182] opacity-90 mb-8 max-w-2xl mx-auto">
                Não deixe o seu projeto para amanhã. Entre em
                contacto hoje mesmo e descubra como podemos
                transformar as suas ideias em resultados
                extraordinários. A primeira consulta é gratuita!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="px-8 py-3 rounded-lg font-montserrat font-medium"
                  style={{
                    backgroundColor: "#FF6F00",
                    color: "white",
                    fontSize: "18px",
                  }}
                  onClick={() => {
                    window.open("tel:+351211234567", "_self");
                  }}
                >
                  Ligar Agora
                </Button>
                <Button
                  variant="outline"
                  className="text-[#3B5998] px-8 py-3 rounded-lg font-montserrat font-medium border-2 hover:text-white"
                  style={{
                    borderColor: "#3B5998",
                    fontSize: "18px",
                  }}
                  onClick={() => {
                    window.open(
                      "mailto:geral@ppthouse.co.mz",
                      "_self",
                    );
                  }}
                >
                  Enviar Email
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}