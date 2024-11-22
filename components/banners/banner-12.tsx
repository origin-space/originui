// Dependencies: pnpm install lucide-react

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, TriangleAlert, X } from "lucide-react";
import { useState } from "react";

export default function Banner12() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-amber-400 bg-opacity-20 px-4 py-3 text-amber-700 dark:bg-opacity-10 dark:text-amber-600">
      <div className="flex gap-2">
        <div className="flex grow gap-3">
          <TriangleAlert
            className="mt-0.5 shrink-0 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <div className="flex grow flex-col justify-between gap-2 md:flex-row">
            <p className="text-sm">
              There&lsquo;s something that might require your action. Please review the details.
            </p>
            <a href="#" className="group whitespace-nowrap text-sm font-medium">
              Learn more
              <ArrowRight
                className="-mt-0.5 ms-1 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent hover:text-current focus-visible:outline-current"
          onClick={() => setIsVisible(false)}
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
  );
}
