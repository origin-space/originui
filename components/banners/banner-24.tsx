"use client";

import { Button } from "@/components/ui/button";
import { Rocket, X } from "lucide-react";
import { useState } from "react";

export default function Banner20() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="px-4 py-3 md:py-2 bg-muted text-foreground dark">
      <div className="flex gap-2 md:items-center">
        <div className="grow flex gap-3 md:items-center">
          <div className="size-9 flex items-center justify-center shrink-0 max-md:mt-0.5 rounded-full bg-primary/15" aria-hidden="true">
            <Rocket className="opacity-80" size={16} strokeWidth={2} />
          </div>
          <div className="grow flex flex-col md:flex-row justify-between md:items-center gap-3">
            <div>
              <p className="text-sm font-medium">
              Boost your experience with Origin UI
              </p>
              <p className="text-sm text-muted-foreground">
                The new feature is live! Try it out and let us know what you think.
              </p>
            </div>
            <div className="flex max-md:flex-wrap gap-2">
              <Button size="sm">Try now</Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="shrink-0 -me-2 -my-1.5 p-0 size-8 group"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <X size={16} strokeWidth={2} className="opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}