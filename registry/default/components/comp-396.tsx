import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";

export default function Component() {
  return (
    <div className="relative">
      <Avatar className="rounded-lg">
        <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
      <span className="absolute -end-1 -top-1 size-3 rounded-full border-2 border-background bg-emerald-500">
        <span className="sr-only">Online</span>
      </span>
    </div>
  );
}
