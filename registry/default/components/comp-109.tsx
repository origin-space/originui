import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group"

export default function Component() {
  return (
    <ToggleGroup variant="outline" className="inline-flex" type="single">
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  )
}
