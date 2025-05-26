"use client"

import { useState } from "react"
import {
  BellIcon,
  BoltIcon,
  BookOpenIcon,
  ChevronsUpDown,
  Layers2Icon,
  LogOutIcon,
  PinIcon,
  UserPenIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"
import { Badge } from "@/registry/default/ui/badge"
import { Button } from "@/registry/default/ui/button"
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink } from "@/registry/default/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"
import { Select, SelectContent, SelectItem, SelectValue } from "@/registry/default/ui/select"
import { SelectTrigger } from "@radix-ui/react-select"

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
  const [notifications, setNotifications] = useState(initialNotifications)
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
        <div className="flex items-center gap-2">
          {/* Left side */}
          <div className="flex items-center gap-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="text-foreground">
                    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="16" fill="currentColor" />
                    </svg>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator> / </BreadcrumbSeparator>
                <BreadcrumbItem className="md:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="hover:text-foreground">
                      <BreadcrumbEllipsis />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem asChild>
                        <a href="#">Personal Account</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#">Projects</a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbItem className="max-md:hidden">
                  <BreadcrumbLink href="#">Personal Account</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="max-md:hidden"> / </BreadcrumbSeparator>
                <BreadcrumbItem className="max-md:hidden">
                  <BreadcrumbLink href="#">Projects</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator> / </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <Select defaultValue="1">
                    <SelectTrigger
                      aria-label="Select project"
                      asChild
                    >
                      <Button variant="ghost" className="px-1.5 h-8 focus-visible:ring-0 focus-visible:bg-accent text-foreground">
                        <SelectValue placeholder="Select project" />
                        <ChevronsUpDown size={14} className="text-muted-foreground/80" />
                      </Button>
                    </SelectTrigger>
                    <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2">
                      <SelectItem value="1">Main project</SelectItem>
                      <SelectItem value="2">Origin project</SelectItem>
                    </SelectContent>
                  </Select>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
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
          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto p-0 hover:bg-transparent"
              >
                <Avatar>
                  <AvatarImage src="./avatar.jpg" alt="Profile image" />
                  <AvatarFallback>KK</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-64" align="end">
              <DropdownMenuLabel className="flex min-w-0 flex-col">
                <span className="text-foreground truncate text-sm font-medium">
                  Keith Kennedy
                </span>
                <span className="text-muted-foreground truncate text-xs font-normal">
                  k.kennedy@originui.com
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <BoltIcon
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 1</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Layers2Icon
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 2</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BookOpenIcon
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 3</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <PinIcon
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 4</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserPenIcon
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 5</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
