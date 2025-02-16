"use client";

import { Badge } from "@/registry/default/ui/badge";
import { X } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [isActive, setIsActive] = useState(true);

  if (!isActive) return null;

  return (
    <Badge>
      Removable
      <button
        className="focus-visible:outline-ring/70 -my-px -ms-px -me-1.5 inline-flex size-5 shrink-0 items-center justify-center rounded-[inherit] p-0 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline-2"
        onClick={() => setIsActive(false)}
      >
        <X size={12} aria-hidden="true" />
      </button>
    </Badge>
  );
}
