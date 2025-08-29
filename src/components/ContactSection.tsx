import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { AnimatedSection } from "./AnimatedSection";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

interface ContactSectionProps {
  onNavigate?: (page: string, params?: { id?: string }) => void;
}

export function ContactSection({
  onNavigate,
}: ContactSectionProps) {
  return (
    <section
      id="contato"
      className="py-20"
      style={{ backgroundColor: "#F1F1F1" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              className="font-montserrat font-semibold mb-4"
              style={{ fontSize: "40px", color: "#3B5998" }}
            >
              Entre em Contacto
            </h2>
            <p className="text-lg text-[#717182] max-w-3xl mx-auto">
              Estamos prontos para discutir seu próximo projeto
              e mostrar como podemos ajudar sua empresa a
              crescer.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection delay={1} speed="slow">
            <Card className="p-8 bg-white rounded-2xl shadow-lg">
              <h3
                className="font-montserrat font-semibold mb-6 text-2xl"
                style={{ color: "#3B5998" }}
              >
                Envie sua Mensagem
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block font-montserrat font-medium mb-2"
                      style={{ color: "#3B5998" }}
                    >
                      Nome *
                    </label>
                    <Input
                      type="text"
                      placeholder="Seu nome completo"
                      className="rounded-lg border-2"
                      style={{ borderColor: "#F1F1F1" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-montserrat font-medium mb-2"
                      style={{ color: "#3B5998" }}
                    >
                      Empresa
                    </label>
                    <Input
                      type="text"
                      placeholder="Nome da sua empresa"
                      className="rounded-lg border-2"
                      style={{ borderColor: "#F1F1F1" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block font-montserrat font-medium mb-2"
                      style={{ color: "#3B5998" }}
                    >
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="rounded-lg border-2"
                      style={{ borderColor: "#F1F1F1" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-montserrat font-medium mb-2"
                      style={{ color: "#3B5998" }}
                    >
                      Telefone *
                    </label>
                    <Input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="rounded-lg border-2"
                      style={{ borderColor: "#F1F1F1" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block font-montserrat font-medium mb-2"
                    style={{ color: "#3B5998" }}
                  >
                    Serviço de Interesse
                  </label>
                  <select
                    className="w-full p-3 rounded-lg border-2 bg-white"
                    style={{ borderColor: "#F1F1F1" }}
                  >
                    <option value="">
                      Selecione um serviço
                    </option>
                    <option value="marketing">
                      Marketing Digital
                    </option>
                    <option value="formacoes">
                      Formações Empresariais
                    </option>
                    <option value="apresentacoes">
                      Criação de Apresentações
                    </option>
                    <option value="consultoria">
                      Consultoria Personalizada
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    className="block font-montserrat font-medium mb-2"
                    style={{ color: "#3B5998" }}
                  >
                    Mensagem *
                  </label>
                  <Textarea
                    placeholder="Descreva seu projeto ou necessidade..."
                    rows={5}
                    className="rounded-lg border-2 resize-none"
                    style={{ borderColor: "#F1F1F1" }}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-montserrat font-medium"
                  style={{
                    backgroundColor: "#FF6F00",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection delay={2} speed="slow">
            <div className="space-y-8">
              <div>
                <h3
                  className="font-montserrat font-semibold mb-6 text-2xl"
                  style={{ color: "#3B5998" }}
                >
                  Informações de Contacto
                </h3>
                <p className="text-lg text-[#717182] mb-8">
                  Nossa equipe está sempre disponível para
                  esclarecer suas dúvidas e apresentar as
                  melhores soluções para seu negócio.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div
                      className="p-3 rounded-lg mr-4"
                      style={{ backgroundColor: "#6A0DAD" }}
                    >
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4
                        className="font-montserrat font-semibold"
                        style={{ color: "#3B5998" }}
                      >
                        Email
                      </h4>
                      <p className="text-[#717182]">
                        contacto@ppthouse.co.mz
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div
                      className="p-3 rounded-lg mr-4"
                      style={{ backgroundColor: "#6A0DAD" }}
                    >
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4
                        className="font-montserrat font-semibold"
                        style={{ color: "#3B5998" }}
                      >
                        Telefone
                      </h4>
                      <p className="text-[#717182]">
                        +258 84 123 4567
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div
                      className="p-3 rounded-lg mr-4"
                      style={{ backgroundColor: "#6A0DAD" }}
                    >
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4
                        className="font-montserrat font-semibold"
                        style={{ color: "#3B5998" }}
                      >
                        Endereço
                      </h4>
                      <p className="text-[#717182]">
                        Incubadora de Negócios da UEM - Cidade
                        de Maputo
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div
                      className="p-3 rounded-lg mr-4"
                      style={{ backgroundColor: "#6A0DAD" }}
                    >
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4
                        className="font-montserrat font-semibold"
                        style={{ color: "#3B5998" }}
                      >
                        Horário de Atendimento
                      </h4>
                      <p className="text-[#717182]">
                        Seg - Sex: 9h às 15h
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}