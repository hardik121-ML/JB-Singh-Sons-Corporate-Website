"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { useScroll } from "@/lib/ScrollContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverIndicatorStyle, setHoverIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [activeIndicatorStyle, setActiveIndicatorStyle] = useState({ left: 0, width: 0 });
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const { activeSection, scrollToSection } = useScroll();

  // Handle smooth scroll for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      scrollToSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Update active indicator position based on active section
  useEffect(() => {
    const container = navContainerRef.current;
    if (!container) return;

    // Find the index of the active section in NAV_LINKS
    const activeIndex = NAV_LINKS.findIndex((link) => {
      const sectionId = link.href.replace("/#", "");
      return sectionId === activeSection;
    });

    if (activeIndex >= 0 && navLinksRef.current[activeIndex]) {
      const activeLink = navLinksRef.current[activeIndex];
      if (activeLink) {
        const containerRect = container.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        setActiveIndicatorStyle({
          left: linkRect.left - containerRect.left,
          width: linkRect.width,
        });
      }
    }
  }, [activeSection]);

  // Handle nav item hover - move indicator
  const handleNavHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const container = navContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    setHoverIndicatorStyle({
      left: targetRect.left - containerRect.left,
      width: targetRect.width,
      opacity: 1,
    });
  };

  // Handle nav leave - hide hover indicator
  const handleNavLeave = () => {
    setHoverIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6"
      style={{
        transition: "opacity 0.6s ease-in-out, visibility 0.6s",
        opacity: isHomepage && !isScrolled ? 0 : 1,
        visibility: isHomepage && !isScrolled ? "hidden" : "visible",
        pointerEvents: isHomepage && !isScrolled ? "none" : "auto",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/#home")}
            className="flex items-center gap-3 transition-all duration-500"
          >
            <Image
              src="/Logo.svg"
              alt="J B Singh & Sons Logo"
              width={56}
              height={56}
              className="w-12 h-12 md:w-14 md:h-14"
              priority
            />
            <span className="text-base md:text-lg font-bold text-white drop-shadow-lg">
              J B Singh & Sons
            </span>
          </Link>

          {/* Centered Pill Nav - Desktop */}
          <nav
            className="hidden lg:block absolute left-1/2 -translate-x-1/2"
            onMouseLeave={handleNavLeave}
          >
            <div
              ref={navContainerRef}
              className="relative bg-white rounded-full p-1 flex items-center"
              style={{
                boxShadow: "0 0 5px 1px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Active section indicator (subtle background) */}
              <div
                className="absolute top-1 bottom-1 bg-primary-orange/15 rounded-full transition-all duration-300 ease-out"
                style={{
                  left: activeIndicatorStyle.left,
                  width: activeIndicatorStyle.width,
                  opacity: hoverIndicatorStyle.opacity > 0 ? 0 : 1,
                }}
              />

              {/* Hover indicator (solid) */}
              <div
                className="absolute top-1 bottom-1 bg-primary-orange rounded-full transition-all duration-300 ease-out"
                style={{
                  left: hoverIndicatorStyle.left,
                  width: hoverIndicatorStyle.width,
                  opacity: hoverIndicatorStyle.opacity,
                }}
              />

              {/* Nav links */}
              <div className="relative flex items-center">
                {NAV_LINKS.map((link, index) => {
                  const sectionId = link.href.replace("/#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <Link
                      key={link.href}
                      ref={(el) => { navLinksRef.current[index] = el; }}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      onMouseEnter={handleNavHover}
                      data-section={sectionId}
                      className={cn(
                        "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 group",
                        isActive
                          ? "text-primary-orange"
                          : "text-[#00324B] hover:text-white"
                      )}
                    >
                      {/* Parentheses animation */}
                      <span className="relative inline-flex items-center">
                        <span
                          className={cn(
                            "absolute -left-2 transition-all duration-200",
                            "opacity-0 group-hover:opacity-100 group-hover:text-white"
                          )}
                        >
                          (
                        </span>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                          {link.label}
                        </span>
                        <span
                          className={cn(
                            "absolute -right-2 transition-all duration-200",
                            "opacity-0 group-hover:opacity-100 group-hover:text-white"
                          )}
                        >
                          )
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-primary-orange hover:border-primary-orange transition-all duration-300 group"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  "w-full h-[2px] bg-white transition-all duration-300 origin-center",
                  isMobileMenuOpen && "rotate-45 translate-y-[9px]"
                )}
              />
              <span
                className={cn(
                  "w-full h-[2px] bg-white transition-all duration-300",
                  isMobileMenuOpen && "opacity-0 scale-0"
                )}
              />
              <span
                className={cn(
                  "w-full h-[2px] bg-white transition-all duration-300 origin-center",
                  isMobileMenuOpen && "-rotate-45 -translate-y-[9px]"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 mt-4",
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("/#", "");
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary-orange text-white"
                      : "text-[#00324B] hover:bg-primary-orange/10 hover:text-primary-orange"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
