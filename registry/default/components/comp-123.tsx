"use client"

import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState)
  }

  return (
    <Button
      className="gap-1"
      variant="ghost"
      onClick={toggleExpand}
      aria-expanded={isExpanded}
      aria-controls="expandable-content" // Use this ID on the element that this button controls
    >
      {isExpanded ? "Show less" : "Show more"}
      {isExpanded ? (
        <ChevronUpIcon className="-me-1" size={16} aria-hidden="true" />
      ) : (
        <ChevronDownIcon className="-me-1" size={16} aria-hidden="true" />
      )}
    </Button>
  )
}
