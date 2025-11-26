"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { gsap, ScrollTrigger, scrollToSection as gsapScrollToSection } from "@/lib/gsap";

// Section IDs in scroll order
export const SECTION_IDS = ["home", "services", "solutions", "about", "careers", "contact"];

interface ScrollContextType {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
  scrollToSection: (sectionId: string) => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = useCallback((sectionId: string) => {
    gsapScrollToSection(sectionId, 80);
  }, []);

  // Set up ScrollTrigger observers for each section
  useEffect(() => {
    let triggers: ScrollTrigger[] = [];

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      SECTION_IDS.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        // Create a ScrollTrigger that sets active section when section enters center of viewport
        const trigger = ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(sectionId),
          onEnterBack: () => setActiveSection(sectionId),
        });

        triggers.push(trigger);
      });

      // Refresh ScrollTrigger to account for all content
      ScrollTrigger.refresh();
    }, 500);

    // Cleanup: kill all triggers and clear timeout
    return () => {
      clearTimeout(timer);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  // Handle initial URL hash on load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      if (SECTION_IDS.includes(sectionId)) {
        // Delay to allow page to render
        setTimeout(() => {
          scrollToSection(sectionId);
          setActiveSection(sectionId);
        }, 800);
      }
    }
  }, [scrollToSection]);

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}
