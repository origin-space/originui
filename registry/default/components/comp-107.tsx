"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/default/ui/toggle-group";
import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [value, setValue] = useState<string>("center");

  return (
    <ToggleGroup
      className="divide-background inline-flex gap-0 divide-x rounded-lg shadow-xs"
      type="single"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      <ToggleGroupItem
        className="bg-primary/80 text-primary-foreground hover:bg-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground w-10 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        aria-label="Align Left"
        value="left"
      >
        <AlignLeftIcon size={16} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="bg-primary/80 text-primary-foreground hover:bg-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground w-10 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        aria-label="Align Center"
        value="center"
      >
        <AlignCenterIcon size={16} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="bg-primary/80 text-primary-foreground hover:bg-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground w-10 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        aria-label="Align Right"
        value="right"
      >
        <AlignRightIcon size={16} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="bg-primary/80 text-primary-foreground hover:bg-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground w-10 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        aria-label="Align Justify"
        value="justify"
      >
        <AlignJustifyIcon size={16} aria-hidden="true" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
