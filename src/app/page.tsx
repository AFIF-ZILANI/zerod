import { HeroSection } from "./sections/hero";
import { ServicesSection } from "./sections/services";
import { ProjectsSection } from "./sections/projects";
import { FoundersSection } from "./sections/founders";
import { SocialSection } from "./sections/social";
import { CTASection } from "./sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <FoundersSection />
      <SocialSection />
      <CTASection />
    </div>
  );
}