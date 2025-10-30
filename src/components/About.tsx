import { GraduationCap, BookOpen, UserCheck } from "lucide-react";
import karinaPortrait from "@/assets/karina-portrait.jpg";

const aboutCopy = {
  intro:
    "Com experiência consolidada na Administração Pública, atuou em assessoria jurídica para prefeituras e câmaras municipais em Minas Gerais, desenvolvendo atividades como: assessoria ao prefeito e demais órgãos; representação do município em juízo; elaboração e revisão de anteprojetos de lei, decretos e atos normativos; cobrança judicial de créditos tributários; orientação em sindicâncias, inquéritos e processos administrativos, disciplinares e tributários; preparação de vetos ou sanção de proposições de lei; e revisão de pareceres, contratos, convênios e peças processuais.",
  experience:
    "Também possui trajetória em redação legislativa junto às câmaras municipais, acompanhando reuniões, Comissões Permanentes e Processantes, interpretando o Regimento Interno e analisando prestações de contas, além de atuar no contencioso cível e criminal.",
  academic:
    "Direito (2003) – FADIVALE, Faculdade de Direito do Vale do Rio Doce.",
  complementary: "Coaching Integral Sistêmico – FEBRACIS.",
  personal:
    "Disponibilidade para viagens, habilidade para trabalhar em equipe, boa comunicação escrita e oral e atenção ao atendimento ao público.",
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-paper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div
              data-animate="slide-in-left"
              data-animate-delay="0.1s"
              data-animate-duration="1.2s"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={karinaPortrait}
                  alt="Dra. Karina Botti"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/40 to-transparent" />
              </div>
              <div
                className="absolute -bottom-6 -right-6 bg-gold text-burgundy-dark p-6 rounded-xl shadow-xl"
                data-animate="fade-in-up"
                data-animate-delay="0.5s"
                data-animate-duration="1s"
              >
                <div className="text-3xl font-serif font-bold">15+</div>
                <div className="text-sm font-semibold uppercase tracking-wide">
                  Anos de Experiência
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div
              data-animate="slide-in-right"
              data-animate-delay="0.25s"
              data-animate-duration="1.2s"
            >
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Sobre a Advogada
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-burgundy-dark mt-4 mb-6">
                Karina Franco Botti Lima
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {aboutCopy.intro}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {aboutCopy.experience}
              </p>

              <div className="space-y-4">
                <div
                  className="flex items-start space-x-4"
                  data-animate="fade-in-up"
                  data-animate-delay="0.45s"
                  data-animate-duration="0.9s"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-dark mb-1">
                      Formação Acadêmica
                    </h4>
                    <p className="text-muted-foreground">{aboutCopy.academic}</p>
                  </div>
                </div>

                <div
                  className="flex items-start space-x-4"
                  data-animate="fade-in-up"
                  data-animate-delay="0.6s"
                  data-animate-duration="0.9s"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-dark mb-1">
                      Formação Complementar
                    </h4>
                    <p className="text-muted-foreground">{aboutCopy.complementary}</p>
                  </div>
                </div>

                <div
                  className="flex items-start space-x-4"
                  data-animate="fade-in-up"
                  data-animate-delay="0.75s"
                  data-animate-duration="0.9s"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-dark mb-1">
                      Qualificações Pessoais
                    </h4>
                    <p className="text-muted-foreground">{aboutCopy.personal}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
