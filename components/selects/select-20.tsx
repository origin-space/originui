import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Select20() {
  return (
    <div className="space-y-2 [&_svg]:text-destructive/80">
      <Label htmlFor="select-20">Select with error</Label>
      <Select defaultValue="s1">
        <SelectTrigger
          id="select-20"
          className="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/30"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="s1">React</SelectItem>
          <SelectItem value="s2">Next.js</SelectItem>
          <SelectItem value="s3">Astro</SelectItem>
          <SelectItem value="s4">Gatsby</SelectItem>
        </SelectContent>
      </Select>
      <p className="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
        Selected option is invalid
      </p>
    </div>
  );
}
