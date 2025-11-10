import { useState, useEffect } from "react";
import { User } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  keyPhrase: string;
  fullText: string;
  photo?: string;
  size: 'small' | 'medium' | 'large';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Geovania Oliveira",
    role: "Ex-Prefeita e Vereadora atual",
    organization: "Cuparaque",
    keyPhrase: "Já trabalhamos juntas... e agora juntas na Câmara. Feliz porque eu já conheço bem a competência da senhora.",
    fullText: "Quando eu fiquei sabendo que a senhora ia trabalhar aqui na Câmara Municipal eu fiquei muito feliz... já trabalhamos juntas no ano de 2013 a 2016 na gestão que fui prefeita... conheço bem a competência da senhora.",
    size: 'large'
  },
  {
    id: 2,
    name: "Moacir Duca",
    role: "Presidente da Câmara",
    organization: "Alvarenga",
    keyPhrase: "Fomos privilegiados com seu trabalho e conseguimos realizar projetos importantes e até histórico.",
    fullText: "Estávamos hoje lembrando do seu belo trabalho conosco aqui no legislativo de Alvarenga... como presidente da Câmara e os demais vereadores fomos privilegiados com seu trabalho... conseguimos realizar projetos importantes e até histórico... reconstrução do regimento interno e o projeto Câmara Itinerante.",
    size: 'medium'
  },
  {
    id: 3,
    name: "Salome Araujo",
    role: "Ex-Presidente da Câmara (2012)",
    organization: "Alvarenga",
    keyPhrase: "Sua presteza, conhecimento jurídico, responsabilidade e atenção com todos marcaram aquele tempo.",
    fullText: "Lembro quando iniciou o trabalho comigo na Câmara?... Sua presteza, conhecimento jurídico, responsabilidade e atenção com todos marcaram aquele tempo. Você deu uma contribuição valiosa na elaboração da Lei Orgânica.",
    size: 'small'
  },
  {
    id: 4,
    name: "Helcio Laureano da Silva",
    role: "Vereador, 1º Secretário da Mesa Diretora (2025/2028)",
    organization: "Cuparaque",
    keyPhrase: "Em menos um ano de serviços prestados já se vê grande evolução e melhorias.",
    fullText: "Parabenizo a Dra. Karina pelo brilhante trabalho prestado à Câmara Municipal de Cuparaque. Destaco a sua organização e observância às Leis orgânicas e regimento interno... Em menos um ano de serviços prestados junto à Câmara já se vê grande evolução.",
    size: 'medium'
  },
  {
    id: 5,
    name: "José Carlos Afonso (Ze Carlin)",
    role: "Secretário da Mesa Diretora (2025/2028)",
    organization: "Cuparaque",
    keyPhrase: "Seu senso de comprometimento faz toda diferença para entrega de bons resultados.",
    fullText: "Uma advogada que demonstrou grande conhecimento e profissionalismo em todos os momentos, sua positividade agrega muito valor à nossa equipe. Seu senso de comprometimento faz toda diferença.",
    size: 'large'
  },
  {
    id: 6,
    name: "Kauan Souza Rodrigues",
    role: "Presidente da Câmara (2025/2026)",
    organization: "Alvarenga",
    keyPhrase: "Já escutei falar bem e agora sou prova: ótima profissional.",
    fullText: "Dra Karina, obrigado pelos serviços prestados tem ajudado demais a manter nossa câmara organizada e fazendo o certo! Já escutei falar bem e agora sou prova, ótima profissional.",
    size: 'small'
  },
  {
    id: 7,
    name: "Helcio Goiabeira",
    role: "Vereador",
    organization: "Goiabeira",
    keyPhrase: "Você é uma guerreira sempre lutando por uma causa nobre.",
    fullText: "Falar do seu trabalho é fácil sua ética sua disposição e profissionalismo... sempre serei grato a você pela sua dedicação e seu desempenho. Você é uma guerreira sempre lutando por uma causa nobre.",
    size: 'medium'
  }
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-20 bg-gradient-to-br from-burgundy/5 via-paper-light to-gold/5 scroll-animate">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy-dark mb-4">
            Vozes que Confiam
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            O que dizem sobre o trabalho
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem 
                key={testimonial.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div
                  className={cn(
                    "bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl",
                    "border-l-4 border-gold h-full flex flex-col",
                    // Alturas variadas para desktop/tablet
                    testimonial.size === 'large' && "md:min-h-[340px]",
                    testimonial.size === 'medium' && "md:min-h-[300px]",
                    testimonial.size === 'small' && "md:min-h-[260px]",
                    // Mobile: altura mínima fixa
                    "min-h-[280px]"
                  )}
                >
                  {/* Frase em destaque - PRIMEIRO e PRINCIPAL */}
                  <p className="text-base md:text-lg font-medium text-burgundy-dark mb-4 italic leading-relaxed flex-grow">
                    "{testimonial.keyPhrase}"
                  </p>
                  
                  {/* Separador visual */}
                  <div className="border-t border-gold/20 pt-4 mt-auto">
                    {/* Foto pequena circular e info */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                        {testimonial.photo ? (
                          <img 
                            src={testimonial.photo} 
                            alt={testimonial.name} 
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <User className="w-5 h-5 text-burgundy-dark" />
                        )}
                      </div>
                      
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-burgundy-dark truncate">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-foreground/60 truncate">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-gold font-medium truncate">
                          {testimonial.organization}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Setas de navegação grandes e estilizadas */}
          <CarouselPrevious 
            className="
              -left-4 md:-left-12 
              w-12 h-12 md:w-16 md:h-16
              bg-white hover:bg-burgundy-dark hover:text-white
              border-2 border-burgundy-dark
              shadow-lg
              transition-all duration-300
              disabled:opacity-30
            " 
          />
          <CarouselNext 
            className="
              -right-4 md:-right-12
              w-12 h-12 md:w-16 md:h-16
              bg-white hover:bg-burgundy-dark hover:text-white
              border-2 border-burgundy-dark
              shadow-lg
              transition-all duration-300
              disabled:opacity-30
            " 
          />
        </Carousel>

        {/* Indicadores de progresso (dots) */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Navegação de depoimentos">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === index 
                  ? "w-8 bg-burgundy-dark" 
                  : "w-2 bg-gold/30 hover:bg-gold/50"
              )}
              aria-label={`Ir para depoimento ${index + 1}`}
              aria-current={current === index ? "true" : "false"}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
