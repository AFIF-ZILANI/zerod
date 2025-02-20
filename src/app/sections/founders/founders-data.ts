import AFIFIMAGE from '@/images/hero.jpg'
import BandorniImage from "@/images/BANDORNI.jpg"
import TauhidImage from "@/images/Tauhid.jpg"
export const foundersData = [
  {
    name: "Tauhid Rana",
    role: "Chief Technology Officer",
    bio: "A visionary tech leader with extensive experience in software architecture and cloud solutions. Specializes in building scalable systems and fostering innovation.",
    // image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    image: TauhidImage,
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Ajmery Arabi",
    role: "Creative Director",
    bio: "A creative visionary leading our design initiatives. Expert in user experience, brand identity, and digital design innovation. Transforms complex ideas into elegant visual solutions.",
    // image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    image: BandorniImage,
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "AFIF ZILANI",
    role: "Chief Executive Officer",
    bio: "Visionary leader and founder of ZeroD. Drives the company's strategic direction and innovation initiatives. Passionate about leveraging technology to create impactful solutions.",
    // image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    image: AFIFIMAGE,
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com/AFIF-ZILANI",
      twitter: "https://x.com/afif_zilani"
    }
  }
] as const;