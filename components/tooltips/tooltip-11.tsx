"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";

const tips = [
  {
    title: "Welcome to Dashboard",
    description: "This is your new workspace. Here you'll find all your projects, recent activities, settings, and more."
  },
  {
    title: "Quick Actions",
    description: "Use the toolbar above to create new projects, invite team members, or access settings."
  },
  {
    title: "Need Help?",
    description: "Click the support icon in the top right corner to access our help center and documentation."
  }
];

export default function PopoverDemo() {
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
        <Button variant="outline" size="sm">With steps</Button>
      </PopoverTrigger>
      <PopoverContent className="py-3 max-w-[280px] shadow-none" side="top">
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-[13px] font-medium">{tips[currentTip].title}</p>
            <p className="text-xs text-muted-foreground">
              {tips[currentTip].description}
            </p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="text-xs text-muted-foreground">{currentTip + 1}/{tips.length}</span>
            <button 
              className="text-xs font-medium hover:underline"
              onClick={handleNavigation}
            >
              {currentTip === tips.length - 1 ? 'Start over' : 'Next'}
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
