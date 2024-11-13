import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";

export default function Select07() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-07">Select with gray background (native)</Label>
      <SelectNative id="select-07" className="border-transparent bg-muted shadow-none">
        <option value="s1">React</option>
        <option value="s2">Next.js</option>
        <option value="s3">Astro</option>
        <option value="s4">Gatsby</option>
      </SelectNative>
    </div>
  );
}
