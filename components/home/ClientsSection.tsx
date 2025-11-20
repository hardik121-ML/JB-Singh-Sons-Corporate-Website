"use client";

import Section from "@/components/ui/Section";
import { CLIENTS } from "@/lib/constants";
import {
  Factory,
  Atom,
  Package,
  Gear,
  Cylinder,
  Warehouse,
  Cube,
  Buildings,
} from "@phosphor-icons/react";

// Icon mapping
const iconMap: { [key: string]: React.ComponentType<{ size?: number; weight?: string; className?: string }> } = {
  Factory,
  Atom,
  Package,
  Gear,
  Cylinder,
  Warehouse,
  Cube,
  Buildings,
};

export default function ClientsSection() {
  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
          Trusted by Leading Businesses
        </h2>
        <p className="text-lg text-[#4B5563] max-w-3xl mx-auto">
          We support organisations across manufacturing, metals, engineering, and global trade.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {CLIENTS.map((client, index) => {
          const IconComponent = iconMap[client.icon];
          return (
            <div
              key={index}
              className="bg-[#F8F9FC] rounded-lg p-4 flex flex-col items-center justify-center hover:bg-[#F2F4F7] hover:shadow-md transition-all duration-300 min-h-[120px]"
            >
              {IconComponent && (
                <div className="mb-2">
                  <IconComponent
                    size={32}
                    weight="duotone"
                    className="text-primary-orange"
                  />
                </div>
              )}
              <p className="text-xs sm:text-sm font-medium text-[#4B5563] text-center leading-tight">
                {client.name}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
