"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#faf8e8] border-t-2 border-black">
      <div
        className="
          max-w-7xl mx-auto
          px-8 py-6
          flex flex-col md:flex-row
          items-center justify-between
          gap-4
          text-black
        "
      >
        {/* LEFT — Portfolio Name */}
        <div className="font-bold text-lg tracking-tight">
          ✦ fy.dev
        </div>

        {/* CENTER — Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:scale-110 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:scale-110 transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="hover:scale-110 transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* RIGHT — Copyright + Love */}
        <div className="text-sm font-semibold text-center md:text-right">
          © 2026 Jasleen Kaur <span className="mx-1">•</span>
          Made with <span className="text-red-500">♥</span>
        </div>
      </div>
    </footer>
  );
}
