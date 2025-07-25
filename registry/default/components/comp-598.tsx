"use client"

import { Croissant, Github } from "lucide-react"
import { toast } from "sonner"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"
import { IconButton } from "@/registry/default/ui/icon-button"

export default function Component() {
  const handleClick = () => {
    toast.custom(
      () => (
        <div className="bg-background border-border text-foreground flex min-w-[300px] items-center gap-3 rounded-lg border p-4 shadow-lg">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/162759797?v=4"
              alt="GitHub Avatar"
            />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">Let's connect.</p>
          </div>
          <IconButton
            onClick={() => window.open("https://github.com/lyfe691", "_blank")}
            label="GitHub"
            icon={<Github className="h-4 w-4" />}
            variant="default"
            size="sm"
          />
        </div>
      ),
      {
        duration: 10000, // 10s
      }
    )
  }

  return (
    <div className="flex min-h-[120px] w-full items-center justify-center">
      <div className="flex flex-col">
        <IconButton
          onClick={handleClick}
          label="Show toast"
          size="lg"
          icon={<Croissant />}
          iconPosition="left"
          variant="outline"
        />
      </div>
    </div>
  )
}
