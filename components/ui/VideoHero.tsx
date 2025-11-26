"use client";

import { useEffect, useRef, ReactNode } from "react";
import Container from "./Container";
import Button from "./Button";
import Link from "next/link";

interface VideoHeroProps {
  videoSrc?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  ctaText?: string;
  ctaHref?: string;
  showStats?: boolean;
  stats?: Array<{
    value: string;
    label: string;
    suffix?: string;
    description?: string;
  }>;
  children?: ReactNode;
  height?: "full" | "large" | "medium";
  overlay?: "light" | "dark" | "none";
}

export default function VideoHero({
  videoSrc = "/videos/3309765-uhd_3840_2160_30fps.mp4",
  title,
  subtitle,
  badge,
  ctaText,
  ctaHref,
  showStats = false,
  stats = [],
  children,
  height = "full",
  overlay = "light"
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // Simple counter animation for stats
  useEffect(() => {
    if (!showStats) return;

    const animateCounters = () => {
      const counters = document.querySelectorAll('.hero-stat-counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const duration = 2000;
        const step = target / (duration / 16);

        let current = 0;
        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };
        updateCounter();
      });
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, [showStats]);

  // Simple fade in animation
  useEffect(() => {
    const elements = [badgeRef.current, headlineRef.current];
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add('fade-in');
        }, 100 + (index * 200));
      }
    });
  }, []);

  const heightClasses = {
    full: "min-h-[90vh]",
    large: "min-h-[70vh]",
    medium: "min-h-[50vh]"
  };

  const overlayClasses = {
    light: "bg-gradient-to-b from-black/20 via-transparent to-black/30",
    dark: "bg-gradient-to-b from-black/40 via-black/20 to-black/50",
    none: ""
  };

  return (
    <section className={`relative gradient-mesh overflow-hidden ${heightClasses[height]} flex items-center`}>
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[120%] object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {overlay !== "none" && (
          <div className={`absolute inset-0 ${overlayClasses[overlay]}`}></div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-navy/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>

      <Container className="relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {badge && (
            <div ref={badgeRef} className="inline-flex items-center gap-2 mb-8 opacity-0 transition-opacity duration-1000">
              <div className="badge-shimmer px-6 py-3 rounded-full font-medium text-sm md:text-base shadow-sm border border-gray-500/20">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {badge}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </span>
              </div>
            </div>
          )}

          {/* Title */}
          <h1
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight tracking-tight title-3d opacity-0 transition-opacity duration-1000"
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
          )}

          {/* Custom content */}
          {children}

          {/* CTA Button */}
          {ctaText && ctaHref && (
            <div className="flex justify-center items-center mt-8">
              <Link href={ctaHref}>
                <Button
                  size="lg"
                  className="bg-primary-orange hover:bg-red-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {ctaText}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Container>

      {/* Statistics Overlay */}
      {showStats && stats.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 pb-12 pt-20 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-2 lg:grid-cols-${stats.length} gap-4 lg:gap-8`}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-glass-card text-center p-4 lg:p-6 rounded-2xl">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                    <span className="hero-stat-counter" data-target={stat.value}>{stat.value}</span>
                    {stat.suffix}
                  </div>
                  <div className="text-sm md:text-base text-white/90 font-medium">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div className="text-xs text-white/60 mt-1">
                      {stat.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      {height === "full" && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-fade-up"></div>
          </div>
        </div>
      )}
    </section>
  );
}