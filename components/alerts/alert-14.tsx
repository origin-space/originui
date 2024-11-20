import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Alert14() {
  return (
    <div className="px-4 py-3 border border-blue-500/30 text-blue-700 dark:text-blue-600 rounded-lg">
      <div className="flex gap-2">
        <Info className="shrink-0 mt-0.5" size={16} strokeWidth={2} aria-hidden="true" />
        <div className="grow flex flex-col gap-3">
          <div className="space-y-1">
            <p className="text-sm font-medium">
              Here is some helpful information!
            </p>
            <p className="text-sm">
              It aims to provide support for better decision-making.
            </p>
          </div>
          <div>
            <Button size="sm">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}