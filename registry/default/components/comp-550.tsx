"use client"

import { CircleUserRoundIcon, XIcon } from "lucide-react"

import { useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const [{ files }, { removeFile, openFileDialog, getInputProps }] = useFileUpload({
    accept: "image/*"
  })

  const previewUrl = files[0]?.preview || null
  const fileName = files[0]?.file.name || null

  return (
    <div>
      <div className="relative inline-flex">
        <Button
          variant="outline"
          className="relative size-16 overflow-hidden rounded-full p-0"
          onClick={openFileDialog}
          aria-label={previewUrl ? "Change image" : "Upload image"}
        >
          {previewUrl ? (
            <img
              className="size-full object-cover"
              src={previewUrl}
              alt="Preview of uploaded image"
              width={64}
              height={64}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRoundIcon className="opacity-60" size={16} />
            </div>
          )}
        </Button>
        {previewUrl && (
          <Button
            onClick={() => removeFile(files[0]?.id)}
            size="icon"
            variant="destructive"
            className="absolute -top-1 -right-1 size-6 rounded-full border-2 border-background shadow-none focus-visible:border-background"
            aria-label="Remove image"
          >
            <XIcon className="size-3.5" />
          </Button>
        )}
        <input {...getInputProps()} aria-label="Upload image file" />
      </div>
      {fileName && (
        <p className="text-muted-foreground mt-2 text-xs">{fileName}</p>
      )}
      <div className="sr-only" aria-live="polite" role="status">
        {previewUrl
          ? "Image uploaded and preview available"
          : "No image uploaded"}
      </div>
    </div>
  )
}
