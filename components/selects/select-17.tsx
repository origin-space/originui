// Dependencies: pnpm install lucide-react

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock } from "lucide-react";

export default function Select17() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-17">Select with icon</Label>
      <Select defaultValue="s1">
        <SelectTrigger id="select-17" className="relative ps-9">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 group-has-[[disabled]]:opacity-50">
            <Clock size={16} strokeWidth={2} aria-hidden="true" />
          </div>
          <SelectValue placeholder="Select time" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="s1">00:00 AM - 11:59 PM</SelectItem>
          <SelectItem value="s2">01:00 AM - 12:59 PM</SelectItem>
          <SelectItem value="s3">02:00 AM - 01:59 PM</SelectItem>
          <SelectItem value="s4">03:00 AM - 02:59 PM</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
