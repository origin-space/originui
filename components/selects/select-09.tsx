import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";

export default function Select09() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-09">
        Required select (native) <span className="text-destructive">*</span>
      </Label>
      <SelectNative id="select-09">
        <option value="s1">React</option>
        <option value="s2">Next.js</option>
        <option value="s3">Astro</option>
        <option value="s4">Gatsby</option>
      </SelectNative>
    </div>
  );
}
