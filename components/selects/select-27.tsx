import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Select27() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-27">Select with disabled options</Label>
      <Select defaultValue="s2">
        <SelectTrigger id="select-27">
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="s1" disabled>
            React
          </SelectItem>
          <SelectItem value="s2">Next.js</SelectItem>
          <SelectItem value="s3" disabled>
            Astro
          </SelectItem>
          <SelectItem value="s4">Gatsby</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
