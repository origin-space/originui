import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Select22() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-22">Disabled select</Label>
      <Select defaultValue="s1" disabled>
        <SelectTrigger id="select-22">
          <SelectValue placeholder="Select framework" />
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
