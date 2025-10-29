import { Building2, Users } from "lucide-react";

const prefeituraExperiences = [
  {
    name: "Cuparaque",
    description:
      "Assessoria e procuradoria jurídica, elaboração de pareceres, projetos de lei, decretos e representação judicial.",
    period: "2009 a 2019",
  },
  {
    name: "Alvarenga",
    description:
      "Assessoria ao prefeito e órgãos municipais, revisão de anteprojetos de lei e orientação em processos administrativos e tributários.",
    period: "2009 a 2017",
  },
  {
    name: "Goiabeira",
    description:
      "Consultoria nos setores de tributação, recursos humanos e SAAE; análise de legislação e emissão de pareceres.",
    period: "2018 a 2019",
  },
];

const camaraExperiences = [
  {
    name: "Alvarenga",
    description:
      "Assessoria técnica em redação legislativa, Comissões Permanentes e Processantes, análise de prestações de contas e interpretação do Regimento Interno.",
    period: "2013 a 2018",
  },
  {
    name: "Galiléia",
    description:
      "Apoio jurídico às comissões e acompanhamento de reuniões legislativas, com foco em controle de legalidade e técnica legislativa.",
    period: "2013 a 2016",
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 bg-burgundy-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-3xl mx-auto mb-16 opacity-0"
          data-animate="fade-in-up"
          data-animate-delay="0.2s"
          data-animate-duration="1.1s"
        >
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

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div
            className="bg-burgundy/40 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 opacity-0"
            data-animate="slide-in-left"
            data-animate-delay="0.25s"
            data-animate-duration="1.1s"
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-gold" />
              <h3 className="text-2xl font-serif font-semibold text-paper-light">
                Prefeituras
              </h3>
            </div>
            <div className="space-y-6">
              {prefeituraExperiences.map((item, index) => {
                const delay = 0.35 + index * 0.12;
                const animationDelay = `${delay.toFixed(2)}s`;
                return (
                  <div
                    key={item.name}
                    className="opacity-0"
                    data-animate="fade-in-up"
                    data-animate-delay={animationDelay}
                    data-animate-duration="0.85s"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <h4 className="text-xl font-semibold text-paper-light">
                        {item.name}
                      </h4>
                      <span className="text-sm uppercase tracking-wider text-gold/80">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-paper/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="bg-burgundy/40 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 opacity-0"
            data-animate="slide-in-right"
            data-animate-delay="0.35s"
            data-animate-duration="1.1s"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-gold" />
              <h3 className="text-2xl font-serif font-semibold text-paper-light">
                Câmaras Municipais
              </h3>
            </div>
            <div className="space-y-6">
              {camaraExperiences.map((item, index) => {
                const delay = 0.4 + index * 0.12;
                const animationDelay = `${delay.toFixed(2)}s`;
                return (
                  <div
                    key={item.name}
                    className="opacity-0"
                    data-animate="fade-in-up"
                    data-animate-delay={animationDelay}
                    data-animate-duration="0.85s"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <h4 className="text-xl font-semibold text-paper-light">
                        {item.name}
                      </h4>
                      <span className="text-sm uppercase tracking-wider text-gold/80">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-paper/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="mt-16 max-w-4xl mx-auto bg-burgundy/30 border border-gold/20 rounded-2xl p-8 opacity-0"
          data-animate="fade-in-up"
          data-animate-delay="0.6s"
          data-animate-duration="1.1s"
        >
          <p className="text-paper/90 text-lg leading-relaxed text-center">
            Com uma trajetória consolidada em Direito Público, oferece assessoria técnica completa em licitações, contratos administrativos, processos disciplinares e redação legislativa — sempre pautada pela ética, eficiência e compromisso com a legalidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

