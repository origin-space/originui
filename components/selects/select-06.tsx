import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";

export default function Select06() {
  return (
    <div className="space-y-2 [&_svg]:text-destructive/80">
      <Label htmlFor="select-06">Select with error (native)</Label>
      <SelectNative
        id="select-06"
        className="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/30"
      >
        <option value="s1">React</option>
        <option value="s2">Next.js</option>
        <option value="s3">Astro</option>
        <option value="s4">Gatsby</option>
      </SelectNative>
      <p className="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
        Selected option is invalid
      </p>
    </div>
  );
}
