import { Building2, Users } from "lucide-react";

const Experience = () => {
  const municipalities = [
    { type: "Prefeitura", name: "Santana do Paraíso" },
    { type: "Prefeitura", name: "Coronel Fabriciano" },
    { type: "Câmara", name: "Ipatinga" },
    { type: "Câmara", name: "Timóteo" },
    { type: "Prefeitura", name: "Belo Oriente" },
    { type: "Câmara", name: "Caratinga" },
  ];

  return (
    <section id="experiencia" className="py-24 bg-burgundy-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-3xl mx-auto mb-16 opacity-0"
          data-animate="fade-in-up"
        >
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Experiência
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-paper-light mt-4 mb-6">
            Atuação em Administração Pública
          </h2>
          <p className="text-lg text-paper/80">
            Ampla experiência em assessoria jurídica para prefeituras e câmaras
            municipais da região do Vale do Aço e Caratinga, com profundo
            conhecimento da realidade administrativa local
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {municipalities.map((item, index) => (
            <div
              key={index}
              className="bg-burgundy/40 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-all duration-300 hover:transform hover:-translate-y-1 opacity-0"
              data-animate="fade-in-up"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className="flex items-center space-x-3 mb-3">
                {item.type === "Prefeitura" ? (
                  <Building2 className="h-6 w-6 text-gold" />
                ) : (
                  <Users className="h-6 w-6 text-gold" />
                )}
                <span className="text-gold text-sm font-medium uppercase tracking-wider">
                  {item.type}
                </span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-paper-light">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-burgundy/30 border border-gold/20 rounded-2xl p-8">
          <p className="text-paper/90 text-lg leading-relaxed text-center">
            Com sólida trajetória em Direito Público, ofereço assessoria
            técnica completa em licitações, contratos administrativos, processos
            disciplinares e redação legislativa, sempre pautada pela ética
            profissional e compromisso com a legalidade
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
