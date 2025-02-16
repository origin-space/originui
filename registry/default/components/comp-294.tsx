import { Button } from "@/registry/default/ui/button";
import { RefreshCw, X } from "lucide-react";

export default function Component() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="border-border bg-background z-100 max-w-[400px] rounded-lg border p-4 shadow-lg">
      <div className="flex gap-3">
        <div
          className="border-border flex size-9 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <RefreshCw className="opacity-60" size={16} />
        </div>
        <div className="flex grow flex-col gap-3">
          <div className="space-y-1">
            <p className="text-sm font-medium">Version 1.4 is now available!</p>
            <p className="text-muted-foreground text-sm">
              This update contains several bug fixes and performance improvements.
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm">Install</Button>
            <Button size="sm" variant="link">
              Later
            </Button>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          aria-label="Close notification"
        >
          <X
            size={16}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
}
