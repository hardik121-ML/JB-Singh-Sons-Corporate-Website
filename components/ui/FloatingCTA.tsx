"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PaperPlaneTilt, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show button after scrolling down 200px
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-expand the button after 5 seconds of being visible
  useEffect(() => {
    if (isVisible && !isExpanded) {
      const timer = setTimeout(() => {
        setIsExpanded(true);
        // Auto-collapse after 3 seconds
        setTimeout(() => setIsExpanded(false), 3000);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isExpanded]);

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-40 transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <Link href="/contact">
        <button
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className={cn(
            "relative group bg-gradient-to-r from-primary-orange to-red-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110",
            "flex items-center gap-3",
            isExpanded ? "px-6 pr-5" : "px-5"
          )}
          style={{ height: "56px" }}
        >
          {/* Pulsing ring animation */}
          <div className="absolute inset-0 rounded-full bg-primary-orange/30 animate-ping"></div>

          {/* Icon */}
          <PaperPlaneTilt
            size={24}
            weight="duotone"
            className="relative z-10"
          />

          {/* Text - shows when expanded */}
          <span
            className={cn(
              "font-semibold whitespace-nowrap transition-all duration-300 overflow-hidden",
              isExpanded ? "max-w-[120px] opacity-100" : "max-w-0 opacity-0"
            )}
          >
            Get Quote
          </span>
        </button>
      </Link>

      {/* WhatsApp Quick Connect (Optional - appears above main button) */}
      <Link
        href="https://wa.me/919820456539?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20logistics%20services"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "absolute bottom-16 right-0 bg-green-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300",
          "hover:scale-110 hover:shadow-xl",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
        )}
        style={{ transitionDelay: "100ms" }}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm5.795 14.206c-.242.676-.997 1.218-1.634 1.376-.424.106-1.031.191-2.996-.645-2.517-1.073-4.139-3.601-4.263-3.767-.121-.163-1.003-1.334-1.003-2.543 0-1.209.635-1.803.86-2.048a.916.916 0 0 1 .663-.31c.165 0 .33.002.473.009.152.007.355-.058.555.424.206.495.699 1.703.761 1.828.063.124.103.268.021.432-.082.165-.123.268-.247.412-.123.145-.26.323-.37.433-.124.124-.252.257-.108.504.144.247.64 1.056 1.373 1.711.943.844 1.738 1.106 1.985 1.232.247.124.391.103.535-.062.145-.165.617-.72.782-.967.165-.247.33-.206.556-.124.227.082 1.44.679 1.687.803.247.124.412.186.473.289.062.103.062.598-.18 1.274z"/>
        </svg>
      </Link>

      {/* Mobile only - show on smaller screens */}
      <div className="sm:hidden">
        <Link href="tel:+919820456539">
          <button
            className={cn(
              "absolute bottom-32 right-0 bg-primary-navy text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300",
              "hover:scale-110 hover:shadow-xl",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}