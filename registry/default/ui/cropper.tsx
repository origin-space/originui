export function Cropper({ image }: { image: string }) {
  return (
      <img src={image} alt="Crop image" className="max-h-full w-auto" />
  )
}