import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">

      {/* bottom-left star (SCREEN-ALIGNED, NOT FIXED) */}
      <Image
        src="/star1.png"
        alt="decor splash"
        width={80}
        height={80}
        className="absolute bottom-36 left-0 z-0 pointer-events-none"
      />

      {/* Pink square smile */} 
      <Image 
        src="/Frame 14.png" 
        alt="decor smile" 
        width={110} 
        height={110} 
        className="absolute top-10 left-34 ml-18 rotate-[-12deg] z-0" />

      {/* HERO CONTENT */}
      <section id="home" className="max-w-6xl mx-auto px-6 mt-10 relative z-10 scroll-mt-36">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
<div>
  <p className="mb-1 text-sm font-medium tracking-wide">
    ✦ HELLO, I&apos;M JASLEEN — DEVELOPER &amp; AI/ML PRACTITIONER
  </p>

  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
    I build intelligent <br />
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

  <a
  href="#work"
  className="
    inline-flex items-center justify-center
    mt-4
    px-8 py-3
    rounded-full
    border-4 border-black
    bg-sky-200
    text-black font-semibold
    transition
    hover:translate-x-[2px] hover:translate-y-[2px]
  "
>
  Explore My Work
</a>

</div>



          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-[380px] md:w-[460px] -translate-y-6">
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
