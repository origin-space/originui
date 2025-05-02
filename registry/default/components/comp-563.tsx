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
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col gap-4 w-full">
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

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Cropper with crop data ∙{" "}
        <a
          href="https://github.com/origin-space/image-cropper"
          className="hover:text-foreground underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
      </p>      
    </div>
  )
}
