// Dependencies: pnpm install lucide-react

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download } from "lucide-react";

export default function Input20() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-20">Input with end icon button</Label>
      <div className="flex rounded-lg shadow-sm shadow-black/5">
        <Input
          id="input-20"
          className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
          placeholder="Email"
          type="email"
        />
        <button
          className="inline-flex w-9 items-center justify-center rounded-e-lg border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Subscribe"
        >
          <Download size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
