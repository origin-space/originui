"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/default/ui/toggle-group";
import { useState } from "react";

export default function Component() {
  const [value, setValue] = useState<string>("left");

  return (
    <ToggleGroup
      type="single"
      variant="outline"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      <ToggleGroupItem
        className="flex-1"
        value="left"
      >
        Left
      </ToggleGroupItem>
      <ToggleGroupItem
        className="flex-1"
        value="center"
      >
        Center
      </ToggleGroupItem>
      <ToggleGroupItem
        className="flex-1"
        value="right"
      >
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
