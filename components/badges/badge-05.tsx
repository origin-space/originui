import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function BadgeDemo() {
  return (
    <a href="#" className={cn(badgeVariants({ variant: "default" }), "hover:bg-primary/80")}>
      Link
    </a>
  );
}
