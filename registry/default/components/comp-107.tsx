"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/default/ui/toggle-group";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [value, setValue] = useState<string>("center");

  return (
    <ToggleGroup
      className="divide-background inline-flex gap-0 -space-x-px divide-x rounded-lg shadow-xs rtl:space-x-reverse"
      type="single"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      <ToggleGroupItem
        className="bg-primary/80 text-primary-foreground hover:bg-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        aria-label="Align Left"
        value="left"
      >
        <AlignLeft size={16} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="bg-primary/80 text-primary-foreground hover:bg-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        aria-label="Align Center"
        value="center"
      >
        <AlignCenter size={16} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="bg-primary/80 text-primary-foreground hover:bg-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        aria-label="Align Right"
        value="right"
      >
        <AlignRight size={16} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="bg-primary/80 text-primary-foreground hover:bg-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        aria-label="Align Justify"
        value="justify"
      >
        <AlignJustify size={16} aria-hidden="true" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
