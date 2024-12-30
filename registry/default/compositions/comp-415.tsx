import { Badge } from "@/registry/default/ui/badge";
import { Zap } from "lucide-react";

export default function Component() {
  return (
    <Badge className="gap-1">
      <Zap className="-ms-0.5 opacity-60" size={12} strokeWidth={2} aria-hidden="true" />
      Badge
    </Badge>
  );
}
