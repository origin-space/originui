import Image from "next/image";

import DavideImg from "@/public/x-davide.jpg";
import PasqualeImg from "@/public/x-pasquale.jpg";

export default function Cta() {
  return (
    <>
      <div className="my-16 text-center">
        <h2 className="mb-3 text-3xl font-bold text-foreground">Got a component idea?</h2>
        <p className="mb-6 text-muted-foreground">Let us know on GitHub, and we'll add it!👇</p>
        <a
          className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm shadow-black/5 transition-shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          href="https://github.com/origin-space/originui/discussions/categories/suggestions"
          target="_blank"
        >
          <span className="text-primary-foreground">Send Suggestion</span>
        </a>
      </div>

      <div className="mb-12 flex items-center justify-center gap-2 text-sm">
        <span className="text-zinc-500">Brought to you by</span>
        <span className="-ml-0.5 flex -space-x-2">
          <a
            className="group relative h-7 w-7 overflow-hidden rounded-full border-2 border-background"
            href="https://x.com/pacovitiello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="absolute inset-0 object-cover object-center transition-transform duration-300 group-hover:scale-110"
              src={PasqualeImg}
              alt="Pasquale's profile image"
              width={24}
              height={24}
            />
          </a>
          <a
            className="group relative z-10 h-7 w-7 overflow-hidden rounded-full border-2 border-background"
            href="https://x.com/DavidePacilio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="absolute inset-0 object-cover object-center transition-transform duration-300 group-hover:scale-110"
              src={DavideImg}
              alt="Davide's profile image"
              width={24}
              height={24}
            />
          </a>
        </span>
      </div>
    </>
  );
}
