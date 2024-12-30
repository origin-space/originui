import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={id} />
      <Label htmlFor={id}>
        I agree to the{" "}
        <a className="underline" href="https://originui.com" target="_blank">
          terms of service
        </a>
      </Label>
    </div>
  );
}
