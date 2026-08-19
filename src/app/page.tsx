import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MovingStrip from "@/components/movingStrip";
import SocialRail from "@/components/SocialRail";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialRail />
      <Hero />
      <MovingStrip />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
