"use client";

import { Button } from "@/registry/default/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Component() {
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
        <ChevronUp className="ms-1 -me-1" size={16} aria-hidden="true" />
      ) : (
        <ChevronDown className="ms-1 -me-1" size={16} aria-hidden="true" />
      )}
    </Button>
  );
}
