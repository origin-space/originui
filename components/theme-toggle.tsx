"use client"

import { useId, useState } from "react"
import { RiMoonClearLine, RiSunLine } from "@remixicon/react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const id = useId()
  const { theme, setTheme } = useTheme()
  const [system, setSystem] = useState(false)

  const smartToggle = () => {
    /* The smart toggle by @nrjdalal */
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
    if (theme === "system") {
      setTheme(prefersDarkScheme ? "light" : "dark")
      setSystem(false)
    } else if (
      (theme === "light" && !prefersDarkScheme) ||
      (theme === "dark" && prefersDarkScheme)
    ) {
      setTheme(theme === "light" ? "dark" : "light")
      setSystem(false)
    } else {
      setTheme("system")
      setSystem(true)
    }
  }

  return (
    <div className="flex flex-col justify-center">
      <input
        type="checkbox"
        name="theme-toggle"
        id={id}
        className="peer sr-only"
        checked={system}
        onChange={smartToggle}
        aria-label="Toggle dark mode"
      />
      <label
        className="text-muted-foreground hover:text-foreground/80 peer-focus-visible:border-ring peer-focus-visible:ring-ring/50 relative inline-flex size-9 cursor-pointer items-center justify-center rounded transition-[color,box-shadow] outline-none peer-focus-visible:ring-[3px]"
        htmlFor={id}
        aria-hidden="true"
      >
        <RiSunLine className="dark:hidden" size={20} aria-hidden="true" />
        <RiMoonClearLine
          className="hidden dark:block"
          size={20}
          aria-hidden="true"
        />
        <span className="sr-only">Switch to system/light/dark version</span>
      </label>
    </div>
  )
}
