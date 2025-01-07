import { Button } from "@/registry/default/ui/button";
import { ChevronRight } from "lucide-react";

export default function Component() {
  return (
    <Button className="group h-auto gap-4 py-3 text-left" variant="outline">
      <div className="space-y-1">
        <h3>Talent Agency</h3>
        <p className="whitespace-break-spaces font-normal text-muted-foreground">
          Matches for your roster
        </p>
      </div>
      <ChevronRight
        className="opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );
}
