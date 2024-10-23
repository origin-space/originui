import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkbox05() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="checkbox-05" defaultChecked />
      <Label
        htmlFor="checkbox-05"
        className="peer-data-[state=checked]:line-through"
      >
        Simple todo item
      </Label>
    </div>    
  )
}
