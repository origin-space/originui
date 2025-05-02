import {
  Cropper,
  CropperCropArea,
  CropperDescription,
  CropperImage,
} from "@/registry/default/ui/cropper"

export default function Component() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Cropper
        className="size-80 aspect-square"
        cropPadding={0}
        image="https://images.unsplash.com/photo-1589018671571-e3cbff39d7ad"
      >
        <CropperDescription />
        <CropperImage />
        <CropperCropArea className="border-4 border-blue-500" />
      </Cropper>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Cropper with full size crop area ∙{" "}
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
