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
      <div className="flex w-full flex-col gap-4">
        <Cropper
          className="h-80"
          cropPadding={20}
          image="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/cropper-09_qskkln.jpg"
          onCropChange={setCropData}
        >
          <CropperDescription />
          <CropperImage />
          <CropperCropArea />
        </Cropper>

        {cropData && (
          <pre className="bg-muted text-foreground/80 overflow-auto rounded-md border px-4 py-3 font-mono text-xs">
            <code>{JSON.stringify(cropData, null, 2)}</code>
          </pre>
        )}
      </div>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Cropper with crop data output ∙{" "}
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
