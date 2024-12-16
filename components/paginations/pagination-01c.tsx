import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PaginationDemo() {
  return (
    <div className="flex justify-between gap-3">
      <Button variant="ghost" className="group">
        <ArrowLeft className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5" size={16} strokeWidth={2} aria-hidden="true" />
        Previous
      </Button>
      <Button variant="ghost" className="group">
        Next
        <ArrowRight className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5" size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
