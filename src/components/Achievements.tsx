const achievements = [
  { metric: "#41", label: "Amazon ML Challenge", scale: "among 87,000+ participants", color: "bg-[#f8d84e]", size: "md:col-span-3", rotation: "md:-rotate-[0.6deg]" },
  { metric: "AIR 72", label: "Goldman Sachs India Hackathon", scale: "among 16,000+ participants", color: "bg-[#addbf2]", size: "md:col-span-3", rotation: "md:rotate-[0.5deg]" },
  { metric: "Semifinalist", label: "Flipkart GRiD 7.0", scale: "National engineering competition", color: "bg-[#f2a9c3]", size: "md:col-span-2", rotation: "" },
  { metric: "600+", label: "DSA Problems Solved", scale: "LeetCode and GeeksforGeeks", color: "bg-[#cce9cb]", size: "md:col-span-2", rotation: "md:-rotate-[0.5deg]" },
  { metric: "2025", label: "Google Student Ambassador", scale: "Selected student representative", color: "bg-[#eee3ff]", size: "md:col-span-2", rotation: "md:rotate-[0.5deg]" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="w-full bg-[#faf8e8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em]">Milestones that matter</p>
          <h2 className="text-4xl font-extrabold underline decoration-4 underline-offset-8 md:text-6xl">Achievements</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
          {achievements.map((achievement) => (
            <article key={achievement.label} className={`${achievement.color} ${achievement.size} ${achievement.rotation} flex min-h-44 flex-col justify-between border-[4px] border-black p-6 shadow-[9px_9px_0px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:-translate-y-2`}>
              <p className="text-3xl font-black leading-none tracking-tight md:text-5xl">{achievement.metric}</p>
              <div className="mt-8">
                <h3 className="text-sm font-extrabold uppercase tracking-wider md:text-base">{achievement.label}</h3>
                <p className="mt-1 text-xs font-medium text-gray-800 md:text-sm">{achievement.scale}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
