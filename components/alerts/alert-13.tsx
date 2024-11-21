import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Alert10() {
  return (
    <div className="px-4 py-3 bg-blue-400 bg-opacity-20 dark:bg-opacity-10 text-blue-700 dark:text-blue-600 rounded-lg">
      <div className="flex gap-3">
        <Info className="shrink-0 mt-0.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        <div className="grow flex flex-col gap-3">
          <div className="space-y-1">
            <p className="text-sm font-medium">
              Here is some helpful information!
            </p>
            <p className="text-sm opacity-80">
              It aims to provide support for better decision-making.
            </p>
          </div>
          <div>
            <Button size="sm" variant="outline" className="border-none bg-background hover:bg-background/80 hover:text-current shadow-none focus-visible:outline-current">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}