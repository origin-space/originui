import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkbox03() {
  return (
    <div className="flex items-center space-x-2" style={{ "--primary": "238.7 83.5% 66.7%", "--ring": "238.7 83.5% 66.7%" } as React.CSSProperties}>
      <Checkbox id="checkbox-03" defaultChecked />
      <Label htmlFor="checkbox-03">
        Colored checkbox
      </Label>
    </div>    
  )
}
