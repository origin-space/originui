"use client";

import { Button } from "@/components/ui/button";
import { Eclipse, X } from "lucide-react";
import { useState } from "react";

export default function Banner20() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="px-4 py-3 md:py-2 bg-muted text-foreground dark">
      <div className="flex gap-2 md:items-center">
        <div className="grow flex gap-3 md:items-center">
          <Eclipse className="shrink-0 max-md:mt-0.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          <div className="grow flex flex-col md:flex-row justify-between md:items-center gap-3">
            <p className="text-sm">
              It's live and ready to use! Start exploring the latest addition to your toolkit.
            </p>
            <div className="flex max-md:flex-wrap gap-2">
              <Button size="sm" className="text-sm">Download</Button>
              <Button
                variant="link"
                size="sm"
                className="text-sm"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="shrink-0 -me-2 -my-1.5 p-0 size-8 hover:bg-transparent group"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <X size={16} strokeWidth={2} className="opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}