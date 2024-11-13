import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";

export default function Select12() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-10">Select with auto-width (native)</Label>
      <div className="w-fit">
        <SelectNative id="select-10">
          <option value="s1">React</option>
          <option value="s2">Next.js</option>
          <option value="s3">Astro</option>
          <option value="s4">Gatsby</option>
        </SelectNative>
      </div>
    </div>
  );
}
