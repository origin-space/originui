import { Avatar, AvatarFallback } from "@/registry/default/ui/avatar";
import { UserRoundIcon } from "lucide-react";

export default function Component() {
  return (
    <Avatar>
      <AvatarFallback>
        <UserRoundIcon size={16} className="opacity-60" aria-hidden="true" />
      </AvatarFallback>
    </Avatar>
  );
}
