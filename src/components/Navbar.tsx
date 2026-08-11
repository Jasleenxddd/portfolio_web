"use client";

import Image from "next/image";
import { useState } from "react";

type Section = "home" | "work" | "contact";

const navItems: { label: string; section: Section }[] = [
  { label: "Home", section: "home" },
  { label: "Portfolio", section: "work" },
  { label: "Hire Me", section: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<Section>("home");

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
      <nav className="fixed top-8 left-0 w-full flex justify-center z-50">
        <div className="relative">

          {/* RIGHT SHADOW LINE */}
          <div className="absolute top-[3px] left-full h-full w-[6px] bg-[rgba(0,0,0,0.35)]" />

          {/* BOTTOM SHADOW LINE */}
          <div className="absolute left-[3px] top-full w-full h-[6px] bg-[rgba(0,0,0,0.35)]" />

          {/* MAIN NAVBAR */}
          <div className="relative flex items-center border-4 border-black bg-white">

            {/* CORNER BOXES */}
            <span className="absolute -top-2 -left-2 w-3 h-3 bg-[#fbf9e9] border-3" />
            <span className="absolute -top-2 -right-2 w-3 h-3 bg-[#fbf9e9] border-3 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.35)]" />
            <span className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#fbf9e9] border-3 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.35)]" />
            <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#fbf9e9] border-3 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.35)]" />

            {/* LOGO */}
            <div className="px-38 pl-6 py-4 border-r-4 border-black font-bold text-xl">
              ✦ fy.dev
            </div>

            {/* LINKS */}
            <div className="flex items-center text-xl">
              {navItems.map((item, index) => (
                <a
                  key={item.section}
                  href={`#${item.section}`}
                  onClick={() => setActiveSection(item.section)}
                  className={`px-8 py-4 transition-colors hover:bg-yellow-100 ${
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
      <div className="h-32" aria-hidden="true" />

      {/* PAGE DIVIDER */}
      <div className="w-full mt-4 h-[4px] bg-black" />
    </>
  );
}
