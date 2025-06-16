import Hero from '@/components/hero_section/hero';
import Navbar from '@/components/navbar/Navbar';
import About from '@/components/about_section/about';
import Experience from '@/components/experience_section/experience';
import Projects from '@/components/projects_section/projects';
import Skills from '@/components/skills_section/skills';
import Contact from '@/components/contact_section/contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
