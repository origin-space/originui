"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function BadgeDemo() {
  return (
    <div className="flex justify-center -space-x-3 *:ring-4 *:ring-background">
      <Avatar>
        <AvatarImage src="https://avatar.iran.liara.run/public" />
      </Avatar>
      <Avatar>
        <AvatarImage src="https://avatar.iran.liara.run/public/boy" />
      </Avatar>
      <Avatar>
        <AvatarImage src="https://avatar.iran.liara.run/public/girl" />
      </Avatar>
    </div>
  );
}
