// Dependencies: pnpm install lucide-react

"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Button46() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleExpand}
      aria-expanded={isExpanded}
      aria-controls="expandable-content" // Use this ID on the element that this button controls
    >
      {isExpanded ? "Show less" : "Show more"}
      {isExpanded ? (
        <ChevronUp className="-me-1 ms-1" size={16} strokeWidth={2} aria-hidden="true" />
      ) : (
        <ChevronDown className="-me-1 ms-1" size={16} strokeWidth={2} aria-hidden="true" />
      )}
    </Button>
  );
}
