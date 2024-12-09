import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function AvatarDemo() {
  return (
    <div className="relative">
      <Avatar className="rounded-lg">
        <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
        <AvatarFallback className="rounded-lg">KK</AvatarFallback>
      </Avatar>
      <Badge className="absolute -top-2 left-full -translate-x-3 px-1 min-w-5 border-background">6</Badge>
    </div>
  );
}

