import { useEffect } from "react";

const OBSERVER_THRESHOLD = 0.2;
const ROOT_MARGIN = "0px 0px -10% 0px";

export const useScrollAnimations = () => {
  useEffect(() => {
    const animatedElements =
      document.querySelectorAll<HTMLElement>("[data-animate]");

    if (!animatedElements.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const activateElement = (
      target: HTMLElement,
      observerInstance?: IntersectionObserver
    ) => {
      if (target.dataset.inview === "true") {
        observerInstance?.unobserve(target);
        return;
      }

      const animationType = target.dataset.animate;

      if (prefersReducedMotion || !animationType) {
        target.classList.remove("opacity-0");
        target.dataset.inview = "true";
        observerInstance?.unobserve(target);
        return;
      }

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
        target.removeEventListener("animationstart", handleAnimationStart);
        target.removeEventListener("animationend", handleAnimationEnd);
      };

      target.addEventListener("animationstart", handleAnimationStart, {
        once: true,
      });
      target.addEventListener("animationend", handleAnimationEnd, {
        once: true,
      });

      observerInstance?.unobserve(target);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          activateElement(target, observer);
        });
      },
      { threshold: OBSERVER_THRESHOLD, rootMargin: ROOT_MARGIN }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);

      const rect = element.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight * (1 - OBSERVER_THRESHOLD) &&
        rect.bottom > 0;

      if (isVisible) {
        activateElement(element, observer);
      }
    });

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimations;
