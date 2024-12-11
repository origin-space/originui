"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BadgeDemo() {
  return (
    <div className="flex items-center justify-center">
      <Avatar>
        <AvatarImage src="https://avatar.iran.liara.run/public" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
