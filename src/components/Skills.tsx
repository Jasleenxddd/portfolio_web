"use client";
import Image from "next/image";
const skills = [
  {
    title: "Frontend",
        icon: "/skill1.png",

    items: [
      "React",
      "Next.js",
      "Vue",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Material UI",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    rotate: "-rotate-2",
    accent: "bg-[#fff3c4]",
    decor: {
      src: "/Frame 14.png",
      position: "-top-20 -right-10",
      size: 120,
    },
  },
  {
    title: "Backend",
        icon: "/skill2.png",

    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "REST APIs",
      "WebSockets",
      "Socket.IO",
      "Authentication",
    ],
    rotate: "rotate-2",
    accent: "bg-[#e7f2ff]",
    decor: {
      src: "/icons/Frame 44.png",
      position: "-top-8 -right-2",
      size: 40,
    },
  },
  {
    title: "Languages & ML",
        icon: "/skill3.png",

    items: ["C++", "Python", "NumPy", "TensorFlow"],
    rotate: "-rotate-1",
    accent: "bg-[#e9fbe7]",
    decor: {
      src: "/staruu2.png",
      position: "-bottom-8 -left-5",
      size: 120,
    },
  },
  {
    title: "Tools & Platforms",
        icon: "/skill4.png",

    items: [
      "Git",
      "GitHub",
      "npm",
      "Docker",
      "Linux",
      "AWS",
      "Vercel",
      "Netlify",
      "Postman",
      "VS Code",
    ],
    rotate: "rotate-1",
    accent: "bg-[#f3e8ff]",
    decor: {
      src: "/Frame 18.png",
      position: "-bottom-16 -left-12",
      size: 110,
    },
  },
];


export default function Skills() {
  return (
    <section className="w-full bg-[#faf8e8] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold underline underline-offset-8">
            My Toolbox
          </h2>
          <p className="mt-5 text-gray-700 max-w-xl mx-auto text-lg">
            The tools I reach for daily to design, build, and ship thoughtful
            digital experiences.
          </p>
        </div>

        {/* SKILL CARDS */}
<div className="grid md:grid-cols-2 gap-14 place-items-center">
  {skills.map((group) => (
    <div
      key={group.title}
      className={`
        relative
        w-full max-w-sm
        ${group.accent}
        border-[4px] border-black
        p-6
        shadow-[10px_10px_0px_rgba(0,0,0,0.35)]
        transition-all duration-300
        hover:-translate-y-2
        ${group.rotate}
      `}
    >
      {/* TITLE */}
<div className="flex items-center gap-3 mb-6">
  <Image
    src={group.icon}
    alt={`${group.title} icon`}
    width={28}
    height={28}
  />
  <h3 className="text-xl font-bold underline underline-offset-4">
    {group.title}
  </h3>
</div>


      {/* SKILLS */}
      <div className="flex flex-wrap gap-3">
        {group.items.map((skill) => (
          <span
            key={skill}
            className="
              px-4 py-1.5
              border-2 border-black
              rounded-full
              bg-white
              text-sm font-medium
            "
          >
            {skill}
          </span>
        ))}
      </div>

      {/* DECORATIVE ICON */}
<div
  className={`absolute pointer-events-none ${group.decor.position}`}
>
  <Image
    src={group.decor.src}
    alt="decorative element"
    width={group.decor.size}
    height={group.decor.size}
    className="opacity-90"
  />
</div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
