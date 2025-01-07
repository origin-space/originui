import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Plus } from "lucide-react";

import { Heading1, Heading2, Minus, TextQuote, Type } from "lucide-react";

export default function Component() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full shadow-none"
          aria-label="Open edit menu"
        >
          <Plus size={16} strokeWidth={2} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="pb-2">
        <DropdownMenuLabel>Add block</DropdownMenuLabel>
        <DropdownMenuItem>
          <div
            className="flex size-8 items-center justify-center rounded-lg border border-border bg-background"
            aria-hidden="true"
          >
            <Type size={16} strokeWidth={2} className="opacity-60" />
          </div>
          <div>
            <div className="text-sm font-medium">Text</div>
            <div className="text-xs text-muted-foreground">Start writing with plain text</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div
            className="flex size-8 items-center justify-center rounded-lg border border-border bg-background"
            aria-hidden="true"
          >
            <TextQuote size={16} strokeWidth={2} className="opacity-60" />
          </div>
          <div>
            <div className="text-sm font-medium">Quote</div>
            <div className="text-xs text-muted-foreground">Capture a quote</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div
            className="flex size-8 items-center justify-center rounded-lg border border-border bg-background"
            aria-hidden="true"
          >
            <Minus size={16} strokeWidth={2} className="opacity-60" />
          </div>
          <div>
            <div className="text-sm font-medium">Divider</div>
            <div className="text-xs text-muted-foreground">Visually divide blocks</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div
            className="flex size-8 items-center justify-center rounded-lg border border-border bg-background"
            aria-hidden="true"
          >
            <Heading1 size={16} strokeWidth={2} className="opacity-60" />
          </div>
          <div>
            <div className="text-sm font-medium">Heading 1</div>
            <div className="text-xs text-muted-foreground">Big section heading</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div
            className="flex size-8 items-center justify-center rounded-lg border border-border bg-background"
            aria-hidden="true"
          >
            <Heading2 size={16} strokeWidth={2} className="opacity-60" />
          </div>
          <div>
            <div className="text-sm font-medium">Heading 2</div>
            <div className="text-xs text-muted-foreground">Medium section subheading</div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
