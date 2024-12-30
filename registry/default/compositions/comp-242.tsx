import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  return (
    <div className="space-y-4">
      <Label>Slider with square thumb</Label>
      <Slider
        defaultValue={[25]}
        max={100}
        step={10}
        className="[&>:last-child>span]:rounded"
        aria-label="Slider with square thumb"
      />
    </div>
  );
}
