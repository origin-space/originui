"use client"

import { CircleUserRoundIcon, XIcon } from "lucide-react"
import { useState, useCallback, useEffect } from 'react'
import Cropper from '@/registry/default/ui/cropper'
import { useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { Button } from "@/registry/default/ui/button"
import { Slider } from "@/registry/default/ui/slider"
import { Dialog, DialogContent, DialogTitle } from "@/registry/default/ui/dialog"

const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.src = url
  })

async function getCroppedImg(
  imageSrc: string,
  pixelCrop: { x: number; y: number; width: number; height: number }
): Promise<Blob> {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('No 2d context')
  }

  // Set canvas size to match the desired crop size
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  // Draw the cropped image onto the canvas
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  )

  // Convert canvas to blob
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) throw new Error('Canvas is empty')
      resolve(blob)
    }, 'image/jpeg')
  })
}

export default function Component() {
  const maxSizeMB = 5
  const maxSize = maxSizeMB * 1024 * 1024 // 5MB default

  const [showCropper, setShowCropper] = useState(false)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{ x: number; y: number; width: number; height: number } | null>(null)

  // State for the final displayed avatar URL
  const [finalAvatarUrl, setFinalAvatarUrl] = useState<string | null>(null);

  const [
    { files, isDragging },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "image/*",
    maxSize,
    multiple: false,
    onFilesAdded: () => {
      // Reset crop/zoom/pixels when a new file triggers the dialog
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setCroppedAreaPixels(null);

      // Open cropper when files are added through the input
      setShowCropper(true)
    },
  })

  // Use the hook's preview URL only for the cropper
  const previewUrlForCropper = files[0]?.preview || null

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const handleCropConfirm = async () => {
    try {
      if (!previewUrlForCropper || !croppedAreaPixels || !files[0]?.id) {
          console.error("Missing data for confirmation: preview, pixels, or file ID")
          return;
      }

      // 1. Get the cropped blob
      const croppedBlob = await getCroppedImg(previewUrlForCropper, croppedAreaPixels)

      // 2. Create a *new* object URL for the final display
      const finalUrl = URL.createObjectURL(croppedBlob)

      // 3. Revoke previous final URL if it exists
      if (finalAvatarUrl) {
        URL.revokeObjectURL(finalAvatarUrl);
      }

      // 4. Set the final URL state for the main avatar display
      setFinalAvatarUrl(finalUrl);

      // 5. Remove the original uncropped file from the hook's state
      //    (The hook should handle revoking its previewUrl)
      removeFile(files[0].id);

      // 6. Close the dialog
      setShowCropper(false)

      // NOTE: We are NOT adding the cropped file back to the hook's state here
      // This component only cares about displaying the finalAvatarUrl

    } catch (e) {
      console.error("Error during crop confirmation:", e)
      // Optionally clear states or show error message
       setShowCropper(false) // Close dialog even on error
    }
  }

  // Handles closing the dialog via backdrop click or cancel button
  const handleCropCancel = () => {
      setShowCropper(false);
      // Remove the temporary file from the hook if it exists
      if (files.length > 0 && files[0]?.id) {
        removeFile(files[0].id);
      }
  };

  // Handles removing the final displayed avatar
  const handleRemoveImage = () => {
    if (finalAvatarUrl) {
      URL.revokeObjectURL(finalAvatarUrl); // Clean up object URL
    }
    setFinalAvatarUrl(null);
    // Ensure hook state is clear too
    if (files.length > 0 && files[0]?.id) {
      removeFile(files[0].id);
    }
  };

  // Effect to cleanup the finalAvatarUrl object URL on unmount or change
  useEffect(() => {
      const currentUrl = finalAvatarUrl;
      // Return cleanup function
      return () => {
        if (currentUrl) {
          URL.revokeObjectURL(currentUrl);
          console.log("Revoked finalAvatarUrl:", currentUrl); // For debugging
        }
      };
  }, [finalAvatarUrl]); // Dependency array ensures cleanup runs when URL changes

  return (
    <div className="flex flex-col items-center gap-2">   
      <div className="relative inline-flex">  
        {/* Drop area - uses finalAvatarUrl */}
        <div
          className="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-dashed transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]"
          role="button"
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          aria-label={finalAvatarUrl ? "Change image" : "Upload image"}
        >
          {finalAvatarUrl ? (
            <img
              className="size-full object-cover"
              src={finalAvatarUrl}
              alt="User avatar"
              width={64}
              height={64}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRoundIcon className="size-4 opacity-60" />
            </div>
          )}
        </div>
        {/* Remove button - depends on finalAvatarUrl */}
        {finalAvatarUrl && (
          <Button
            onClick={handleRemoveImage}
            size="icon"
            className="border-background focus-visible:border-background absolute -top-1 -right-1 size-6 rounded-full border-2 shadow-none"
            aria-label="Remove image"
          >
            <XIcon className="size-3.5" />
          </Button>
        )}
        <input
          {...getInputProps()}
          className="sr-only"
          aria-label="Upload image file"
        />
      </div>

      {/* Cropper Dialog - uses previewUrlForCropper */}
      <Dialog open={showCropper} onOpenChange={(open) => !open && handleCropCancel()}>
        <DialogContent className="sm:max-w-[600px] animate-none! [&_img]:max-w-none">
          <DialogTitle>Crop image</DialogTitle>
          <div className="relative h-120 w-full">
            <Cropper
              image={previewUrlForCropper || ''}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropPadding={40}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div className="mt-4 space-y-4">
            <div className="px-4">
              <Slider
                value={[zoom]}
                min={1}
                max={3}
                step={0.1}
                onValueChange={(value) => setZoom(value[0])}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={handleCropCancel}>
                Cancel
              </Button>
              <Button onClick={handleCropConfirm} disabled={!previewUrlForCropper || !croppedAreaPixels}>
                 Apply
               </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Avatar uploader with droppable area ∙{" "}
        <a
          href="https://github.com/origin-space/originui/tree/main/docs/use-file-upload.md"
          className="hover:text-foreground underline"
        >
          API
        </a>
      </p>
    </div>
  )
}
