import { cn } from "@/registry/default/lib/utils";
import { badgeVariants } from "@/registry/default/ui/badge";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Check } from "lucide-react";

export default function Component() {
  return (
    <label
      className={cn(
        badgeVariants({ variant: "default" }),
        "hover:bg-primary/80 has-data-[state=unchecked]:bg-muted has-data-[state=unchecked]:text-muted-foreground has-focus-visible:outline-ring/70 cursor-pointer has-focus-visible:outline-2",
      )}
    >
      <div className="flex items-center gap-1">
        <Checkbox
          id="badge-selectable"
          className="peer sr-only after:absolute after:inset-0"
          defaultChecked
        />
        <Check size={12} className="hidden peer-data-[state=checked]:block" aria-hidden="true" />
        <span className="select-none">Selectable</span>
      </div>
    </label>
  );
}
