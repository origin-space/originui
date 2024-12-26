import { badgeVariants } from "@/registry/default/ui/badge";
import { cn } from "@/registry/default/lib/utils";

export default function BadgeDemo() {
  return (
    <a href="#" className={cn(badgeVariants({ variant: "default" }), "hover:bg-primary/80")}>
      Link
    </a>
  );
}
