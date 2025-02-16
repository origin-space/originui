import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Bolt, ChevronDown, CopyPlus, Files, Layers2 } from "lucide-react";

export default function Component() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Menu with icons
          <ChevronDown className="ms-2 -me-1 opacity-60" size={16} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <CopyPlus size={16} className="opacity-60" aria-hidden="true" />
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bolt size={16} className="opacity-60" aria-hidden="true" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Layers2 size={16} className="opacity-60" aria-hidden="true" />
          Group
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Files size={16} className="opacity-60" aria-hidden="true" />
          Clone
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
