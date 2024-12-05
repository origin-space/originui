"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor
} from "@/components/ui/popover"

import { Heart, Diamond, Club, Spade, LucideIcon } from "lucide-react"

interface TourStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

const tourSteps: TourStep[] = [
  {
    icon: Heart,
    title: "Heart",
    description: "This is your new workspace. Here you'll find all your projects, recent activities, settings, and more."
  },
  {
    icon: Diamond,
    title: "Diamond",
    description: "Use the toolbar above to create new projects, invite team members, or access settings."
  },
  {
    icon: Club,
    title: "Club",
    description: "Click the support icon in the top right corner to access our help center and documentation."
  },
  {
    icon: Spade,
    title: "Spade",
    description: "Press ⌘K to open the command palette. Use arrow keys to navigate and Enter to select an action."
  }
];

interface CardProps {
  icon: LucideIcon;
  isActive: boolean;
}

function Card({ icon: Icon, isActive }: CardProps) {
  const content = (
    <div className="size-10 bg-secondary rounded-lg flex items-center justify-center">
      <Icon size={16} strokeWidth={2} />
    </div>
  );

  return isActive ? <PopoverAnchor>{content}</PopoverAnchor> : content;
}

export default function PopoverDemo() {
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
      <Popover onOpenChange={(open) => {
        if (open) setCurrentTip(0);
      }}>
        
        <div className="grid grid-cols-2 gap-4 place-items-center">
          {tourSteps.map((step, index) => (
            <Card
              key={step.title}
              icon={step.icon}
              isActive={currentTip === index}
            />
          ))}
        </div>

        <PopoverTrigger asChild>
          <Button variant="outline">
            Start tour
          </Button>
        </PopoverTrigger>

        <PopoverContent 
          className="py-3 max-w-[280px] shadow-none"
          side={currentTip % 2 === 0 ? "left" : "right"}
          showArrow={true}
        >
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="text-[13px] font-medium">{tourSteps[currentTip].title}</p>
              <p className="text-xs text-muted-foreground">
                {tourSteps[currentTip].description}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-xs text-muted-foreground">{currentTip + 1}/{tourSteps.length}</span>
              <button
                className="text-xs font-medium hover:underline"
                onClick={handleNavigation}
              >
                {currentTip === tourSteps.length - 1 ? 'Start over' : 'Next'}
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
