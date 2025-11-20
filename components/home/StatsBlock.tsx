import Container from "@/components/ui/Container";
import { STATS } from "@/lib/constants";

export default function StatsBlock() {
  return (
    <section className="bg-[#06172F] py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white font-medium">
                {stat.label}
              </div>
              {stat.subtext && (
                <div className="text-xs text-white/80 mt-1">
                  {stat.subtext}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
