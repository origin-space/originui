import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Radio08() {
  return (
    <RadioGroup className="gap-2" defaultValue="r1">
      {/* Radio card #1 */}
      <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
        <RadioGroupItem
          value="r1"
          id="radio-08-r1"
          aria-describedby="radio-08-r1-description"
          className="order-1 after:absolute after:inset-0"
        />
        <div className="grid grow gap-2">
          <Label htmlFor="radio-08-r1">
            Label{" "}
            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
              (Sublabel)
            </span>
          </Label>
          <p id="radio-08-r1-description" className="text-xs text-muted-foreground">
            You can use this card with a label and a description.
          </p>
        </div>
      </div>
      {/* Radio card #2 */}
      <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
        <RadioGroupItem
          value="r2"
          id="radio-08-r2"
          aria-describedby="radio-08-r2-description"
          className="order-1 after:absolute after:inset-0"
        />
        <div className="grid grow gap-2">
          <Label htmlFor="radio-08-r2">
            Label{" "}
            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
              (Sublabel)
            </span>
          </Label>
          <p id="radio-08-r2-description" className="text-xs text-muted-foreground">
            You can use this card with a label and a description.
          </p>
        </div>
      </div>
    </RadioGroup>
  );
}
