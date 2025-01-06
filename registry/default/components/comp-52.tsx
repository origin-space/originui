import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Read-only input</Label>
      <Input
        id={id}
        className="read-only:bg-muted"
        defaultValue="This is a read-only input"
        readOnly
        placeholder="Email"
        type="email"
      />
    </div>
  );
}
