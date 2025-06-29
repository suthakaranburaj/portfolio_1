import { Metadata } from 'next';
import Hero from '@/components/hero_section/hero';
import Navbar from '@/components/navbar/Navbar';
import About from '@/components/about_section/about';
import Experience from '@/components/experience_section/experience';
import Projects from '@/components/projects_section/projects';
import Skills from '@/components/skills_section/skills';
import Hackathon from '@/components/hackathon_section/hackathon';
import Blog from '@/components/blog_section/blog';
import YouTube from '@/components/youtube_section/youtube';
import Contact from '@/components/contact_section/contact';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
  title: "Suthakar Anburaj - Full Stack Developer & Software Engineer Portfolio",
  description: "Full Stack Developer and Software Engineer with expertise in React, Next.js, Node.js, and modern web technologies. View my portfolio, projects, and professional experience.",
  keywords: [
    "Suthakar Anburaj",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio",
    "Web Applications",
    "Mobile Development",
    "UI/UX Design"
  ],
  openGraph: {
    title: "Suthakar Anburaj - Full Stack Developer & Software Engineer Portfolio",
    description: "Full Stack Developer and Software Engineer with expertise in React, Next.js, Node.js, and modern web technologies.",
    url: "https://suthakaranburaj.com",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Suthakar Anburaj - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suthakar Anburaj - Full Stack Developer & Software Engineer Portfolio",
    description: "Full Stack Developer and Software Engineer with expertise in React, Next.js, Node.js, and modern web technologies.",
    images: ["/logo.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Hackathon />
      <Blog />
      <YouTube />
      <Contact />
      <Footer />
    </main>
  );
}
