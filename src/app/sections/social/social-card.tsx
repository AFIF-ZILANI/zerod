import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

interface SocialCardProps {
  name: string;
  icon: LucideIcon;
  url: string;
  description: string;
  followers: string;
}

export function SocialCard({ name, icon: Icon, url, description, followers }: SocialCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{followers}</p>
          </div>
        </div>
        <p className="text-muted-foreground flex-1 mb-4">{description}</p>
        <Button className="w-full" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Follow Us
          </a>
        </Button>
      </div>
    </Card>
  );
}