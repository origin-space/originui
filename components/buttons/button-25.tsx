// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Button25() {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Upvote"
      >
        <ChevronUp size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <span className="flex items-center border border-input px-3 text-sm font-medium">235</span>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Downvote"
      >
        <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
