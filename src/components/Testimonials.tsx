import { useState } from "react";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  keyPhrase: string;
  fullText: string;
  photo?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Geovania Oliveira",
    role: "Ex-Prefeita e Vereadora atual",
    organization: "Cuparaque",
    keyPhrase: "Conheço bem a competência da senhora",
    fullText: "Quando eu fiquei sabendo que a senhora ia trabalhar aqui na Câmara Municipal eu fiquei muito feliz... já trabalhamos juntas no ano de 2013 a 2016 na gestão que fui prefeita... conheço bem a competência da senhora."
  },
  {
    id: 2,
    name: "Moacir Duca",
    role: "Presidente da Câmara",
    organization: "Alvarenga",
    keyPhrase: "Fomos privilegiados com seu trabalho",
    fullText: "Estávamos hoje lembrando do seu belo trabalho conosco aqui no legislativo de Alvarenga... como presidente da Câmara e os demais vereadores fomos privilegiados com seu trabalho... conseguimos realizar projetos importantes e até histórico... reconstrução do regimento interno e o projeto Câmara Itinerante."
  },
  {
    id: 3,
    name: "Salome Araujo",
    role: "Ex-Presidente da Câmara (2012)",
    organization: "Alvarenga",
    keyPhrase: "Contribuição valiosa na elaboração da Lei Orgânica",
    fullText: "Lembro quando iniciou o trabalho comigo na Câmara?... Sua presteza, conhecimento jurídico, responsabilidade e atenção com todos marcaram aquele tempo. Você deu uma contribuição valiosa na elaboração da Lei Orgânica."
  },
  {
    id: 4,
    name: "Helcio Laureano da Silva",
    role: "Vereador, 1º Secretário da Mesa Diretora (2025/2028)",
    organization: "Cuparaque",
    keyPhrase: "Grande evolução em menos de um ano",
    fullText: "Parabenizo a Dra. Karina pelo brilhante trabalho prestado à Câmara Municipal de Cuparaque. Destaco a sua organização e observância às Leis orgânicas e regimento interno... Em menos um ano de serviços prestados junto à Câmara já se vê grande evolução."
  },
  {
    id: 5,
    name: "José Carlos Afonso (Ze Carlin)",
    role: "Secretário da Mesa Diretora (2025/2028)",
    organization: "Cuparaque",
    keyPhrase: "Profissionalismo em todos os momentos",
    fullText: "Uma advogada que demonstrou grande conhecimento e profissionalismo em todos os momentos, sua positividade agrega muito valor à nossa equipe. Seu senso de comprometimento faz toda diferença."
  },
  {
    id: 6,
    name: "Kauan Souza Rodrigues",
    role: "Presidente da Câmara (2025/2026)",
    organization: "Alvarenga",
    keyPhrase: "Ótima profissional, mantém nossa câmara organizada",
    fullText: "Dra Karina, obrigado pelos serviços prestados tem ajudado demais a manter nossa câmara organizada e fazendo o certo! Já escutei falar bem e agora sou prova, ótima profissional."
  },
  {
    id: 7,
    name: "Helcio Goiabeira",
    role: "Vereador",
    organization: "Goiabeira",
    keyPhrase: "Ética, disposição e profissionalismo",
    fullText: "Falar do seu trabalho é fácil sua ética sua disposição e profissionalismo... sempre serei grato a você pela sua dedicação e seu desempenho. Você é uma guerreira sempre lutando por uma causa nobre."
  }
];

const Testimonials = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 bg-paper-light scroll-animate">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy-dark mb-4">
            Vozes que Confiam
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Depoimentos de gestores públicos que experimentaram excelência jurídica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => {
            const isExpanded = expandedId === testimonial.id;
            
            return (
              <Card
                key={testimonial.id}
                onClick={() => handleCardClick(testimonial.id)}
                className={`cursor-pointer transition-all duration-500 ease-in-out bg-background border-gold/20 hover:shadow-lg hover:border-gold/40 ${
                  isExpanded 
                    ? 'md:col-span-2 lg:col-span-3 shadow-xl border-gold/60' 
                    : expandedId !== null 
                    ? 'opacity-60 scale-[0.98]' 
                    : ''
                }`}
              >
                <div className={`p-6 ${isExpanded ? 'md:p-8' : ''}`}>
                  <div className={`flex gap-4 ${isExpanded ? 'md:gap-6 items-start' : 'items-center'}`}>
                    {/* Photo */}
                    <div className={`flex-shrink-0 rounded-full bg-burgundy/10 flex items-center justify-center border-2 border-gold/30 ${
                      isExpanded ? 'w-20 h-20 md:w-24 md:h-24' : 'w-16 h-16'
                    }`}>
                      {testimonial.photo ? (
                        <img 
                          src={testimonial.photo} 
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <User className={`text-burgundy-dark ${isExpanded ? 'w-10 h-10 md:w-12 md:h-12' : 'w-8 h-8'}`} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-burgundy-dark mb-1 ${
                        isExpanded ? 'text-xl md:text-2xl' : 'text-lg'
                      }`}>
                        {testimonial.name}
                      </h3>
                      <p className={`text-foreground/70 mb-2 ${
                        isExpanded ? 'text-base' : 'text-sm'
                      }`}>
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gold font-medium mb-3">
                        {testimonial.organization}
                      </p>

                      {!isExpanded && (
                        <p className="text-sm italic text-foreground/80 line-clamp-2">
                          "{testimonial.keyPhrase}"
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-6 md:mt-8 animate-in fade-in duration-500">
                      <div className="relative bg-burgundy/5 rounded-lg p-6 md:p-8 border-l-4 border-gold">
                        <svg 
                          className="absolute top-4 left-4 w-8 h-8 text-gold/30" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                        </svg>
                        <p className="text-base md:text-lg text-foreground/90 leading-relaxed pl-8 italic">
                          {testimonial.fullText}
                        </p>
                      </div>
                      <p className="text-center text-sm text-foreground/60 mt-4">
                        Clique novamente para fechar
                      </p>
                    </div>
                  )}

                  {!isExpanded && (
                    <p className="text-xs text-center text-foreground/50 mt-4">
                      Clique para ler mais
                    </p>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
