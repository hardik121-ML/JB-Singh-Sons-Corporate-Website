import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function AboutPreview() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            Driving Growth Beyond Borders
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            J B Singh & Sons has operated since 2003 with a clear focus: dependable freight
            movement supported by robust processes, technical skill, and transparent communication.
            We manage complex cargo needs with disciplined execution and industry-aligned practices
            that help businesses move goods without delays or compliance gaps.
          </p>
          <Link href="/about">
            <Button variant="outline">Read More</Button>
          </Link>
        </div>

        {/* Image Carousel Placeholder */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm p-4 text-center">
              Image 1<br />(Warehouse/Office)
            </div>
            <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm p-4 text-center">
              Image 2<br />(Team/Operations)
            </div>
          </div>
          <div className="aspect-[2/1] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm p-4 text-center">
            Image 3 (Wide - Equipment/Cargo)
          </div>
          <p className="text-xs text-gray-400 text-center">
            [3-image carousel - Pending from client]
          </p>
        </div>
      </div>
    </Section>
  );
}
