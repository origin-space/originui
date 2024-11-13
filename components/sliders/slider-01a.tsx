import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider01a() {
  return (
    <div
      className="space-y-4"
      // NOTE: This inline style is to show how to set the --primary variable in your CSS file in order to change the focus ring color.
      style={{ "--primary": "238.7 83.5% 66.7%" } as React.CSSProperties}
    >
      <Label>Slider with custom color</Label>
      <Slider defaultValue={[25]} aria-label="Slider with custom color" />
    </div>
  );
}
