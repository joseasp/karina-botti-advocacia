import { useState, useEffect } from "react";
import { User, Quote, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
    role: "Vereadora / Ex-Prefeita",
    organization: "Cuparaque",
    keyPhrase:
      "Já trabalhamos juntas e agora juntas na Câmara. Feliz porque eu já conheço bem a competência da senhora.",
    fullText:
      "Eu quero falar a verdade. Quando eu fiquei sabendo que a senhora ia trabalhar aqui na Câmara Municipal eu fiquei muito feliz, porque já trabalhamos juntas no ano de 2013 a 2016 na gestão que fui prefeita, e agora juntas na Câmara. Feliz porque eu já conheço bem a competência da senhora. Quero parabenizar e agradecer de coração, pelo excelente trabalho, que a senhora já realizou e agora está realizando em nosso Município, sempre trabalhando com dedicação, comprometimento e profissionalismo. Agradeço, porque sempre que eu preciso, que envio uma mensagem, a senhora está disposta para me ajudar. Obrigada!",
    // photo: "url_da_foto_aqui"
  },
  {
    id: 2,
    name: "Moacir Duca",
    role: "Ex-Presidente da Câmara",
    organization: "Alvarenga",
    keyPhrase: "Fomos privilegiados com seu trabalho. Conseguimos realizar projetos importantes e até históricos.",
    fullText:
      "Bom Dia Dra. Karine. Estávamos hoje lembrando do seu belo trabalho conosco aqui no legislativo de Alvarenga. Eu como presidente da Câmara e os demais vereadores fomos privilegiados com seu trabalho e com sua competência ao nosso lado. Com sua assessoria conseguimos realizar projetos importantes e até históricos, lembra? Homenagem aos nomes importantes de Alvarenga, reconstrução do regimento interno e o projeto Câmara Itinerante, que foi um grande feito, na verdade foi histórico. Realmente foi um grande prazer ter trabalhado com você. Valeu Dra. Karina, forte abraço.",
  },
  {
    id: 3,
    name: "Salomé Araújo",
    role: "Ex-Presidente da Câmara",
    organization: "Alvarenga",
    keyPhrase: "Sua presteza, conhecimento jurídico, responsabilidade e atenção com todos marcaram aquele tempo.",
    fullText:
      "Sempre me lembro do seu excelente trabalho como advogada da Câmara Municipal de Alvarenga, em 2012, período em que fui presidente. Sua presteza, conhecimento jurídico, responsabilidade e atenção com todos marcaram aquele tempo. Você deu uma contribuição valiosa na elaboração da Lei Orgânica, demonstrando competência e dedicação. Só tenho a agradecer e a recomendar o seu trabalho, pela seriedade e confiança que transmite. Um grande abraço.",
  },
  {
    id: 4,
    name: "Hélcio Laureano da Silva",
    role: "Vereador e Primeiro Secretário",
    organization: "Cuparaque",
    keyPhrase: "Em menos de um ano de serviços prestados já se vê grande evolução e melhorias.",
    fullText:
      "Parabenizo a Dra. Karina pelo brilhante trabalho prestado à Câmara Municipal de Cuparaque. Destaco a sua organização e observância às Leis Orgânicas e ao Regimento Interno do município, sempre nos orientando. Trabalho esse que ficava muito a desejar em gestões passadas. Em menos de um ano de serviços prestados junto à Câmara já se vê grande evolução e melhorias. Como pessoa, uma ímpar.",
  },
  {
    id: 5,
    name: "José Carlos Afonso",
    role: "Vereador e Secretário da Mesa Diretora",
    organization: "Cuparaque",
    keyPhrase: "Seu senso de comprometimento faz toda diferença para entrega de bons resultados.",
    fullText:
      "Dra. Karina, uma advogada que demonstrou grande conhecimento e profissionalismo em todos os momentos. Sua positividade agrega muito valor à nossa equipe. Seu senso de comprometimento faz toda diferença para entrega de bons resultados.",
  },
  {
    id: 6,
    name: "Kauan Souza Rodrigues",
    role: "Presidente da Câmara",
    organization: "Alvarenga",
    keyPhrase: "Já escutei falar bem e agora sou prova. Ótima profissional.",
    fullText:
      "Dra. Karina, obrigado pelos serviços prestados. Tem ajudado demais a manter nossa Câmara organizada e fazendo o certo! Já escutei falar bem e agora sou prova. Ótima profissional.",
  },
  {
    id: 7,
    name: "Hélcio",
    role: "Vereador",
    organization: "Goiabeira",
    keyPhrase: "Você é uma guerreira, sempre lutando por uma causa nobre.",
    fullText:
      "Falar do seu trabalho é fácil: sua ética, sua disposição e profissionalismo, o empenho em prestar o melhor atendimento. Eu sempre serei grato a você pela sua dedicação e seu desempenho. Você é uma guerreira, sempre lutando por uma causa nobre.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Lógica de Rotação Automática
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000); // Troca a cada 6 segundos
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeTestimonial = testimonials[activeIndex];

  // Função para calcular os índices da lista lateral (para mostrar os próximos)
  const getNextTestimonials = () => {
    const next1 = (activeIndex + 1) % testimonials.length;
    const next2 = (activeIndex + 2) % testimonials.length;
    const next3 = (activeIndex + 3) % testimonials.length;
    return [testimonials[next1], testimonials[next2], testimonials[next3]];
  };

  return (
    <section className="py-24 bg-[#FDFBF7]">
      {" "}
      {/* Fundo claro (papel/off-white) */}
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy-dark mb-4">Vozes que Confiam</h2>
          <div className="h-1 w-24 bg-gold mx-auto rounded-full opacity-60" />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            O reconhecimento de quem vivencia a transformação através de uma assessoria jurídica de excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* LADO ESQUERDO: O Depoimento em Destaque (Maior e com Foto Grande) */}
          <div
            className="lg:col-span-7 relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Animação de fade simples usando key do React */}
            <div key={activeTestimonial.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gold/20 relative overflow-hidden">
                {/* Elemento decorativo de aspas gigantes no fundo */}
                <Quote className="absolute top-4 right-8 w-32 h-32 text-gold/10 rotate-180" />

                <div className="relative z-10">
                  {/* Área da Foto Grande e Nome */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                    {/* Foto Grande com borda dupla */}
                    <div className="relative">
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-paper border-4 border-white shadow-lg flex items-center justify-center overflow-hidden ring-1 ring-gold/30">
                        {activeTestimonial.photo ? (
                          <img
                            src={activeTestimonial.photo}
                            alt={activeTestimonial.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-12 h-12 text-burgundy/40" />
                        )}
                      </div>
                      {/* Pequeno ícone de badge */}
                      <div className="absolute -bottom-2 -right-2 bg-gold text-white p-2 rounded-full shadow-md">
                        <Quote className="w-4 h-4 fill-current" />
                      </div>
                    </div>

                    <div className="text-center md:text-left pt-2">
                      <h3 className="text-2xl font-serif font-bold text-burgundy-dark">{activeTestimonial.name}</h3>
                      <p className="text-gold font-medium uppercase tracking-wide text-sm mt-1">
                        {activeTestimonial.organization}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">{activeTestimonial.role}</p>
                    </div>
                  </div>

                  {/* Frase de Impacto */}
                  <blockquote className="text-center md:text-left">
                    <p className="text-2xl md:text-3xl font-serif leading-snug text-burgundy-dark mb-6">
                      "{activeTestimonial.keyPhrase}"
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">{activeTestimonial.fullText}</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Lista de "Próximos" (Navegação) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 pl-2">
              Outros depoimentos
            </h4>

            {getNextTestimonials().map((item, index) => (
              <div
                key={item.id}
                onClick={() => {
                  // Lógica para encontrar o índice real e setar
                  const realIndex = testimonials.findIndex((t) => t.id === item.id);
                  setActiveIndex(realIndex);
                  setIsAutoPlaying(false); // Pausa momentaneamente ao clicar
                }}
                className="group cursor-pointer bg-white/60 hover:bg-white border border-transparent hover:border-gold/30 p-4 rounded-xl transition-all duration-300 flex items-center gap-4 hover:shadow-md hover:-translate-x-1"
              >
                {/* Miniatura da foto */}
                <div className="w-12 h-12 rounded-full bg-burgundy/5 flex-shrink-0 flex items-center justify-center border border-gold/10 group-hover:border-gold/40 overflow-hidden">
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <User className="w-5 h-5 text-burgundy/40" />
                  )}
                </div>

                <div className="flex-grow min-w-0">
                  <p className="font-serif font-semibold text-burgundy-dark truncate group-hover:text-gold transition-colors">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {item.organization} • {item.role}
                  </p>
                </div>

                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gold transition-colors" />
              </div>
            ))}

            {/* Barra de Progresso / Indicador */}
            <div className="mt-4 flex gap-2 justify-center lg:justify-start pl-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === activeIndex ? "w-8 bg-gold" : "w-2 bg-gray-200 hover:bg-gold/40"
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
