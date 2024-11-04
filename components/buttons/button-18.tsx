// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import AvatarImg from "@/public/avatar.jpg";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Button18() {
  return (
    <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
      <Image
        className="rounded-full"
        src={AvatarImg}
        alt="Profile image"
        width={40}
        height={40}
        aria-hidden="true"
      />
      <ChevronDown size={16} strokeWidth={2} className="ms-2 opacity-60" aria-hidden="true" />
    </Button>
  );
}
