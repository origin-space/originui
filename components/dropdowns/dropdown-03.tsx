import { Button } from "@/components/ui/button";
import { Ellipsis, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu"
import { CopyPlus, Bolt, Layers2, Files, ChevronDown } from "lucide-react";

export default function DropdownDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Grouped items
          <ChevronDown className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CopyPlus size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            Copy
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bolt size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Layers2 size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            Stack
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Files size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            Store
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive focus:text-destructive">
            <Trash size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 
