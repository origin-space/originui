"use client";

import { Badge } from "@/registry/default/ui/badge";
import { XIcon } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [isActive, setIsActive] = useState(true);

  if (!isActive) return null;

  return (
    <Badge className="gap-0">
      Removable
      <button
        className="outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] -my-px -ms-px -me-1.5 inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-[inherit] p-0 text-primary-foreground/60 transition-[color,box-shadow] hover:text-primary-foreground"
        onClick={() => setIsActive(false)}
      >
        <XIcon size={12} aria-hidden="true" />
      </button>
    </Badge>
  );
}
