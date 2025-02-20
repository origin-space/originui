import { Label } from "@/registry/default/ui/label";
import { SelectNative } from "@/registry/default/ui/select-native";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div
      className="*:not-first:mt-2"
      // NOTE: This inline style is to show how to set the --ring variable in your CSS file in order to change the focus ring color.
      style={{ "--ring": "oklch(0.59 0.20 277)" } as React.CSSProperties}
    >
      <Label htmlFor={id}>Select with colored border (native)</Label>
      <SelectNative
        id={id}
        className="focus-visible:border-ring/60 focus-visible:ring-ring/20 dark:focus-visible:ring-ring/25"
      >
        <option value="1">React</option>
        <option value="2">Next.js</option>
        <option value="3">Astro</option>
        <option value="4">Gatsby</option>
      </SelectNative>
    </div>
  );
}
