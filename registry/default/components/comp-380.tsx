"use client";

import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Monitor, Moon, Sun } from "lucide-react";
import { useState } from "react";

type Theme = "light" | "dark" | "system";

export default function Component() {
  const [theme, setTheme] = useState<Theme>("system");

  // For demo purposes, we'll simulate system preference as "light"
  const systemPreference = "light";
  const displayTheme = theme === "system" ? systemPreference : theme;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="outline" aria-label="Select theme">
            {displayTheme === "light" && <Sun size={16} strokeWidth={2} aria-hidden="true" />}
            {displayTheme === "dark" && <Moon size={16} strokeWidth={2} aria-hidden="true" />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-32">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Sun size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Moon size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <Monitor size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
