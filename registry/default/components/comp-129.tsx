"use client"

import { useState } from "react"
import { BellIcon } from "lucide-react"

import { Badge } from "@/registry/default/ui/badge"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const [count, setCount] = useState(3)

  const handleClick = () => {
    setCount(0)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={handleClick}
      aria-label="Notifications"
    >
      <BellIcon size={16} aria-hidden="true" />
      {count > 0 && (
        <Badge className="absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1">
          {count > 99 ? "99+" : count}
        </Badge>
      )}
    </Button>
  )
}
