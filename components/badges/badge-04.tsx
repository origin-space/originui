import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

export default function BadgeDemo() {
  return (
    <Badge className="gap-1.5">
      <Zap className="text-amber-500" size={12} strokeWidth={2} aria-hidden="true" />
      Badge
    </Badge>
  );
}
