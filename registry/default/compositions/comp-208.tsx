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
    <div className="space-y-2 [&_svg]:text-destructive/80">
      <Label htmlFor={id}>Select with error</Label>
      <Select defaultValue="1">
        <SelectTrigger
          id={id}
          className="border-destructive/80 text-destructive focus:border-destructive/80 focus:ring-destructive/20"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">React</SelectItem>
          <SelectItem value="2">Next.js</SelectItem>
          <SelectItem value="3">Astro</SelectItem>
          <SelectItem value="4">Gatsby</SelectItem>
        </SelectContent>
      </Select>
      <p className="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
        Selected option is invalid
      </p>
    </div>
  );
}
