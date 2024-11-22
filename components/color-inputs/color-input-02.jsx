'use client';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ColorPicker } from "@/components/color-picker";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useState } from "react";

export default function ColorInput02() {
    const [color, setColor] = useState("#FF0000");
    const [inputValue, setInputValue] = useState("#FF0000");
    const [invalidCode, setInvalidCode] = useState(false);

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);

        const isValid = /^#[0-9A-F]{6}$/i.test(newValue);
        if (isValid) {
            setInvalidCode(false);
            setColor(newValue);
        } else {
            setInvalidCode(true);
        }
    };

    return (
        <div className="flex flex-col space-y-2">
            <Label htmlFor="color-input-02">Color input + color code</Label>
            <Popover>
                <div className="flex justify-center items-center" id="color-input-02">
                    <PopoverTrigger asChild>
                        <div
                            className="flex-shrink-0 w-10 h-9 border border-r-none rounded-l-lg focus:border-ring focus:ring-[3px] focus:ring-ring/20 cursor-pointer"
                            style={{ backgroundColor: color }}
                        ></div>
                    </PopoverTrigger>
                    <Input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="rounded-l-none uppercase" 
                    />
                </div>
                <PopoverContent onOpenAutoFocus={(e) => e.preventDefault()} align="start" className="p-0 m-0 border-none">
                    <ColorPicker
                        onColorChange={(newColor) => {
                            setColor(newColor);
                            setInputValue(newColor);
                            setInvalidCode(false);
                        }}
                        defaultColor={color}
                    />
                </PopoverContent>
            </Popover>
            {invalidCode && (
                <p className="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
                    Color code is invalid
                </p>
            )}
        </div>
    );
}
