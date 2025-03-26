import { ChevronDownIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
      <Avatar>
        <AvatarImage src="./avatar.jpg" alt="Profile image" />
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
      <ChevronDownIcon size={16} className="opacity-60" aria-hidden="true" />
    </Button>
  )
}
