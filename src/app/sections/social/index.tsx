import { SocialCard } from "./social-card";
import { socialLinks } from "./social-data";

export function SocialSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Connect With Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our growing community across various platforms
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialLinks.map((social) => (
            <SocialCard key={social.name} {...social} />
          ))}
        </div>
      </div>
    </section>
  );
}