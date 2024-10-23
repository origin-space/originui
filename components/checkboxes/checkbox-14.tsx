import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SwatchBook, Brush, Eraser, Scissors } from "lucide-react";

function CheckboxItem({ id, label, Icon, defaultChecked = false }: { id: string; label: string; Icon: React.ElementType; defaultChecked?: boolean }) {
  return (
    <div className="relative items-top p-4 border border-input rounded-lg shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-muted-foreground flex flex-col gap-4">
      <div className="flex justify-between space-x-2 space-x-reverse">
        <Checkbox 
          id={id} 
          className="order-1 rounded-full after:absolute after:inset-0"
          aria-describedby={`${id}-description`}
          defaultChecked={defaultChecked}
        />
        <Icon className="opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      </div>  
      <Label htmlFor={id}>
        {label}
      </Label>        
    </div>
  )
}

export default function Checkbox14() {
  const items = [
    { id: "checkbox-1", label: "Palette", Icon: SwatchBook, defaultChecked: true },
    { id: "checkbox-2", label: "Brush", Icon: Brush },
    { id: "checkbox-3", label: "Eraser", Icon: Eraser },
    { id: "checkbox-4", label: "Cut", Icon: Scissors },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <CheckboxItem 
          key={item.id} 
          id={item.id} 
          label={item.label} 
          Icon={item.Icon} 
          defaultChecked={item.defaultChecked}
        />
      ))}
    </div>
  )
}
