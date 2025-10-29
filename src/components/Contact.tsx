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
  {
    icon: Instagram,
    title: "Instagram",
    value: "@karinabottiadv",
    href: "https://www.instagram.com/karinabottiadv/",
    color: "text-burgundy",
  },
  {
    icon: MapPin,
    title: "Atendimento presencial",
    value: "Conselheiro Pena – MG (Vale do Rio Doce)",
    href: "https://www.google.com/maps/search/?api=1&query=Conselheiro+Pena+-+MG",
    color: "text-burgundy-medium",
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                      target={info.title === "Atendimento presencial" || info.title === "Instagram" ? "_blank" : undefined}
                      rel={info.title === "Atendimento presencial" || info.title === "Instagram" ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
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
