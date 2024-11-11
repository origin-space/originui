import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider02() {
  return (
    <div className="space-y-4">
      <Label>Disabled slider</Label>
      <Slider defaultValue={[25]} max={100} step={1} disabled />
    </div>
  );
}
