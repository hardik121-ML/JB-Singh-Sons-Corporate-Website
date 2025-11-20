import Image from "next/image";

// Service data for the flowchart
const leftServices = [
  // Row 1
  ["Custom Clearance of Rigs, Vessels, Materials, etc", "Attending Hearing & Appeals for Customers"],
  // Row 2
  ["Project Imports", "Coastal Clearance"],
  // Row 3
  ["Licence Application with DGFT", "CCOE & PESO Certificate Services"],
  // Row 4
  ["Re-Imports & Re-Exports", "FSSAI License"],
];

const leftBottomCenter = "Custom Clearance for SEZ & FTWZ Unit Holders";

const rightServices = [
  // Row 1
  ["Drawback, SAD & Other Refunds", "SVB Registrations & Finalization"],
  // Row 2
  ["Liaisoning Explosives WPC Licenser", "Direct Port Delivery Clearance"],
  // Row 3
  ["Application for Dual NOC from CDSCO", "Second-Hand Goods Clearance"],
  // Row 4
  ["Import Permit for Plant Quarantine (PQ)", "Registrations for ACB Status with Application for AEO"],
];

interface ServiceBoxProps {
  text: string;
}

function ServiceBox({ text }: ServiceBoxProps) {
  return (
    <div className="border-2 border-dashed border-gray-400 rounded-xl p-3 sm:p-4 bg-white hover:border-primary-orange hover:shadow-md transition-all duration-300 flex items-center justify-center min-h-[70px] sm:min-h-[80px]">
      <p className="text-xs sm:text-sm text-gray-700 text-center leading-tight font-medium">
        {text}
      </p>
    </div>
  );
}

export default function CustomClearanceFlowchart() {
  return (
    <div className="w-full">
      {/* Desktop/Tablet Layout - Hidden on mobile */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 lg:gap-6 items-start">
          {/* Left Side Services */}
          <div className="space-y-4">
            {leftServices.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-2 gap-3">
                {row.map((service, colIndex) => (
                  <ServiceBox key={`left-${rowIndex}-${colIndex}`} text={service} />
                ))}
              </div>
            ))}
            {/* Bottom Center for Left Side */}
            <div className="flex justify-center mt-4">
              <div className="w-full max-w-md">
                <ServiceBox text={leftBottomCenter} />
              </div>
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center px-4 lg:px-8 py-8">
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 flex-shrink-0">
              <div className="absolute inset-0 bg-white rounded-full shadow-lg border-4 border-primary-orange flex items-center justify-center">
                <Image
                  src="/Logo.svg"
                  alt="J B Singh & Sons"
                  width={160}
                  height={160}
                  className="w-28 h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Side Services */}
          <div className="space-y-4">
            {rightServices.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-2 gap-3">
                {row.map((service, colIndex) => (
                  <ServiceBox key={`right-${rowIndex}-${colIndex}`} text={service} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout - Visible only on mobile */}
      <div className="md:hidden">
        {/* Logo at top center */}
        <div className="flex justify-center mb-8">
          <div className="relative w-28 h-28 flex-shrink-0">
            <div className="absolute inset-0 bg-white rounded-full shadow-lg border-4 border-primary-orange flex items-center justify-center">
              <Image
                src="/Logo.svg"
                alt="J B Singh & Sons"
                width={100}
                height={100}
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </div>

        {/* All services in 2-column grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Left services */}
          {leftServices.flat().map((service, index) => (
            <ServiceBox key={`mobile-left-${index}`} text={service} />
          ))}

          {/* Bottom center service - spans full width */}
          <div className="col-span-2">
            <ServiceBox text={leftBottomCenter} />
          </div>

          {/* Right services */}
          {rightServices.flat().map((service, index) => (
            <ServiceBox key={`mobile-right-${index}`} text={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
