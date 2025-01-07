import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";

export default function Component() {
  return (
    <Avatar>
      <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
      <AvatarFallback>KK</AvatarFallback>
    </Avatar>
  );
}
