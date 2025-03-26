import { cn } from "@/registry/default/lib/utils"
import { Label } from "@/registry/default/ui/label"
import { Slider } from "@/registry/default/ui/slider"

export default function Component() {
  const max = 12
  const skipInterval = 2 // Set to 1 to allow no text skipping
  const ticks = [...Array(max + 1)].map((_, i) => i)

  return (
    <div className="*:not-first:mt-4">
      <Label>Slider with ticks</Label>
      <div>
        <Slider defaultValue={[5]} max={max} aria-label="Slider with ticks" />
        <span
          className="text-muted-foreground mt-3 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium"
          aria-hidden="true"
        >
          {ticks.map((_, i) => (
            <span
              key={i}
              className="flex w-0 flex-col items-center justify-center gap-2"
            >
              <span
                className={cn(
                  "bg-muted-foreground/70 h-1 w-px",
                  i % skipInterval !== 0 && "h-0.5"
                )}
              />
              <span className={cn(i % skipInterval !== 0 && "opacity-0")}>
                {i}
              </span>
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}
