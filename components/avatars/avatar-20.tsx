import AvatarImg03 from "@/public/avatar-80-03.jpg";
import AvatarImg02 from "@/public/avatar-80-05.jpg";
import AvatarImg01 from "@/public/avatar-80-06.jpg";
import AvatarImg04 from "@/public/avatar-80-07.jpg";
import Image from "next/image";

import { Button } from "@/registry/default/ui/button";

export default function AvatarDemo() {
  return (
    <div className="flex -space-x-3">
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg01}
        width={40}
        height={40}
        alt="Avatar 01"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg02}
        width={40}
        height={40}
        alt="Avatar 02"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg03}
        width={40}
        height={40}
        alt="Avatar 03"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src={AvatarImg04}
        width={40}
        height={40}
        alt="Avatar 04"
      />
      <Button
        variant="secondary"
        className="flex size-10 items-center justify-center rounded-full bg-secondary text-xs text-muted-foreground ring-2 ring-background hover:bg-secondary hover:text-foreground"
        size="icon"
      >
        +3
      </Button>
    </div>
  );
}
