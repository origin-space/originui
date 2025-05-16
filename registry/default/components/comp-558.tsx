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
        className="h-80 bg-black"
        image="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/cropper-04_jflxhw.jpg"
      >
        <CropperDescription />
        <CropperImage />
        <CropperCropArea className="shadow-[0_0_0_9999px_rgba(255,255,255,0.5)]" />
      </Cropper>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Cropper with custom mask overlay ∙{" "}
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
