"use client"

import { useState } from "react"
import {
  ArchiveRestoreIcon,
  ChevronDownIcon,
  PlusIcon,
  Share2Icon,
  TrashIcon,
} from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

export default function Component() {
  const [framework, setFramework] = useState("nextjs")
  const [emailNotifications, setEmailNotifications] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(true)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Rich menu with icons
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PlusIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>New</span>
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>Framework</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup
                  value={framework}
                  onValueChange={setFramework}
                >
                  <DropdownMenuRadioItem value="nextjs">
                    Next.js
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="sveltekit" disabled>
                    SvelteKit
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="remix">
                    Remix
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="astro">
                    Astro
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>Notifications</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuCheckboxItem
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                >
                  Email
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                >
                  Push
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Share2Icon size={16} className="opacity-60" aria-hidden="true" />
            <span>Share</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArchiveRestoreIcon
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
            <span>Archive</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <TrashIcon size={16} aria-hidden="true" />
          <span>Delete</span>
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
