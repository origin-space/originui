"use client"

import { Cropper as CropperPrimitive } from "@origin-space/image-cropper"

function Cropper({
  ...props
}: React.ComponentProps<typeof CropperPrimitive.Root>) {
  return (
    <CropperPrimitive.Root
      data-slot="cropper"
      className="relative flex h-96 w-full cursor-move touch-none items-center justify-center overflow-hidden focus:outline-none sm:h-120"
      {...props}
    />
  )
}

function CropperDescription({
  ...props
}: React.ComponentProps<typeof CropperPrimitive.Description>) {
  return (
    <CropperPrimitive.Description
      data-slot="cropper-description"
      className="sr-only"
      {...props}
    />
  )
}

function CropperImage({
  ...props
}: React.ComponentProps<typeof CropperPrimitive.Image>) {
  return (
    <CropperPrimitive.Image
      data-slot="cropper-image"
      className="pointer-events-none h-full w-full object-cover"
      {...props}
    />
  )
}

function CropperCropArea({
  ...props
}: React.ComponentProps<typeof CropperPrimitive.CropArea>) {
  return (
    <CropperPrimitive.CropArea
      data-slot="cropper-crop-area"
      className="pointer-events-none absolute border-3 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.7)] in-[[data-slot=cropper-container]:focus-visible]:ring-[3px] in-[[data-slot=cropper-container]:focus-visible]:ring-white/50"
      {...props}
    />
  )
}

export { Cropper, CropperDescription, CropperImage, CropperCropArea }
