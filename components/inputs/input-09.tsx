// Dependencies: pnpm install lucide-react

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AtSign } from "lucide-react";

export default function Input09() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-09">Input with start icon</Label>
      <div className="relative">
        <Input id="input-09" className="peer ps-9" placeholder="Email" type="email" />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <AtSign size={16} strokeWidth={2} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
