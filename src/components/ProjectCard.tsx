import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  onOpen: () => void;
};

export default function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  onOpen,
}: ProjectCardProps) {
  return (
    <article className="group relative w-full xl:aspect-[29/15]">
      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black/25 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

      <div className="relative flex h-full flex-col border-[4px] border-black bg-white p-2.5 transition-transform duration-300 group-hover:-translate-y-2 sm:p-3 xl:block">
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Open details for ${title}`}
          className="relative block aspect-video w-full cursor-pointer overflow-hidden border-[3px] border-black bg-[#f6f6f6] text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300 xl:h-full xl:aspect-auto"
        >
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            className="object-cover transition-all duration-300 xl:group-hover:scale-[1.04] xl:group-hover:blur-[2px]"
          />

          <div className="absolute inset-0 hidden flex-col bg-gradient-to-b from-black/85 via-black/65 to-black/30 p-5 opacity-0 transition-opacity duration-300 xl:flex xl:group-hover:opacity-100 xl:group-focus-within:opacity-100">
            <div className="mt-2">
              <h3 className="inline-block border-b-2 border-white text-3xl font-bold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 line-clamp-3 max-w-[95%] text-sm leading-relaxed text-white/90">
                {description}
              </p>
              <span className="mt-4 inline-flex rounded-md bg-white px-4 py-1.5 text-sm font-semibold text-black">
                View Details
              </span>
            </div>
          </div>
        </button>

        <div className="flex flex-1 flex-col p-4 xl:hidden">
          <button
            type="button"
            onClick={onOpen}
            className="text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300"
          >
            <h3 className="text-xl font-extrabold underline decoration-2 underline-offset-4 sm:text-2xl">
              {title}
            </h3>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-700">
              {description}
            </p>
          </button>

          <div className="mt-5 flex flex-wrap gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-yellow-300 px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Visit
              </a>
            )}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5"
            >
              <Github size={16} aria-hidden="true" />
              Code
            </a>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 hidden gap-3 opacity-0 transition-opacity duration-300 xl:flex xl:group-hover:opacity-100 xl:group-focus-within:opacity-100">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Visit
            </a>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white bg-black/70 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
          >
            <Github size={16} aria-hidden="true" />
            Code
          </a>
        </div>
      </div>
    </article>
  );
}
