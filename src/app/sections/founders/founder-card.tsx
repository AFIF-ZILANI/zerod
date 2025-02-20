import Image from "next/image";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export function FounderCard({ name, role, bio, image, social }: FounderCardProps) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-all">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={image}
          alt={name} 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-primary font-medium mb-3">{role}</p>
        <p className="text-muted-foreground mb-4">{bio}</p>
        <div className="flex gap-2">
          {social.linkedin && (
            <Button variant="ghost" size="icon" asChild>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
          )}
          {social.github && (
            <Button variant="ghost" size="icon" asChild>
              <a href={social.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-5 w-5" />
              </a>
            </Button>
          )}
          {social.twitter && (
            <Button variant="ghost" size="icon" asChild>
              <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="h-5 w-5" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}