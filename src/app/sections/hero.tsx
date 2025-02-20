import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Transform Your Digital Vision
            <br />
            Into <span className="text-primary">Reality</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a modern IT company specializing in cutting-edge solutions for businesses.
            From web development to cloud infrastructure, we make technology work for you.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}