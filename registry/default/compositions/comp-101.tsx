"use client";

import { Toggle } from "@/registry/default/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { Bookmark } from "lucide-react";
import { useState } from "react";

export default function Component() {
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
        <TooltipContent className="px-2 py-1 text-xs">
          <p>{bookmarked ? "Remove bookmark" : "Bookmark this"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
