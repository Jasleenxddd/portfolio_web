import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MovingStrip from "@/components/movingStrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MovingStrip />
      <Skills />
      {/* SECTION DIVIDER */}
<div className="w-full bg-[#faf8e8] py-24 flex justify-center">
  <div className="w-[80%] max-w-4xl border-t-[4px] border-black relative">
    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#faf8e8] px-4 font-bold">
      ✦
    </span>
  </div>
</div>

      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
