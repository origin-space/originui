// Dependencies: npm install lucide-react

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Input23() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="space-y-2">
      <Label htmlFor="input-23">Show/hide password input</Label>
      <div className="relative">
        <Input
          id="input-23"
          className="pr-9"
          placeholder="Password"
          type={isVisible ? "text" : "password"}
        />
        <button
          className="absolute inset-y-px right-px flex h-full w-9 items-center justify-center rounded-r-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
          {isVisible ? (
            <EyeOff size={16} strokeWidth={2} aria-hidden="true" role="presentation" />
          ) : (
            <Eye size={16} strokeWidth={2} aria-hidden="true" role="presentation" />
          )}
        </button>
      </div>
    </div>
  );
}
