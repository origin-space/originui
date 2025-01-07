"use client";

import { Button } from "@/registry/default/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const tips = [
  {
    title: "Welcome to Dashboard",
    description:
      "This is your new workspace. Here you'll find all your projects, recent activities, settings, and more.",
  },
  {
    title: "Quick Actions",
    description:
      "Use the toolbar above to create new projects, invite team members, or access settings.",
  },
  {
    title: "Need Help?",
    description:
      "Click the support icon in the top right corner to access our help center and documentation.",
  },
  {
    title: "Keyboard Shortcuts",
    description:
      "Press ⌘K to open the command palette. Use arrow keys to navigate and Enter to select an action.",
  },
  {
    title: "Stay Updated",
    description:
      "Enable notifications to receive updates about your projects, team activity, and important deadlines.",
  },
];

export default function Component() {
  const [currentTip, setCurrentTip] = useState(0);

  const handleNext = () => {
    if (currentTip < tips.length - 1) {
      setCurrentTip(currentTip + 1);
    }
  };

  const handlePrev = () => {
    if (currentTip > 0) {
      setCurrentTip(currentTip - 1);
    }
  };

  const isFirstTip = currentTip === 0;
  const isLastTip = currentTip === tips.length - 1;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Tooltip-like with nav</Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[280px] py-3 shadow-none" side="top">
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-[13px] font-medium">{tips[currentTip].title}</p>
            <p className="text-xs text-muted-foreground">{tips[currentTip].description}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {currentTip + 1}/{tips.length}
            </span>
            <div className="flex gap-0.5">
              <Button
                size="icon"
                variant="ghost"
                className="size-6"
                onClick={handlePrev}
                disabled={isFirstTip}
                aria-label="Previous tip"
              >
                <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="size-6"
                onClick={handleNext}
                disabled={isLastTip}
                aria-label="Next tip"
              >
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
