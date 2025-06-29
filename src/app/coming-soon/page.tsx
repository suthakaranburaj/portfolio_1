import { Metadata } from 'next';
import ComingSoonClient from './ComingSoonClient';

export const metadata: Metadata = {
  title: "Coming Soon - New Features in Development",
  description: "Exciting new features and projects are currently in development. Stay tuned for updates on the latest innovations and improvements to my portfolio.",
  keywords: [
    "Coming Soon",
    "New Features",
    "Portfolio Updates",
    "Development in Progress",
    "Future Projects",
    "Innovation"
  ],
  openGraph: {
    title: "Coming Soon - New Features in Development",
    description: "Exciting new features and projects are currently in development. Stay tuned for updates.",
    url: "https://suthakaranburaj.com/coming-soon",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Coming Soon - Suthakar Anburaj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon - New Features in Development",
    description: "Exciting new features and projects are currently in development. Stay tuned for updates.",
    images: ["/logo.png"],
  },
};

export default function ComingSoonPage() {
  return <ComingSoonClient />;
}
