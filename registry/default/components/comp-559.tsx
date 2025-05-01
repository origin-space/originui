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
        className="h-80 bg-foreground"
        image="https://images.unsplash.com/photo-1589018671571-e3cbff39d7ad"
      >
        <CropperDescription />
        <CropperImage />
        <CropperCropArea className="shadow-[0_0_0_9999px_rgba(255,255,255,0.3)]" />
      </Cropper>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Basic cropper ∙{" "}
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
