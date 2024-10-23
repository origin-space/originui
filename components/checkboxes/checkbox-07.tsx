import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkbox07() {
  return (
    <div className="flex items-center justify-between space-x-2">
      <Checkbox id="checkbox-07" className="order-1" />
      <Label htmlFor="checkbox-07">
        Right aligned checkbox
      </Label>
    </div>    
  )
}