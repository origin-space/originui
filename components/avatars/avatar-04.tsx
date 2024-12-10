import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar className="rounded-lg">
      <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
      <AvatarFallback>KK</AvatarFallback>
    </Avatar>
  );
}
