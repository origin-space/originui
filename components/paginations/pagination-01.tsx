import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationDemo() {
  return (
    <div className="flex justify-between gap-3">
      <Button variant="outline">
        <ChevronLeft className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        Previous
      </Button>
      <Button variant="outline">
        Next
        <ChevronRight className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
