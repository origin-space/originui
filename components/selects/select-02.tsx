import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";

export default function Select02() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-02">Select with placeholder (native)</Label>
      <SelectNative id="select-02" defaultValue="">
        <option value="" disabled>
          Please select a value
        </option>
        <option value="s1">1 to 5</option>
        <option value="s2">5 to 10</option>
        <option value="s3">More than 10</option>
      </SelectNative>
    </div>
  );
}
