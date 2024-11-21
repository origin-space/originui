import { RefreshCw, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Notification01() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="p-4 border border-border rounded-lg shadow-lg shadow-black/5 max-w-[400px] z-[100] bg-background">
      <div className="flex gap-3">
        <div className="size-9 border border-border flex items-center justify-center rounded-full shrink-0" aria-hidden="true">
          <RefreshCw className="opacity-60" size={16} strokeWidth={2} />
        </div>
        <div className="grow flex flex-col gap-3">
          <div className="space-y-1">
            <p className="text-sm font-medium">
              Version 1.4 is now available!
            </p>
            <p className="text-sm text-muted-foreground">
            This update contains several bug fixes and performance improvements. 
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm">Install</Button>
            <Button size="sm" variant="link">Later</Button>
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