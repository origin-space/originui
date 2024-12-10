import AvatarImg03 from "@/public/avatar-80-03.jpg";
import AvatarImg02 from "@/public/avatar-80-05.jpg";
import AvatarImg01 from "@/public/avatar-80-06.jpg";
import AvatarImg04 from "@/public/avatar-80-07.jpg";
import Image from "next/image";

export default function AvatarDemo() {
  return (
    <div className="flex -space-x-[1.2rem]">
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg01}
        width={64}
        height={64}
        alt="Avatar 01"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg02}
        width={64}
        height={64}
        alt="Avatar 02"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg03}
        width={64}
        height={64}
        alt="Avatar 03"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg04}
        width={64}
        height={64}
        alt="Avatar 04"
      />
    </div>
  );
}
