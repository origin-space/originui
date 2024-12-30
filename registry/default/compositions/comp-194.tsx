import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2 [&_svg]:text-destructive/80">
      <Label htmlFor={id}>Select with error (native)</Label>
      <SelectNative
        id={id}
        className="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20"
      >
        <option value="1">React</option>
        <option value="2">Next.js</option>
        <option value="3">Astro</option>
        <option value="4">Gatsby</option>
      </SelectNative>
      <p className="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
        Selected option is invalid
      </p>
    </div>
  );
}
