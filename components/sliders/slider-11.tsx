import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider11() {
  return (
    <div className="space-y-4">
      <Label>Dual range slider</Label>
      <Slider defaultValue={[25, 75]} step={10} aria-label="Dual range slider" />
    </div>
  );
}
