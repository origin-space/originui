import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div
      className="*:not-first:mt-2"
      // NOTE: This inline style is to show how to set the --ring variable in your CSS file in order to change the focus ring color.
      style={{ "--ring": "oklch(0.59 0.20 277)" } as React.CSSProperties}
    >
      <Label htmlFor={id}>Select with colored border and ring</Label>
      <Select defaultValue="1">
        <SelectTrigger
          id={id}
          className="focus:border-ring/60 focus:ring-ring/20 dark:focus:ring-ring/25"
        >
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">React</SelectItem>
          <SelectItem value="2">Next.js</SelectItem>
          <SelectItem value="3">Astro</SelectItem>
          <SelectItem value="4">Gatsby</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
