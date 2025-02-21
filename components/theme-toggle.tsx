"use client";

import { RiContrast2Line, RiMoonClearLine, RiSunLine } from "@remixicon/react";
import { useTheme } from "next-themes";
import { useId, useState } from "react";

export default function ThemeToggle() {
  const id = useId();
  const { theme, setTheme } = useTheme();
  const [system, setSystem] = useState(false);

  const smartToggle = () => {
    /* The smart toggle by @nrjdalal */
    if (theme === "system") {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDarkScheme ? "light" : "dark");
      setSystem(false);
    } else {
      setTheme("system");
      setSystem(true);
    }
  };

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
        className="relative inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-ring/70"
        htmlFor={id}
        aria-hidden="true"
      >
        {system ? (
          <RiContrast2Line size={20} aria-hidden="true" />
        ) : (
          <>
            <RiSunLine className="dark:hidden" size={20} aria-hidden="true" />
            <RiMoonClearLine className="hidden dark:block" size={20} aria-hidden="true" />
          </>
        )}
        <span className="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  );
}
