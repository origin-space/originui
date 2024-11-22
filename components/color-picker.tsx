"use client"

import React, { useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface ColorPickerPropsBase {
  onColorChange?: (color: string) => void;
  defaultColor?: string;
  isColorFormat?: boolean;
  isEyeDropper?: boolean;
  isOpacity?: boolean;
}

export interface ColorPickerPropsWithOpacity extends ColorPickerPropsBase {
  colorFormat: 'hexa' | 'rgba' | 'hsla' | 'hsva';
}

export interface ColorPickerPropsWithoutOpacity extends ColorPickerPropsBase {
  colorFormat: 'hex' | 'rgb' | 'hsl' | 'hsv';
}

export type ColorFormats = 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsv' | 'hsva';

export type ColorPickerProps = ColorPickerPropsWithOpacity | ColorPickerPropsWithoutOpacity;

export function ColorPicker({
  onColorChange,
  defaultColor,
  colorFormat = 'hex',
  isColorFormat = true,
  isEyeDropper = true,
  isOpacity = true
}: ColorPickerProps) {
  defaultColor = defaultColor ?? (isOpacity ? '#FF0000FF' : '#FF0000');
  const [hue, setHue] = React.useState(0)
  const [saturation, setSaturation] = React.useState(1)
  const [value, setValue] = React.useState(1)
  const [alpha, setAlpha] = React.useState(1)
  const [colorCode, setColorCode] = React.useState(defaultColor)
  const [inputFormat, setInputFormat] = React.useState<ColorFormats>(isOpacity ? 'hexa' : 'hex')

  // Effect to update HSV values when default color changes
  useEffect(() => {
    if (colorCode.startsWith('#')) {
      const rgb = hexToRGBA(colorCode)
      const hsv = RGBtoHSV(rgb.r, rgb.g, rgb.b)
      setHue(hsv.h)
      setSaturation(hsv.s)
      setValue(hsv.v)
      setAlpha(rgb.a)
    }
  }, [colorCode])

  // Eyedropper functionality
  const handleEyeDropper = async () => {
    if ('EyeDropper' in window) {
      try {
        const eyeDropper = new (window as any).EyeDropper()
        const result = await eyeDropper.open()
        const color = result.sRGBHex
        const hsv = RGBtoHSV(parseInt(color.slice(1, 3), 16), parseInt(color.slice(3, 5), 16), parseInt(color.slice(5, 7), 16))
        setHue(hsv.h)
        setSaturation(hsv.s)
        setValue(hsv.v)
        setColorCode(color)
        if (onColorChange) onColorChange(formatOutputColor())
      } catch (error) {
        console.error('EyeDropper error:', error)
      }
    }
  }

  // Convert HSV to RGB
  const hsvToRgb = (h: number, s: number, v: number) => {
    let r = 0, g = 0, b = 0
    const i = Math.floor(h * 6)
    const f = h * 6 - i
    const p = v * (1 - s)
    const q = v * (1 - f * s)
    const t = v * (1 - (1 - f) * s)

    switch (i % 6) {
      case 0: r = v, g = t, b = p; break
      case 1: r = q, g = v, b = p; break
      case 2: r = p, g = v, b = t; break
      case 3: r = p, g = q, b = v; break
      case 4: r = t, g = p, b = v; break
      case 5: r = v, g = p, b = q; break
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    }
  }

  // Convert RGB to HSV
  const RGBtoHSV = (r: number, g: number, b: number) => {
    r /= 255
    g /= 255
    b /= 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const d = max - min
    let h = 0
    const s = max === 0 ? 0 : d / max
    const v = max

    if (max !== min) {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h /= 6
    }

    return { h, s, v }
  }

  // Convert RGB to HEX
  const RGBtoHex = (r: number, g: number, b: number, a: number = 1) => {
    const alpha = Math.round(a * 255)
    const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    return isOpacity && a !== 1 ? `#${hex}${alpha.toString(16).padStart(2, '0')}` : `#${hex}`
  }

  // Convert HEX to RGB
  const hexToRGBA = (hex: string) => {
    hex = hex.replace(/^#/, '')
    if (hex.length === 3) {
      hex = hex.split('').map(char => char + char).join('')
    }
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    const a = hex.length === 8 ? parseInt(hex.substring(6, 8), 16) / 255 : 1
    return { r, g, b, a }
  }

  // Format color for input field
  const formatInputColor = (): string => {
    const rgb = hsvToRgb(hue, saturation, value)
    const h = Math.round(hue * 360)
    const s = Math.round(saturation * 100)
    const v = Math.round(value * 100)
    const l = Math.round((2 - saturation) * value / 2 * 100)
    const a = alpha.toFixed(2)

    switch (inputFormat) {
      case 'hex':
        return RGBtoHex(rgb.r, rgb.g, rgb.b, alpha)
      case 'hexa':
        return RGBtoHex(rgb.r, rgb.g, rgb.b, alpha)
      case 'rgb':
        return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
      case 'rgba':
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}${isOpacity ? `, ${a}` : ''})`
      case 'hsl':
        return `hsl(${h}, ${s}%, ${l}%)`
      case 'hsla':
        return `hsla(${h}, ${s}%, ${l}%${isOpacity ? `, ${a}` : ''})`
      case 'hsv':
        return `hsv(${h}, ${s}%, ${v}%)`
      case 'hsva':
        return `hsva(${h}, ${s}%, ${v}%${isOpacity ? `, ${a}` : ''})`
      default:
        return RGBtoHex(rgb.r, rgb.g, rgb.b, alpha)
    }
  }

  // Format color for output (based on colorFormat prop)
  const formatOutputColor = (): string => {
    const rgb = hsvToRgb(hue, saturation, value)
    const h = Math.round(hue * 360)
    const s = Math.round(saturation * 100)
    const v = Math.round(value * 100)
    const l = Math.round((2 - saturation) * value / 2 * 100)
    const a = alpha.toFixed(2)

    switch (colorFormat) {
      case 'hex':
        return RGBtoHex(rgb.r, rgb.g, rgb.b, isOpacity ? alpha : undefined)
      case 'rgb':
        return `rgb${isOpacity ? 'a' : ''}(${rgb.r}, ${rgb.g}, ${rgb.b}${isOpacity ? `, ${a}` : ''})`
      case 'hsl':
        return `hsl${isOpacity ? 'a' : ''}(${h}, ${s}%, ${l}%${isOpacity ? `, ${a}` : ''})`
      case 'hsv':
        return `hsv${isOpacity ? 'a' : ''}(${h}, ${s}%, ${v}%${isOpacity ? `, ${a}` : ''})`
      default:
        return RGBtoHex(rgb.r, rgb.g, rgb.b, alpha)
    }
  }

  // Handle color input change
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value
    if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
      setColorCode(color)
      if (onColorChange) onColorChange(formatOutputColor())
    }
  }

  // Update color values and trigger onChange
  const updateColor = () => {
    if (onColorChange) {
      onColorChange(formatOutputColor())
    }
  }

  useEffect(() => {
    updateColor()
  }, [hue, saturation, value, alpha])

  const handleMouseOrTouchEvent = (e: React.MouseEvent | React.TouchEvent) => {
    // Prevent default touch behavior to avoid scrolling
    e.preventDefault();
    e.stopPropagation();

    // Ensure we have a valid target
    const target = e.currentTarget as HTMLDivElement | null;
    if (!target) return;

    // Ensure we have valid coordinates
    const isTouchEvent = 'touches' in e;
    const clientX = isTouchEvent ? e.touches[0]?.clientX : (e as React.MouseEvent).clientX;
    const clientY = isTouchEvent ? e.touches[0]?.clientY : (e as React.MouseEvent).clientY;

    if (clientX === undefined || clientY === undefined) return;

    const moveHandler = (moveEvent: MouseEvent | TouchEvent) => {
      moveEvent.preventDefault();
      moveEvent.stopPropagation();

      // Ensure we have valid move coordinates
      const moveClientX = 'touches' in moveEvent
        ? moveEvent.touches[0]?.clientX
        : moveEvent.clientX;
      const moveClientY = 'touches' in moveEvent
        ? moveEvent.touches[0]?.clientY
        : moveEvent.clientY;

      if (moveClientX === undefined || moveClientY === undefined) return;

      const boundingRect = target.getBoundingClientRect();
      if (!boundingRect) return;

      const x = moveClientX - boundingRect.left;
      const y = moveClientY - boundingRect.top;

      // Calculate saturation and value with full range and smooth clamping
      setSaturation(Math.max(0, Math.min(1, x / boundingRect.width)));
      setValue(Math.max(0, Math.min(1, 1 - y / boundingRect.height)));
    };

    const endHandler = () => {
      // Remove event listeners
      if (isTouchEvent) {
        document.removeEventListener('touchmove', moveHandler as EventListener);
        document.removeEventListener('touchend', endHandler as EventListener);
      } else {
        document.removeEventListener('mousemove', moveHandler as EventListener);
        document.removeEventListener('mouseup', endHandler as EventListener);
      }
    };

    // Add appropriate event listeners based on event type
    if (isTouchEvent) {
      document.addEventListener('touchmove', moveHandler as EventListener, { passive: false });
      document.addEventListener('touchend', endHandler as EventListener, { passive: false });
    } else {
      document.addEventListener('mousemove', moveHandler as EventListener);
      document.addEventListener('mouseup', endHandler as EventListener);
    }

    // Initial position update
    const boundingRect = target.getBoundingClientRect();
    if (!boundingRect) return;

    const x = clientX - boundingRect.left;
    const y = clientY - boundingRect.top;

    setSaturation(Math.max(0, Math.min(1, x / boundingRect.width)));
    setValue(Math.max(0, Math.min(1, 1 - y / boundingRect.height)));
  };

  return (
    <div className="w-64 bg-background border rounded-2xl shadow-2xl mt-1">
      <div className="flex flex-col">
        <div className="flex m-2 gap-2">
          <Input
            value={formatInputColor()}
            onChange={handleColorChange}
            className={`h-8 flex-1 text-xs px-2 py-1.5 ${inputFormat ==  (isOpacity ? 'hexa' : 'hex') ? 'uppercase' : ''}`}
            placeholder="#FF0000"
          />
          {isColorFormat && (
            <Select
              value={inputFormat}
              onValueChange={(value) => setInputFormat(value as ColorFormats)}
            >
              <SelectTrigger className="w-[72px] h-8 text-xs px-2">
                <SelectValue placeholder="Format" />
              </SelectTrigger>
              <SelectContent
                align="end"
              >
                <SelectItem className="text-xs" value={isOpacity ? 'hexa' : 'hex'}>Hex</SelectItem>
                <SelectItem className="text-xs" value={isOpacity ? 'rgba' : 'rgb'}>{isOpacity ? 'RGBa' : 'RGB'}</SelectItem>
                <SelectItem className="text-xs" value={isOpacity ? 'hsla' : 'hsl'}>{isOpacity ? 'HSLa' : 'HSL'}</SelectItem>
                <SelectItem className="text-xs" value={isOpacity ? 'hsva' : 'hsv'}>{isOpacity ? 'HSVa' : 'HSV'}</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>

        <div
          className="relative w-full h-64 border-y cursor-crosshair active:cursor-grabbing"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0), black), 
                        linear-gradient(to right, white, hsl(${hue * 360}, 100%, 50%))`
          }}
          onMouseDown={handleMouseOrTouchEvent}
          onMouseMove={(e) => {
            if (e.buttons === 1) handleMouseOrTouchEvent(e);
          }}
          onTouchStart={handleMouseOrTouchEvent}
          onTouchMove={handleMouseOrTouchEvent}
        >
          <div
            className="absolute w-5 h-5 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 -translate-y-1/2 cursor-grab focus:cursor-grabbing active:cursor-grabbing"
            style={{
              left: `${saturation * 100}%`,
              top: `${(1 - value) * 100}%`,
              backgroundColor: (() => {
                const rgb = hsvToRgb(hue, saturation, value);
                return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
              })()
            }}
          />
        </div>

        <div className="w-full flex justify-between items-center p-2 gap-2">
          {isEyeDropper && (
            <Button
              onClick={handleEyeDropper}
              variant="ghost"
              size="icon"
              className="flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14.7063 13.6953C14.0267 14.3749 14.0267 15.4768 14.7063 16.1564L14.8826 16.3328L11.0194 20.196C10.3667 20.8487 10 21.734 10 22.6571V25.1311C10 25.6116 10.3896 26.0013 10.8701 26.0013H13.3441C14.2672 26.0013 15.1525 25.6345 15.8053 24.9818L19.6685 21.1186L19.8448 21.2949C20.5244 21.9745 21.6263 21.9745 22.306 21.2949L23.4945 20.1063C24.1739 19.427 24.1742 18.3256 23.4953 17.646L23.3181 17.4688L25.0101 15.777C26.3316 14.4554 26.3316 12.3127 25.0101 10.9911C23.6885 9.66958 21.5458 9.66958 20.2242 10.9911L18.5323 12.683L18.3561 12.5067C17.6764 11.8271 16.5745 11.8271 15.8949 12.5067L14.7063 13.6953ZM18.4379 19.888L16.1132 17.5633L12.25 21.4265C11.9236 21.7529 11.7403 22.1956 11.7403 22.6571V24.261H13.3441C13.8057 24.261 14.2483 24.0775 14.5747 23.7512L18.4379 19.888Z"
                  className="fill-primary" />
                <path
                  d="M18.4379 19.888L16.1132 17.5633L12.25 21.4265C11.9236 21.7529 11.7403 22.1956 11.7403 22.6571V24.261H13.3441C13.8057 24.261 14.2483 24.0775 14.5747 23.7512L18.4379 19.888Z"
                  className="fill-background" />
              </svg>
            </Button>
          )}

          <div className="w-full flex flex-col gap-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={hue}
              onChange={(e) => setHue(parseFloat(e.target.value))}
              className="hueSlider w-full h-5 rounded-full appearance-none"
              style={{
                background: `linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red)`,
                '--thumb-color': `hsl(${hue * 360}, 100%, 50%)`
              } as React.CSSProperties}
            />
            {isOpacity && (
              <div className="relative">
                <div className="w-full h-5 border rounded-full opacity-25 z-0"
                  style={{
                    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15'%3E%3Crect width='15' height='15' fill='%23D6D6D6' fill-opacity='0.4' /%3E%3Crect width='7.5' height='7.5' fill='white'/%3E%3Crect x='7.5' y='7.5' width='7.5' height='7.5' fill='white'/%3E%3C/svg%3E")`
                  }}
                >
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={alpha}
                  onChange={(e) => setAlpha(parseFloat(e.target.value))}
                  className="absolute opacitySlider w-full h-5 top-0 left-0 rounded-full z-20 appearance-none"
                  style={{
                    background: `linear-gradient(to right, transparent, hsl(${hue * 360}, 100%, 50%))`,
                    '--thumb': `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='10' fill='white' /%3E%3Ccircle cx='10' cy='10' r='6' stroke-width='1' fill='hsl(${hue * 360}, 100%, 50%, ${alpha.toFixed(2)})' /%3E%3C/svg%3E")`
                  } as React.CSSProperties}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div >
  )
}

export default ColorPicker