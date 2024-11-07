import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";

export default function Select04() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-04">Select with helper text (native)</Label>
      <SelectNative id="select-04">
        <option value="s1">React</option>
        <option value="s2">Next.js</option>
        <option value="s3">Astro</option>
        <option value="s4">Gatsby</option>
      </SelectNative>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Tell us what's your favorite Select framework
      </p>
    </div>
  );
}
