import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import AvatarImg from "@/public/avatar-40-05.jpg";
import FriendImg01 from "@/public/avatar-20-04.jpg";
import FriendImg02 from "@/public/avatar-20-05.jpg";
import FriendImg03 from "@/public/avatar-20-06.jpg";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <div className="flex items-center gap-3">
        <Image className="shrink-0 rounded-full" src={AvatarImg} width={40} height={40} alt="Avatar" />
        <div className="space-y-0.5">
          <HoverCardTrigger asChild>
            <a className="text-sm font-medium hover:underline" href="#">Keith Kennedy</a>
          </HoverCardTrigger>
          <p className="text-xs text-muted-foreground">@k.kennedy</p>
        </div>
      </div>      
      <HoverCardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image className="shrink-0 rounded-full" src={AvatarImg} width={40} height={40} alt="Avatar" />
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Keith Kennedy</p>
              <p className="text-xs text-muted-foreground">@k.kennedy</p>
            </div>
          </div>
          <p className="text-sm">Designer at <strong className="font-medium">@Origin UI</strong>. Crafting web experiences with Tailwind CSS.</p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <Image className="shrink-0 rounded-full ring-1 ring-background" src={FriendImg01} width={20} height={20} alt="Friend 01" />
              <Image className="shrink-0 rounded-full ring-1 ring-background" src={FriendImg02} width={20} height={20} alt="Friend 01" />
              <Image className="shrink-0 rounded-full ring-1 ring-background" src={FriendImg03} width={20} height={20} alt="Friend 01" />
            </div>
            <div className="text-xs text-muted-foreground">3 mutual friends</div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
