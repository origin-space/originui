import { Button } from "@/registry/default/ui/button";
import { CircleAlert, X } from "lucide-react";

export default function Component() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="border-border bg-background z-100 max-w-[400px] rounded-lg border p-4 shadow-lg">
      <div className="flex gap-2">
        <div className="flex grow gap-3">
          <CircleAlert className="mt-0.5 shrink-0 text-red-500" size={16} aria-hidden="true" />
          <div className="flex grow flex-col gap-3">
            <div className="space-y-1">
              <p className="text-sm font-medium">We couldn&lsquo;t complete your request!</p>
              <p className="text-muted-foreground text-sm">
                It indicates that an issue has prevented the processing of the request.
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm">Learn more</Button>
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
    </div>
  );
}
