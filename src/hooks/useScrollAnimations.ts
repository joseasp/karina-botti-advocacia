import { useEffect } from "react";

export const useScrollAnimations = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll<HTMLElement>("[data-animate]");

    if (!animatedElements.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const activateElement = (element: HTMLElement) => {
      if (element.dataset.animated === "true") return;

      const animationType = element.dataset.animate;
      if (!animationType) return;

      if (prefersReducedMotion) {
        element.style.opacity = "1";
        element.style.transform = "none";
        element.dataset.animated = "true";
        return;
      }

      // Apply animation class
      const animationClass = `animate-${animationType}`;
      element.classList.add(animationClass);
      
      // Mark as animated to prevent re-animation
      element.dataset.animated = "true";
    };

    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activateElement(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    // Observe all animated elements
    animatedElements.forEach((element) => {
      // Check if element is already in viewport on load
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInViewport) {
        // Animate immediately for elements in initial viewport
        activateElement(element);
      } else {
        // Observe for scroll trigger
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimations;
