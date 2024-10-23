"use client";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function Checkbox02() {
  const [checked, setChecked] = useState<boolean | "indeterminate">("indeterminate");

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="checkbox-02" checked={checked} onCheckedChange={setChecked} />
      <Label htmlFor="checkbox-02">
        Indeterminate checkbox
      </Label>
    </div>    
  )
}
