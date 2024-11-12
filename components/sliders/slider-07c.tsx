"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Slider07c() {
  const min_price = 5;
  const max_price = 1240;
  const [value, setValue] = useState([min_price, max_price]);

  const formatPrice = (price: number) => {
    return price === max_price
      ? `$${price.toLocaleString()}+`
      : `$${price.toLocaleString()}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Label>Price Range</Label>
        <span className="text-sm text-muted-foreground tabular-nums">
          {formatPrice(value[0])} - {formatPrice(value[1])}
        </span>
      </div>
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
