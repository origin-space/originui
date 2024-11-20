"use client";

import { Button } from "@/components/ui/button";
import { TriangleAlert, ArrowRight, X } from "lucide-react";
import { useState } from "react";

export default function Banner20() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="px-4 py-3 md:py-2 bg-amber-400 bg-opacity-20 dark:bg-opacity-10 text-amber-700 dark:text-amber-600">
      <div className="flex gap-2 md:items-center">
        <div className="grow flex gap-2 md:items-center">
          <TriangleAlert className="shrink-0 max-md:mt-0.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          <div className="grow flex flex-col md:flex-row justify-between md:items-center gap-3">
            <p className="text-sm">
              There's something that might require your action. Please review the details.
            </p>
            <div className="flex max-md:flex-wrap gap-2">
              <Button size="sm" className="focus-visible:ring-amber-400/50 !ring-offset-0">Learn more</Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="shrink-0 -me-2 -my-1.5 p-0 size-8 hover:bg-transparent hover:text-current group focus-visible:ring-amber-400/50 !ring-offset-0"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <X size={16} strokeWidth={2} className="opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
        </Button>      
      </div>
    </div>
  );
}