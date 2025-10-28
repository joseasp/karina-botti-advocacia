import { useEffect } from "react";

const OBSERVER_THRESHOLD = 0.2;
const ROOT_MARGIN = "0px 0px -10% 0px";

export const useScrollAnimations = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll<HTMLElement>("[data-animate]");

    if (!animatedElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          const animationType = target.dataset.animate;

          if (animationType) {
            const animationClass = `animate-${animationType}`;
            if (!target.classList.contains(animationClass)) {
              target.classList.add(animationClass);
            }

            const handleAnimationStart = () => {
              requestAnimationFrame(() => {
                target.classList.remove("opacity-0");
              });
            };

            const handleAnimationEnd = () => {
              target.dataset.inview = "true";
            };

            target.addEventListener("animationstart", handleAnimationStart, {
              once: true,
            });
            target.addEventListener("animationend", handleAnimationEnd, {
              once: true,
            });
          } else {
            target.classList.remove("opacity-0");
            target.dataset.inview = "true";
          }

          observer.unobserve(target);
        });
      },
      { threshold: OBSERVER_THRESHOLD, rootMargin: ROOT_MARGIN }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimations;
