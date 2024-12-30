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
        className="-my-[5px] -me-2 -ms-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-[inherit] p-0 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
        onClick={() => setIsActive(false)}
        aria-label="Delete"
      >
        <X size={14} strokeWidth={2} aria-hidden="true" />
      </button>
    </Badge>
  );
}
