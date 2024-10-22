import { Button } from "@/components/ui/button";
import AvatarImg from "@/public/avatar.jpg";
import Image from "next/image";

export default function Button17() {
  return (
    <Button className="rounded-full py-0 ps-0">
      <div className="me-0.5 flex aspect-square h-full p-1.5">
        <Image
          className="h-auto w-full rounded-full"
          src={AvatarImg}
          alt="Profile image"
          width={24}
          height={24}
          aria-hidden="true"
        />
      </div>
      @georgelucas
    </Button>
  );
}
