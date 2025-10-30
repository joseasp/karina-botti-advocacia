import { Building2, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import alvarengaLogo from "@/assets/logos/alvarenga.png";
import cuparaqueLogo from "@/assets/logos/cuparaque.jpg";
import galileiaLogo from "@/assets/logos/galileia.png";

interface Experience {
  name: string;
  type: "Prefeitura" | "Câmara Municipal";
  logo?: string;
  description: string;
  period: string;
}

const experiences: Experience[] = [
  {
    name: "Cuparaque",
    type: "Prefeitura",
    logo: cuparaqueLogo,
    description:
      "Assessoria e procuradoria jurídica, elaboração de pareceres, projetos de lei, decretos e representação judicial.",
    period: "2009 a 2019",
  },
  {
    name: "Alvarenga",
    type: "Prefeitura",
    logo: alvarengaLogo,
    description:
      "Assessoria ao prefeito e órgãos municipais, revisão de anteprojetos de lei e orientação em processos administrativos e tributários.",
    period: "2009 a 2017",
  },
  {
    name: "Goiabeira",
    type: "Prefeitura",
    description:
      "Consultoria nos setores de tributação, recursos humanos e SAAE; análise de legislação e emissão de pareceres.",
    period: "2018 a 2019",
  },
  {
    name: "Alvarenga",
    type: "Câmara Municipal",
    logo: alvarengaLogo,
    description:
      "Assessoria técnica em redação legislativa, Comissões Permanentes e Processantes, análise de prestações de contas e interpretação do Regimento Interno.",
    period: "2013 a 2018",
  },
  {
    name: "Galiléia",
    type: "Câmara Municipal",
    logo: galileiaLogo,
    description:
      "Apoio jurídico às comissões e acompanhamento de reuniões legislativas, com foco em controle de legalidade e técnica legislativa.",
    period: "2013 a 2016",
  },
];

const Experience = () => {
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section id="experiencia" className="py-24 bg-burgundy-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Experiência
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-paper-light mt-4 mb-6">
            Atuação em Administração Pública
          </h2>
          <p className="text-lg text-paper/80">
            Ampla experiência em assessoria jurídica para prefeituras e câmaras municipais de Minas Gerais, com profundo conhecimento da realidade administrativa local e foco em soluções legais eficazes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
          >
            <CarouselContent className="-ml-4">
              {experiences.map((exp, index) => (
                <CarouselItem key={`${exp.name}-${exp.type}-${index}`} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-burgundy/40 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-300 flex flex-col">
                    {/* Logo/Brasão */}
                    <div className="flex justify-center mb-6">
                      {exp.logo ? (
                        <div className="w-32 h-32 flex items-center justify-center rounded-full bg-paper/10 p-4 border-2 border-gold/30">
                          <img
                            src={exp.logo}
                            alt={`Brasão de ${exp.name}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-32 h-32 flex items-center justify-center rounded-full bg-paper/10 border-2 border-gold/30">
                          {exp.type === "Prefeitura" ? (
                            <Building2 className="w-16 h-16 text-gold/60" />
                          ) : (
                            <Users className="w-16 h-16 text-gold/60" />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Nome do Município */}
                    <h3 className="text-2xl font-serif font-bold text-paper-light text-center mb-2">
                      {exp.name}
                    </h3>

                    {/* Tipo (Badge) */}
                    <div className="flex justify-center mb-4">
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/20 border border-gold/40 rounded-full text-xs font-semibold uppercase tracking-wider text-gold">
                        {exp.type === "Prefeitura" ? (
                          <Building2 className="w-3.5 h-3.5" />
                        ) : (
                          <Users className="w-3.5 h-3.5" />
                        )}
                        {exp.type}
                      </span>
                    </div>

                    {/* Período */}
                    <div className="text-center mb-6">
                      <span className="text-sm uppercase tracking-wider text-gold font-semibold">
                        {exp.period}
                      </span>
                    </div>

                    {/* Descrição */}
                    <p className="text-paper/80 leading-relaxed text-center flex-grow">
                      {exp.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-burgundy/60 border-gold/40 hover:bg-burgundy/80 hover:border-gold text-gold" />
            <CarouselNext className="hidden md:flex -right-12 bg-burgundy/60 border-gold/40 hover:bg-burgundy/80 hover:border-gold text-gold" />
          </Carousel>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-burgundy/30 border border-gold/20 rounded-2xl p-8">
          <p className="text-paper/90 text-lg leading-relaxed text-center">
            Com uma trajetória consolidada em Direito Público, oferece assessoria técnica completa em licitações, contratos administrativos, processos disciplinares e redação legislativa — sempre pautada pela ética, eficiência e compromisso com a legalidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

