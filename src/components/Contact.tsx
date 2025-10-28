import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "(31) 99999-9999",
      href: "https://wa.me/5531999999999",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@karinabotti.adv.br",
      href: "mailto:contato@karinabotti.adv.br",
      color: "text-gold",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(31) 3333-4444",
      href: "tel:+553133334444",
      color: "text-burgundy",
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Ipatinga, MG - Vale do Aço",
      href: "#",
      color: "text-burgundy-medium",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-paper-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Entre em Contato
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-burgundy-dark mt-4 mb-6">
            Agende sua Consulta
          </h2>
          <p className="text-lg text-muted-foreground">
            Estou à disposição para entender suas necessidades jurídicas e
            oferecer as melhores soluções
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-none bg-white hover:-translate-y-1 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 0.15}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 ${info.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <h3 className="font-semibold text-burgundy-dark mb-2">
                      {info.title}
                    </h3>
                    <a
                      href={info.href}
                      className="text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      {info.value}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-burgundy-dark rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-serif font-bold text-paper-light mb-4">
              Pronto para Iniciar?
            </h3>
            <p className="text-paper/80 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato para agendar uma consulta inicial. Vamos discutir
              seu caso e encontrar a melhor estratégia jurídica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-burgundy-dark font-semibold text-lg px-8 transition-all duration-300"
                asChild
              >
                <a
                  href="https://wa.me/5531999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-paper-light text-paper-light hover:bg-paper-light hover:text-burgundy-dark font-semibold text-lg px-8"
                asChild
              >
                <a href="mailto:contato@karinabotti.adv.br">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar E-mail
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 p-6 bg-sand/30 border-l-4 border-gold rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-burgundy-dark">
                Aviso em Conformidade com o Código de Ética da OAB:
              </strong>{" "}
              Este site tem caráter meramente informativo e não constitui
              oferta de serviços. O agendamento de consultas não implica em
              relação de contratação. Informações sobre valores de honorários
              serão prestadas em consulta inicial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
