"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import { Bell } from "lucide-react";

import UserImg01 from "@/public/avatar-80-01.jpg";
import UserImg02 from "@/public/avatar-80-02.jpg";
import UserImg03 from "@/public/avatar-80-03.jpg";
import UserImg04 from "@/public/avatar-80-04.jpg";
import UserImg05 from "@/public/avatar-80-05.jpg";
import UserImg06 from "@/public/avatar-80-06.jpg";

const initialNotifications = [
  {
    id: 1,
    image: UserImg01,
    user: "Chris Thompson",
    action: "requested review on",
    target: "PR #42: Feature implementation",
    timestamp: "15 minutes ago",
    unread: true
  },
  {
    id: 2,
    image: UserImg02,
    user: "Emma Davis",
    action: "shared",
    target: "New component library",
    timestamp: "45 minutes ago",
    unread: true
  },
  {
    id: 3,
    image: UserImg03,
    user: "James Wilson",
    action: "assigned you to",
    target: "API integration task",
    timestamp: "4 hours ago",
    unread: false
  },
  {
    id: 4,
    image: UserImg04,
    user: "Alex Morgan",
    action: "replied to your comment in",
    target: "Authentication flow",
    timestamp: "12 hours ago",
    unread: false
  },
  {
    id: 5,
    image: UserImg05,
    user: "Sarah Chen",
    action: "commented on",
    target: "Dashboard redesign",
    timestamp: "2 days ago",
    unread: false
  },
  {
    id: 6,
    image: UserImg06,
    user: "Miky Derya",
    action: "mentioned you in",
    target: "Origin UI open graph image",
    timestamp: "2 weeks ago",
    unread: false
  }
];

function Dot({
  className,
}: {
  className?: string
}) {
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
  );
}

export default function PopoverDemo() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter(n => n.unread).length;

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      unread: false
    })));
  };

  const handleNotificationClick = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, unread: false } : notification
    ));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="outline" className="relative" aria-label="Open notifications">
          <Bell size={16} strokeWidth={2} aria-hidden="true" />
          {unreadCount > 0 && (
            <span
              className="absolute left-full -top-2 -translate-x-1/2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1 text-xs font-medium text-primary-foreground"
              aria-hidden="true"
            >
              {unreadCount > 99 ? "99+" : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-1 w-80">
        <div className="flex items-baseline justify-between gap-4 py-2 px-3">
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
        <div role="separator" aria-orientation="horizontal" className="-mx-1 my-1 h-px bg-border"></div>
        {notifications.map((notification) => (
          <div 
            key={notification.id}
            className="relative text-sm flex items-start gap-3 px-3 py-2 transition-colors hover:bg-accent rounded-md"
          >
            <Image
              className="size-9 rounded-md"
              src={notification.image}
              width={32}
              height={32}
              alt={notification.user}
            />
            <div className="flex-1 space-y-1">
              <button 
                className="text-left after:absolute after:inset-0"
                onClick={() => handleNotificationClick(notification.id)}
              >
                <span className="font-medium hover:underline">{notification.user}</span>{" "}
                {notification.action}{" "}
                <span className="font-medium hover:underline">{notification.target}</span>.
              </button>
              <div className="text-xs text-muted-foreground">
                {notification.timestamp}
              </div>
            </div>
            {notification.unread && (
              <div className="self-center">
                <Dot />
              </div>
            )}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
