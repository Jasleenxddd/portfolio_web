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
  <section id="work" className="w-full min-h-screen bg-[#faf8e8] flex flex-col items-center pt-10 pb-20 scroll-mt-36">

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
