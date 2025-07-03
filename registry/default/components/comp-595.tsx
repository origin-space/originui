import {
  ChevronLeftIcon,
  HistoryIcon,
  MessageSquareText,
  UserRoundPlus,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <Button
            className="size-8"
            variant="ghost"
            size="icon"
            aria-label="Go back"
            asChild
          >
            <a href="#">
              <ChevronLeftIcon />
            </a>
          </Button>
          <h1 className="text-sm font-medium">Basic UI</h1>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* History button */}
          <Button
            size="icon"
            variant="ghost"
            className="text-muted-foreground size-8 rounded-full shadow-none"
            aria-label="History"
          >
            <HistoryIcon size={16} aria-hidden="true" />
          </Button>
          {/* Comments button */}
          <Button
            size="icon"
            variant="ghost"
            className="text-muted-foreground size-8 rounded-full shadow-none"
            aria-label="Save"
          >
            <MessageSquareText size={16} aria-hidden="true" />
          </Button>
          {/* Add user */}
          <Button
            size="icon"
            variant="ghost"
            className="text-muted-foreground size-8 rounded-full shadow-none"
            aria-label="Add user"
          >
            <UserRoundPlus size={16} aria-hidden="true" />
          </Button>
          {/* Online users */}
          <div className="ml-2 flex items-center gap-2">
            <div className="relative">
              <Avatar>
                <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
                <AvatarFallback>KK</AvatarFallback>
              </Avatar>
              <span className="border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-emerald-500">
                <span className="sr-only">Online</span>
              </span>
            </div>
            <div className="relative">
              <Avatar>
                <AvatarImage src="./avatar-80-06.jpg" alt="Martha Johnson" />
                <AvatarFallback>KK</AvatarFallback>
              </Avatar>
              <span className="border-background bg-muted-foreground absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2">
                <span className="sr-only">Online</span>
              </span>
            </div>
            <div className="relative">
              <Avatar>
                <AvatarImage src="./avatar-80-05.jpg" alt="Linda Green" />
                <AvatarFallback>KK</AvatarFallback>
              </Avatar>
              <span className="border-background bg-muted-foreground absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2">
                <span className="sr-only">Online</span>
              </span>
            </div>
            <Button
              variant="secondary"
              className="bg-secondary text-muted-foreground ring-background hover:bg-secondary hover:text-foreground flex size-8 items-center justify-center rounded-full text-xs"
              size="icon"
            >
              +3
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
