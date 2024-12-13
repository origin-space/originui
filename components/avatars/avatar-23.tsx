import AvatarImg03 from "@/public/avatar-80-03.jpg";
import AvatarImg02 from "@/public/avatar-80-05.jpg";
import AvatarImg01 from "@/public/avatar-80-06.jpg";
import AvatarImg04 from "@/public/avatar-80-07.jpg";
import Image from "next/image";

export default function AvatarDemo() {
  return (
    <div className="flex items-center rounded-full border border-border bg-background p-1 shadow shadow-black/5">
      <div className="flex -space-x-1.5">
        <Image
          className="rounded-full ring-1 ring-background"
          src={AvatarImg01}
          width={20}
          height={20}
          alt="Avatar 01"
        />
        <Image
          className="rounded-full ring-1 ring-background"
          src={AvatarImg02}
          width={20}
          height={20}
          alt="Avatar 02"
        />
        <Image
          className="rounded-full ring-1 ring-background"
          src={AvatarImg03}
          width={20}
          height={20}
          alt="Avatar 03"
        />
        <Image
          className="rounded-full ring-1 ring-background"
          src={AvatarImg04}
          width={20}
          height={20}
          alt="Avatar 04"
        />
      </div>
      <p className="px-2 text-xs text-muted-foreground">
        Trusted by <strong className="font-medium text-foreground">60K+</strong> developers.
      </p>
    </div>
  );
}
