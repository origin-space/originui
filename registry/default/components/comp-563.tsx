"use client"

import React from "react"
import {
  Cropper,
  CropperCropArea,
  CropperDescription,
  CropperImage,
} from "@/registry/default/ui/cropper"

type Area = { x: number; y: number; width: number; height: number }

export default function Component() {
  const [cropData, setCropData] = React.useState<Area | null>(null)

  return (
    <div className="flex flex-col gap-4">
      <Cropper
        className="h-80"
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        aspectRatio={1}
        onCropChange={setCropData}
      >
        <CropperDescription />
        <CropperImage />
        <CropperCropArea />
      </Cropper>

      {cropData && (
        <pre className="overflow-auto rounded-md bg-muted border py-3 px-4 text-xs font-mono text-foreground/80">
          <code>{JSON.stringify(cropData, null, 2)}</code>
        </pre>
      )}
    </div>
  )
}
