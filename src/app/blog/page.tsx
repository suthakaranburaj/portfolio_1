import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: "Blog - Web Development, AI, and Technology Insights",
  description: "Read my latest articles on web development, artificial intelligence, blockchain technology, and career insights. Expert insights on modern software development.",
  keywords: [
    "Web Development Blog",
    "AI Articles",
    "Software Development",
    "Technology Blog",
    "Next.js Tutorials",
    "React Development",
    "Career Advice",
    "Tech Insights"
  ],
  openGraph: {
    title: "Blog - Web Development, AI, and Technology Insights",
    description: "Read my latest articles on web development, artificial intelligence, blockchain technology, and career insights.",
    url: "https://suthakaranburaj.com/blog",
    type: "website",
    images: [
      {
        url: "/blog_1.png",
        width: 1200,
        height: 630,
        alt: "Suthakar Anburaj Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Web Development, AI, and Technology Insights",
    description: "Read my latest articles on web development, artificial intelligence, blockchain technology, and career insights.",
    images: ["/blog_1.png"],
  },
};

export default function BlogPage() {
  return <BlogClient />;
} 