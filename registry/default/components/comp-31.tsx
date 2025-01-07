import { Input } from "@/registry/default/ui/input";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-[:disabled]:opacity-50"
      >
        Input with overlapping label
      </label>
      <Input id={id} className="h-10" placeholder="Email" type="email" />
    </div>
  );
}
