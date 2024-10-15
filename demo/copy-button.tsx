"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button, Tooltip, TooltipTrigger } from "react-aria-components";

const CopyButton = ({ componentSource }: { componentSource: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(componentSource);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      className={cn(
        "absolute right-2 top-2 transition-opacity",
        !copied && "lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100",
      )}
    >
      <TooltipTrigger delay={300}>
        <Button
          className="inline-flex size-9 items-center justify-center rounded-lg border border-transparent bg-background text-sm font-medium text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus:z-10 focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:text-foreground data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-offset-2"
          onPress={handleCopy}
          aria-label={copied ? "Copied" : "Copy component source"}
          isDisabled={copied}
        >
          <div
            className={cn("transition-all", copied ? "scale-100 opacity-100" : "scale-0 opacity-0")}
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
              copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
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
              <path d="M3 2.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5ZM10 1H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm3 5.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-1H5v1a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1v1.5Z" />
            </svg>
          </div>
        </Button>
        <Tooltip className="z-50 rounded-md border border-input bg-popover px-2 py-1 text-xs text-muted-foreground outline-none data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2">
          Copy
        </Tooltip>
      </TooltipTrigger>
    </div>
  );
};

export default CopyButton;
