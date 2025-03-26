"use client"

import { useId, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"

export default function Component() {
  const id = useId()
  const [theme, setTheme] = useState<string>("light")

  return (
    <div className="space-y-4">
      <legend className="text-foreground text-sm leading-none font-medium">
        Dark mode toggle checkbox
      </legend>
      <div className="flex flex-col justify-center">
        <input
          type="checkbox"
          name={id}
          id={id}
          className="peer sr-only"
          checked={theme === "dark"}
          onChange={() =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
        />
        <label
          className="group border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground peer-focus-visible:border-ring peer-focus-visible:ring-ring/50 relative inline-flex size-9 items-center justify-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none peer-focus-visible:ring-[3px]"
          htmlFor={id}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {/* Note: After dark mode implementation, rely on dark: prefix rather than group-peer-checked: */}
          <MoonIcon
            size={16}
            className="shrink-0 scale-0 opacity-0 transition-all group-peer-checked:scale-100 group-peer-checked:opacity-100"
            aria-hidden="true"
          />
          <SunIcon
            size={16}
            className="absolute shrink-0 scale-100 opacity-100 transition-all group-peer-checked:scale-0 group-peer-checked:opacity-0"
            aria-hidden="true"
          />
        </label>
      </div>
    </div>
  )
}
