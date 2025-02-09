"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position="top-right"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:shadow-black/5",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "data-button:group-[.toast]:h-8 data-button:group-[.toast]:rounded-lg data-button:group-[.toast]:px-3 data-button:group-[.toast]:text-xs data-button:group-[.toast]:font-medium",
          cancelButton:
            "data-button:group-[.toast]:h-8 data-button:group-[.toast]:rounded-lg data-button:group-[.toast]:px-3 data-button:group-[.toast]:text-xs data-button:group-[.toast]:font-medium",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
