// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Button35() {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        Preview
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Open link"
      >
        <SquareArrowOutUpRight size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
