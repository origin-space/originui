import { Button } from "@/registry/default/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Component() {
  return (
    <div className="inline-flex -space-x-px rounded-full shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
        size="icon"
        aria-label="Upvote"
      >
        <ChevronUp size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <span className="flex items-center bg-primary px-1 text-sm font-medium text-primary-foreground">
        235
      </span>
      <Button
        className="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
        size="icon"
        aria-label="Downvote"
      >
        <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
