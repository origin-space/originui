import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkbox08() {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox 
        id="checkbox-08" 
        aria-describedby="checkbox-08-description"
      />
      <div className="grow grid gap-1">
        <Label htmlFor="checkbox-08">
          Label <span className="font-normal text-xs leading-[inherit] text-muted-foreground">(Sublabel)</span>
        </Label>
        <p id="checkbox-08-description" className="text-xs text-muted-foreground">
          You can use this checkbox with a label and a description.
        </p>
      </div>
    </div>    
  )
}
