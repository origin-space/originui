// Dependencies: pnpm install lucide-react

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

export default function SelectDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-52">Select with loading indicator</Label>
      <Select>
        <SelectTrigger id="select-52">
          <SelectValue placeholder="Select framework" />
          <Loader2 className="ml-auto h-4 w-4 animate-spin" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="s1">React</SelectItem>
          <SelectItem value="s2">Next.js</SelectItem>
          <SelectItem value="s3">Astro</SelectItem>
          <SelectItem value="s4">Gatsby</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
