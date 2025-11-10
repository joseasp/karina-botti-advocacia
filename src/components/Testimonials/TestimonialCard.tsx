import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  keyPhrase: string;
  fullText: string;
  photo?: string;
  size: 'small' | 'medium' | 'large';
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  onCardClick: (testimonial: Testimonial) => void;
}

export const TestimonialCard = ({ testimonial, onCardClick }: TestimonialCardProps) => {
  return (
    <div
      onClick={() => onCardClick(testimonial)}
      className={cn(
        "bg-white rounded-xl shadow-lg p-4 md:p-5",
        "hover:shadow-xl hover:scale-[1.02]",
        "border-l-4 border-gold h-full flex flex-col",
        "cursor-pointer transition-all duration-300",
        // Alturas variadas (masonry visual)
        testimonial.size === 'large' && "min-h-[240px]",
        testimonial.size === 'medium' && "min-h-[200px]",
        testimonial.size === 'small' && "min-h-[160px]",
      )}
    >
      {/* Avatar + Info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
          {testimonial.photo ? (
            <img 
              src={testimonial.photo} 
              alt={testimonial.name} 
              className="w-10 h-10 rounded-full object-cover" 
            />
          ) : (
            <User className="w-5 h-5 text-burgundy-dark" />
          )}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-burgundy-dark truncate">{testimonial.name}</p>
          <p className="text-xs text-foreground/60 truncate">{testimonial.role}</p>
          <p className="text-xs text-gold font-medium truncate">{testimonial.organization}</p>
        </div>
      </div>

      {/* Texto do depoimento */}
      <p className="text-sm md:text-base font-medium text-burgundy-dark italic leading-relaxed flex-grow mb-3">
        "{testimonial.keyPhrase}"
      </p>

      {/* Botão Leia Mais */}
      <button
        onClick={() => onCardClick(testimonial)}
        className="text-sm font-semibold text-gold hover:text-burgundy-dark transition-colors duration-200 self-start"
      >
        Leia mais →
      </button>
    </div>
  );
};
