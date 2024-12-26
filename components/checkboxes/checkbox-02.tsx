"use client";

import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { useState } from "react";

export default function CheckboxDemo() {
  const [checked, setChecked] = useState<boolean | "indeterminate">("indeterminate");

  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-02" checked={checked} onCheckedChange={setChecked} />
      <Label htmlFor="checkbox-02">Indeterminate checkbox</Label>
    </div>
  );
}
