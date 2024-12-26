import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function SliderDemo() {
  return (
    <div className="space-y-4">
      <Label>Simple slider</Label>
      <Slider defaultValue={[25]} aria-label="Simple slider" />
    </div>
  );
}
