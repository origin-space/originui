"use client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Button52() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={toggleTheme} variant="outline" size="icon">
            {isDark ? <Moon /> : <Sun />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isDark ? "Dark mode" : "Light mode"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
