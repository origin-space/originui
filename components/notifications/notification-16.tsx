import { Radio, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Notification01() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="px-4 py-3 border border-border rounded-lg shadow-lg shadow-black/5 max-w-sm z-50 bg-background">
      <div className="flex items-center gap-2">
        <div className="size-9 border border-border flex items-center justify-center rounded-full shrink-0" aria-hidden="true">
          <Radio className="opacity-60" size={16} strokeWidth={2} />
        </div>
        <div className="grow flex items-center gap-12">
          <div className="space-y-1">
            <p className="text-sm font-medium">
              Live in 27 hours
            </p>
            <p className="text-xs text-muted-foreground">
            November 20 at 8:00 PM.
            </p>
          </div>
          <Button size="sm">Notify me</Button>
        </div>
        <Button
          variant="ghost"
          className="shrink-0 -me-2 -my-1.5 p-0 size-8 group"
          aria-label="Close notification"
        >
          <X size={16} strokeWidth={2} className="opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
        </Button>          
      </div>
    </div>
  );
}