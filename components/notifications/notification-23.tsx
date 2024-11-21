"use client";

import { toast } from "sonner"
import { Button } from "@/components/ui/button";
import { CircleCheck, X } from "lucide-react";

export default function Notification01() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.custom((t) => (
          <div className="px-4 py-3 border border-border rounded-lg bg-background w-[var(--width)]">
            <div className="flex gap-2">
              <div className="grow flex gap-3">
                <CircleCheck className="text-emerald-500 shrink-0 mt-0.5" size={16} strokeWidth={2} aria-hidden="true" />
                <div className="grow flex justify-between gap-12">
                  <p className="text-sm">
                    Message sent
                  </p>
                  <div className="text-sm whitespace-nowrap">
                    <button className="text-sm font-medium hover:underline">View</button>{" "}
                    <span className="text-muted-foreground mx-1">·</span>{" "}
                    <button className="text-sm font-medium hover:underline" onClick={() => toast.dismiss(t)}>Undo</button>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                className="shrink-0 -me-2 -my-1.5 p-0 size-8 hover:bg-transparent group"
                onClick={() => toast.dismiss(t)}
                aria-label="Close banner"
              >
                <X size={16} strokeWidth={2} className="opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </Button>
            </div>
          </div>
        ))
      }}
    >
      Custom sonner
    </Button>
  );
}
