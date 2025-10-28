import { Scale, Landmark, FileText, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  {
    icon: Landmark,
    title: "Administrativo & Municipal",
    description:
      "Assessoria técnica em licitações, contratos administrativos, processos administrativos disciplinares e consultoria para prefeituras e câmaras municipais.",
  },
  {
    icon: Scale,
    title: "Contencioso Cível",
    description:
      "Atuação em demandas judiciais de responsabilidade civil, contratos, indenizações e direito do consumidor com estratégia processual personalizada.",
  },
  {
    icon: FileText,
    title: "Redação Legislativa",
    description:
      "Elaboração e análise técnica de projetos de lei, decretos, portarias e outros atos normativos municipais com rigor jurídico.",
  },
  {
    icon: Users,
    title: "Contencioso Criminal",
    description:
      "Defesa técnica qualificada em processos criminais, acompanhamento em todas as fases processuais e elaboração de estratégias defensivas.",
  },
];

const Areas = () => {
  return (
    <section id="areas" className="py-24 bg-paper-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-3xl mx-auto mb-16 opacity-0"
          data-animate="fade-in-up"
        >
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Áreas de Atuação
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-burgundy-dark mt-4 mb-6">
            Expertise Jurídica Especializada
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções jurídicas personalizadas com excelência técnica e
            compromisso com resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-none bg-white hover:-translate-y-2 opacity-0"
                data-animate="fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-burgundy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                    <Icon className="h-8 w-8 text-paper-light" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-burgundy-dark mb-4">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Areas;
