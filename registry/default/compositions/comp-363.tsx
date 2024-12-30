import Image from "next/image";

import { Button } from "@/registry/default/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/default/ui/hover-card";

import AvatarImg from "@/public/avatar-40-04.jpg";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          className="size-auto overflow-hidden rounded-full bg-transparent p-0 hover:bg-transparent"
          aria-label="My profile"
          asChild
        >
          <a href="#">
            <Image src={AvatarImg} width={40} height={40} alt="Avatar" />
          </a>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-[340px]">
        <div className="flex items-start gap-3">
          <Image
            className="shrink-0 rounded-full"
            src={AvatarImg}
            width={40}
            height={40}
            alt="Avatar"
          />
          <div className="space-y-1">
            <p className="text-sm font-medium">@Origin_UI</p>
            <p className="text-sm text-muted-foreground">
              Beautiful UI components built with Tailwind CSS and Next.js.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
