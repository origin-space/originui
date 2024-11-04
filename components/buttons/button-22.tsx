// Dependencies: pnpm install lucide-react @radix-ui/react-tooltip

"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Plus } from "lucide-react";

export default function Button22() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Add new item">
            <Plus size={16} strokeWidth={2} aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground">
          Tooltip
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
