import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";

export default function Select11() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-11">Select with option groups (native)</Label>
      <SelectNative id="select-11">
        <optgroup label="Frontend">
          <option value="s1">React</option>
          <option value="s2">Vue</option>
          <option value="s3">Angular</option>
        </optgroup>
        <optgroup label="Backend">
          <option value="s4">Node.js</option>
          <option value="s5">Python</option>
          <option value="s6">Java</option>
        </optgroup>
      </SelectNative>
    </div>
  );
}
