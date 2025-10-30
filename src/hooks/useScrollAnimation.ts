import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -100px 0px", // Só anima quando está 100px acima do bottom
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Small delay to ensure DOM is ready and prevent initial flash
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".scroll-animate, .scroll-animate-slow, .scroll-animate-left, .scroll-animate-right");
      elements.forEach((el) => {
        // Se o elemento já está visível no viewport inicial, anima imediatamente
        const rect = el.getBoundingClientRect();
        const isInInitialView = rect.top < window.innerHeight - 100;
        
        if (isInInitialView) {
          el.classList.add("animate-in");
        } else {
          observer.observe(el);
        }
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
};
