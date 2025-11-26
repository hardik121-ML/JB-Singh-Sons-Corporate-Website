"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Configure ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
});

// Utility function to check for reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Animation presets for consistent timing
export const animationConfig = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1,
    verySlow: 1.5,
  },
  ease: {
    smooth: "power3.out",
    bounce: "back.out(1.7)",
    elastic: "elastic.out(1, 0.3)",
    sharp: "power4.out",
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
};

// Reusable animation functions
export const animations = {
  // Fade up with blur
  fadeUpBlur: (element: string | Element, options = {}) => {
    const defaults = {
      opacity: 0,
      y: 60,
      filter: "blur(10px)",
      duration: animationConfig.duration.slow,
      ease: animationConfig.ease.sharp,
    };
    return gsap.from(element, { ...defaults, ...options });
  },

  // Staggered reveal for multiple elements
  staggerReveal: (elements: string | Element[], options = {}) => {
    const defaults = {
      opacity: 0,
      y: 40,
      filter: "blur(8px)",
      duration: animationConfig.duration.normal,
      stagger: animationConfig.stagger.normal,
      ease: animationConfig.ease.smooth,
    };
    return gsap.from(elements, { ...defaults, ...options });
  },

  // Counter animation for stats
  counter: (element: string | Element, endValue: number, options = {}) => {
    const defaults = {
      textContent: 0,
      duration: 2,
      snap: { textContent: 1 },
      ease: "power2.out",
    };
    return gsap.to(element, {
      ...defaults,
      textContent: endValue,
      ...options,
    });
  },

  // Parallax effect
  parallax: (element: string | Element, yAmount: number = 100, options = {}) => {
    return gsap.to(element, {
      y: yAmount,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        ...options,
      },
    });
  },

  // Scale in effect
  scaleIn: (element: string | Element, options = {}) => {
    const defaults = {
      scale: 0.8,
      opacity: 0,
      duration: animationConfig.duration.normal,
      ease: animationConfig.ease.smooth,
    };
    return gsap.from(element, { ...defaults, ...options });
  },
};

// Initialize scroll-based animations for a section
export const initScrollAnimation = (
  trigger: string | Element,
  animation: gsap.core.Tween | gsap.core.Timeline,
  options = {}
) => {
  const defaults = {
    trigger,
    start: "top 80%",
    toggleActions: "play none none reverse",
  };

  ScrollTrigger.create({
    ...defaults,
    ...options,
    animation,
  });
};

// Batch animation for multiple elements entering viewport
export const batchReveal = (selector: string, options = {}) => {
  const defaults = {
    interval: 0.1,
    batchMax: 3,
    onEnter: (batch: Element[]) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      }),
    onLeave: (batch: Element[]) =>
      gsap.to(batch, {
        opacity: 0,
        y: 20,
        filter: "blur(4px)",
      }),
    onEnterBack: (batch: Element[]) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.1,
      }),
    onLeaveBack: (batch: Element[]) =>
      gsap.to(batch, {
        opacity: 0,
        y: -20,
        filter: "blur(4px)",
      }),
  };

  // Set initial state
  gsap.set(selector, { opacity: 0, y: 40, filter: "blur(8px)" });

  ScrollTrigger.batch(selector, { ...defaults, ...options });
};

// Clean up function for components
export const killScrollTriggers = (trigger?: string | Element) => {
  if (trigger) {
    ScrollTrigger.getAll()
      .filter((st) => st.trigger === trigger)
      .forEach((st) => st.kill());
  } else {
    ScrollTrigger.getAll().forEach((st) => st.kill());
  }
};

// Refresh ScrollTrigger after content changes
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

// Smooth scroll to a section by ID
export const scrollToSection = (sectionId: string, offsetY: number = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    gsap.to(window, {
      scrollTo: { y: element, offsetY },
      duration: 1,
      ease: "power3.inOut",
    });
  }
};

export { gsap, ScrollTrigger, ScrollToPlugin };
