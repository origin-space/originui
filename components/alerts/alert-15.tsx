import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Alert15() {
  return (
    <div className="px-4 py-3 border border-border rounded-lg">
      <div className="flex gap-3">
        <Info className="text-blue-500 shrink-0 mt-0.5" size={16} strokeWidth={2} aria-hidden="true" />
        <div className="grow flex flex-col gap-3">
          <div className="space-y-1">
            <p className="text-sm font-medium">
              Here is some helpful information!
            </p>
            <p className="text-sm text-muted-foreground">
              It aims to provide support for better decision-making.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}