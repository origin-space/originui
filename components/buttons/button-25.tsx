// Dependencies: pnpm install lucide-react
"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function ButtonDemo() {
  const [value, setValue] = useState(235);

  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Upvote"
        onClick={() => setValue((prev) => prev + 1)}
      >
        <ChevronUp size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
      <span className="flex items-center border border-input px-3 text-sm font-medium">
        {value}
      </span>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Downvote"
        onClick={() => setValue((prev) => prev - 1)}
      >
        <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
