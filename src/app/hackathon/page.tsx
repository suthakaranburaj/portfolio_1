import { Metadata } from 'next';
import HackathonClient from './HackathonClient';

export const metadata: Metadata = {
  title: "Hackathon Achievements - Web3, AI, and Innovation Projects",
  description: "Explore my hackathon achievements and innovative projects in Web3, AI, mobile development, and social impact. View winning solutions and technical implementations.",
  keywords: [
    "Hackathon Achievements",
    "Web3 Projects",
    "AI Innovation",
    "Mobile Development",
    "Social Impact",
    "Blockchain Projects",
    "Machine Learning",
    "Innovation Awards"
  ],
  openGraph: {
    title: "Hackathon Achievements - Web3, AI, and Innovation Projects",
    description: "Explore my hackathon achievements and innovative projects in Web3, AI, mobile development, and social impact.",
    url: "https://suthakaranburaj.com/hackathon",
    type: "website",
    images: [
      {
        url: "/hackathon_main.png",
        width: 1200,
        height: 630,
        alt: "Suthakar Anburaj Hackathon Achievements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hackathon Achievements - Web3, AI, and Innovation Projects",
    description: "Explore my hackathon achievements and innovative projects in Web3, AI, mobile development, and social impact.",
    images: ["/hackathon_main.png"],
  },
};

export default function HackathonPage() {
  return <HackathonClient />;
} 