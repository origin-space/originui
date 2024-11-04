// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Circle } from "lucide-react";

export default function Button50() {
  return (
    <div className="inline-grid w-fit grid-cols-3 gap-1">
      <div></div>
      <Button variant="outline" size="icon" aria-label="Pan camera up">
        <ChevronUp size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <div></div>
      <Button variant="outline" size="icon" aria-label="Pan camera left">
        <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <div className="flex items-center justify-center" aria-hidden="true">
        <Circle className="opacity-60" size={16} strokeWidth={2} />
      </div>
      <Button variant="outline" size="icon" aria-label="Pan camera right">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <div></div>
      <Button variant="outline" size="icon" aria-label="Pan camera down">
        <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <div></div>
    </div>
  );
}
