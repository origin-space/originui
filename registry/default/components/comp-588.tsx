import { SparklesIcon, UploadIcon } from "lucide-react"

import AppToggle from "@/registry/default/components/navbar-components/app-toggle"
import TeamSwitcher from "@/registry/default/components/navbar-components/team-switcher"
import UserMenu from "@/registry/default/components/navbar-components/user-menu"
import { Button } from "@/registry/default/ui/button"

const teams = ["Acme Inc.", "Origin UI", "Junon"]

export default function Component() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          <TeamSwitcher teams={teams} defaultTeam={teams[0]} />
        </div>
        {/* Middle area */}
        <AppToggle />
        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="aspect-square text-sm max-sm:p-0"
          >
            <UploadIcon
              className="opacity-60 sm:-ms-1"
              size={16}
              aria-hidden="true"
            />
            <span className="max-sm:sr-only">Export</span>
          </Button>
          <Button size="sm" className="aspect-square text-sm max-sm:p-0">
            <SparklesIcon
              className="opacity-60 sm:-ms-1"
              size={16}
              aria-hidden="true"
            />
            <span className="max-sm:sr-only">Upgrade</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
