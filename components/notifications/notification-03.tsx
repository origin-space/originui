import { CircleCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Notification03() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="px-4 py-3 border border-border rounded-lg shadow-lg shadow-black/5 max-w-[400px] z-[100] bg-background">
      <div className="flex gap-2">
        <p className="text-sm grow">
          <CircleCheck className="text-emerald-500 inline-flex -mt-0.5 me-2" size={16} strokeWidth={2} aria-hidden="true" />
          Some success information.
        </p>
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