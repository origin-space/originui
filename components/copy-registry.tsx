"use client"

import { useCopy } from "@/hooks/use-copy"
import { cn } from "@/registry/default/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

const CopyButton = ({
  url,
}: {
  url: string | null
}) => {
  const { copied, copy } = useCopy()

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100 lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
            onClick={() => copy(url || "")}
            aria-label={copied ? "Copied" : "Copy component source"}
            disabled={copied}
          >
            <div
              className={cn(
                "transition-all",
                copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  fill="#10B981"
                  d="M14.548 3.488a.75.75 0 0 1-.036 1.06l-8.572 8a.75.75 0 0 1-1.023 0l-3.429-3.2a.75.75 0 0 1 1.024-1.096l2.917 2.722 8.06-7.522a.75.75 0 0 1 1.06.036Z"
                />
              </svg>
            </div>
            <div
              className={cn(
                "absolute transition-all",
                copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
              )}
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                aria-hidden="true"
              >
                <path d="M10.459 1.562a1.725 1.725 0 0 0-2.407 0L1.635 7.855a.575.575 0 0 1-.925-.18.549.549 0 0 1 .123-.606L7.25.775a2.875 2.875 0 0 1 4.01 0 2.743 2.743 0 0 1 .803 2.36 2.866 2.866 0 0 1 2.406.787l.034.033a2.743 2.743 0 0 1 0 3.934L8.699 13.58a.182.182 0 0 0 0 .262l1.192 1.17a.55.55 0 0 1 0 .786.575.575 0 0 1-.802 0l-1.192-1.169a1.28 1.28 0 0 1 0-1.836L13.7 7.101a1.647 1.647 0 0 0 0-2.36l-.034-.032a1.725 1.725 0 0 0-2.404-.002L6.48 9.396l-.001.001-.065.065a.575.575 0 0 1-.926-.18.549.549 0 0 1 .123-.607l4.849-4.755a1.645 1.645 0 0 0-.002-2.358Z" />
                <path d="M9.657 3.135a.549.549 0 0 0 0-.786.575.575 0 0 0-.803 0L4.108 7.003a2.743 2.743 0 0 0 0 3.934 2.876 2.876 0 0 0 4.01 0l4.747-4.655a.548.548 0 0 0 0-.787.575.575 0 0 0-.802 0L7.317 10.15a1.725 1.725 0 0 1-2.407 0 1.647 1.647 0 0 1 0-2.36l4.747-4.655Z" />
              </svg>              
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="text-muted-foreground px-2 py-1 text-xs">
          Copy Registry URL
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CopyButton
