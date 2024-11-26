// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="rounded-lg border border-border px-4 py-3">
      <div className="flex gap-3">
        <Info
          className="mt-0.5 shrink-0 text-blue-500"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        <div className="flex grow flex-col gap-3">
          <div className="space-y-1">
            <p className="text-sm font-medium">Here is some helpful information!</p>
            <p className="text-sm text-muted-foreground">
              It aims to provide support for better decision-making.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              Action
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
