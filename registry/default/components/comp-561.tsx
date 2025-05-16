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
      <div className="flex w-full flex-col gap-4">
        <Cropper
          className="h-80"
          image="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/cropper-07_scsejv.jpg"
          zoom={zoom}
          onZoomChange={setZoom}
        >
          <CropperDescription />
          <CropperImage />
          <CropperCropArea />
        </Cropper>
        <div className="mx-auto flex w-full max-w-80 items-center gap-1">
          <Slider
            defaultValue={[1]}
            value={[zoom]}
            min={1}
            max={3}
            step={0.1}
            onValueChange={(value) => setZoom(value[0])}
            aria-label="Zoom slider"
          />
          <output className="block w-10 shrink-0 text-right text-sm font-medium tabular-nums">
            {parseFloat(zoom.toFixed(1))}x
          </output>
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
