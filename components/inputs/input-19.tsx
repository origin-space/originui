// Dependencies: pnpm install lucide-react

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function Input19() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-19">Input with end inline button</Label>
      <div className="relative">
        <Input id="input-19" className="pe-9" placeholder="Email" type="email" />
        <button
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Subscribe"
        >
          <Send size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
