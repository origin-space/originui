import { Label } from "@/components/ui/label";
import { SliderWithTooltip } from "@/components/ui/slider-with-tooltip";

export default function Slider22() {
  return (
    <div className="space-y-4">
      <Label>Vertical dual range slider and tooltip</Label>
      <div className="flex justify-center">
        <SliderWithTooltip defaultValue={[2,7]} max={10} orientation="vertical" aria-label="Vertical slider" showTooltip />
      </div>
    </div>
  );
}
