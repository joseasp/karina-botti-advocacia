import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { User } from "lucide-react";
import { CarouselTrack } from "./Testimonials/CarouselTrack";
import { shuffleCards } from "./Testimonials/utils";

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
  // Multiplicar cards para ter pool suficiente (21 cards de 7 originais)
  const allCards = testimonials.length < 20
    ? [...testimonials, ...testimonials, ...testimonials]
    : testimonials;

  const [topTrackCards, setTopTrackCards] = useState<Testimonial[]>([]);
  const [bottomTrackCards, setBottomTrackCards] = useState<Testimonial[]>([]);
  const [topVisible, setTopVisible] = useState<number[]>([]);
  const [bottomVisible, setBottomVisible] = useState<number[]>([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    // Inicializar trilhas com cards embaralhados
    const shuffled = shuffleCards(allCards);
    const midpoint = Math.floor(shuffled.length / 2);
    
    setTopTrackCards(shuffled.slice(0, midpoint));
    setBottomTrackCards(shuffled.slice(midpoint));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-burgundy/5 via-paper-light to-gold/5 scroll-animate">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate-slow">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-burgundy-dark mb-4">
            Vozes que Confiam
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            O que dizem sobre o trabalho
          </p>
        </div>

        {/* Container das duas trilhas */}
        <div className="space-y-6">
          {/* TRILHA SUPERIOR */}
          <CarouselTrack
            cards={topTrackCards}
            onVisibleChange={setTopVisible}
            onCardClick={setSelectedTestimonial}
            autoplayDelay={8000}
            position="top"
          />

          {/* TRILHA INFERIOR */}
          <CarouselTrack
            cards={bottomTrackCards}
            onVisibleChange={setBottomVisible}
            onCardClick={setSelectedTestimonial}
            autoplayDelay={9500}
            position="bottom"
          />
        </div>
      </div>

      <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center">
                {selectedTestimonial?.photo ? (
                  <img 
                    src={selectedTestimonial.photo} 
                    alt={selectedTestimonial.name} 
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                ) : (
                  <User className="w-6 h-6 text-burgundy-dark" />
                )}
              </div>
              <div>
                <p className="text-lg font-semibold text-burgundy-dark">{selectedTestimonial?.name}</p>
                <p className="text-sm text-foreground/60">{selectedTestimonial?.role}</p>
                <p className="text-sm text-gold font-medium">{selectedTestimonial?.organization}</p>
              </div>
            </DialogTitle>
          </DialogHeader>
          <p className="text-base text-foreground/80 leading-relaxed mt-4">
            {selectedTestimonial?.fullText}
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Testimonials;
