"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  images: string[];
};

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  /* 🔁 PROJECT-SPECIFIC CONTENT */
  const contentMap = {
    Pictovia: {
      description: `Pictovia is an AI-powered image generation platform that transforms text prompts into high-quality visuals. Along with instant image generation, it provides built-in editing tools such as cropping, white balance, lighting, color, and texture controls—allowing creators to both create and refine images in a single, seamless workflow.`,
      features: [
        "AI-powered text-to-image generation from prompts",
        "Image cropping and composition controls",
        "White balance, temperature, and tint adjustments",
        "Light, color, and texture editing tools",
        "Real-time preview while editing images",
        "Responsive and creator-focused user interface",
      ],
    },

    Portfolio: {
      description: `A personal portfolio website built to showcase full-stack development expertise, creative UI design, and modern frontend practices. It highlights projects, skills, and achievements using clean layouts, smooth interactions, and a consistent visual identity.`,
      features: [
        "Modern and minimal portfolio layout",
        "Responsive design across all screen sizes",
        "Project showcase with interactive previews",
        "Built using Next.js and Tailwind CSS",
        "Optimized performance and accessibility",
      ],
    },

    Talkative: {
      description: `Talkative is a real-time chat application designed for fast and secure communication. It supports user authentication, live messaging, and scalable real-time updates, making it suitable for modern chat-based platforms.`,
      features: [
        "Real-time messaging using Socket.IO",
        "Secure user authentication",
        "Scalable backend architecture",
        "Responsive and intuitive chat interface",
        "Efficient data handling with MongoDB",
      ],
    },

    EVOGYM: {
      description: `EVOGYM is a fitness-focused web platform that provides workout guidance and personalized fitness experiences. It combines bold visuals with a user-friendly interface to keep users motivated and engaged.`,
      features: [
        "Workout guidance and fitness programs",
        "Clean and bold UI design",
        "Fully responsive layout",
        "Built with React and Tailwind CSS",
        "Performance-optimized frontend",
      ],
    },
  };

  const activeContent =
    contentMap[project.title as keyof typeof contentMap];

  const images = project.images;

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 z-40 bg-gray-500/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="
          fixed top-6 right-6 z-50
          bg-white border-2 border-black
          rounded-full p-2
          shadow
          hover:scale-110 transition
          cursor-pointer
        "
      >
        <X size={18} />
      </button>

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
        <div
          className="
            pointer-events-auto
            relative
            w-full max-w-5xl
            max-h-[90vh]
            overflow-y-auto
            bg-white
            border-[4px] border-black
            shadow-[12px_12px_0px_rgba(0,0,0,0.45)]
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* IMAGE CAROUSEL */}
          <div className="relative bg-[#f4f4f4] border-b-[4px] border-black">
            <div className="relative w-full aspect-[18/9]">
              <Image
                src={images[index]}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
                priority
              />
            </div>

            <button
              onClick={() =>
                setIndex((i) =>
                  i === 0 ? images.length - 1 : i - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-2 rounded-full shadow cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() =>
                setIndex((i) =>
                  i === images.length - 1 ? 0 : i + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-2 rounded-full shadow cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* CONTENT */}
          <div className="p-8 space-y-10">
            {/* HEADER */}
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h2 className="text-4xl font-bold">{project.title}</h2>
                <div className="w-24 h-[3px] bg-black mt-2 mb-4" />

                <p className="text-gray-700 leading-relaxed max-w-3xl">
                  {activeContent?.description}
                </p>
              </div>
            </div>

            {/* TECH STACK */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Image src="/icons/dil.png" alt="Tech stack" width={22} height={22} />
                <h3 className="font-bold">Tech Stack</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs border-2 border-black rounded-full bg-[#fdfdfd]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* FEATURES */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Image src="/icons/tara.png" alt="Features" width={22} height={22} />
                <h3 className="font-bold">Key Features</h3>
              </div>

              <ul className="grid md:grid-cols-2 gap-3 text-gray-800 list-disc pl-5">
                {activeContent?.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
