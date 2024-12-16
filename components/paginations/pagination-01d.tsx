import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationDemo() {
  return (
    <div className="flex justify-center items-center gap-3">
      <Button variant="ghost" size="icon" aria-label="Go to previous page" disabled>
        <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <div className="text-muted-foreground text-sm">
        Page <span className="text-foreground">1</span> of <span className="text-foreground">10</span>
      </div>
      <Button variant="ghost" size="icon" aria-label="Go to next page">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
