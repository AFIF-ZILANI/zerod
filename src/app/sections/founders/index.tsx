import { FounderCard } from "./founder-card";
import { foundersData } from "./founders-data";

export function FoundersSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Meet Our Founders</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The visionaries behind ZeroD's innovation and success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foundersData.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </div>
    </section>
  );
}
