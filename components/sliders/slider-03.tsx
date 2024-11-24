import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function SliderDemo() {
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
