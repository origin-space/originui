// Dependencies: pnpm install lucide-react

"use client";

import { Button } from "@/components/ui/button";
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
        <span
          className="absolute left-full -top-2 -translate-x-1/2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1 text-xs font-medium text-primary-foreground"
          aria-hidden="true"
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Button>
  );
}