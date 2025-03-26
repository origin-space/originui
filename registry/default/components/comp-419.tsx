import { CheckIcon } from "lucide-react"

import { Badge } from "@/registry/default/ui/badge"

export default function Component() {
  return (
    <Badge variant="outline" className="gap-1">
      <CheckIcon className="text-emerald-500" size={12} aria-hidden="true" />
      Badge
    </Badge>
  )
}
