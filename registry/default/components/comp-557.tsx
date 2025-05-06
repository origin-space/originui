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
        image="https://res.cloudinary.com/dlzlfasou/image/upload/v1746526165/cropper-03_uym8r0.jpg"
      >
        <CropperDescription />
        <CropperImage />
        <CropperCropArea className="border-blue-500" />
      </Cropper>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Cropper with custom crop area color ∙{" "}
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
