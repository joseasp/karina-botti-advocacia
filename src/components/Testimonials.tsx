import { useState, useEffect, useRef } from "react";
import { User, Quote, ChevronRight } from "lucide-react";

// --- Interfaces ---
interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  keyPhrase: string;
  fullText: string;
  photo?: string;
}

// --- Hook para Animação de Scroll (InView) ---
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // Anima apenas uma vez
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [options]);

  return [ref, isInView] as const;
}

// --- Dados (Atualizados) ---
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
    name: "José Carlos Afonso (Zé Carlin)",
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

  // Refs para animação de scroll
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });

  // Lógica de Rotação Automática
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 8000); // Aumentei um pouco o tempo de leitura
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeTestimonial = testimonials[activeIndex];

  // Cálculo dos próximos itens
  const getNextTestimonials = () => {
    const next1 = (activeIndex + 1) % testimonials.length;
    const next2 = (activeIndex + 2) % testimonials.length;
    const next3 = (activeIndex + 3) % testimonials.length;
    return [testimonials[next1], testimonials[next2], testimonials[next3]];
  };

  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* --- BACKGROUND TEXTURIZADO (Sutil) --- */}
      {/* Padrão de pontos dourados com opacidade extremamente baixa para não poluir */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      ></div>

      {/* Estilos inline para Scrollbar personalizada interna */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(212, 175, 55, 0.3); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(212, 175, 55, 0.6); }
      `}</style>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* --- Header com Animação --- */}
        <div
          ref={headerRef as any}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy-dark mb-4">Vozes que Confiam</h2>
          <div className="h-1 w-24 bg-gold mx-auto rounded-full opacity-60" />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            O reconhecimento de quem vivencia a transformação através de uma assessoria jurídica de excelência.
          </p>
        </div>

        {/* --- Conteúdo Principal com Animação (Delay leve) --- */}
        <div
          ref={contentRef as any}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start transition-all duration-1000 delay-200 ease-out ${
            contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* LADO ESQUERDO: Card Principal (Altura Fixa) */}
          <div
            className="lg:col-span-7 relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* O Card em si tem altura fixa (h-[500px] desktop, h-auto mobile) para evitar pulos */}
            <div className="bg-white rounded-3xl shadow-xl border border-gold/20 relative overflow-hidden h-auto lg:h-[500px] flex flex-col">
              <Quote className="absolute top-4 right-8 w-32 h-32 text-gold/5 rotate-180 pointer-events-none" />

              {/* Conteúdo Interno com Fade ao trocar */}
              <div
                key={activeTestimonial.id}
                className="flex flex-col h-full p-8 md:p-10 animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                {/* Header do Card: Foto e Nome */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6 flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-paper border-4 border-white shadow-lg flex items-center justify-center overflow-hidden ring-1 ring-gold/30">
                      {activeTestimonial.photo ? (
                        <img
                          src={activeTestimonial.photo}
                          alt={activeTestimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-10 h-10 text-burgundy/40" />
                      )}
                    </div>
                  </div>

                  <div className="text-center md:text-left pt-2">
                    <h3 className="text-2xl font-serif font-bold text-burgundy-dark">{activeTestimonial.name}</h3>
                    <div className="flex flex-col">
                      <span className="text-gold font-medium uppercase tracking-wide text-xs mt-1">
                        {activeTestimonial.organization}
                      </span>
                      <span className="text-gray-400 text-xs mt-0.5">{activeTestimonial.role}</span>
                    </div>
                  </div>
                </div>

                {/* Área de Texto com Scroll Interno */}
                <div className="flex-grow overflow-hidden flex flex-col">
                  <blockquote className="flex flex-col h-full">
                    <p className="text-xl md:text-2xl font-serif leading-snug text-burgundy-dark mb-4 flex-shrink-0">
                      "{activeTestimonial.keyPhrase}"
                    </p>

                    {/* Aqui está o segredo: overflow-y-auto com scrollbar customizada */}
                    <div className="overflow-y-auto custom-scrollbar pr-2 flex-grow">
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">{activeTestimonial.fullText}</p>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Lista de Navegação */}
          <div className="lg:col-span-5 flex flex-col gap-4 pt-2">
            <h4 className="text-xs font-semibold text-gold/80 uppercase tracking-widest mb-2 pl-1">
              Outros depoimentos
            </h4>

            {getNextTestimonials().map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  const realIndex = testimonials.findIndex((t) => t.id === item.id);
                  setActiveIndex(realIndex);
                  setIsAutoPlaying(false);
                }}
                className="group cursor-pointer bg-white/60 hover:bg-white border border-transparent hover:border-gold/30 p-4 rounded-xl transition-all duration-300 flex items-center gap-4 hover:shadow-md hover:-translate-x-1"
              >
                <div className="w-10 h-10 rounded-full bg-burgundy/5 flex-shrink-0 flex items-center justify-center border border-gold/10 group-hover:border-gold/40 overflow-hidden transition-colors">
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <User className="w-5 h-5 text-burgundy/40" />
                  )}
                </div>

                <div className="flex-grow min-w-0">
                  <p className="font-serif font-semibold text-burgundy-dark text-sm truncate group-hover:text-gold transition-colors">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 truncate">{item.organization}</p>
                </div>

                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gold transition-colors" />
              </div>
            ))}

            {/* Indicadores (Dots) */}
            <div className="mt-6 flex gap-2 justify-center lg:justify-start pl-1">
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
