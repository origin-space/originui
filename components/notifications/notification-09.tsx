import { TriangleAlert, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Notification01() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="p-4 border border-border rounded-lg shadow-lg shadow-black/5 max-w-[400px] z-[100] bg-background">
      <div className="flex gap-2">
        <div className="grow flex gap-3">
          <TriangleAlert className="text-amber-500 shrink-0 mt-0.5" size={16} strokeWidth={2} aria-hidden="true" />
          <div className="grow flex flex-col gap-3">
            <div className="space-y-1">
              <p className="text-sm font-medium">
                Something requires your action!
              </p>
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
          className="shrink-0 -me-2 -my-1.5 p-0 size-8 hover:bg-transparent group"
          aria-label="Close notification"
        >
          <X size={16} strokeWidth={2} className="opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
        </Button>          
      </div>
    </div>
  );
}