"use client"

import { useState } from "react"
import {
  Cropper,
  CropperCropArea,
  CropperDescription,
  CropperImage,
} from "@/registry/default/ui/cropper"
import { Slider } from "@/registry/default/ui/slider"

export default function Component() {
  const [zoom, setZoom] = useState(1)

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col gap-4 w-full">
        <Cropper
          className="h-80"
          image="https://images.unsplash.com/photo-1532517308734-0565178471d2"
          zoom={zoom}
          onZoomChange={setZoom}
        >
          <CropperDescription />
          <CropperImage />
          <CropperCropArea />
        </Cropper>
        <div className="flex items-center gap-1 max-w-80 w-full mx-auto">
          <Slider
            defaultValue={[1]}
            value={[zoom]}
            min={1}
            max={3}
            step={0.1}
            onValueChange={(value) => setZoom(value[0])}
            aria-label="Zoom slider"
          />
          <output className="text-sm font-medium tabular-nums block shrink-0 text-right w-10">{parseFloat(zoom.toFixed(1))}x</output>
        </div>
      </div>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Cropper with zoom slider ∙{" "}
        <a
          href="https://github.com/origin-space/image-cropper"
          className="hover:text-foreground underline"
          target="_blank"
        >
          API
        </a>
      </p>      
    </div>
  )
}
