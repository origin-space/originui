"use client";

import { Badge } from "@/registry/default/ui/badge";
import { X } from "lucide-react";
import { useId, useState } from "react";

export default function Component() {
  const [isActive, setIsActive] = useState(true);
  const labelId = useId();

  if (!isActive) return null;

  return (
    <Badge id={labelId}>
      <span className="sr-only">delete tag</span>
      Removable
      <button
        aria-labelledby={labelId}
        className="-my-px -me-1.5 -ms-px inline-flex size-5 shrink-0 items-center justify-center rounded-[inherit] p-0 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
        onClick={() => setIsActive(false)}
      >
        <X size={12} strokeWidth={2} aria-hidden="true" />
      </button>
    </Badge>
  );
}
