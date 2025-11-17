import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function CSRPreview() {
  return (
    <Section>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
          Our CSR – Caring Beyond Business
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We follow industry safety norms, support local communities where possible, and maintain
          transparent governance practices that align with operational standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-neutral-light rounded-2xl">
            <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">HSE Safety</h3>
            <p className="text-gray-600">
              Comprehensive health, safety, and environmental programs
            </p>
          </div>
          <div className="p-6 bg-neutral-light rounded-2xl">
            <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">🌱</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">ESG</h3>
            <p className="text-gray-600">
              Environmental, Social, and Governance commitments
            </p>
          </div>
        </div>

        <Link href="/csr">
          <Button variant="outline">Learn More About Our CSR</Button>
        </Link>
      </div>
    </Section>
  );
}
