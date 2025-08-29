import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AnimatedSection } from "./AnimatedSection";
import {
  CheckCircle,
  Target,
  Users,
  Clock,
  Award,
  Lightbulb,
  ArrowRight,
  Shield,
  TrendingUp,
} from "lucide-react";

interface WhyUsSectionProps {
  onNavigate: (
    page: string,
    params?: { id?: string; slug?: string },
  ) => void;
}

export function WhyUsSection({
  onNavigate,
}: WhyUsSectionProps) {
  const advantages = [
    {
      icon: (
        <Target
          className="h-8 w-8"
          style={{ color: "#FFC107" }}
        />
      ),
      title: "Estratégia Personalizada",
      description:
        "Cada projeto é único. Desenvolvemos soluções à medida das necessidades específicas do seu negócio.",
      highlight: "100% Personalizado",
    },
    {
      icon: (
        <Award
          className="h-8 w-8 text-accent"
          style={{ color: "#FFC107" }}
        />
      ),
      title: "Resultados Comprovados",
      description:
        "Track record de sucesso com mais de 100 projetos realizados e resultados mensuráveis em todos eles.",
      highlight: "100+ Projetos",
    },
    {
      icon: (
        <Users
          className="h-8 w-8"
          style={{ color: "#FFC107" }}
        />
      ),
      title: "Equipa Especializada",
      description:
        "Profissionais certificados com anos de experiência em marketing digital, formação e design de apresentações.",
      highlight: "Certificações",
    },
    {
      icon: (
        <Clock
          className="h-8 w-8"
          style={{ color: "#FFC107" }}
        />
      ),
      title: "Entrega Rápida",
      description:
        "Processos otimizados que garantem entregas no prazo sem comprometer a qualidade do trabalho final.",
      highlight: "Pontualidade",
    },
    {
      icon: (
        <Shield
          className="h-8 w-8"
          style={{ color: "#FFC107" }}
        />
      ),
      title: "Suporte Contínuo",
      description:
        "Não terminamos o trabalho na entrega. Oferecemos suporte contínuo para garantir o sucesso a longo prazo.",
      highlight: "24/7 Support",
    },
    {
      icon: (
        <TrendingUp
          className="h-8 w-8"
          style={{ color: "#FFC107" }}
        />
      ),
      title: "ROI Garantido",
      description:
        "Focamos sempre no retorno do investimento. Cada euro investido connosco gera resultados mensuráveis.",
      highlight: "ROI Positivo",
    },
  ];

  const stats = [
    { value: "300%", label: "Aumento Médio de Tráfego" },
    { value: "150%", label: "Melhoria na Conversão" },
    { value: "98%", label: "Clientes Satisfeitos" },
    { value: "24h", label: "Tempo de Resposta" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              className="font-montserrat font-semibold mb-4"
              style={{ fontSize: "40px", color: "#3B5998" }}
            >
              Por Que Escolher a PowerPoint House?
            </h2>
            <p className="text-lg text-[#717182] max-w-3xl mx-auto">
              Não somos apenas mais uma agência. Somos parceiros
              estratégicos comprometidos com o seu sucesso. Veja
              o que nos diferencia no mercado.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              delay={((index % 3) + 1) as 1 | 2 | 3}
            >
              <div className="text-center bg-white rounded-lg p-6 shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#717182]">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Advantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <AnimatedSection
              key={index}
              delay={((index % 3) + 1) as 1 | 2 | 3}
              speed="slow"
            >
              <Card className="bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <div className="mb-3">
                    <Badge
                      variant="outline"
                      className="mb-2 text-[#717182]"
                    >
                      {advantage.highlight}
                    </Badge>
                  </div>
                  <h3 className="mb-4 text-blue-900">
                    {advantage.title}
                  </h3>
                  <p className="text-[#717182] leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
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
              Pronto Para Transformar o Seu Negócio?
            </h3>
            <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 50 empresas que já escolheram a
              PowerPoint House como parceiro estratégico. Vamos
              discutir como podemos impulsionar o crescimento do
              seu negócio.
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
                Começar Agora
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
                onClick={() => onNavigate?.("about")}
              >
                Saber Mais Sobre Nós
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-white">
                🎯 Consulta inicial gratuita • 📊 Análise
                detalhada do seu negócio • 💡 Proposta
                personalizada
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}