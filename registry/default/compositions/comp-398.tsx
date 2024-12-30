import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";
import { Badge } from "@/registry/default/ui/badge";

export default function Component() {
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
