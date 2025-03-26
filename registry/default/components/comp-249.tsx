import { Label } from "@/registry/default/ui/label"
import { Slider } from "@/registry/default/ui/slider"

export default function Component() {
  return (
    <div className="*:not-first:mt-4">
      <Label>Slider with labels and tooltip</Label>
      <div>
        <span
          className="text-muted-foreground mb-3 flex w-full items-center justify-between gap-2 text-xs font-medium"
          aria-hidden="true"
        >
          <span>Low</span>
          <span>High</span>
        </span>
        <Slider
          defaultValue={[50]}
          step={10}
          showTooltip={true}
          aria-label="Slider with labels and tooltip"
        />
      </div>
    </div>
  )
}
