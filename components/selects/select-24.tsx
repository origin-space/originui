import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Select24() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-24">Select with auto-width</Label>
      <Select defaultValue="s1">
        {/* Adjust the min-width to fit the longest option */}
        <SelectTrigger id="select-24" className="w-auto min-w-48 max-w-full">
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
