export default function MovingStrip() {
  const items = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "C++",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "LLMs",
    "RAG",
    "LangChain",
    "TensorFlow",
    "AWS Bedrock",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
    "FAISS",
    "System Design",
  ];

  return (
    <div className="w-full overflow-hidden border-y-4 border-black bg-black">
      <div className="relative flex whitespace-nowrap group">

        {/* Marquee track */}
        <div className="animate-marquee flex gap-16 py-4 px-8 group-hover:[animation-play-state:paused]">
          {items.map((item, index) => (
            <span
              key={`first-${index}`}
              className="text-white text-lg md:text-xl font-medium tracking-wide"
            >
              {item}
            </span>
          ))}

          {/* Duplicate for seamless loop */}
          {items.map((item, index) => (
            <span
              key={`second-${index}`}
              className="text-white text-lg md:text-xl font-medium tracking-wide"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
