import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkbox01() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="checkbox-01" />
      <Label htmlFor="checkbox-01">
        Simple checkbox
      </Label>
    </div>    
  )
}
