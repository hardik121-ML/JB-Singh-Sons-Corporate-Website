import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { SERVICES } from "@/lib/constants";

export default function ServicesGrid() {
  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
          Integrated Logistics for Every Cargo Requirement
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our services cover freight movement, regulatory clearance, project cargo, marine
          operations, warehousing, and domestic distribution. Each service follows defined
          processes, trained personnel, and strict compliance standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <Card key={service.id} hover className="group">
            <CardHeader>
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-primary-orange/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-orange/20 transition-colors">
                <div className="w-8 h-8 bg-primary-orange rounded-lg"></div>
              </div>
              <CardTitle className="text-neutral-dark group-hover:text-primary-orange transition-colors">
                {service.title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {service.shortDescription}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link
                href={service.slug}
                className="text-primary-orange font-medium hover:underline"
              >
                Learn More →
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
