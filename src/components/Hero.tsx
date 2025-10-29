import type { SVGProps } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lawyer.jpg";

const heroCopy = {
  headline:
    "Consultoria e assessoria jurídica em Direito Público e Administrativo",
  subheadline:
    "Atuação para prefeituras, câmaras municipais e atendimento contencioso cível e criminal.",
  description:
    "Ofereço assessoria na elaboração de projetos de lei, pareceres jurídicos e atos normativos; representação judicial e orientação em processos administrativos, sindicâncias e tributários. Atendimento presencial e remoto, com foco em soluções práticas para a gestão pública e instituições.",
};

const WhatsappIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" {...props}>
    <path
      fill="currentColor"
      d="M16 0C7.164 0 0 7.163 0 16c0 2.82.734 5.502 2.017 7.846L0 32l8.373-2.183A15.86 15.86 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm9.447 23.252c-.408 1.148-2.369 2.104-3.271 2.247-.834.127-1.9.178-3.065-.191-.707-.226-1.61-.523-2.785-1.027-4.907-2.121-8.138-7.632-8.384-8.002-.245-.37-2.001-2.662-1.9-5.073.099-2.411 1.39-3.588 1.87-4.073.478-.485 1.043-.61 1.39-.61.347 0 .694 0 .998.018.32.016.757-.122 1.187.909.408.993 1.303 3.426 1.418 3.674.115.248.192.542.038.873-.153.33-.23.542-.46.833-.23.29-.485.65-.693.873-.23.23-.469.48-.202.943.266.462 1.187 1.953 2.55 3.16 1.752 1.562 3.226 2.044 3.688 2.274.462.23.73.191 1-.115.27-.307 1.155-1.347 1.463-1.807.307-.46.614-.383 1.043-.23.43.154 2.712 1.28 3.176 1.509.462.23.77.345.885.538.115.192.115 1.104-.293 2.252z"
    />
  </svg>
);

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Karina Botti Advocacia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark/95 via-burgundy-dark/80 to-burgundy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-paper-light mb-6 leading-tight opacity-0 animation-delay-100"
            data-animate="fade-in-up-slow"
          >
            {heroCopy.headline}
          </h1>

          <p
            className="text-xl sm:text-2xl text-paper/90 mb-6 leading-relaxed opacity-0 animation-delay-300"
            data-animate="fade-in-up-slow"
          >
            {heroCopy.subheadline}
          </p>

          <p
            className="text-lg sm:text-xl text-paper/80 mb-10 leading-relaxed opacity-0 animation-delay-500"
            data-animate="fade-in-up-slow"
          >
            {heroCopy.description}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animation-delay-600"
            data-animate="fade-in-up-slow"
          >
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
