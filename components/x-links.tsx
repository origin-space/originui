import Image from "next/image";

import DavideImg from "@/public/x-davide.jpg";
import PasqualeImg from "@/public/x-pasquale.jpg";

export default function XLinks() {
  return (
    <div className="mb-12 flex items-center justify-center gap-1.5 text-sm">
      <span className="text-zinc-500">Brought to you by</span>
      <span className="flex -space-x-1">
        <a
          className="group relative size-6 overflow-hidden rounded-full ring-2 ring-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
          href="https://x.com/intent/follow?screen_name=pacovitiello"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="absolute inset-0 object-cover object-center transition-transform duration-300 group-hover:scale-110"
            src={PasqualeImg}
            alt="Pasquale&lsquo;s profile image"
            width={24}
            height={24}
          />
        </a>
        <a
          className="group relative z-10 size-6 overflow-hidden rounded-full ring-2 ring-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
          href="https://x.com/intent/follow?screen_name=DavidePacilio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="absolute inset-0 object-cover object-center transition-transform duration-300 group-hover:scale-110"
            src={DavideImg}
            alt="Davide&lsquo;s profile image"
            width={24}
            height={24}
          />
        </a>
      </span>
    </div>
  );
}
