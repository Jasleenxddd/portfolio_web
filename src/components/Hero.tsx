import Image from "next/image";
import { FileText, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">

      {/* bottom-left star (SCREEN-ALIGNED, NOT FIXED) */}
      <Image
        src="/star1.png"
        alt="decor splash"
        width={80}
        height={80}
        className="absolute bottom-24 left-0 z-0 hidden pointer-events-none sm:block"
      />

      {/* Pink square smile */} 
      <Image 
        src="/Frame 14.png" 
        alt="decor smile" 
        width={110} 
        height={110} 
        className="absolute left-8 top-6 z-0 hidden rotate-[-12deg] sm:block lg:left-32" />

      {/* HERO CONTENT */}
      <section id="home" className="relative z-10 mx-auto mt-4 max-w-6xl scroll-mt-28 px-5 sm:mt-10 sm:px-6 sm:scroll-mt-36">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">

          {/* LEFT CONTENT */}
<div>
  <p className="mb-2 text-xs font-medium tracking-wide sm:text-sm">
    ✦ HELLO, I&apos;M JASLEEN — DEVELOPER &amp; AI/ML PRACTITIONER
  </p>

  <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
    I build intelligent <br className="hidden sm:block" />
    digital{" "}
    <span className="bg-yellow-300 px-2">
      experiences
    </span>
  </h1>

  <p className="mt-4 max-w-md text-base text-gray-800">
    Exploring the intersection of full-stack development and AI/ML
    to build useful, scalable, and impactful products.
  </p>

  <p className="mt-3 text-sm text-gray-700">
    Full-Stack • Machine Learning • LLMs • NLP • Problem Solving
  </p>

  <div className="mt-5 flex flex-col items-stretch gap-3 min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:items-center">
    <a
      href="#work"
      className="inline-flex items-center justify-center rounded-full border-4 border-black bg-sky-200 px-5 py-3 text-sm font-semibold text-black transition hover:translate-x-[2px] hover:translate-y-[2px] sm:px-7 sm:text-base"
    >
      Explore My Work
    </a>

    <a
      href="/Jasleen-Kaur-Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full border-4 border-black bg-yellow-300 px-5 py-3 text-sm font-semibold text-black transition hover:translate-x-[2px] hover:translate-y-[2px] sm:px-6 sm:text-base"
    >
      <FileText size={18} aria-hidden="true" />
      View Résumé
    </a>

    <a
      href="https://www.linkedin.com/in/jasleen-kaur-p"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Jasleen's LinkedIn profile"
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-black bg-white text-black transition hover:-translate-y-1 hover:bg-yellow-100"
    >
      <Linkedin size={20} aria-hidden="true" />
    </a>
  </div>

</div>



          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[460px] md:-translate-y-6">
              <Image
                src="/profile_pic.png"
                alt="Hero illustration"
                width={460}
                height={460}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
