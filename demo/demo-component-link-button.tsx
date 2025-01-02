"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import { useState } from "react";

/**
 * Allows you to copy the reference to the current component and share it with others.
 */
const DemoComponentLinkButton = ({ componentName }: { componentName: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      // when trying to copy another link from a page that has the hash on it replace the hash
      const textToCopy =
        window.location.hash.length > 0
          ? window.location.href.replace(window.location.hash, `#${componentName}`)
          : `${window.location.href}#${componentName}`;

      await navigator.clipboard.writeText(textToCopy);

      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      className={cn(
        "transition-opacity",
        !copied &&
          "lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100",
      )}
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground/80 hover:bg-transparent hover:text-foreground disabled:opacity-100"
              onClick={handleCopy}
              aria-label={copied ? "Copied" : "Copy component source"}
              disabled={copied}
            >
              <div
                className={cn(
                  "transition-all",
                  copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
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
                  copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
                )}
              >
                <Link size={16} />
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs text-muted-foreground">Copy</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default DemoComponentLinkButton;
