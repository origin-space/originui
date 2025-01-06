"use client";

import { Moon, Sun } from "lucide-react";
import { useId, useState } from "react";

export default function Component() {
  const id = useId();
  const [theme, setTheme] = useState<string>("light");

  return (
    <div className="space-y-4">
      <legend className="text-sm font-medium leading-none text-foreground">
        Dark mode toggle checkbox
      </legend>
      <div className="flex flex-col justify-center">
        <input
          type="checkbox"
          name={id}
          id={id}
          className="peer sr-only"
          checked={theme === "dark"}
          onChange={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
        />
        <label
          className="group relative inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-input bg-background text-foreground shadow-sm shadow-black/5 transition-colors hover:bg-accent hover:text-accent-foreground peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-ring/70"
          htmlFor={id}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {/* Note: After dark mode implementation, rely on dark: prefix rather than peer-checked:group-[]: */}
          <span className="group-[]:hidden">Light</span>
          <Moon
            size={16}
            strokeWidth={2}
            className="shrink-0 scale-0 opacity-0 transition-all peer-checked:group-[]:scale-100 peer-checked:group-[]:opacity-100"
            aria-hidden="true"
          />
          <Sun
            size={16}
            strokeWidth={2}
            className="absolute shrink-0 scale-100 opacity-100 transition-all peer-checked:group-[]:scale-0 peer-checked:group-[]:opacity-0"
            aria-hidden="true"
          />
        </label>
      </div>
    </div>
  );
}
