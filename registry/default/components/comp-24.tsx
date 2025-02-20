"use client";

import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { CircleXIcon } from "lucide-react";
import { useId, useRef, useState } from "react";

export default function Component() {
  const id = useId();
  const [inputValue, setInputValue] = useState("Click to clear");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearInput = () => {
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with clear button</Label>
      <div className="relative">
        <Input
          id={id}
          ref={inputRef}
          className="pe-9"
          placeholder="Type something..."
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue && (
          <button
            className="text-muted-foreground/80 hover:text-foreground outline-ring/30 dark:outline-ring/40 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg outline-offset-2 transition-colors focus:z-10 focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Clear input"
            onClick={handleClearInput}
          >
            <CircleXIcon size={16} aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
