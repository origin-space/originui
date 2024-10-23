import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkbox06() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="checkbox-06" className="rounded-full data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500 data-[state=checked]:text-white" defaultChecked />
      <Label
        htmlFor="checkbox-06"
        className="peer-data-[state=checked]:line-throgh peer-data-[state=checked]:text-muted-foreground relative after:absolute after:w-full after:left-0 after:h-px after:bg-muted-foreground after:top-1/2 after:-translate-y-1/2 after:origin-bottom after:scale-x-0 after:transition-transform after:ease-in-out peer-data-[state=checked]:after:origin-bottom peer-data-[state=checked]:after:scale-x-100"
      >
        Fancy todo item
      </Label>
    </div>    
  )
}
