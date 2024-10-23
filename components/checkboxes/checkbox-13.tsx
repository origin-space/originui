"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";


export default function Checkbox13() {
  const [checked, setChecked] = useState<boolean | "indeterminate">(false);

  return (
    <div>
      <div className="items-top flex space-x-2">
        <Checkbox 
          id="checkbox-13" 
          checked={checked}
          onCheckedChange={setChecked}
          aria-controls="checkbox-input-13"    
        />
        <div className="grow grid gap-3">
          <div className="grid gap-1">
            <Label htmlFor="checkbox-13">
              Checkbox with expansion
            </Label>
            <p id="checkbox-13-description" className="text-xs text-muted-foreground">
              You can use this checkbox with a label and a description.
            </p>
          </div>
          {/* Expandable field */}
          <div
            role="region"
            id="checkbox-input-13"
            aria-labelledby="checkbox-13" 
            className="grid overflow-hidden transition-all -m-2 ease-in-out data-[state=expanded]:grid-rows-[1fr] data-[state=expanded]:opacity-100 data-[state=collapsed]:grid-rows-[0fr] data-[state=collapsed]:opacity-0"
            data-state={checked ? "expanded" : "collapsed"}
          >
            <div className="overflow-hidden">   
              <div className="p-2">
                <Input
                  type="text"
                  id="additional-info"
                  placeholder="Enter details"
                  aria-label="Additional Information"
                  disabled={!checked}
                />          
              </div>
            </div>    
          </div>
        </div>    
      </div>   
    </div>
  )
}
