import { Button } from "@/registry/default/ui/button"
import { UploadIcon, SparklesIcon } from "lucide-react"
import UserMenu from "@/registry/default/components/navbar-components/user-menu"
import TeamSwitcher from "@/registry/default/components/navbar-components/team-switcher"
import AppToggle from "@/registry/default/components/navbar-components/app-toggle"

const teams = [
  "Acme Inc.",
  "Origin UI",
  "Junon",
]

export default function Component() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        <div className="flex-1 flex items-center gap-2">
          {/* Left side */}
          <TeamSwitcher teams={teams} defaultTeam={teams[0]} />
        </div>
        {/* Middle area */}
        <AppToggle />          
        {/* Right side */}
        <div className="flex-1 flex items-center justify-end gap-2">
          <Button size="sm" variant="ghost" className="text-sm aspect-square max-sm:p-0">
            <UploadIcon className="opacity-60 sm:-ms-1" size={16} aria-hidden="true" />
            <span className="max-sm:sr-only">Export</span>
          </Button>
          <Button size="sm" className="text-sm aspect-square max-sm:p-0">
            <SparklesIcon className="opacity-60 sm:-ms-1" size={16} aria-hidden="true" />
            <span className="max-sm:sr-only">Upgrade</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
