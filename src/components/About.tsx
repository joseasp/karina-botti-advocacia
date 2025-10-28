import { GraduationCap, Award, BookOpen } from "lucide-react";
import karinaPortrait from "@/assets/karina-portrait.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-paper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={karinaPortrait}
                  alt="Dra. Karina Botti"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-burgundy-dark p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-serif font-bold">10+</div>
                <div className="text-sm font-semibold uppercase tracking-wide">
                  Anos de Experiência
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Sobre a Advogada
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-burgundy-dark mt-4 mb-6">
                Dra. Karina Botti
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Advogada inscrita na OAB/MG sob o número 111.637, com formação
                sólida e especialização em Direito Público. Atua com dedicação e
                ética na defesa dos interesses de seus clientes, sempre
                buscando soluções eficientes e juridicamente fundamentadas.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Com vasta experiência em assessoria para o setor público,
                especialmente em municípios da região do Vale do Aço, oferece
                atendimento personalizado e comprometido com resultados.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-dark mb-1">
                      Formação Acadêmica
                    </h4>
                    <p className="text-muted-foreground">
                      Graduação em Direito com especializações em Direito
                      Administrativo e Municipal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-dark mb-1">
                      Reconhecimento Profissional
                    </h4>
                    <p className="text-muted-foreground">
                      Atuação reconhecida em assessoria municipal e contencioso
                      estratégico
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-dark mb-1">
                      Atualização Constante
                    </h4>
                    <p className="text-muted-foreground">
                      Participação regular em cursos e eventos jurídicos para
                      melhor atender seus clientes
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
