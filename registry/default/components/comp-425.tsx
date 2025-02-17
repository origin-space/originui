"use client";

import { Badge } from "@/registry/default/ui/badge";
import { X } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [isActive, setIsActive] = useState(true);

  if (!isActive) return null;

  return (
    <Badge variant="outline" className="rounded-md px-2 py-1">
      Tag
      <button
        className="outline-ring/30 dark:outline-ring/40 -my-[5px] -ms-0.5 -me-2 inline-flex size-7 shrink-0 items-center justify-center rounded-[inherit] p-0 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline-2 cursor-pointer"
        onClick={() => setIsActive(false)}
        aria-label="Delete"
      >
        <X size={14} aria-hidden="true" />
      </button>
    </Badge>
  );
}
