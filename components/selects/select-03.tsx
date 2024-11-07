// Dependencies: pnpm install lucide-react

import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";
import { Clock } from "lucide-react";

export default function Select03() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-03">Select with icon (native)</Label>
      <div className="group relative">
        <SelectNative id="select-03" className="ps-9">
          <option value="s1">00:00 AM - 11:59 PM</option>
          <option value="s2">01:00 AM - 12:59 PM</option>
          <option value="s3">02:00 AM - 01:59 PM</option>
          <option value="s4">03:00 AM - 02:59 PM</option>
        </SelectNative>
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 group-has-[[disabled]]:opacity-50">
          <Clock size={16} strokeWidth={2} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
