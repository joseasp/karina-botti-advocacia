import { Landmark, Scale, FileText, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  {
    icon: Landmark,
    title: "Administrativo & Municipal",
    description:
      "Atuacao em licitacoes, contratos administrativos, processos disciplinares e consultoria tecnica para prefeituras e camaras municipais. Experiencia na elaboracao e revisao de projetos de lei, decretos e atos normativos, alem da orientacao em processos administrativos e tributarios.",
  },
  {
    icon: Scale,
    title: "Contencioso Civel",
    description:
      "Atuacao em demandas judiciais envolvendo responsabilidade civil, contratos, indenizacoes e direito do consumidor, com estrategia processual individualizada e foco na solucao eficiente de conflitos.",
  },
  {
    icon: FileText,
    title: "Redacao Legislativa",
    description:
      "Elaboracao e analise tecnica de projetos de lei, decretos, portarias e outros atos normativos municipais, com acompanhamento das comissoes permanentes e processantes e interpretacao do regimento interno.",
  },
  {
    icon: Users,
    title: "Contencioso Criminal",
    description:
      "Defesa tecnica em processos criminais, acompanhamento em todas as fases processuais e elaboracao de estrategias defensivas com atuacao etica e comprometida.",
  },
  {
    icon: Lightbulb,
    title: "Coaching Juridico e Desenvolvimento Pessoal",
    description:
      "Aplicacao dos principios do Coaching Integral Sistemico no ambiente juridico, promovendo lideranca, clareza e eficiencia na gestao publica e de equipes.",
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
            Areas de Atuacao
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-burgundy-dark mt-4 mb-6">
            Atuacao Juridica e Consultoria Especializada
          </h2>
          <p className="text-lg text-muted-foreground">
            Solucoes tecnicas e personalizadas em Direito Publico, Administrativo, Civel e Criminal, com foco em prefeituras, camaras municipais e instituicoes publicas.
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

