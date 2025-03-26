import {
  BookIcon,
  Info,
  LifeBuoyIcon,
  MessageCircleMoreIcon,
} from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

export default function Component() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full shadow-none"
          aria-label="Open edit menu"
        >
          <Info size={16} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="pb-2">
        <DropdownMenuLabel>Need help?</DropdownMenuLabel>
        <DropdownMenuItem
          className="cursor-pointer py-1 focus:bg-transparent focus:underline"
          asChild
        >
          <a href="#">
            <BookIcon size={16} className="opacity-60" aria-hidden="true" />
            Documentation
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer py-1 focus:bg-transparent focus:underline"
          asChild
        >
          <a href="#">
            <LifeBuoyIcon size={16} className="opacity-60" aria-hidden="true" />
            Support
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer py-1 focus:bg-transparent focus:underline"
          asChild
        >
          <a href="#">
            <MessageCircleMoreIcon
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
            Contact us
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
