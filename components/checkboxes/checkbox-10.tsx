import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkbox10() {
  return (
    <div className="relative items-top flex space-x-2 space-x-reverse p-4 border border-input rounded-lg shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-muted-foreground">
      <Checkbox 
        id="checkbox-10" 
        className="order-1 after:absolute after:inset-0"
        aria-describedby="checkbox-10-description"
      />
      <div className="grow grid gap-1">
        <Label htmlFor="checkbox-10">
          Label <span className="font-normal text-xs leading-[inherit] text-muted-foreground">(Sublabel)</span>
        </Label>
        <p id="checkbox-10-description" className="text-xs text-muted-foreground">
          A short description goes here.
        </p>
      </div>
    </div>    
  )
}
