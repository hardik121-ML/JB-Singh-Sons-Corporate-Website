import Link from "next/link";
import Image from "next/image";
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

        {/* Image Carousel */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/placeholders/Image 1 WarehouseOffice.png"
                alt="J B Singh & Sons warehouse and office facility"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/placeholders/Image 2 Team Operations.png"
                alt="J B Singh & Sons team and operations"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden">
            <Image
              src="/images/placeholders/Image 3 Wide Equipment Cargo.png"
              alt="J B Singh & Sons equipment and cargo operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
