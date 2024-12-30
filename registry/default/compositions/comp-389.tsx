"use client";

import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
import { useState } from "react";

import { Club, Diamond, Heart, LucideIcon, Spade } from "lucide-react";

interface TourStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

const tourSteps: TourStep[] = [
  {
    icon: Heart,
    title: "Heart",
    description:
      "This is your new workspace. Here you'll find all your projects, recent activities, settings, and more.",
  },
  {
    icon: Diamond,
    title: "Diamond",
    description:
      "Use the toolbar above to create new projects, invite team members, or access settings.",
  },
  {
    icon: Club,
    title: "Club",
    description:
      "Click the support icon in the top right corner to access our help center and documentation.",
  },
  {
    icon: Spade,
    title: "Spade",
    description:
      "Press ⌘K to open the command palette. Use arrow keys to navigate and Enter to select an action.",
  },
];

interface CardProps {
  number: number;
  isActive: boolean;
}

function Card({ number, isActive }: CardProps) {
  const content = (
    <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-muted-foreground">
      {number + 1}
    </div>
  );

  return isActive ? <PopoverAnchor>{content}</PopoverAnchor> : content;
}

export default function Component() {
  const [currentTip, setCurrentTip] = useState(0);

  const handleNavigation = () => {
    if (currentTip === tourSteps.length - 1) {
      setCurrentTip(0);
    } else {
      setCurrentTip(currentTip + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Popover
        onOpenChange={(open) => {
          if (open) setCurrentTip(0);
        }}
      >
        <div className="grid grid-cols-2 place-items-center gap-4">
          {tourSteps.map((step, index) => (
            <Card key={step.title} number={index} isActive={currentTip === index} />
          ))}
        </div>

        <PopoverTrigger asChild>
          <Button variant="outline">Start tour</Button>
        </PopoverTrigger>

        <PopoverContent
          className="max-w-[280px] py-3 shadow-none"
          side={currentTip % 2 === 0 ? "left" : "right"}
          showArrow={true}
        >
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="text-[13px] font-medium">{tourSteps[currentTip].title}</p>
              <p className="text-xs text-muted-foreground">{tourSteps[currentTip].description}</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-muted-foreground">
                {currentTip + 1}/{tourSteps.length}
              </span>
              <button className="text-xs font-medium hover:underline" onClick={handleNavigation}>
                {currentTip === tourSteps.length - 1 ? "Start over" : "Next"}
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
