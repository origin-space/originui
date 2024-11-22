// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { TriangleAlert, X } from "lucide-react";

export default function NotificationDemo() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="z-[100] max-w-[400px] rounded-lg border border-border bg-background p-4 shadow-lg shadow-black/5">
      <div className="flex gap-2">
        <div className="flex grow gap-3">
          <TriangleAlert
            className="mt-0.5 shrink-0 text-amber-500"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <div className="flex grow flex-col gap-3">
            <div className="space-y-1">
              <p className="text-sm font-medium">Something requires your action!</p>
              <p className="text-sm text-muted-foreground">
                It conveys that a specific action is needed to resolve or address a situation.
              </p>
            </div>
            <div>
              <Button size="sm">Learn more</Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          aria-label="Close notification"
        >
          <X
            size={16}
            strokeWidth={2}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
}
