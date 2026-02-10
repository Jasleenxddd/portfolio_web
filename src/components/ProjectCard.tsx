import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  onOpen: () => void;
};

export default function ProjectCard({
  title,
  description,
  image,
  onOpen,
}: ProjectCardProps) {
  return (
    <div
      className="
        relative
        w-[580px] h-[300px]
        cursor-pointer
        group
      "
      onClick={onOpen}
    >
      {/* SHADOW */}
      <div
        className="
          absolute inset-0
          translate-x-[8px] translate-y-[8px]
          bg-black/25
          transition-all duration-300
          group-hover:translate-x-[12px]
          group-hover:translate-y-[12px]
        "
      />

      {/* FRAME */}
      <div
        className="
          relative
          w-full h-full
          bg-white
          border-[4px] border-black
          p-3
          transition-all duration-300
          group-hover:-translate-y-2
        "
      >
        {/* IMAGE */}
        <div
          className="
            relative
            w-full h-full
            bg-[#f6f6f6]
            border-[3px] border-black
            overflow-hidden
            flex items-center justify-center
          "
        >
          <Image
            src={image}
            alt={title}
            fill
            className="
              object-contain
              transition-all duration-300
              group-hover:scale-[1.04]
              group-hover:blur-[2px]
            "
          />

          {/* HOVER OVERLAY */}
<div
  className="
    absolute inset-0
    bg-gradient-to-b
    from-black/85 via-black/65 to-black/30
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300
    p-5
    flex flex-col
  "
>
  {/* CONTENT */}
  <div className="mt-2">
    <h4 className="inline-block text-white font-bold text-3xl tracking-tight border-b-2 border-white pb-0">
  {title}
</h4>


    <p className="text-white/90 text-sm mt-3 pr-5 leading-relaxed max-w-[90%]">
      {description}
    </p>

    {/* BUTTONS */}
    <div className="mt-4 flex gap-3">
      <button
        className="
          bg-white text-black
          px-4 py-1.5
          rounded-md text-sm font-medium
          hover:bg-neutral-200 transition
        "
      >
        Visit
      </button>

      <button
        className="
          bg-white/20 text-white
          px-4 py-1.5
          rounded-md text-sm font-medium
          hover:bg-black hover:text-white transition
        "
      >
        Code
      </button>
    </div>
  </div>
</div>


        </div>
      </div>
    </div>
  );
}
