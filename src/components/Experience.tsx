const experiences = [
  {
    company: "Amazon",
    role: "Applied Scientist Intern",
    date: "May 2026 – July 2026",
    companyColor: "bg-[#f8d84e]",
    rotation: "md:-rotate-[0.7deg]",
    skills: ["LLMs", "NLP", "AWS Bedrock", "DSPy"],
    skillColor: "bg-[#addbf2]",
    bullets: [
      "Built a task-agnostic automatic prompt optimization framework with 6+ techniques across four NLP tasks.",
      "Designed experiments and LLM evaluation pipelines using precision, recall, and F1.",
      "Used AWS Bedrock and DSPy to evaluate and improve prompt performance.",
    ],
  },
  {
    company: "Neural Network Labs",
    role: "Full-Stack Developer Intern",
    date: "January 2025 – March 2025",
    companyColor: "bg-[#f2a9c3]",
    rotation: "md:rotate-[0.7deg]",
    skills: ["Next.js", "Node.js", "REST APIs", "MongoDB"],
    skillColor: "bg-[#cce9cb]",
    bullets: [
      "Created responsive Next.js and Tailwind pages that improved user engagement.",
      "Integrated AI/ML services and backend workflows used by more than 1,000 users.",
      "Optimized microservices and 20+ REST endpoints, reducing latency by 35%.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-[#faf8e8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em]">Professional journey</p>
          <h2 className="text-4xl font-extrabold underline decoration-4 underline-offset-8 md:text-6xl">Experience</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {experiences.map((experience) => (
            <article key={experience.company} className={`bg-[#fffdf3] ${experience.rotation} flex min-h-[360px] flex-col border-[4px] border-black p-6 shadow-[10px_10px_0px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:-translate-y-2 md:p-8`}>
              <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row">
                <span className={`${experience.companyColor} border-2 border-black px-3 py-1.5 text-sm font-extrabold uppercase tracking-wider`}>{experience.company}</span>
                <span className="rounded-full border-2 border-black px-3 py-1.5 text-xs font-bold">{experience.date}</span>
              </div>
              <h3 className="mb-5 text-2xl font-extrabold leading-tight md:text-3xl">{experience.role}</h3>
              <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-800 md:text-base">
                {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {experience.skills.map((skill) => <span key={skill} className={`${experience.skillColor} rounded-full border-2 border-black px-3 py-1 text-xs font-bold`}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
