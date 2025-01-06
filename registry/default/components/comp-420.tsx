import { Badge } from "@/registry/default/ui/badge";

export default function Component() {
  return (
    <Badge variant="outline" className="gap-1.5">
      <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true"></span>
      Badge
    </Badge>
  );
}
