import { Download, Heart, Send } from "lucide-react"

import { IconButton } from "@/registry/default/ui/icon-button"

export default function Component() {
  return (
    <div className="flex gap-4">
      <IconButton label="Get Started" />
      <IconButton label="Download" icon={<Download />} variant="outline" />
      <IconButton
        label="Like"
        icon={<Heart />}
        iconPosition="left"
        variant="ghost"
      />
      <IconButton
        label="Send message"
        icon={<Send />}
        iconSize={20}
        iconStrokeWidth={1.5}
        variant="secondary"
      />
    </div>
  )
}
