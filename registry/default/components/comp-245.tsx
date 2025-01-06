import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  return (
    <div className="space-y-4">
      <Label>Slider with reference labels</Label>
      <div>
        <Slider defaultValue={[15]} min={5} max={35} aria-label="Slider with reference labels" />
        <span
          className="mt-4 flex w-full items-center justify-between gap-1 text-xs font-medium text-muted-foreground"
          aria-hidden="true"
        >
          <span>5 GB</span>
          <span>20 GB</span>
          <span>35 GB</span>
        </span>
      </div>
    </div>
  );
}
