import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu"

import { CaseSensitive, Quote, Minus, Heading1, Heading2 } from "lucide-react"

export default function DropdownDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full shadow-none" aria-label="Open edit menu">
          <Plus size={16} strokeWidth={2} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="pb-2">
        <DropdownMenuLabel>Add block</DropdownMenuLabel>
        <DropdownMenuItem>
          <div className="size-8 rounded-lg border border-border flex items-center justify-center bg-background" aria-hidden="true">
            <CaseSensitive size={16} strokeWidth={2} />
          </div>
          <div>
            <div className="font-medium text-sm">Text</div>
            <div className="text-xs text-muted-foreground">Start writing with plain text</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="size-8 rounded-lg border border-border flex items-center justify-center bg-background" aria-hidden="true">
            <Quote size={16} strokeWidth={2} />
          </div>
          <div>
            <div className="font-medium text-sm">Quote</div>
            <div className="text-xs text-muted-foreground">Capture a quote</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="size-8 rounded-lg border border-border flex items-center justify-center bg-background" aria-hidden="true">
            <Minus size={16} strokeWidth={2} />
          </div>
          <div>
            <div className="font-medium text-sm">Divider</div>
            <div className="text-xs text-muted-foreground">Visually divide blocks</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="size-8 rounded-lg border border-border flex items-center justify-center bg-background" aria-hidden="true">
            <Heading1 size={16} strokeWidth={2} />
          </div>
          <div>
            <div className="font-medium text-sm">Heading 1</div>
            <div className="text-xs text-muted-foreground">Big section heading</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="size-8 rounded-lg border border-border flex items-center justify-center bg-background" aria-hidden="true">
            <Heading2 size={16} strokeWidth={2} />
          </div>
          <div>
            <div className="font-medium text-sm">Heading 2</div>
            <div className="text-xs text-muted-foreground">Medium section subheading</div>
          </div>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
} 
