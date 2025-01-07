import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Input with start add-on</Label>
      <div className="flex rounded-lg shadow-sm shadow-black/5">
        <span className="-z-10 inline-flex items-center rounded-s-lg border border-input bg-background px-3 text-sm text-muted-foreground">
          https://
        </span>
        <Input
          id={id}
          className="-ms-px rounded-s-none shadow-none"
          placeholder="google.com"
          type="text"
        />
      </div>
    </div>
  );
}
