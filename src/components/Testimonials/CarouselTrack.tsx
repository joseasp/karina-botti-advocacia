import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./TestimonialCard";

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

interface CarouselTrackProps {
  cards: Testimonial[];
  onVisibleChange: (ids: number[]) => void;
  onCardClick: (testimonial: Testimonial) => void;
  autoplayDelay: number;
  position: 'top' | 'bottom';
}

export const CarouselTrack = ({ 
  cards, 
  onVisibleChange, 
  onCardClick,
  autoplayDelay, 
  position 
}: CarouselTrackProps) => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const updateVisible = () => {
      const slidesInView = api.slidesInView();
      const visibleIds = slidesInView.map(index => cards[index]?.id).filter(Boolean);
      onVisibleChange(visibleIds);
    };

    updateVisible();
    api.on("select", updateVisible);
    api.on("slidesInView", updateVisible);

    return () => {
      api.off("select", updateVisible);
      api.off("slidesInView", updateVisible);
    };
  }, [api, cards, onVisibleChange]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        duration: 30,
        slidesToScroll: 1,
        dragFree: false,
      }}
      plugins={[
        Autoplay({
          delay: autoplayDelay,
          stopOnInteraction: false,
        }),
      ]}
      className="w-full overflow-hidden"
    >
      <CarouselContent className="-ml-4">
        {cards.map((testimonial, index) => (
          <CarouselItem
            key={`${position}-${testimonial.id}-${index}`}
            className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <TestimonialCard testimonial={testimonial} onCardClick={onCardClick} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Setas específicas desta trilha */}
      <CarouselPrevious className={cn(
        "absolute -left-4 top-1/2 -translate-y-1/2",
        "w-8 h-8 md:w-9 md:h-9",
        "bg-white/90 hover:bg-burgundy-dark hover:text-white",
        "border border-burgundy-dark/20 shadow-md",
        "transition-all duration-300"
      )} />
      <CarouselNext className={cn(
        "absolute -right-4 top-1/2 -translate-y-1/2",
        "w-8 h-8 md:w-9 md:h-9",
        "bg-white/90 hover:bg-burgundy-dark hover:text-white",
        "border border-burgundy-dark/20 shadow-md",
        "transition-all duration-300"
      )} />
    </Carousel>
  );
};
