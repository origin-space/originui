"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

export default function TeamSwitcher({
  teams,
  defaultTeam,
}: {
  teams: string[]
  defaultTeam: string
}) {
  const [selectedProject, setSelectedProject] = React.useState(defaultTeam)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0 hover:bg-transparent">
          <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full">
            {selectedProject.charAt(0).toUpperCase()}
          </span>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="">{selectedProject}</span>
          </div>
          <ChevronsUpDown size={14} className="text-muted-foreground/80" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {teams.map((project) => (
          <DropdownMenuItem
            key={project}
            onSelect={() => setSelectedProject(project)}
          >
            {project}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
