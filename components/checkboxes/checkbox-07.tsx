import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Checkbox07() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-07" />
      <Label htmlFor="checkbox-07">
        I agree to the{" "}
        <a className="underline" href="https://originui.com" target="_blank">
          terms of service
        </a>
      </Label>
    </div>
  );
}
