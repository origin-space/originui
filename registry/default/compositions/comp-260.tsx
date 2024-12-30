"use client";

import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import { useState } from "react";

export default function Component() {
  const min_price = 5;
  const max_price = 1240;
  const [value, setValue] = useState([min_price, max_price]);

  const formatPrice = (price: number) => {
    return price === max_price ? `$${price.toLocaleString()}+` : `$${price.toLocaleString()}`;
  };

  return (
    <div className="space-y-3">
      <Label className="tabular-nums">
        From {formatPrice(value[0])} to {formatPrice(value[1])}
      </Label>
      <div className="flex items-center gap-4">
        <Slider
          value={value}
          onValueChange={setValue}
          min={min_price}
          max={max_price}
          aria-label="Price range slider"
        />
        <Button variant="outline">Go</Button>
      </div>
    </div>
  );
}
