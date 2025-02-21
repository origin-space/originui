import { ToggleGroup, ToggleGroupItem } from "@/registry/default/ui/toggle-group";

export default function Component() {
  return (
    <ToggleGroup
      variant="outline"
      className="inline-flex gap-0 -space-x-px rounded-md shadow-xs rtl:space-x-reverse"
      type="single"
    >
      <ToggleGroupItem
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        value="left"
      >
        Left
      </ToggleGroupItem>
      <ToggleGroupItem
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        value="center"
      >
        Center
      </ToggleGroupItem>
      <ToggleGroupItem
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        value="right"
      >
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
