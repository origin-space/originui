// Dependencies: pnpm install lucide-react

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

export default function Input10() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-10">Input with end icon</Label>
      <div className="relative">
        <Input id="input-10" className="peer pe-9" placeholder="Email" type="email" />
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Mail size={16} strokeWidth={2} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
