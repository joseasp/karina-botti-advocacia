import { useState } from "react";
import { Mail, MapPin, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WhatsappIcon from "@/components/icons/WhatsappIcon";

const contactInfo = [
  {
    title: "WhatsApp",
    value: "(33) 99816-9207",
    displayValue: "(33) 99816-9207",
    copyValue: "33998169207",
    href: "https://wa.me/5533998169207",
    color: "text-[#25D366]",
    bgColor: "bg-[#25D366]/10",
    buttonText: "Falar no WhatsApp",
    isWhatsApp: true,
  },
  {
    title: "E-mail",
    value: "karinabottiadv@gmail.com",
    displayValue: "karinabottiadv@gmail.com",
    copyValue: "karinabottiadv@gmail.com",
    href: "mailto:karinabottiadv@gmail.com",
    color: "text-gold",
    bgColor: "bg-gold/10",
    buttonText: "Enviar E-mail",
    isWhatsApp: false,
  },
];

const contactCopy = {
  sectionTitle: "Entre em Contato",
  heading: "Agende sua consulta",
  intro:
    "Estou à disposição para entender suas necessidades jurídicas e oferecer soluções fundamentadas.",
};

const Contact = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Falha ao copiar:", err);
    }
  };

  return (
    <section id="contato" className="py-24 bg-paper-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
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
              return (
                <Card
                  key={info.title}
                  className={`group hover:shadow-xl transition-all duration-300 border-none bg-white hover:-translate-y-1 scroll-animate ${index === 0 ? 'delay-100' : 'delay-200'}`}
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${info.bgColor}`}
                      >
                        {info.isWhatsApp ? (
                          <WhatsappIcon className={`h-8 w-8 ${info.color}`} />
                        ) : (
                          <Mail className={`h-8 w-8 ${info.color}`} />
                        )}
                      </div>
                      <h3 className="font-semibold text-burgundy-dark mb-2 text-lg">
                        {info.title}
                      </h3>
                      <p className="text-base text-muted-foreground mb-4">
                        {info.displayValue}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="lg"
                        className={`flex-1 ${
                          info.isWhatsApp
                            ? "bg-[#25D366] hover:bg-[#20BD5A] text-white"
                            : "bg-gold hover:bg-gold-light text-burgundy-dark"
                        } font-semibold transition-all duration-300`}
                        asChild
                      >
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.buttonText}
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-input hover:bg-accent relative"
                        onClick={() => copyToClipboard(info.copyValue, index)}
                      >
                        {copiedIndex === index ? (
                          <Check className="h-5 w-5 text-green-600" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                        {copiedIndex === index && (
                          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            Copiado!
                          </span>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Location Section */}
          <div className="mb-12 scroll-animate delay-200">
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
                            Avenida Manoel Calhau, 245
                            <br />
                            Conselheiro Pena - MG
                            <br />
                            CEP: 35240-000, Brasil
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
                        href="https://www.google.com/maps/search/?api=1&query=Avenida+Manoel+Calhau,+245,+Conselheiro+Pena+MG,+35240-000,+Brasil"
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

              {/* Google Maps - Click to Load */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
                {!mapLoaded ? (
                  <div 
                    className="bg-card h-full min-h-[400px] flex flex-col items-center justify-center p-8 space-y-4 cursor-pointer hover:bg-accent/50 transition-all group"
                    onClick={() => setMapLoaded(true)}
                  >
                    <MapPin className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="text-center space-y-1">
                      <h4 className="font-semibold text-lg">Visualizar no mapa</h4>
                      <p className="text-xs text-muted-foreground">
                        Conteúdo do Google.
                      </p>
                    </div>
                    <Button variant="outline" className="gap-2">
                      Ver mapa
                    </Button>
                  </div>
                ) : (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.7!2d-41.49!3d-19.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAvenida+Manoel+Calhau,+245,+Conselheiro+Pena+-+MG,+35240-000!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Avenida Manoel Calhau, 245 - Conselheiro Pena - MG"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
