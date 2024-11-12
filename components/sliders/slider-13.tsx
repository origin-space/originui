import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider13() {
  return (
    <div className="space-y-4">
      <Label>Equalizer</Label>
      <Slider defaultValue={[5]} max={10} step={1} orientation="vertical" />
    </div>
  );
}
