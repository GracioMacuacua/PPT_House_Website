import { Card, CardContent } from "./ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";
import { AnimatedSection } from "./AnimatedSection";
import { Star, Quote } from "lucide-react";

interface TestimonialsSection {
  onNavigate: (
    page: string,
    params?: { id?: string; slug?: string },
  ) => void;
}

export function TestimonialsSection({
  onNavigate,
}: TestimonialsSection) {
  const testimonials = [
    {
      id: "1",
      name: "João Silva",
      position: "CEO",
      company: "TechStart",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content:
        "A PowerPoint House transformou completamente a nossa presença digital. Os resultados superaram todas as expectativas - triplicamos o nosso tráfego orgânico em apenas 6 meses!",
      rating: 5,
      project: "Marketing Digital",
    },
    {
      id: "2",
      name: "Maria Costa",
      position: "Diretora de RH",
      company: "FinanceCorp",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content:
        "A formação digital que recebemos foi excepcional. A nossa equipa ganhou competências que aumentaram significativamente a produtividade. Recomendo vivamente!",
      rating: 5,
      project: "Formação Empresarial",
    },
    {
      id: "3",
      name: "Pedro Santos",
      position: "Founder",
      company: "InnovaCorp",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content:
        "A apresentação criada pela PowerPoint House foi fundamental para captarmos €2M de investimento. O storytelling e design foram perfeitos para o nosso pitch.",
      rating: 5,
      project: "Apresentações",
    },
    {
      id: "4",
      name: "Ana Ferreira",
      position: "Marketing Manager",
      company: "GrowthCorp",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content:
        "Profissionais excepcionais com uma abordagem estratégica única. Conseguiram aumentar a nossa taxa de conversão em 150% com uma estratégia bem estruturada.",
      rating: 5,
      project: "Marketing Digital",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              className="font-montserrat font-semibold mb-4"
              style={{ fontSize: "40px", color: "#3B5998" }}
            >
              O Que Dizem Os Nossos Clientes
            </h2>
            <p className="text-lg text-[#717182] max-w-3xl mx-auto">
              A nossa maior satisfação são os resultados que
              alcançamos para os nossos clientes. Veja o que
              dizem sobre a nossa parceria e os impactos
              positivos nos seus negócios.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.id}
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
                              className="h-4 w-4 text-yellow-400 fill-current"
                            />
                          ),
                        )}
                      </div>
                      <p className="text-[#717182] leading-relaxed mb-6 italic">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
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
                        <div className="font-semibold text-gray-800">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.position} •{" "}
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className="text-xs text-primary font-medium px-2 py-1 rounded"
                        style={{ backgroundColor: "#FFC107" }}
                      >
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection speed="slow">
          <div
            className="mt-20 text-center p-12 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, #3B5998 0%, #6A0DAD 100%)",
            }}
          >
            <div className="flex justify-center items-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  4.9/5
                </div>
                <div className="text-sm text-white mt-1">
                  Avaliação Média
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  50+
                </div>
                <div className="text-sm text-white">
                  Clientes Satisfeitos
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  98%
                </div>
                <div className="text-sm text-white">
                  Taxa de Recomendação
                </div>
              </div>
            </div>
            <h3 className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Junte-se aos Nossos Clientes Satisfeitos
            </h3>
            <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Mais de 50 empresas já transformaram os seus
              negócios connosco. Seja a próxima história de
              sucesso!
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}