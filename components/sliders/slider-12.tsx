import { Label } from "@/components/ui/label";
import { SliderWithTooltip } from "@/components/ui/slider-with-tooltip";

export default function Slider12() {
  return (
    <div className="space-y-4">
      <Label>Slider with labels and tooltip</Label>
      <div>
        <span className="w-full mb-3 flex items-center justify-between gap-2 text-xs font-medium text-muted-foreground" aria-hidden="true">
          <span>Low</span>
          <span>High</span>
        </span>
        <SliderWithTooltip defaultValue={[50]} step={10} showTooltip={true} aria-label="Slider with labels and tooltip" />
      </div>
    </div>
  );
}
