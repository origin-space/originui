// Dependencies: pnpm install lucide-react

"use client";

import { Button } from "@/components/ui/button";
import { CircleCheck, X } from "lucide-react";
import { toast } from "sonner";

export default function NotificationDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.custom((t) => (
          <div className="w-[var(--width)] rounded-lg border border-border bg-background px-4 py-3">
            <div className="flex gap-2">
              <div className="flex grow gap-3">
                <CircleCheck
                  className="mt-0.5 shrink-0 text-emerald-500"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <div className="flex grow justify-between gap-12">
                  <p className="text-sm">Message sent</p>
                  <div className="whitespace-nowrap text-sm">
                    <button className="text-sm font-medium hover:underline">View</button>{" "}
                    <span className="mx-1 text-muted-foreground">·</span>{" "}
                    <button
                      className="text-sm font-medium hover:underline"
                      onClick={() => toast.dismiss(t)}
                    >
                      Undo
                    </button>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                onClick={() => toast.dismiss(t)}
                aria-label="Close banner"
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
        ));
      }}
    >
      Custom sonner
    </Button>
  );
}
