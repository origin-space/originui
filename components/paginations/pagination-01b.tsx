import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationDemo() {
  return (
    <div className="flex justify-between items-center gap-3">
      <Button asChild variant="outline" size="icon" aria-label="Go to previous page">
        <a href="#" className="pointer-events-none opacity-50" aria-disabled="true">
          <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
        </a>
      </Button>
      <div className="text-muted-foreground text-sm">
        Page <span className="text-foreground">1</span> of <span className="text-foreground">10</span>
      </div>
      <Button asChild variant="outline" size="icon" aria-label="Go to next page">
        <a href="#">
          <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
        </a>
      </Button>
    </div>
  );
}
