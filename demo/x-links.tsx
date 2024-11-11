import Image from "next/image";

import DavideImg from "@/public/x-davide.jpg";
import PasqualeImg from "@/public/x-pasquale.jpg";

export default function XLinks() {
  return (
    <div className="mb-12 flex items-center justify-center gap-2 text-sm">
      <span className="text-zinc-500">Brought to you by</span>
      <span className="-ml-0.5 flex -space-x-2">
        <a
          className="group relative h-7 w-7 overflow-hidden rounded-full border-2 border-background"
          href="https://x.com/intent/follow?screen_name=pacovitiello"
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
          href="https://x.com/intent/follow?screen_name=DavidePacilio"
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
  );
}
