import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
} from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <div className="inline-grid w-fit grid-cols-3 gap-1">
      <Button
        className="col-start-2"
        variant="outline"
        size="icon"
        aria-label="Pan camera up"
      >
        <ChevronUpIcon size={16} aria-hidden="true" />
      </Button>
      <Button
        className="col-start-1"
        variant="outline"
        size="icon"
        aria-label="Pan camera left"
      >
        <ChevronLeftIcon size={16} aria-hidden="true" />
      </Button>
      <div className="flex items-center justify-center" aria-hidden="true">
        <CircleIcon className="opacity-60" size={16} />
      </div>
      <Button variant="outline" size="icon" aria-label="Pan camera right">
        <ChevronRightIcon size={16} aria-hidden="true" />
      </Button>
      <Button
        className="col-start-2"
        variant="outline"
        size="icon"
        aria-label="Pan camera down"
      >
        <ChevronDownIcon size={16} aria-hidden="true" />
      </Button>
    </div>
  )
}
