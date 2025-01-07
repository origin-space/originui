import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Multiple select (native)</Label>
      <div className="overflow-hidden rounded-lg border border-input">
        <SelectNative id={id} multiple className="rounded-none border-none">
          <option value="1">React</option>
          <option value="2">Next.js</option>
          <option value="3">Astro</option>
          <option value="4">Gatsby</option>
          <option value="5">Vue</option>
          <option value="6">Angular</option>
        </SelectNative>
      </div>
    </div>
  );
}
