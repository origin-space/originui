import { Badge } from "@/registry/default/ui/badge"

export default function Component() {
  return (
    <Badge className="items-baseline gap-1.5">
      Badge
      <span className="text-primary-foreground/60 text-[0.625rem] font-medium">
        73
      </span>
    </Badge>
  )
}
