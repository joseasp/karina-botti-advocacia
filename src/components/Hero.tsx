import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lawyer.jpg";
const Hero = () => {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Karina Botti Advocacia" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark/95 via-burgundy-dark/80 to-burgundy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="mb-6">
            
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-paper-light mb-6 leading-tight">
            Advocacia e Assessoria Jurídica
          </h1>

          <p className="text-xl sm:text-2xl text-paper/90 mb-8 leading-relaxed">
            Assessoria técnica especializada em Administração Pública,
            contencioso cível e criminal, redação legislativa e processos
            administrativos
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-burgundy-dark font-semibold text-lg px-8 py-6 transition-all duration-300 shadow-lg hover:shadow-xl group" asChild>
              <a href="https://wa.me/5531999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale no WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button size="lg" variant="outline" className="border-2 border-paper-light text-paper-light hover:bg-paper-light hover:text-burgundy-dark font-semibold text-lg px-8 py-6 transition-all duration-300" asChild>
              
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
    </section>;
};
export default Hero;