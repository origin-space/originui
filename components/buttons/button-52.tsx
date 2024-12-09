// Dependencies: pnpm install lucide-react

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";
import { useState } from "react";

export default function ButtonDemo() {
  const [count, setCount] = useState(3);

  const handleClick = () => {
    setCount(0);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={handleClick}
      aria-label="Notifications"
    >
      <Bell size={16} strokeWidth={2} aria-hidden="true" />
      {count > 0 && (
        <Badge className="absolute -top-2 left-full -translate-x-1/2 px-1 min-w-5">
          {count > 99 ? "99+" : count}
        </Badge>
      )}
    </Button>
  );
}
