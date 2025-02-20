import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Hash,
  MessageCircle,
  MessageSquare,
  Globe,
  type LucideIcon
} from "lucide-react";

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/zerod",
    description: "Follow our company updates and industry insights",
    followers: "5K+"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/zerod",
    description: "Explore our open-source contributions",
    followers: "2K+"
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    url: "https://twitter.com/zerod",
    description: "Stay updated with our latest news and tech discussions",
    followers: "10K+"
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/zerod",
    description: "Join our community and events",
    followers: "15K+"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/zerod",
    description: "Behind the scenes and company culture",
    followers: "8K+"
  },
  {
    name: "Hashnode",
    icon: Hash,
    url: "https://hashnode.com/@zerod",
    description: "Read our technical blogs and tutorials",
    followers: "3K+"
  },
  {
    name: "Discord",
    icon: MessageCircle,
    url: "https://discord.gg/zerod",
    description: "Join our developer community",
    followers: "2K+"
  },
  {
    name: "Reddit",
    icon: MessageSquare,
    url: "https://reddit.com/r/zerod",
    description: "Participate in tech discussions",
    followers: "5K+"
  },
  {
    name: "Blog",
    icon: Globe,
    url: "https://zerod.com/blog",
    description: "In-depth articles and case studies",
    followers: "20K+ readers"
  }
] as const;