import Image from "next/image";
import Link from "next/link";

export default function PictoviaPage() {
  return (
    <div className="fixed inset-0 z-50">

      {/* BLURRED BACKDROP */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* MODAL CONTAINER */}
      <div className="relative z-50 flex items-center justify-center min-h-screen px-4">

        <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* CLOSE BUTTON */}
          <Link
            href="/#projects"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
            title="Close"
          >
            ✕
          </Link>

          {/* CONTENT */}
          <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto">

            {/* TITLE */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h1 className="text-4xl font-bold">Pictovia</h1>

              <span className="text-xs px-3 py-1 rounded-full bg-gray-100 border">
                Web
              </span>

              <span className="text-xs px-3 py-1 rounded-full bg-yellow-200 font-medium">
                ⭐ Featured
              </span>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3 mb-8">
              <a
                href="https://pictovia.live"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm hover:opacity-80 transition"
              >
                ↗ Visit
              </a>

              <a
                href="https://github.com/yourusername/pictovia"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border text-sm hover:bg-gray-200 transition"
              >
                {"</>"} Code
              </a>
            </div>

            {/* HERO IMAGE */}
            <div className="border-4 border-black mb-10">
              <Image
                src="/projects/port1.png"
                alt="Pictovia preview"
                width={1200}
                height={700}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mb-10">
              Pictovia is an AI-powered text-to-image platform that converts
              prompts into high-quality visuals. The focus was on creating
              a clean, intuitive UI with smooth animations and a scalable
              backend architecture.
            </p>

            {/* TECH STACK */}
            <div className="mb-10">
              <h2 className="font-semibold text-lg mb-3">Tech Stack</h2>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Vite",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Tailwind CSS",
                  "Framer Motion",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-4 py-1 rounded-full bg-gray-100 border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* KEY FEATURES */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Key Features</h2>

              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  <li>Text-to-image generation</li>
                  <li>Smooth UI animations</li>
                  <li>Prompt-based workflow</li>
                </ul>

                <ul className="list-disc list-inside space-y-2">
                  <li>Node.js + Express backend</li>
                  <li>MongoDB data storage</li>
                  <li>Scalable architecture</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
