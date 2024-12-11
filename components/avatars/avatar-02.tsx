"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BadgeDemo() {
  return (
    <div className="flex items-center justify-center">
      <Avatar className="rounded-lg">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback className="rounded-none bg-gray-200">Ui</AvatarFallback>
      </Avatar>
    </div>
  );
}
