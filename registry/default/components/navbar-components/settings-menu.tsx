import { SettingsIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

export default function SettingsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full shadow-none"
          aria-label="Open edit menu"
        >
          <SettingsIcon
            className="text-muted-foreground"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64">
        <DropdownMenuItem>Appearance</DropdownMenuItem>
        <DropdownMenuItem>Preferences</DropdownMenuItem>
        <DropdownMenuItem>API Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
