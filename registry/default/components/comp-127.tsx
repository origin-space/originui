import { Button } from "@/registry/default/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Circle } from "lucide-react";

export default function Component() {
  return (
    <div className="inline-grid w-fit grid-cols-3 gap-1">
      <Button className="col-start-2" variant="outline" size="icon" aria-label="Pan camera up">
        <ChevronUp size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <Button className="col-start-1" variant="outline" size="icon" aria-label="Pan camera left">
        <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <div className="flex items-center justify-center" aria-hidden="true">
        <Circle className="opacity-60" size={16} strokeWidth={2} />
      </div>
      <Button variant="outline" size="icon" aria-label="Pan camera right">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <Button className="col-start-2" variant="outline" size="icon" aria-label="Pan camera down">
        <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
