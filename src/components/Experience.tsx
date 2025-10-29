import { Building2, Users } from "lucide-react";

const prefeituraExperiences = [
  {
    name: "Cuparaque",
    description:
      "Assessoria e procuradoria jur\u00EDdica, elabora\u00E7\u00E3o de pareceres, projetos de lei, decretos e representa\u00E7\u00E3o judicial.",
    period: "2009 a 2019",
  },
  {
    name: "Alvarenga",
    description:
      "Assessoria ao prefeito e \u00F3rg\u00E3os municipais, revis\u00E3o de anteprojetos de lei e orienta\u00E7\u00E3o em processos administrativos e tribut\u00E1rios.",
    period: "2009 a 2017",
  },
  {
    name: "Goiabeira",
    description:
      "Consultoria nos setores de tributa\u00E7\u00E3o, recursos humanos e SAAE; an\u00E1lise de legisla\u00E7\u00E3o e emiss\u00E3o de pareceres.",
    period: "2018 a 2019",
  },
];

const camaraExperiences = [
  {
    name: "Alvarenga",
    description:
      "Assessoria t\u00E9cnica em reda\u00E7\u00E3o legislativa, Comiss\u00F5es Permanentes e Processantes, an\u00E1lise de presta\u00E7\u00F5es de contas e interpreta\u00E7\u00E3o do Regimento Interno.",
    period: "2013 a 2018",
  },
  {
    name: "Galil\u00E9ia",
    description:
      "Apoio jur\u00EDdico \u00E0s comiss\u00F5es e acompanhamento de reuni\u00F5es legislativas, com foco em controle de legalidade e t\u00E9cnica legislativa.",
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
        >
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Experi\u00EAncia
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-paper-light mt-4 mb-6">
            Atua\u00E7\u00E3o em Administra\u00E7\u00E3o P\u00FAblica
          </h2>
          <p className="text-lg text-paper/80">
            Ampla experi\u00EAncia em assessoria jur\u00EDdica para prefeituras e c\u00E2maras municipais de Minas Gerais, com profundo conhecimento da realidade administrativa local e foco em solu\u00E7\u00F5es legais eficazes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div
            className="bg-burgundy/40 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 opacity-0"
            data-animate="fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-gold" />
              <h3 className="text-2xl font-serif font-semibold text-paper-light">
                Prefeituras
              </h3>
            </div>
            <div className="space-y-6">
              {prefeituraExperiences.map((item) => (
                <div key={item.name}>
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
              ))}
            </div>
          </div>

          <div
            className="bg-burgundy/40 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 opacity-0"
            data-animate="fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-gold" />
              <h3 className="text-2xl font-serif font-semibold text-paper-light">
                C\u00E2maras Municipais
              </h3>
            </div>
            <div className="space-y-6">
              {camaraExperiences.map((item) => (
                <div key={item.name}>
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
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-burgundy/30 border border-gold/20 rounded-2xl p-8">
          <p className="text-paper/90 text-lg leading-relaxed text-center">
            Com uma trajet\u00F3ria consolidada em Direito P\u00FAblico, oferece assessoria t\u00E9cnica completa em licita\u00E7\u00F5es, contratos administrativos, processos disciplinares e reda\u00E7\u00E3o legislativa \u2014 sempre pautada pela \u00E9tica, efici\u00EAncia e compromisso com a legalidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

