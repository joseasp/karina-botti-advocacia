import { Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "(33) 99816-9207",
    href: "https://wa.me/5533998169207",
    color: "text-emerald-600",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "karinabottiadv@gmail.com",
    href: "mailto:karinabottiadv@gmail.com",
    color: "text-gold",
  },
];

const contactCopy = {
  sectionTitle: "Entre em Contato",
  heading: "Agende sua consulta",
  intro:
    "Estou à disposição para entender suas necessidades jurídicas e oferecer soluções fundamentadas.",
  ctaHeading: "Pronto para iniciar?",
  ctaDescription:
    "Envie uma mensagem e agende uma conversa inicial para avaliarmos suas demandas com sigilo e clareza.",
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-paper-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-3xl mx-auto mb-16 opacity-0"
          data-animate="fade-in-up"
          data-animate-delay="0.2s"
          data-animate-duration="1.1s"
        >
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            {contactCopy.sectionTitle}
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-burgundy-dark mt-4 mb-6">
            {contactCopy.heading}
          </h2>
          <p className="text-lg text-muted-foreground">{contactCopy.intro}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const delay = (index + 1) * 0.15;
              const animationDelay = `${delay}s`;
              return (
                <Card
                  key={info.title}
                  className="group hover:shadow-xl transition-all duration-300 border-none bg-white hover:-translate-y-1 opacity-0"
                  data-animate="fade-in-up"
                  data-animate-delay={animationDelay}
                  data-animate-duration="0.85s"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 ${info.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className={`h-8 w-8 ${info.color}`} />
                    </div>
                    <h3 className="font-semibold text-burgundy-dark mb-2 text-lg">
                      {info.title}
                    </h3>
                    <a
                      href={info.href}
                      className="text-base text-muted-foreground hover:text-gold transition-colors"
                    >
                      {info.value}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Location Section */}
          <div
            className="mb-12 opacity-0"
            data-animate="fade-in-up"
            data-animate-delay="0.5s"
            data-animate-duration="1.1s"
          >
            <h3 className="text-3xl font-serif font-bold text-burgundy-dark text-center mb-8">
              Onde nos encontrar
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Address Information */}
              <Card className="border-none bg-white h-full">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-start mb-3">
                        <MapPin className="h-6 w-6 text-burgundy mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-burgundy-dark mb-1">
                            Endereço
                          </h4>
                          <p className="text-muted-foreground">
                            Conselheiro Pena – MG
                            <br />
                            Vale do Rio Doce
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-semibold text-burgundy-dark mb-2">
                        Horário de Atendimento
                      </h4>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 9h às 19h
                      </p>
                    </div>

                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-paper-light font-semibold"
                      asChild
                    >
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Conselheiro+Pena+-+MG"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="mr-2 h-5 w-5" />
                        Ver no Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60616.66928217771!2d-41.5!3d-19.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzQ4LjAiUyA0McKwMzAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Conselheiro Pena - MG"
                ></iframe>
              </div>
            </div>
          </div>

          <div
            className="bg-burgundy-dark rounded-2xl p-8 md:p-12 text-center opacity-0"
            data-animate="fade-in-up"
            data-animate-delay="0.6s"
            data-animate-duration="1.1s"
          >
            <h3 className="text-3xl font-serif font-bold text-paper-light mb-4">
              {contactCopy.ctaHeading}
            </h3>
            <p className="text-paper/80 text-lg mb-8 max-w-2xl mx-auto">
              {contactCopy.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-burgundy-dark font-semibold text-lg px-8 transition-all duration-300"
                asChild
              >
                <a
                  href="https://wa.me/5533998169207"
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
                <a href="mailto:karinabottiadv@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar e-mail
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
