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
        className="h-80"
        image="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/cropper-06_dduwky.jpg"
      >
        <CropperDescription />
        <CropperImage />
        <CropperCropArea className="rounded-full" />
      </Cropper>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Cropper with full-rounded mask ∙{" "}
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
