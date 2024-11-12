
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider09() {
  return (
    <div className="space-y-4">
      <Label>Simple slider</Label>
      <Slider defaultValue={[25,50,100]} max={100} />
    </div>
  );
}
