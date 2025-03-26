import {
  BoltIcon,
  ChevronDownIcon,
  CopyPlusIcon,
  FilesIcon,
  Layers2Icon,
} from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

export default function Component() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Menu with icons
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <CopyPlusIcon size={16} className="opacity-60" aria-hidden="true" />
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BoltIcon size={16} className="opacity-60" aria-hidden="true" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Layers2Icon size={16} className="opacity-60" aria-hidden="true" />
          Group
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FilesIcon size={16} className="opacity-60" aria-hidden="true" />
          Clone
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
