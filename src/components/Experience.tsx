import { Building2, Users } from "lucide-react";

const prefeituraExperiences = [
  {
    name: "Cuparaque",
    description:
      "Assessoria e procuradoria juridica, elaboracao de pareceres, projetos de lei, decretos e representacao judicial.",
    period: "2009 a 2019",
  },
  {
    name: "Alvarenga",
    description:
      "Assessoria ao prefeito e orgaos municipais, revisao de anteprojetos de lei e orientacao em processos administrativos e tributarios.",
    period: "2009 a 2017",
  },
  {
    name: "Goiabeira",
    description:
      "Consultoria nos setores de tributacao, recursos humanos e SAAE; analise de legislacao e emissao de pareceres.",
    period: "2018 a 2019",
  },
];

const camaraExperiences = [
  {
    name: "Alvarenga",
    description:
      "Assessoria tecnica em redacao legislativa, comissoes permanentes e processantes, analise de prestacoes de contas e interpretacao do regimento interno.",
    period: "2013 a 2018",
  },
  {
    name: "Galileia",
    description:
      "Apoio juridico as comissoes e acompanhamento de reunioes legislativas, com foco em controle de legalidade e tecnica legislativa.",
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
            Experiencia
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-paper-light mt-4 mb-6">
            Atuacao em Administracao Publica
          </h2>
          <p className="text-lg text-paper/80">
            Ampla experiencia em assessoria juridica para prefeituras e camaras municipais de Minas Gerais, com profundo conhecimento da realidade administrativa local e foco em solucoes legais eficazes.
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
                Camaras Municipais
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
            Com uma trajetoria consolidada em Direito Publico, oferece assessoria tecnica completa em licitacoes, contratos administrativos, processos disciplinares e redacao legislativa, sempre pautada pela etica, eficiencia e compromisso com a legalidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

