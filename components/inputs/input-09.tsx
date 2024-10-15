// Dependencies: npm install lucide-react

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AtSign } from "lucide-react";

export default function Input09() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-09">Input with left icon</Label>
      <div className="relative">
        <Input id="input-09" className="peer pl-9" placeholder="Email" type="email" />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <AtSign size={16} strokeWidth={2} aria-hidden="true" role="presentation" />
        </div>
      </div>
    </div>
  );
}
