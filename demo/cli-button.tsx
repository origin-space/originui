"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";

const base_path = "https://originui.com";

const CliButton = ({ componentName }: { componentName: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      const commnad = `npx shadcn@latest add ${base_path}/c/${componentName}.json`;
      await navigator.clipboard.writeText(commnad);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground/80 hover:bg-transparent hover:text-foreground disabled:opacity-100"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy Cli Command"}
          disabled={copied}
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
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-square-terminal"
            >
              <path d="m7 11 2-2-2-2" />
              <path d="M11 13h4" />
              <rect width="16" height="16" x="3" y="3" rx="2" ry="2" />
            </svg>
          </div>
        </Button>
      </TooltipTrigger>
      <TooltipContent className="px-2 py-1 text-xs text-muted-foreground">
        Copy command
      </TooltipContent>
    </Tooltip>
  );
};

export default CliButton;
