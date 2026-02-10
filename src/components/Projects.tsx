"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Image from "next/image";
type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  images: string[]; // 👈 ADD THIS
};

const projects: Project[] = [
  {
    title: "Pictovia",
    description: "An AI-powered text-to-image platform that converts creative prompts into high-quality visuals, featuring a clean interface, smooth user experience, and built-in image editing tools for refining and enhancing generated results.",
    image: "/projects/port1.png",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    images: [
      "/projects/port1.png",
      "/projects/picto1.png",
      "/projects/picto2.png",
      "/projects/picto3.png",
    ],
  },
  {
    title: "Portfolio",
    description: "A visually driven personal portfolio showcasing my projects, skills, and design philosophy, built with a strong focus on clean layouts, smooth interactions, and responsive user experience across devices.",
    image: "/projects/port2.png",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    images: [
      "/projects/port2.png",
      "/projects/portfo2lio-.png",
    ],
  },
  {
    title: "Talkative",
    description: "A real-time chat application that enables secure authentication and instant messaging, built with a responsive interface and a scalable backend to ensure smooth communication and reliable performance.",
    image: "/projects/port3.png",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    images: [
      "/projects/port3.png",
      "/projects/talk1.png",
      "/projects/talk2.png",
            "/projects/talk3.png",
    ],
  },
  {
    title: "EVOGYM",
    description: "A modern fitness platform designed to promote an active lifestyle, featuring bold visuals, workout programs, and an engaging interface focused on motivation, performance, and user-friendly navigation.",
    image: "/projects/port4.png",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    images: [
      "/projects/port4.png",
      "/projects/evo1.png",
    ],
  },
  // {
  //   title: "VisionGuard",
  //   description: "Face recognition using computer vision.",
  //   image: "/projects/ml1.png",
  // },
  // {
  //   title: "VisionGuard",
  //   description: "Face recognition using computer vision.",
  //   image: "/projects/ml1.png",
  // },
  
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // 🎯 PERFECTLY BALANCED OFFSETS
  // const positions = [
  //   { x: -240, y: -140, r: -4 },
  //   { x: 240, y: -120, r: 4 },
  //   { x: -280, y: 140, r: 5 },
  //   { x: 280, y: 160, r: -2 },
  //   { x: -240, y: 380, r: -2 },
  //   { x: 340, y: 380, r: 2 },
  // ];
  const positions = [
    { x: -240, y: -140, r: -4 },
    { x: 240, y: -120, r: 4 },
    { x: -220, y: 140, r: 4 },
    { x: 220, y: 160, r: -2 },
    { x: -240, y: 380, r: -2 },
    { x: 340, y: 380, r: 2 },
  ];

return (
  <section className="w-full min-h-screen bg-[#faf8e8] flex flex-col items-center py-20">

    {/* 🔥 HEADING AT TOP CENTER */}
    <div className="flex items-center justify-center gap-4 mb-1">
      <h2 className="text-4xl md:text-6xl font-bold underline underline-offset-8">
        My Portfolio
      </h2>

      <Image
        src="/Frame 18.png"
        alt="decor"
        width={80}
        height={80}
        className="rotate-12"
      />
    </div>

    {/* 📌 PROJECT STACK CENTERED BELOW */}
    <div className="relative w-[1100px] h-[800px] flex items-center justify-center">

      {projects.map((project, index) => {
        const { x, y, r } = positions[index];

        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${r}deg)`,
              zIndex: index + 1,
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              onOpen={() => setActiveProject(project)}
            />
          </div>
        );
      })}

    </div>

    {activeProject && (
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    )}
  </section>
);

}
