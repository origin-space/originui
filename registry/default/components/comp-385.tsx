"use client";

import { Button } from "@/registry/default/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
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
];

export default function Component() {
  const [currentTip, setCurrentTip] = useState(0);

  const handleNavigation = () => {
    if (currentTip === tips.length - 1) {
      setCurrentTip(0);
    } else {
      setCurrentTip(currentTip + 1);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Tooltip-like with steps</Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[280px] py-3 shadow-none" side="top">
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-[13px] font-medium">{tips[currentTip].title}</p>
            <p className="text-xs text-muted-foreground">{tips[currentTip].description}</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-muted-foreground">
              {currentTip + 1}/{tips.length}
            </span>
            <button className="text-xs font-medium hover:underline" onClick={handleNavigation}>
              {currentTip === tips.length - 1 ? "Start over" : "Next"}
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
