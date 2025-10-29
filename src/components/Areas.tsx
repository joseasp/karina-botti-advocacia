import { Landmark, Scale, FileText, Users, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import areasBackground from "@/assets/areas-background.jpg";

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="areas" className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={areasBackground}
          alt="Background de áreas de atuação"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/95 via-burgundy-dark/90 to-burgundy/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-3xl mx-auto mb-16 opacity-0"
          data-animate="fade-in-up"
          data-animate-delay="0.2s"
          data-animate-duration="1.1s"
        >
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Áreas de Atuação
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-paper-light mt-4 mb-6">
            Atuação Jurídica e Consultoria Especializada
          </h2>
          <p className="text-lg text-paper/80">
            Soluções técnicas e personalizadas em Direito Público, Administrativo, Cível e Criminal, com foco em prefeituras, câmaras municipais e instituições públicas.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {areas.map((area, index) => {
                const Icon = area.icon;
                const delay = 0.3 + index * 0.12;
                const animationDelay = `${delay.toFixed(2)}s`;
                return (
                  <div
                    key={area.title}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_45%] px-4 opacity-0"
                    data-animate="fade-in-up"
                    data-animate-delay={animationDelay}
                    data-animate-duration="0.9s"
                  >
                    <Card className="group hover:shadow-2xl transition-all duration-300 border-none bg-white/95 backdrop-blur-sm hover:-translate-y-2 h-full">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-burgundy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                          <Icon className="h-8 w-8 text-paper-light" />
                        </div>
                        <h3 className="text-2xl font-serif font-semibold text-burgundy-dark mb-4">
                          {area.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {area.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gold hover:bg-gold-light text-burgundy-dark p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gold hover:bg-gold-light text-burgundy-dark p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Areas;
