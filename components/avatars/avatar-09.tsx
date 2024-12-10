import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function AvatarDemo() {
  return (
    <div className="relative">
      <Avatar>
        <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
      <Badge className="absolute -top-1 left-full min-w-5 -translate-x-4 border-background px-1">
        6
      </Badge>
    </div>
  );
}
