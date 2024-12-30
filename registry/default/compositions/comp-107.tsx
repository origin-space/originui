"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/default/ui/toggle-group";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [value, setValue] = useState<string>("center");

  return (
    <ToggleGroup
      className="inline-flex gap-0 -space-x-px divide-x divide-background rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse"
      type="single"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      <ToggleGroupItem
        className="rounded-none bg-primary/80 text-primary-foreground shadow-none first:rounded-s-lg last:rounded-e-lg hover:bg-primary focus-visible:z-10 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
        aria-label="Align Left"
        value="left"
      >
        <AlignLeft size={16} strokeWidth={2} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="rounded-none bg-primary/80 text-primary-foreground shadow-none first:rounded-s-lg last:rounded-e-lg hover:bg-primary focus-visible:z-10 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
        aria-label="Align Center"
        value="center"
      >
        <AlignCenter size={16} strokeWidth={2} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="rounded-none bg-primary/80 text-primary-foreground shadow-none first:rounded-s-lg last:rounded-e-lg hover:bg-primary focus-visible:z-10 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
        aria-label="Align Right"
        value="right"
      >
        <AlignRight size={16} strokeWidth={2} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="rounded-none bg-primary/80 text-primary-foreground shadow-none first:rounded-s-lg last:rounded-e-lg hover:bg-primary focus-visible:z-10 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
        aria-label="Align Justify"
        value="justify"
      >
        <AlignJustify size={16} strokeWidth={2} aria-hidden="true" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
