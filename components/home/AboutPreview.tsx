import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function AboutPreview() {
  return (
    <Section className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6">
            Driving Growth Beyond Borders
          </h2>
          <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
            J B Singh & Sons has operated since 2003 with a clear focus: dependable freight
            movement supported by strong processes, technical skill, and transparent communication.
            We manage complex cargo with disciplined execution and industry-aligned practices
            that help businesses move goods without delays or compliance issues.
          </p>
          <Link href="/about">
            <Button variant="outline">Read More</Button>
          </Link>
        </div>

        {/* Image Carousel */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-elevate-1267338.jpg"
                alt="J B Singh & Sons warehouse operations with forklift"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/Logistics-20251119T135955Z-1-001/Cargo-Logistics/kurt-cotoaga-MP6FMO8khn4-unsplash.jpg"
                alt="J B Singh & Sons port crane operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden">
            <Image
              src="/Logistics-20251119T135955Z-1-001/Cargo-Logistics/venti-views-FPKnAO-CF6M-unsplash.jpg"
              alt="J B Singh & Sons cargo shipping operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
