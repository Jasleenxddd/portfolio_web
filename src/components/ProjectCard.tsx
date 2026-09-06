import Image from "next/image";
import { ExternalLink } from "lucide-react";

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
  const visitUrl = liveUrl ?? githubUrl;

  return (
    <article className="group relative w-full xl:aspect-[29/15]">
      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black/25 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

      <div className="relative flex h-full flex-col border-[4px] border-black bg-white p-2.5 transition-transform duration-300 group-hover:-translate-y-2 sm:p-3 xl:block">
        <div className="relative aspect-video w-full overflow-hidden border-[3px] border-black bg-[#f6f6f6] xl:h-full xl:aspect-auto">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            className="object-cover transition-all duration-300 xl:group-hover:scale-[1.04] xl:group-hover:blur-[2px]"
          />

          <button
            type="button"
            onClick={onOpen}
            aria-label={`Open details for ${title}`}
            className="absolute inset-0 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-yellow-300 xl:hidden"
          />

          <div className="absolute inset-0 hidden flex-col bg-gradient-to-b from-black/85 via-black/70 to-black/45 p-5 opacity-0 transition-opacity duration-300 xl:flex xl:group-hover:opacity-100 xl:group-focus-within:opacity-100">
            <h3 className="inline-block self-start border-b-2 border-white text-3xl font-bold tracking-tight text-white">
              {title}
            </h3>
            <p className="mt-3 line-clamp-3 max-w-[95%] text-sm leading-relaxed text-white/90">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpen}
                className="rounded-md border-2 border-white bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                View Details
              </button>
              <a
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Visit
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4 xl:hidden">
          <h3 className="text-xl font-extrabold underline decoration-2 underline-offset-4 sm:text-2xl">
            {title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-700">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpen}
              className="rounded-full border-2 border-black bg-black px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              View Details
            </button>
            <a
              href={visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Visit
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
