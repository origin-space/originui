import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  return (
    <div className="*:not-first:mt-4">
      <Label>Disabled slider</Label>
      <Slider defaultValue={[25]} disabled aria-label="Disabled slider" />
    </div>
  );
}
