"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Section = "home" | "work" | "contact";

const navItems: { label: string; section: Section }[] = [
  { label: "Home", section: "home" },
  { label: "Portfolio", section: "work" },
  { label: "Hire Me", section: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  useEffect(() => {
    const sections = navItems
      .map(({ section }) => document.getElementById(section))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id as Section);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== SCREEN CORNER DECORATIONS ===== */}

      {/* TOP LEFT */}
      <Image
        src="/vecccr.png"
        alt="decor-left"
        width={90}
        height={90}
        className="absolute top-14 -left-0 z-0"
      />

      {/* TOP RIGHT */}
      <Image
        src="/Vector.png"
        alt="decor-right"
        width={90}
        height={90}
        className="absolute -top-2 -right-0 z-0"
      />

      {/* ===== NAVBAR ===== */}
      <nav className="fixed left-0 top-3 z-50 flex w-full justify-center px-3 sm:top-6">
        <div className="relative w-full max-w-4xl">

          {/* RIGHT SHADOW LINE */}
          <div className="absolute top-[3px] left-full h-full w-[6px] bg-[rgba(0,0,0,0.35)]" />

          {/* BOTTOM SHADOW LINE */}
          <div className="absolute left-[3px] top-full w-full h-[6px] bg-[rgba(0,0,0,0.35)]" />

          {/* MAIN NAVBAR */}
          <div className="relative flex items-stretch border-[3px] border-black bg-white sm:border-4">

            {/* CORNER BOXES */}
            <span className="absolute -top-2 -left-2 w-3 h-3 bg-[#fbf9e9] border-3" />
            <span className="absolute -top-2 -right-2 w-3 h-3 bg-[#fbf9e9] border-3 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.35)]" />
            <span className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#fbf9e9] border-3 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.35)]" />
            <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#fbf9e9] border-3 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.35)]" />

            {/* LOGO */}
            <div className="hidden shrink-0 items-center border-r-4 border-black px-5 py-3 text-lg font-bold sm:flex lg:px-8 lg:text-xl">
              ✦ fy.dev
            </div>

            {/* LINKS */}
            <div className="grid min-w-0 flex-1 grid-cols-3 text-sm sm:text-base lg:text-xl">
              {navItems.map((item, index) => (
                <a
                  key={item.section}
                  href={`#${item.section}`}
                  onClick={() => setActiveSection(item.section)}
                  className={`flex items-center justify-center whitespace-nowrap px-2 py-3 text-center transition-colors hover:bg-yellow-100 sm:px-5 sm:py-4 lg:px-8 ${
                    index < navItems.length - 1 ? "border-r-4 border-black" : ""
                  } ${
                    activeSection === item.section
                      ? "bg-yellow-300 font-semibold"
                      : "bg-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* SPACE RESERVED FOR THE FIXED NAVBAR */}
      <div className="h-24 sm:h-32" aria-hidden="true" />

      {/* PAGE DIVIDER */}
      <div className="w-full mt-4 h-[4px] bg-black" />
    </>
  );
}
