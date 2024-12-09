import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="relative">
      <Avatar className="rounded-lg">
        <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
        <AvatarFallback className="rounded-lg">KK</AvatarFallback>
      </Avatar>
      <span className="absolute -top-1 -end-1 size-3 rounded-full border-2 border-background bg-emerald-500">
        <span className="sr-only">Online</span>
      </span>
    </div>
  );
}
