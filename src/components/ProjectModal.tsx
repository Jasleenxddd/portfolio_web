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

    "Offline Multimodal Vision Chatbot": {
      description: `A fully offline, privacy-focused multimodal chatbot that accepts text and image prompts without relying on a vision LLM. It coordinates specialized models for image captioning, classification, semantic alignment, retrieval, and response generation, while IPFS supports decentralized document storage.`,
      features: [
        "Runs locally on CPU for private, offline inference",
        "Uses RAG with FAISS for document-grounded responses",
        "Processes images through BLIP, VGG16, and CLIP",
        "Uses threshold-based routing across specialized models",
        "Generates responses with a local Llama 2 7B model",
        "Supports decentralized document storage through IPFS",
        "Provides a Streamlit interface for text and image prompts",
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

    "Stress, Affect & Activity Recognition": {
      description: `A B.Tech research project introducing HABC, a parallel CNN-BiLSTM architecture with attention. It learns localized signal patterns and long-range temporal dependencies from wearable and multimodal sensor data to recognize stress, affect, cognitive load, and physical activity.`,
      features: [
        "Evaluated across WESAD, MUSE, SWELL-KW, and UTD-MHAD",
        "Achieved 96.63% accuracy on WESAD stress classification",
        "Achieved 95.29% accuracy on MUSE emotion recognition",
        "Achieved 98.78% accuracy on SWELL-KW cognitive-load classification",
        "Achieved 93.33% accuracy on 27-class UTD-MHAD activity recognition",
        "Combined parallel CNN and attention-based BiLSTM branches",
        "Distinguished psychological stress from physical exertion",
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

            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setIndex((i) =>
                      i === 0 ? images.length - 1 : i - 1
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-2 rounded-full shadow cursor-pointer"
                  aria-label="Previous project image"
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
                  aria-label="Next project image"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
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
