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
            "group toast group-[.toaster]-not-data-[styled=false]:bg-background group-[.toaster]-not-data-[styled=false]:text-foreground group-[.toaster]-not-data-[styled=false]:border-border group-[.toaster]-not-data-[styled=false]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "data-button:group-[.toast]:h-8 data-button:group-[.toast]:rounded-md data-button:group-[.toast]:px-3 data-button:group-[.toast]:text-xs data-button:group-[.toast]:font-medium",
          cancelButton:
            "data-button:group-[.toast]:h-8 data-button:group-[.toast]:rounded-md data-button:group-[.toast]:px-3 data-button:group-[.toast]:text-xs data-button:group-[.toast]:font-medium",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
