"use client";

import { Badge } from "@/registry/default/ui/badge";
import { XIcon } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [isActive, setIsActive] = useState(true);

  if (!isActive) return null;

  return (
    <Badge variant="outline" className="gap-0 rounded-md px-2 py-1">
      Tag
      <button
        className="outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] -my-[5px] -ms-0.5 -me-2 inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-[inherit] p-0 text-foreground/60 transition-[color,box-shadow] hover:text-foreground"
        onClick={() => setIsActive(false)}
        aria-label="Delete"
      >
        <XIcon size={14} aria-hidden="true" />
      </button>
    </Badge>
  );
}
