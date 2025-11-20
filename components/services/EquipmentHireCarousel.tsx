"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Crane, Truck, Wrench, Package, Users } from "@phosphor-icons/react";

const equipmentItems = [
  {
    title: "Cranes",
    description: "Heavy-duty cranes for lifting and placement operations across ports and project sites",
    icon: Crane,
    image: "/Logistics-20251119T135955Z-1-001/Cargo-Logistics/kurt-cotoaga-MP6FMO8khn4-unsplash.jpg",
  },
  {
    title: "Forklifts",
    description: "Industrial forklifts for efficient yard and warehouse cargo movement",
    icon: Package,
    image: "/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-elevate-1267338.jpg",
  },
  {
    title: "Loaders",
    description: "Versatile loaders and related handling equipment for diverse operations",
    icon: Truck,
    image: "/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-tomfisk-3063470.jpg",
  },
  {
    title: "Prime Movers & Trailers",
    description: "Heavy transport vehicles for moving oversized and heavy cargo",
    icon: Truck,
    image: "/Logistics-20251119T135955Z-1-001/Cargo-Logistics/venti-views-FPKnAO-CF6M-unsplash.jpg",
  },
  {
    title: "Lifting Accessories",
    description: "Axles, spreader beams, mats, and specialized lifting accessories",
    icon: Wrench,
    image: "/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-tomfisk-3057963.jpg",
  },
  {
    title: "Lift Planning Support",
    description: "Expert coordination with project and site teams for safe lift operations",
    icon: Users,
    image: "/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-tomfisk-3075996.jpg",
  },
];

export default function EquipmentHireCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Create extended array for infinite scroll (duplicate items)
  const extendedItems = [...equipmentItems, ...equipmentItems, ...equipmentItems];

  // Update slides per view based on screen size
  const updateSlidesPerView = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    }
  }, []);

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, [updateSlidesPerView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Reset to beginning when reaching the end (for infinite loop)
  useEffect(() => {
    if (currentIndex >= equipmentItems.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(equipmentItems.length);
      }, 500);

      setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
    }
  }, [currentIndex]);

  // Initialize at the middle set
  useEffect(() => {
    setIsTransitioning(false);
    setCurrentIndex(equipmentItems.length);
    setTimeout(() => {
      setIsTransitioning(true);
    }, 50);
  }, []);

  // Calculate transform percentage based on slides per view
  const slideWidth = 100 / slidesPerView;
  const transformValue = currentIndex * slideWidth;

  return (
    <div className="w-full overflow-hidden">
      {/* Cards Container */}
      <div className="relative">
        <div
          className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{
            transform: `translateX(-${transformValue}%)`,
          }}
        >
          {extendedItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.title}-${index}`}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full border border-gray-100 hover:shadow-lg hover:border-primary-orange transition-all duration-300 mx-auto max-w-sm sm:max-w-none">
                  {/* Image */}
                  <div className="relative h-44 sm:h-36 md:h-40 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm">
                      <Icon size={24} weight="duotone" className="text-primary-orange" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-base sm:text-lg font-semibold text-[#0A0A0A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {equipmentItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(equipmentItems.length + index);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              (currentIndex % equipmentItems.length) === index
                ? "bg-primary-orange w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
