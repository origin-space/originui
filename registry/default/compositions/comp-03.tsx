import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Input with helper text</Label>
      <Input id={id} placeholder="Email" type="email" />
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        We won&lsquo;t share your email with anyone
      </p>
    </div>
  );
}
