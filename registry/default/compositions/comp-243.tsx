import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  return (
    <div className="space-y-4">
      <Label>Slider with solid thumb</Label>
      <Slider
        defaultValue={[25]}
        className="[&>:first-child>span]:opacity-70 [&>:last-child>span]:bg-primary"
        aria-label="Slider with solid thumb"
      />
    </div>
  );
}
