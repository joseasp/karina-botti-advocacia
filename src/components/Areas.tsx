import { Landmark, Scale, FileText, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const areas = [
  {
    icon: Landmark,
    title: "Administrativo & Municipal",
    description:
      "Atuação em licitações, contratos administrativos, processos disciplinares e consultoria técnica para prefeituras e câmaras municipais. Experiência na elaboração e revisão de projetos de lei, decretos e atos normativos, além da orientação em processos administrativos e tributários.",
  },
  {
    icon: Scale,
    title: "Contencioso Cível",
    description:
      "Atuação em demandas judiciais envolvendo responsabilidade civil, contratos, indenizações e direito do consumidor, com estratégia processual individualizada e foco na solução eficiente de conflitos.",
  },
  {
    icon: FileText,
    title: "Redação Legislativa",
    description:
      "Elaboração e análise técnica de projetos de lei, decretos, portarias e outros atos normativos municipais, com acompanhamento das Comissões Permanentes e Processantes e interpretação do Regimento Interno.",
  },
  {
    icon: Users,
    title: "Contencioso Criminal",
    description:
      "Defesa técnica em processos criminais, acompanhamento em todas as fases processuais e elaboração de estratégias defensivas com atuação ética e comprometida.",
  },
  {
    icon: Lightbulb,
    title: "Coaching Jurídico e Desenvolvimento Pessoal",
    description:
      "Aplicação dos princípios do Coaching Integral Sistêmico no ambiente jurídico, promovendo liderança, clareza e eficiência na gestão pública e de equipes.",
  },
];

const Areas = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="areas" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-3xl mx-auto mb-16"
          data-animate="fade-in-up"
          data-animate-delay="0.2s"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Áreas de Atuação
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Atuação Jurídica e Consultoria Especializada
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções técnicas e personalizadas em Direito Público, Administrativo, Cível e Criminal, com foco em prefeituras, câmaras municipais e instituições públicas.
          </p>
        </div>

        <div
          className="max-w-6xl mx-auto"
          data-animate="fade-in-up"
          data-animate-delay="0.4s"
          data-animate-duration="1.1s"
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
          >
            <CarouselContent className="-ml-4 py-4">
              {areas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <CarouselItem key={area.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full">
                      <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-gold/20 hover:border-gold/40 bg-card">
                        <CardContent className="p-8 flex flex-col h-full">
                          <div className="w-16 h-16 bg-burgundy-dark/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300 border border-gold/20">
                            <Icon className="h-8 w-8 text-burgundy-dark" />
                          </div>
                          <h3 className="text-2xl font-serif font-semibold text-burgundy-dark mb-4">
                            {area.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed flex-grow">
                            {area.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-burgundy-dark/60 border-gold/40 hover:bg-burgundy-dark/80 hover:border-gold text-gold" />
            <CarouselNext className="hidden md:flex -right-12 bg-burgundy-dark/60 border-gold/40 hover:bg-burgundy-dark/80 hover:border-gold text-gold" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Areas;
