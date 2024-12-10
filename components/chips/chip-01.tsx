import { Checkbox } from "@/components/ui/checkbox";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function ChipDemo() {
  return (
    <label
      className={cn(
        badgeVariants({ variant: "default" }),
        "hover:bg-primary/80 has-[[data-state=unchecked]]:bg-muted has-[[data-state=unchecked]]:text-muted-foreground cursor-pointer has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70",
      )}
    >
      <div className="flex items-center gap-1">
        <Checkbox
          id="chip-01"
          className="sr-only after:absolute after:inset-0 peer"
        />
        <Check size={12} strokeWidth={2} className="hidden peer-data-[state=checked]:block" aria-hidden="true" />
        <span>Chip</span>
      </div>
    </label>
  );
}
