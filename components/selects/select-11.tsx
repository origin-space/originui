import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";

export default function Select11() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-11">Select with option groups (native)</Label>
      <SelectNative id="select-11">
        <optgroup label="Fruits">
          <option value="s1">Apple</option>
          <option value="s2">Banana</option>
          <option value="s3">Orange</option>
        </optgroup>
        <optgroup label="Vegetables">
          <option value="s4">Carrot</option>
          <option value="s5">Broccoli</option>
          <option value="s6">Spinach</option>
        </optgroup>
      </SelectNative>
    </div>
  );
}
