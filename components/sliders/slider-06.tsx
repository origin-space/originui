import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider06() {
  return (
    <div className="space-y-4">
      <Label>Range slider</Label>
      <Slider defaultValue={[25,75]} step={10} aria-label="Range slider" />
    </div>
  );
}
