import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export default function BadgeDemo() {
  return (
    <Badge>
      Badge
      <button className="inline-flex items-center justify-center size-5 p-0 -me-1.5 shrink-0 rounded-[inherit] text-primary-foreground/80 hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70">
        <X size={12} strokeWidth={2} aria-hidden="true" />
      </button>
    </Badge>
  );
}
