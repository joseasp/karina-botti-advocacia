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
    role: "Vereadora / Ex-Prefeita",
    organization: "Cuparaque",
    keyPhrase: "Já trabalhamos juntas e agora juntas na Câmara. Feliz porque eu já conheço bem a competência da senhora.",
    fullText: "Eu quero falar a verdade. Quando eu fiquei sabendo que a senhora ia trabalhar aqui na Câmara Municipal eu fiquei muito feliz, porque já trabalhamos juntas no ano de 2013 a 2016 na gestão que fui prefeita, e agora juntas na Câmara. Feliz porque eu já conheço bem a competência da senhora. Quero parabenizar e agradecer de coração, pelo excelente trabalho, que a senhora já realizou e agora está realizando em nosso Município, sempre trabalhando com dedicação, comprometimento e profissionalismo. Agradeço, porque sempre que eu preciso, que envio uma mensagem, a senhora está disposta para me ajudar. Obrigada!",
    size: 'large'
  },
  {
    id: 2,
    name: "Moacir Duca",
    role: "Ex-Presidente da Câmara",
    organization: "Alvarenga",
    keyPhrase: "Fomos privilegiados com seu trabalho. Conseguimos realizar projetos importantes e até históricos.",
    fullText: "Bom Dia Dra. Karine. Estávamos hoje lembrando do seu belo trabalho conosco aqui no legislativo de Alvarenga. Eu como presidente da Câmara e os demais vereadores fomos privilegiados com seu trabalho e com sua competência ao nosso lado. Com sua assessoria conseguimos realizar projetos importantes e até históricos, lembra? Homenagem aos nomes importantes de Alvarenga, reconstrução do regimento interno e o projeto Câmara Itinerante, que foi um grande feito, na verdade foi histórico. Realmente foi um grande prazer ter trabalhado com você. Valeu Dra. Karina, forte abraço.",
    size: 'medium'
  },
  {
    id: 3,
    name: "Salomé Araújo",
    role: "Ex-Presidente da Câmara",
    organization: "Alvarenga",
    keyPhrase: "Sua presteza, conhecimento jurídico, responsabilidade e atenção com todos marcaram aquele tempo.",
    fullText: "Sempre me lembro do seu excelente trabalho como advogada da Câmara Municipal de Alvarenga, em 2012, período em que fui presidente. Sua presteza, conhecimento jurídico, responsabilidade e atenção com todos marcaram aquele tempo. Você deu uma contribuição valiosa na elaboração da Lei Orgânica, demonstrando competência e dedicação. Só tenho a agradecer e a recomendar o seu trabalho, pela seriedade e confiança que transmite. Um grande abraço.",
    size: 'small'
  },
  {
    id: 4,
    name: "Hélcio Laureano da Silva",
    role: "Vereador e Primeiro Secretário",
    organization: "Cuparaque",
    keyPhrase: "Em menos de um ano de serviços prestados já se vê grande evolução e melhorias.",
    fullText: "Parabenizo a Dra. Karina pelo brilhante trabalho prestado à Câmara Municipal de Cuparaque. Destaco a sua organização e observância às Leis Orgânicas e ao Regimento Interno do município, sempre nos orientando. Trabalho esse que ficava muito a desejar em gestões passadas. Em menos de um ano de serviços prestados junto à Câmara já se vê grande evolução e melhorias. Como pessoa, uma ímpar.",
    size: 'medium'
  },
  {
    id: 5,
    name: "José Carlos Afonso (Zé Carlin)",
    role: "Vereador e Secretário da Mesa Diretora",
    organization: "Cuparaque",
    keyPhrase: "Seu senso de comprometimento faz toda diferença para entrega de bons resultados.",
    fullText: "Dra. Karina, uma advogada que demonstrou grande conhecimento e profissionalismo em todos os momentos. Sua positividade agrega muito valor à nossa equipe. Seu senso de comprometimento faz toda diferença para entrega de bons resultados.",
    size: 'large'
  },
  {
    id: 6,
    name: "Kauan Souza Rodrigues",
    role: "Presidente da Câmara",
    organization: "Alvarenga",
    keyPhrase: "Já escutei falar bem e agora sou prova. Ótima profissional.",
    fullText: "Dra. Karina, obrigado pelos serviços prestados. Tem ajudado demais a manter nossa Câmara organizada e fazendo o certo! Já escutei falar bem e agora sou prova. Ótima profissional.",
    size: 'small'
  },
  {
    id: 7,
    name: "Hélcio",
    role: "Vereador",
    organization: "Goiabeira",
    keyPhrase: "Você é uma guerreira, sempre lutando por uma causa nobre.",
    fullText: "Falar do seu trabalho é fácil: sua ética, sua disposição e profissionalismo, o empenho em prestar o melhor atendimento. Eu sempre serei grato a você pela sua dedicação e seu desempenho. Você é uma guerreira, sempre lutando por uma causa nobre.",
    size: 'medium'
  }
];

const Testimonials = () => {
  // Multiplicar cards para ter pool suficiente (21 cards de 7 originais)
  const allCards = testimonials.length < 20
    ? [...testimonials, ...testimonials, ...testimonials]
    : testimonials;

  // Inicializar direto com ordem normal
  const [carouselCards] = useState<Testimonial[]>(allCards);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

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

        {/* Carrossel com animação de entrada suave */}
        <div className="animate-in fade-in duration-500">
          <CarouselTrack
            cards={carouselCards}
            onVisibleChange={() => {}}
            onCardClick={setSelectedTestimonial}
            autoplayDelay={8000}
            position="single"
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
