import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
} from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

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
              <ChevronUpIcon size={16} aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="px-2 py-1 text-xs">
            Pan top
            <kbd className="bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
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
              <ChevronLeftIcon size={16} aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" className="px-2 py-1 text-xs">
            Pan left
            <kbd className="bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
              ⌘L
            </kbd>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="flex items-center justify-center" aria-hidden="true">
        <CircleIcon className="opacity-60" size={16} />
      </div>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Pan camera right">
              <ChevronRightIcon size={16} aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" className="px-2 py-1 text-xs">
            Pan right
            <kbd className="bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
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
              <ChevronDownIcon size={16} aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="px-2 py-1 text-xs">
            Pan bottom
            <kbd className="bg-background text-muted-foreground/70 ms-2 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
              ⌘B
            </kbd>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
