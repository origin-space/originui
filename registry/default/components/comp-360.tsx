import { Button } from "@/registry/default/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Circle } from "lucide-react";

export default function Component() {
  return (
    <div className="inline-grid w-fit grid-cols-3 gap-1">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="col-start-2"
              variant="outline"
              size="icon"
              aria-label="Pan camera up"
            >
              <ChevronUp size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="px-2 py-1 text-xs">
            Pan top
            <kbd className="-me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
              ⌘T
            </kbd>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="col-start-1"
              variant="outline"
              size="icon"
              aria-label="Pan camera left"
            >
              <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" className="px-2 py-1 text-xs">
            Pan left
            <kbd className="-me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
              ⌘L
            </kbd>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="flex items-center justify-center" aria-hidden="true">
        <Circle className="opacity-60" size={16} strokeWidth={2} />
      </div>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Pan camera right">
              <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" className="px-2 py-1 text-xs">
            Pan right
            <kbd className="-me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
              ⌘R
            </kbd>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="col-start-2"
              variant="outline"
              size="icon"
              aria-label="Pan camera down"
            >
              <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="px-2 py-1 text-xs">
            Pan bottom
            <kbd className="-me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
              ⌘B
            </kbd>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
