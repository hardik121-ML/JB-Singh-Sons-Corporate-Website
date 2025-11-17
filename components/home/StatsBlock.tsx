import Container from "@/components/ui/Container";
import { STATS } from "@/lib/constants";

export default function StatsBlock() {
  return (
    <section className="bg-primary-navy py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {stat.label}
              </div>
              {stat.placeholder && (
                <div className="text-xs text-gray-400 mt-1">
                  (Pending from client)
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
