"use client"

import { useId, useState } from "react"
import { LayoutGridIcon, PlusIcon, SearchIcon } from "lucide-react"

import InfoMenu from "@/registry/default/components/navbar-components/info-menu"
import NotificationMenu from "@/registry/default/components/navbar-components/notification-menu"
import SettingsMenu from "@/registry/default/components/navbar-components/settings-menu"
import { Button } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import { Switch } from "@/registry/default/ui/switch"

export default function Component() {
  const id = useId()
  const [checked, setChecked] = useState<boolean>(true)

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="relative flex-1">
          <Input
            id={`input-${id}`}
            className="peer h-8 w-full max-w-xs ps-8 pe-2"
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
              className="size-8 rounded-full shadow-none text-muted-foreground"
              aria-label="Open layout menu"
            >
              <LayoutGridIcon size={16} aria-hidden="true" />
            </Button>
            {/* Info menu */}
            <InfoMenu />
            {/* Notification */}
            <NotificationMenu />
            {/* Settings */}
            <SettingsMenu />
          </div>
          {/* Add button */}
          <Button
            className="size-8 rounded-full"
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
