// Dependencies: pnpm install lucide-react @radix-ui/react-tooltip @radix-ui/react-toggle

"use client";

import { Toggle } from "@/components/ui/toggle";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Bookmark } from "lucide-react";
import { useState } from "react";

export default function Button24() {
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            <Toggle
              className="group size-9 p-0 hover:bg-indigo-50 hover:text-indigo-500 data-[state=on]:bg-indigo-50 data-[state=on]:text-indigo-500"
              aria-label="Bookmark this"
              pressed={bookmarked}
              onPressedChange={setBookmarked}
            >
              <Bookmark size={16} strokeWidth={2} aria-hidden="true" />
            </Toggle>
          </div>
        </TooltipTrigger>
        <TooltipContent className="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground">
          <p>{bookmarked ? "Remove bookmark" : "Bookmark this"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
