"use client";

import { Toggle } from "@/registry/default/ui/toggle";
import { cx } from "class-variance-authority";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const classes = {
  base: "absolute shrink-0 transition-all duration-200",
  visible: "scale-100 opacity-100",
  hidden: "scale-0 opacity-0",
};

export default function ThemeToggle() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme((current) => {
      if (current === "light") return "dark";
      if (current === "dark") return "system";
      return "light";
    });
  };

  return (
    <Toggle
      variant="outline"
      className="group size-9 p-0"
      onPressedChange={changeTheme}
      pressed={false}
      aria-label="Toggle theme (default system)"
    >
      {isClient ? (
        <>
          <SunMoon
            size={18}
            className={cx(classes.base, theme === "system" ? classes.visible : classes.hidden)}
            aria-hidden="true"
          />
          <SunIcon
            size={18}
            className={cx(classes.base, theme === "light" ? classes.visible : classes.hidden)}
            aria-hidden="true"
          />
          <MoonIcon
            size={18}
            className={cx(classes.base, theme === "dark" ? classes.visible : classes.hidden)}
            aria-hidden="true"
          />
        </>
      ) : (
        <div className="h-[18px] w-[18px] animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      )}
    </Toggle>
  );
}
