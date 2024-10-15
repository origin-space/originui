// Dependencies: npm install lucide-react

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle, Mic, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Input27() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inputValue) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inputValue]);

  return (
    <div className="space-y-2">
      <Label htmlFor="input-27">Search input with loader</Label>
      <div className="relative">
        <Input
          id="input-27"
          className="peer pl-9 pr-9"
          placeholder="Search..."
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground/80 peer-disabled:opacity-50">
          {isLoading ? (
            <LoaderCircle
              className="animate-spin"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
              role="presentation"
            />
          ) : (
            <Search size={16} strokeWidth={2} aria-hidden="true" role="presentation" />
          )}
        </div>
        <button
          className="absolute inset-y-px right-px flex h-full w-9 items-center justify-center rounded-r-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Press to speak"
          type="submit"
        >
          <Mic size={16} strokeWidth={2} aria-hidden="true" role="presentation" />
        </button>
      </div>
    </div>
  );
}
