import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CopyPlus, Bolt, Layers2, Files } from "lucide-react";

export default function DropdownDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Menu with icons
          <ChevronDown className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
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
        <DropdownMenuItem>
          <Files size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
          Store
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 
