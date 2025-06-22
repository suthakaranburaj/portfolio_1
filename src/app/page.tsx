import Hero from '@/components/hero_section/hero';
import Navbar from '@/components/navbar/Navbar';
import About from '@/components/about_section/about';
import Experience from '@/components/experience_section/experience';
import Projects from '@/components/projects_section/projects';
import Skills from '@/components/skills_section/skills';
import Hackathon from '@/components/hackathon_section/hackathon';
import Blog from '@/components/blog_section/blog';
// import YouTube from '@/components/youtube_section/youtube';
import Contact from '@/components/contact_section/contact';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Hackathon />
      <Blog />
      {/* <YouTube /> */}
      <Contact />
      <Footer />
    </main>
  );
}
