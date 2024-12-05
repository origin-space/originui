import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu"

import { Book, LifeBuoy, MessageCircleMore } from "lucide-react"

export default function DropdownDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full shadow-none" aria-label="Open edit menu">
          <Info size={16} strokeWidth={2} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="pb-2">
        <DropdownMenuLabel>Need help?</DropdownMenuLabel>
        <DropdownMenuItem className="cursor-pointer focus:bg-transparent focus:underline py-1" asChild>
          <a href="#">
            <Book size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            Documentation
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer focus:bg-transparent focus:underline py-1" asChild>
          <a href="#">
            <LifeBuoy size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            Support
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer focus:bg-transparent focus:underline py-1" asChild>
          <a href="#">
            <MessageCircleMore size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            Contact us
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 
