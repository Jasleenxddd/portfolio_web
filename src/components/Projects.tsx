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
  images: string[];
  githubUrl: string;
  liveUrl?: string;
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
    githubUrl: "https://github.com/Jasleenxddd/image_gen",
  },
  {
    title: "Offline Multimodal Vision Chatbot",
    description: "A privacy-focused, fully offline RAG chatbot that understands both text and images by coordinating specialized vision and language models with decentralized data storage.",
    image: "/projects/chatbot-home.png",
    techStack: [
      "Python",
      "Llama 2",
      "RAG",
      "VGG16",
      "BLIP",
      "CLIP",
      "FAISS",
      "IPFS",
      "Streamlit",
    ],
    images: [
      "/projects/chatbot-home.png",
      "/projects/chatbot-inference.png",
      "/projects/chatbot-architecture.png",
    ],
    githubUrl:
      "https://github.com/Jasleenxddd/Vision-Decentralized-Offline-Chatbot",
  },
  {
    title: "EvoGym",
    description: "A responsive fitness platform with smooth navigation, animated interactions, class discovery, membership benefits, and a streamlined contact experience.",
    image: "/projects/evo-dashboard.png",
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
    ],
    images: [
      "/projects/evo-dashboard.png",
      "/projects/evo1.png",
    ],
    githubUrl: "https://github.com/Jasleenxddd/EvoGym-fitness-app",
    liveUrl: "https://evo-gym-fitness-app.vercel.app",
  },
  {
    title: "Stress, Affect & Activity Recognition",
    description: "A cross-dataset deep-learning framework that recognizes stress, emotion, cognitive load, and physical activity from multimodal wearable-sensor data.",
    image: "/projects/stress-habc.svg",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "BiLSTM",
      "Attention",
      "Scikit-learn",
    ],
    images: [
      "/projects/stress-habc.svg",
    ],
    githubUrl: "https://github.com/Jasleenxddd/Stress_detection_model",
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
  <section id="work" className="flex w-full min-h-screen flex-col items-center bg-[#faf8e8] px-5 pb-8 pt-10 scroll-mt-28 sm:px-6 sm:pb-10 sm:scroll-mt-36">

    {/* 🔥 HEADING AT TOP CENTER */}
    <div className="mb-10 flex items-center justify-center gap-2 sm:gap-4 xl:mb-1">
      <h2 className="text-center text-4xl font-bold underline underline-offset-8 md:text-6xl">
        My Portfolio
      </h2>

      <Image
        src="/Frame 18.png"
        alt="decor"
        width={64}
        height={64}
        className="hidden rotate-12 sm:block md:h-20 md:w-20"
      />
    </div>

    {/* 📌 PROJECT STACK CENTERED BELOW */}
    <div className="grid w-full max-w-3xl gap-8 xl:hidden">
      {projects.map((project) => (
        <div key={project.title} className="w-full">
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            onOpen={() => setActiveProject(project)}
          />
        </div>
      ))}
    </div>

    <div className="relative hidden h-[800px] w-[1100px] items-center justify-center xl:flex">

      {projects.map((project, index) => {
        const { x, y, r } = positions[index];

        return (
          <div
            key={index}
            className="absolute w-[580px]"
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
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
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
