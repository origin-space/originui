"use client"

import { useState } from "react"
import {
  ClubIcon,
  DiamondIcon,
  HeartIcon,
  LucideIcon,
  SpadeIcon,
} from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"

interface TourStep {
  icon: LucideIcon
  title: string
  description: string
}

const tourSteps: TourStep[] = [
  {
    icon: HeartIcon,
    title: "Heart",
    description:
      "This is your new workspace. Here you'll find all your projects, recent activities, settings, and more.",
  },
  {
    icon: DiamondIcon,
    title: "Diamond",
    description:
      "Use the toolbar above to create new projects, invite team members, or access settings.",
  },
  {
    icon: ClubIcon,
    title: "Club",
    description:
      "Click the support icon in the top right corner to access our help center and documentation.",
  },
  {
    icon: SpadeIcon,
    title: "Spade",
    description:
      "Press ⌘K to open the command palette. Use arrow keys to navigate and Enter to select an action.",
  },
]

interface CardProps {
  number: number
  isActive: boolean
}

function Card({ number, isActive }: CardProps) {
  const content = (
    <div className="bg-secondary text-muted-foreground flex size-10 items-center justify-center rounded-md text-sm font-medium">
      {number + 1}
    </div>
  )

  return isActive ? <PopoverAnchor>{content}</PopoverAnchor> : content
}

export default function Component() {
  const [currentTip, setCurrentTip] = useState(0)

  const handleNavigation = () => {
    if (currentTip === tourSteps.length - 1) {
      setCurrentTip(0)
    } else {
      setCurrentTip(currentTip + 1)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Popover
        onOpenChange={(open) => {
          if (open) setCurrentTip(0)
        }}
      >
        <div className="grid grid-cols-2 place-items-center gap-4">
          {tourSteps.map((step, index) => (
            <Card
              key={step.title}
              number={index}
              isActive={currentTip === index}
            />
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
              <p className="text-[13px] font-medium">
                {tourSteps[currentTip].title}
              </p>
              <p className="text-muted-foreground text-xs">
                {tourSteps[currentTip].description}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-muted-foreground text-xs">
                {currentTip + 1}/{tourSteps.length}
              </span>
              <button
                className="text-xs font-medium hover:underline"
                onClick={handleNavigation}
              >
                {currentTip === tourSteps.length - 1 ? "Start over" : "Next"}
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
