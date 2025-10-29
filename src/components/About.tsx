import { GraduationCap, BookOpen, UserCheck } from "lucide-react";
import karinaPortrait from "@/assets/karina-portrait.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-paper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div
              className="relative opacity-0"
              data-animate="slide-in-left"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={karinaPortrait}
                  alt="Dra. Karina Botti"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-burgundy-dark p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-serif font-bold">15+</div>
                <div className="text-sm font-semibold uppercase tracking-wide">
                  Anos de Experiencia
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div
              className="opacity-0 animation-delay-200"
              data-animate="slide-in-right"
            >
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Sobre a Advogada
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-burgundy-dark mt-4 mb-6">
                Karina Franco Botti Lima
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Com experiencia consolidada na administracao publica, atuou em assessoria juridica para prefeituras e camaras municipais em Minas Gerais, desenvolvendo atividades como: assessoria ao prefeito e demais orgaos; representacao do municipio em juizo; elaboracao e revisao de anteprojetos de lei, decretos e atos normativos; cobranca judicial de creditos tributarios; orientacao em sindicancias, inqueritos e processos administrativos, disciplinares e tributarios; preparacao de vetos ou sancao de proposicoes de lei; e revisao de pareceres, contratos, convenios e pecas processuais.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Tambem possui trajetoria em redacao legislativa junto a camaras municipais, acompanhando reunioes, comissoes permanentes e processantes, interpretando o regimento interno e analisando prestacoes de contas, alem de atuar no contencioso civel e criminal.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-dark mb-1">
                      Formacao Academica
                    </h4>
                    <p className="text-muted-foreground">
                      Direito (2003) - FADIVALE, Faculdade de Direito do Vale do Rio Doce.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-dark mb-1">
                      Formacao Complementar
                    </h4>
                    <p className="text-muted-foreground">
                      Coaching Integral Sistemico - FEBRACIS.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-dark mb-1">
                      Qualificacoes Pessoais
                    </h4>
                    <p className="text-muted-foreground">
                      Disponibilidade para viagens, habilidade para trabalhar em equipe, comunicacao clara e facilidade no atendimento ao publico.
                    </p>
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

