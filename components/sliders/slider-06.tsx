import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider06() {
  return (
    <div className="space-y-4">
      <Label>Simple slider</Label>
      <Slider defaultValue={[25,75]} max={100} step={1} />
    </div>
  );
}
