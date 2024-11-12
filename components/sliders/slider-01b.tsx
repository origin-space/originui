import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider01() {
  return (
    <div className="space-y-4">
      <Label>Slider with primary color for the thumb</Label>
      <Slider defaultValue={[25]} className="[&>:last-child>span]:bg-primary [&>:first-child>span]:opacity-70" aria-label="Slider with primary color for the thumb" />
    </div>
  );
}
