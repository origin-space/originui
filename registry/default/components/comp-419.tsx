import { Badge } from "@/registry/default/ui/badge";
import { Check } from "lucide-react";

export default function Component() {
  return (
    <Badge variant="outline" className="gap-1">
      <Check className="text-emerald-500" size={12} aria-hidden="true" />
      Badge
    </Badge>
  );
}
