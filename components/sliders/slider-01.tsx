import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider01() {
  return (
    <div className="space-y-4">
      <Label>Simple slider</Label>
      <Slider defaultValue={[25]} aria-label="Simple slider" />
    </div>
  );
}
