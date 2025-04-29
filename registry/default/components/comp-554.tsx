"use client"

import { CircleUserRoundIcon, XIcon } from "lucide-react"
import { useState, useEffect } from 'react'
import { useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { Button } from "@/registry/default/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/registry/default/ui/dialog"
import { Cropper } from "@/registry/default/ui/cropper"
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

  const previewUrl = files[0]?.preview || null
  const fileId = files[0]?.id  

  const [finalImageUrl, setFinalImageUrl] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      if (fileId) {
        removeFile(fileId);
      }
    }
  };

  const handleApply = async () => {
    if (!previewUrl || !fileId) return;

    try {
      // 1. Fetch the blob data from the preview URL
      const response = await fetch(previewUrl);
      const blob = await response.blob();

      // 2. Create a NEW object URL from the fetched blob
      const newFinalUrl = URL.createObjectURL(blob);

      // 3. Revoke the OLD finalImageUrl if it exists
      if (finalImageUrl) {
        URL.revokeObjectURL(finalImageUrl);
      }

      // 4. Set the final avatar state to the NEW URL
      setFinalImageUrl(newFinalUrl);

      // 5. Remove the original file (revokes original previewUrl)
      removeFile(fileId);

    } catch (error) {
      console.error("Error creating final avatar URL:", error);
      // Optionally handle the error (e.g., show a message)

      // Still remove the original file even if fetch/create fails
      removeFile(fileId);
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

      {previewUrl && (
        <Cropper image={previewUrl} />
      )}

      {/* Cropper Dialog - Use previewUrl for open prop */}
      {/* open={previewUrl !== null} onOpenChange={handleOpenChange} */}
      <Dialog>
        <DialogContent className="sm:max-w-[600px]">
          <DialogTitle>Crop image</DialogTitle>
          <div className="min-h-0 flex-1 flex flex-col">
            <div className="min-h-0 h-120 flex-1 flex items-center justify-center">
              {previewUrl && (
                <Cropper image={previewUrl} />
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
                  Apply
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
