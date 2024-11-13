import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Select18() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-18">Select with helper text</Label>
      <Select defaultValue="s3">
        <SelectTrigger id="select-18">
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="s1">React</SelectItem>
          <SelectItem value="s2">Next.js</SelectItem>
          <SelectItem value="s3">Astro</SelectItem>
          <SelectItem value="s4">Gatsby</SelectItem>
        </SelectContent>
      </Select>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Tell us what's your favorite Select framework
      </p>
    </div>
  );
}
