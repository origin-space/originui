'use client';
import { Label } from "@/components/ui/label";
import { ColorPicker } from "@/components/color-picker";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useState } from "react";

export default function ColorInput01() {
    const [color, setColor] = useState("#FF0000");

    return (
        <div className="flex flex-col space-y-2">
            <Label htmlFor="color-input-01">Color input</Label>
            <Popover>
                <PopoverTrigger
                    id="color-input-01"
                    className="w-10 h-8 border rounded-md focus:border-ring focus:ring-[3px] focus:ring-ring/20 cursor-pointer"
                    style={{ backgroundColor: color }}
                >
                </PopoverTrigger>
                <PopoverContent onOpenAutoFocus={(e) => e.preventDefault()} align="start" className="p-0 m-0 border-none rounded-2xl">
                    <ColorPicker
                        onColorChange={(color) => setColor(color)}
                        isColorFormat={true}
                        isOpacity={true}
                        isEyeDropper={true}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
