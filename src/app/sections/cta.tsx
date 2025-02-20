import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
          Let's discuss how we can help you achieve your digital goals. Our team is ready to bring your vision to life.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}