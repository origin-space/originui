"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DropdownDemo() {
  const [framework, setFramework] = useState("nextjs");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Radio items
          <ChevronDown className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={framework} onValueChange={setFramework}>
          <DropdownMenuRadioItem
            value="nextjs"
          >Next.js</DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="sveltekit"
            disabled
          >SvelteKit</DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="remix"
          >Remix</DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="astro"
            >Astro</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 
