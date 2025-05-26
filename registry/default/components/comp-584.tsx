"use client"

import { useState, useId } from "react"
import {
  BellIcon,
  BookIcon,
  InfoIcon,
  LayoutGridIcon,
  LifeBuoyIcon,
  MessageCircleMoreIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react"

import { Badge } from "@/registry/default/ui/badge"
import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import { Switch } from "@/registry/default/ui/switch"

const initialNotifications = [
  {
    id: 1,
    user: "Chris Tompson",
    action: "requested review on",
    target: "PR #42: Feature implementation",
    timestamp: "15 minutes ago",
    unread: true,
  },
  {
    id: 2,
    user: "Emma Davis",
    action: "shared",
    target: "New component library",
    timestamp: "45 minutes ago",
    unread: true,
  },
  {
    id: 3,
    user: "James Wilson",
    action: "assigned you to",
    target: "API integration task",
    timestamp: "4 hours ago",
    unread: false,
  },
  {
    id: 4,
    user: "Alex Morgan",
    action: "replied to your comment in",
    target: "Authentication flow",
    timestamp: "12 hours ago",
    unread: false,
  },
  {
    id: 5,
    user: "Sarah Chen",
    action: "commented on",
    target: "Dashboard redesign",
    timestamp: "2 days ago",
    unread: false,
  },
  {
    id: 6,
    user: "Miky Derya",
    action: "mentioned you in",
    target: "Origin UI open graph image",
    timestamp: "2 weeks ago",
    unread: false,
  },
]

function Dot({ className }: { className?: string }) {
  return (
    <svg
      width="6"
      height="6"
      fill="currentColor"
      viewBox="0 0 6 6"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="3" cy="3" r="3" />
    </svg>
  )
}

export default function Component() {
  const id = useId()
  const [notifications, setNotifications] = useState(initialNotifications)
  const [checked, setChecked] = useState<boolean>(true)
  const unreadCount = notifications.filter((n) => n.unread).length

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        unread: false,
      }))
    )
  }

  const handleNotificationClick = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    )
  }

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="relative flex-1">
          <Input
            id={`input-${id}`}
            className="peer h-8 ps-8 pe-2 max-w-xs w-full"
            placeholder="Search..."
            type="search"
          />
          <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
            <SearchIcon size={16} />
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Test mode */}
          <div className="inline-flex items-center gap-2 max-md:hidden">
            <Label htmlFor={`switch-${id}`} className="text-sm font-medium">
              Test mode
            </Label>              
            <Switch
              id={`switch-${id}`}
              checked={checked}
              onCheckedChange={setChecked}
              className="h-5 w-8 [&_span]:size-4 data-[state=checked]:[&_span]:translate-x-3 data-[state=checked]:[&_span]:rtl:-translate-x-3"
              aria-label="Toggle switch"
            />
          </div>            
          <div className="flex items-center gap-2">
            {/* Layout menu */}
            <Button
              size="icon"
              variant="ghost"
              className="size-8 rounded-full shadow-none"
              aria-label="Open layout menu"
            >
              <LayoutGridIcon size={16} aria-hidden="true" />
            </Button>
            {/* Info menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="size-8 rounded-full shadow-none"
                  aria-label="Open edit menu"
                >
                  <InfoIcon size={16} aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="pb-2">
                <DropdownMenuLabel>Need help?</DropdownMenuLabel>
                <DropdownMenuItem
                  className="cursor-pointer py-1 focus:bg-transparent focus:underline"
                  asChild
                >
                  <a href="#">
                    <BookIcon
                      size={16}
                      className="opacity-60"
                      aria-hidden="true"
                    />
                    Documentation
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer py-1 focus:bg-transparent focus:underline"
                  asChild
                >
                  <a href="#">
                    <LifeBuoyIcon
                      size={16}
                      className="opacity-60"
                      aria-hidden="true"
                    />
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
            {/* Notification */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="relative size-8 rounded-full shadow-none"
                  aria-label="Open notifications"
                >
                  <BellIcon size={16} aria-hidden="true" />
                  {unreadCount > 0 && (
                    <Badge className="absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1">
                      {unreadCount > 99 ? "99+" : unreadCount}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-1">
                <div className="flex items-baseline justify-between gap-4 px-3 py-2">
                  <div className="text-sm font-semibold">Notifications</div>
                  {unreadCount > 0 && (
                    <button
                      className="text-xs font-medium hover:underline"
                      onClick={handleMarkAllAsRead}
                    >
                      Mark all as read
                    </button>
                  )}
                </div>
                <div
                  role="separator"
                  aria-orientation="horizontal"
                  className="bg-border -mx-1 my-1 h-px"
                ></div>
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="hover:bg-accent rounded-md px-3 py-2 text-sm transition-colors"
                  >
                    <div className="relative flex items-start pe-3">
                      <div className="flex-1 space-y-1">
                        <button
                          className="text-foreground/80 text-left after:absolute after:inset-0"
                          onClick={() =>
                            handleNotificationClick(notification.id)
                          }
                        >
                          <span className="text-foreground font-medium hover:underline">
                            {notification.user}
                          </span>{" "}
                          {notification.action}{" "}
                          <span className="text-foreground font-medium hover:underline">
                            {notification.target}
                          </span>
                          .
                        </button>
                        <div className="text-muted-foreground text-xs">
                          {notification.timestamp}
                        </div>
                      </div>
                      {notification.unread && (
                        <div className="absolute end-0 self-center">
                          <span className="sr-only">Unread</span>
                          <Dot />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </PopoverContent>
            </Popover>
            {/* Settings */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full shadow-none"
                  aria-label="Open edit menu"
                >
                  <SettingsIcon size={16} aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-w-64">
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
                <DropdownMenuItem>Option 4</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Add button */}
          <Button
            className="rounded-full"
            size="icon"
            aria-label="Add new item"
          >
            <PlusIcon size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  )
}
