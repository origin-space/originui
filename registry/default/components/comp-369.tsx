import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Bolt, ChevronDown, CopyPlus, Files, Layers2, Trash } from "lucide-react";

export default function Component() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Grouped items
          <ChevronDown className="-me-1 opacity-60" size={16} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CopyPlus size={16} className="opacity-60" aria-hidden="true" />
            Copy
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bolt size={16} className="opacity-60" aria-hidden="true" />
            Edit
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Layers2 size={16} className="opacity-60" aria-hidden="true" />
            Group
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Files size={16} className="opacity-60" aria-hidden="true" />
            Clone
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            <Trash size={16} aria-hidden="true" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
