import { Landmark, Scale, FileText, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  {
    icon: Landmark,
    title: "Administrativo & Municipal",
    description:
      "Atua\u00E7\u00E3o em licita\u00E7\u00F5es, contratos administrativos, processos disciplinares e consultoria t\u00E9cnica para prefeituras e c\u00E2maras municipais. Experi\u00EAncia na elabora\u00E7\u00E3o e revis\u00E3o de projetos de lei, decretos e atos normativos, al\u00E9m da orienta\u00E7\u00E3o em processos administrativos e tribut\u00E1rios.",
  },
  {
    icon: Scale,
    title: "Contencioso C\u00EDvel",
    description:
      "Atua\u00E7\u00E3o em demandas judiciais envolvendo responsabilidade civil, contratos, indeniza\u00E7\u00F5es e direito do consumidor, com estrat\u00E9gia processual individualizada e foco na solu\u00E7\u00E3o eficiente de conflitos.",
  },
  {
    icon: FileText,
    title: "Reda\u00E7\u00E3o Legislativa",
    description:
      "Elabora\u00E7\u00E3o e an\u00E1lise t\u00E9cnica de projetos de lei, decretos, portarias e outros atos normativos municipais, com acompanhamento das Comiss\u00F5es Permanentes e Processantes e interpreta\u00E7\u00E3o do Regimento Interno.",
  },
  {
    icon: Users,
    title: "Contencioso Criminal",
    description:
      "Defesa t\u00E9cnica em processos criminais, acompanhamento em todas as fases processuais e elabora\u00E7\u00E3o de estrat\u00E9gias defensivas com atua\u00E7\u00E3o \u00E9tica e comprometida.",
  },
  {
    icon: Lightbulb,
    title: "Coaching Jur\u00EDdico e Desenvolvimento Pessoal",
    description:
      "Aplica\u00E7\u00E3o dos princ\u00EDpios do Coaching Integral Sist\u00EAmico no ambiente jur\u00EDdico, promovendo lideran\u00E7a, clareza e efici\u00EAncia na gest\u00E3o p\u00FAblica e de equipes.",
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
            \u00C1reas de Atua\u00E7\u00E3o
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-burgundy-dark mt-4 mb-6">
            Atua\u00E7\u00E3o Jur\u00EDdica e Consultoria Especializada
          </h2>
          <p className="text-lg text-muted-foreground">
            Solu\u00E7\u00F5es t\u00E9cnicas e personalizadas em Direito P\u00FAblico, Administrativo, C\u00EDvel e Criminal, com foco em prefeituras, c\u00E2maras municipais e institui\u00E7\u00F5es p\u00FAblicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card
                key={area.title}
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
