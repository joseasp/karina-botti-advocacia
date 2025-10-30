import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lawyer.jpg";
import WhatsappIcon from "@/components/icons/WhatsappIcon";

const heroCopy = {
  headline: "Consultoria e Assessoria Jurídica em Direito Público e Administrativo",
  subheadline: "Atuação para prefeituras, câmaras municipais e atendimento contencioso cível e criminal.",
  description:
    "Ofereço assessoria na elaboração de projetos de lei, pareceres jurídicos e atos normativos; representação judicial e orientação em processos administrativos, sindicâncias e tributários. Atendimento presencial e remoto, com foco em soluções práticas para a gestão pública e instituições.",
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Karina Botti Advocacia" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark/95 via-burgundy-dark/80 to-burgundy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-paper-light mb-6 leading-tight"
            data-animate="fade-in-up-slow"
            data-animate-delay="0.2s"
          >
            {heroCopy.headline}
          </h1>

          <p
            className="text-xl sm:text-2xl text-paper/90 mb-6 leading-relaxed"
            data-animate="fade-in-up-slow"
            data-animate-delay="0.5s"
          >
            {heroCopy.subheadline}
          </p>

          <p
            className="text-lg sm:text-xl text-paper/80 mb-10 leading-relaxed"
            data-animate="fade-in-up-slow"
            data-animate-delay="0.8s"
          >
            {heroCopy.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4" data-animate="fade-in-up-slow" data-animate-delay="1.1s">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-burgundy-dark font-semibold text-lg px-8 py-6 transition-all duration-300 shadow-lg hover:shadow-xl group"
              asChild
            >
              <a
                href="https://wa.me/5533998169207?text=Ol%C3%A1%20Dra.%20Karina,%20gostaria%20de%20conversar%20sobre%20assessoria%20jur%C3%ADdica."
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon className="mr-2 h-5 w-5" />
                Entre em contato
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
