"use client"

import { CircleUserRoundIcon, XIcon } from "lucide-react"
import { useState, useEffect, useCallback } from 'react'
import { useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { Button } from "@/registry/default/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/registry/default/ui/dialog"
import { Cropper } from "@/registry/default/ui/cropper"

// Define type for pixel crop area
type Area = { x: number; y: number; width: number; height: number };

// Helper function to create a cropped image blob
const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // Needed for canvas Tainted check
    image.src = url;
  });

async function getCroppedImg(
  imageSrc: string,
  pixelCrop: Area,
  outputWidth: number = pixelCrop.width, // Optional: specify output size
  outputHeight: number = pixelCrop.height
): Promise<Blob | null> {
  try {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return null;
    }

    // Set canvas size to desired output size
    canvas.width = outputWidth;
    canvas.height = outputHeight;

    // Draw the cropped image onto the canvas
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      outputWidth, // Draw onto the output size
      outputHeight
    );

    // Convert canvas to blob
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/jpeg'); // Specify format and quality if needed
    });
  } catch (error) {
      console.error("Error in getCroppedImg:", error);
      return null;
  }
}

export default function Component() {
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
  })

  const [crop, setCrop] = useState({ x: 0, y: 0 })

  const previewUrl = files[0]?.preview || null
  const fileId = files[0]?.id  

  const [finalImageUrl, setFinalImageUrl] = useState<string | null>(null);

  // State to store the desired crop area in pixels
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      if (fileId) {
        removeFile(fileId);
        setCroppedAreaPixels(null);
      }
    }
  };

  // Callback for Cropper to provide crop data - Wrap with useCallback
  const handleCropChange = useCallback((pixels: Area | null) => {
    console.log("Crop Change (Pixels):", pixels);
    setCroppedAreaPixels(pixels);
  }, []);

  const handleApply = async () => {
    // Check if we have the necessary data
    if (!previewUrl || !fileId || !croppedAreaPixels) {
        console.error("Missing data for apply:", { previewUrl, fileId, croppedAreaPixels });
        // Remove file if apply is clicked without crop data?
        if (fileId) {
            removeFile(fileId);
            setCroppedAreaPixels(null);
        }
        return;
    }

    try {
      // 1. Get the cropped image blob using the helper
      const croppedBlob = await getCroppedImg(previewUrl, croppedAreaPixels);

      if (!croppedBlob) {
          throw new Error("Failed to generate cropped image blob.");
      }

      // 2. Create a NEW object URL from the cropped blob
      const newFinalUrl = URL.createObjectURL(croppedBlob);

      // 3. Revoke the OLD finalImageUrl if it exists
      if (finalImageUrl) {
        URL.revokeObjectURL(finalImageUrl);
      }

      // 4. Set the final avatar state to the NEW URL
      setFinalImageUrl(newFinalUrl);

      // 5. Remove the original file (revokes original previewUrl)
      removeFile(fileId);
      setCroppedAreaPixels(null);

    } catch (error) {
      console.error("Error during apply:", error);
      // Still remove the original file even if cropping fails
      if (fileId) {
          removeFile(fileId);
          setCroppedAreaPixels(null);
      }
    }
  };

  const handleRemoveFinalImage = () => {
    if (finalImageUrl) {
      URL.revokeObjectURL(finalImageUrl);
    }
    setFinalImageUrl(null);
  };

  useEffect(() => {
    const currentFinalUrl = finalImageUrl;
    // Cleanup function
    return () => {
      if (currentFinalUrl && currentFinalUrl.startsWith('blob:')) {
        URL.revokeObjectURL(currentFinalUrl);
      }
    };
  }, [finalImageUrl]);

  return (
    <div className="flex flex-col items-center gap-2">  
      <div className="relative inline-flex">  
        {/* Drop area - uses finalImageUrl */}
        <div
          className="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-dashed transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]"
          role="button"
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          aria-label={finalImageUrl ? "Change image" : "Upload image"}
        >
          {finalImageUrl ? (
            <img
              className="size-full object-cover"
              src={finalImageUrl}
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
        {/* Remove button - depends on finalImageUrl */}
        {finalImageUrl && (
          <Button
            onClick={handleRemoveFinalImage}
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

                <Button onClick={handleApply} disabled={!previewUrl}>
                  Apply
                </Button>      

      {previewUrl && (
        <Cropper
          image={previewUrl}
          onCropChange={handleCropChange}
        />
      )}

      {/* Cropper Dialog - Use previewUrl for open prop */}
      {/* open={previewUrl !== null} onOpenChange={handleOpenChange} */}
      <Dialog>
        <DialogContent className="sm:max-w-[600px]">
          <DialogTitle>Crop image</DialogTitle>
          <div className="min-h-0 flex-1 flex flex-col">
            <div className="min-h-0 h-120 flex-1 flex items-center justify-center">
              {previewUrl && (
                <Cropper
                  image={previewUrl}
                  onCropChange={handleCropChange}
                />
              )}
            </div>
            <div className="space-y-4">
              <div className="px-4">
                {/* <Slider
                  value={[zoom]}
                  min={1}
                  max={3}
                  step={0.1}
                  onValueChange={(value) => setZoom(value[0])}
                /> */}
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => handleOpenChange(false)}>
                  Cancel
                </Button>
                <Button onClick={handleApply} disabled={!previewUrl}>
                  Apply crop
                </Button>
              </div>
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
