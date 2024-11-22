// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

export default function Alert14() {
  return (
    <div className="rounded-lg bg-blue-400 bg-opacity-20 px-4 py-3 text-blue-700 dark:bg-opacity-10 dark:text-blue-600">
      <div className="flex gap-3">
        <Info className="mt-0.5 shrink-0 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        <div className="flex grow flex-col gap-3">
          <div className="space-y-1">
            <p className="text-sm font-medium">Here is some helpful information!</p>
            <p className="text-sm opacity-80">
              It aims to provide support for better decision-making.
            </p>
          </div>
          <div>
            <Button
              size="sm"
              variant="outline"
              className="border-none bg-background shadow-none hover:bg-background/80 hover:text-current focus-visible:outline-current"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
