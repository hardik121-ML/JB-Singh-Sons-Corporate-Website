"use client";

import { useRef, useState, useLayoutEffect } from "react";

// Sticky top position accounting for header height
const STICKY_TOP = "clamp(80px, calc(64px + 4vmax), 120px)";

const ABOUT_CARDS = [
  {
    number: "01",
    title: "Disciplined Operations",
    description:
      "We navigate complex logistics challenges with precision, delivering solutions through structured processes, accurate documentation, and dependable execution across domestic and global routes.",
  },
  {
    number: "02",
    title: "Insights Before Action",
    description:
      "Every engagement begins with a thorough understanding of your cargo requirements and compliance needs, letting operational insights shape strategies that move your business forward.",
  },
  {
    number: "03",
    title: "Partners, Not Vendors",
    description:
      "We work alongside your team as an extension of your operations, sharing commitment to your success and building logistics solutions together since 2003.",
  },
  {
    number: "04",
    title: "Excellence with Purpose",
    description:
      "We deliver operationally sound logistics that serve strategic intent—merging technical expertise with reliable execution to simplify complex cargo movements.",
  },
];

export default function AboutStackedSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [heights, setHeights] = useState({ title: 0, content: 0 });

  const totalCards = ABOUT_CARDS.length;

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measureHeights = () => {
      const titleEl = container.querySelector("[data-about-title]");
      const allCards = container.querySelectorAll("[data-card-inner]");

      if (titleEl && allCards.length > 0) {
        const titleHeight = titleEl.getBoundingClientRect().height;

        // Find the TALLEST card's inner height to ensure all descriptions get covered
        let maxContentHeight = 0;
        allCards.forEach((card) => {
          const height = (card as HTMLElement).offsetHeight;
          if (height > maxContentHeight) {
            maxContentHeight = height;
          }
        });

        setHeights({ title: titleHeight, content: maxContentHeight });
      }
    };

    // Use ResizeObserver for efficient resize detection
    const observer = new ResizeObserver(measureHeights);
    observer.observe(container);

    // Initial measurement after a short delay for rendering
    const timer = setTimeout(measureHeights, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [totalCards]);

  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary-orange font-semibold text-sm uppercase tracking-wider mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-4">
            Built on Discipline.<br className="hidden md:block" /> Driven by Expertise.
          </h2>
          <p className="text-lg text-[#4B5563] max-w-3xl mx-auto">
            Since 2003, J B Singh & Sons has delivered reliable logistics through structured
            processes, technical expertise, and a commitment to operational excellence.
          </p>
        </div>

        <div ref={containerRef}>
          {ABOUT_CARDS.map((card, index) => {
            // BlinkPath formula:
            // paddingTop = index * titleHeight
            // paddingBottom = (totalCards - 1 - index) * titleHeight
            // marginTop = -contentHeight (for all cards after first)
            const paddingTop = index * heights.title;
            const paddingBottom = (totalCards - 1 - index) * heights.title;
            const marginTop = index === 0 ? 0 : -heights.content;

            return (
              <div
                key={card.number}
                data-about-card
                className="sticky pointer-events-none"
                style={{
                  top: STICKY_TOP,
                  paddingTop,
                  paddingBottom,
                  marginTop,
                }}
              >
                <div data-card-inner className="grid grid-cols-8 bg-white border-t border-[#0A0A0A]/20 pointer-events-auto">
                  {/* Number column */}
                  <div className="col-span-2 md:col-span-1 pt-8 md:pt-10">
                    <p className="text-2xl md:text-3xl font-medium text-primary-orange">
                      ({card.number})
                    </p>
                  </div>

                  {/* Content column */}
                  <div className="col-span-6 md:col-span-7 grid grid-cols-6">
                    <div
                      data-about-title
                      className="col-span-6 md:col-span-4 py-8 md:py-10"
                    >
                      <h4 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0A0A0A] leading-tight">
                        {card.title}
                      </h4>
                    </div>
                    <div
                      data-about-content
                      className="col-span-6 md:col-span-5 pb-12 md:pb-16"
                    >
                      <p className="text-base md:text-lg lg:text-xl text-[#0A0A0A]/70 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
