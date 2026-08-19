import { Code2, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jasleen-kaur-p",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Jasleenxddd",
    icon: Github,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Jasleenxddd/",
    icon: Code2,
  },
  {
    label: "Email",
    href: "mailto:jasleenkaurvasir@gmail.com",
    icon: Mail,
  },
];

export default function SocialRail() {
  return (
    <aside
      aria-label="Social links"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col md:flex"
    >
      {socialLinks.map(({ label, href, icon: Icon }, index) => {
        const isEmail = href.startsWith("mailto:");

        return (
          <a
            key={label}
            href={href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            aria-label={label}
            className={`group relative flex h-12 w-12 items-center justify-center border-4 border-black bg-white shadow-[5px_5px_0_rgba(0,0,0,0.3)] transition hover:-translate-x-1 hover:bg-yellow-300 focus-visible:-translate-x-1 focus-visible:bg-yellow-300 focus-visible:outline-none ${
              index < socialLinks.length - 1 ? "border-b-0" : ""
            }`}
          >
            <Icon size={21} strokeWidth={2.25} aria-hidden="true" />

            <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] whitespace-nowrap border-2 border-black bg-white px-3 py-1 text-sm font-semibold opacity-0 shadow-[4px_4px_0_rgba(0,0,0,0.25)] transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {label}
            </span>
          </a>
        );
      })}
    </aside>
  );
}
