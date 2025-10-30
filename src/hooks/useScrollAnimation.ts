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

    // Execute imediatamente para evitar flash
    const elements = document.querySelectorAll(".scroll-animate, .scroll-animate-slow, .scroll-animate-left, .scroll-animate-right");
    elements.forEach((el) => {
      // Se o elemento já está visível no viewport inicial, anima imediatamente
      const rect = el.getBoundingClientRect();
      const isInInitialView = rect.top < window.innerHeight - 100;
      
      if (isInInitialView) {
        // Anima imediatamente sem delay para evitar flash
        requestAnimationFrame(() => {
          el.classList.add("animate-in");
        });
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};
