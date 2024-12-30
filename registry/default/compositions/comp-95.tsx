import { Button } from "@/registry/default/ui/button";
import { ChevronDown } from "lucide-react";

export default function Component() {
  return (
    <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
      <img
        className="rounded-full"
        src="avatar.jpg"
        alt="Profile image"
        width={40}
        height={40}
        aria-hidden="true"
      />
      <ChevronDown size={16} strokeWidth={2} className="ms-2 opacity-60" aria-hidden="true" />
    </Button>
  );
}
