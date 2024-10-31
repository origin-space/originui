import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Radio04() {
  return (
    <RadioGroup className="gap-6" defaultValue="small">
      <div className="flex items-start gap-2">
        <RadioGroupItem
          value="small"
          id="radio-04-small"
          aria-describedby="radio-04-small-description"
        />
        <div className="grid grow gap-2">
          <Label htmlFor="radio-04-small">
            Small{" "}
            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
              (Sublabel)
            </span>
          </Label>
          <p id="radio-04-small-description" className="text-xs text-muted-foreground">
            You can use this card with a label and a description.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <RadioGroupItem value="r2" id="radio-04-r2" aria-describedby="radio-04-r2-description" />
        <div className="grid grow gap-2">
          <Label htmlFor="radio-04-r2">
            Large{" "}
            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
              (Sublabel)
            </span>
          </Label>
          <p id="radio-04-r2-description" className="text-xs text-muted-foreground">
            You can use this card with a label and a description.
          </p>
        </div>
      </div>
    </RadioGroup>
  );
}
