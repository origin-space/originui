import { Button } from "@/registry/default/ui/button";
import { ChevronDown, Pin } from "lucide-react";

export default function Component() {
  return (
    <div className="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        size="icon"
        aria-label="Options"
      >
        <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <Button className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10">
        <Pin className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        Pinned
      </Button>
    </div>
  );
}
