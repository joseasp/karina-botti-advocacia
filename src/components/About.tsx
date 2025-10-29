import { GraduationCap, BookOpen, UserCheck } from "lucide-react";
import karinaPortrait from "@/assets/karina-portrait.jpg";

const aboutCopy = {
  intro:
    "Com experi\u00EAncia consolidada na Administra\u00E7\u00E3o P\u00FAblica, atuou em assessoria jur\u00EDdica para prefeituras e c\u00E2maras municipais em Minas Gerais, desenvolvendo atividades como: assessoria ao prefeito e demais \u00F3rg\u00E3os; representa\u00E7\u00E3o do munic\u00EDpio em ju\u00EDzo; elabora\u00E7\u00E3o e revis\u00E3o de anteprojetos de lei, decretos e atos normativos; cobran\u00E7a judicial de cr\u00E9ditos tribut\u00E1rios; orienta\u00E7\u00E3o em sindic\u00E2ncias, inqu\u00E9ritos e processos administrativos, disciplinares e tribut\u00E1rios; prepara\u00E7\u00E3o de vetos ou san\u00E7\u00E3o de proposi\u00E7\u00F5es de lei; e revis\u00E3o de pareceres, contratos, conv\u00EAnios e pe\u00E7as processuais.",
  experience:
    "Tamb\u00E9m possui trajet\u00F3ria em reda\u00E7\u00E3o legislativa junto \u00E0s c\u00E2maras municipais, acompanhando reuni\u00F5es, Comiss\u00F5es Permanentes e Processantes, interpretando o Regimento Interno e analisando presta\u00E7\u00F5es de contas, al\u00E9m de atuar no contencioso c\u00EDvel e criminal.",
  academic:
    "Direito (2003) \u2013 FADIVALE, Faculdade de Direito do Vale do Rio Doce.",
  complementary: "Coaching Integral Sist\u00EAmico \u2013 FEBRACIS.",
  personal:
    "Disponibilidade para viagens, habilidade para trabalhar em equipe, boa comunica\u00E7\u00E3o escrita e oral e aten\u00E7\u00E3o ao atendimento ao p\u00FAblico.",
};

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
                  Anos de Experi\u00EAncia
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
                {aboutCopy.intro}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {aboutCopy.experience}
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-dark mb-1">
                      Forma\u00E7\u00E3o Acad\u00EAmica
                    </h4>
                    <p className="text-muted-foreground">{aboutCopy.academic}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-dark mb-1">
                      Forma\u00E7\u00E3o Complementar
                    </h4>
                    <p className="text-muted-foreground">{aboutCopy.complementary}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-dark mb-1">
                      Qualifica\u00E7\u00F5es Pessoais
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
