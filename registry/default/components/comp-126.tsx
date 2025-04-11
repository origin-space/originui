"use client"

import { CircleUserRoundIcon, XIcon } from "lucide-react"

import { useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const [{ files }, { handleFileChange, removeFile, openFileDialog, getInputProps }] = useFileUpload({
    accept: "image/*",
    multiple: false
  })

  const previewUrl = files[0]?.preview || null
  const fileName = files[0]?.file.name || null

  return (
    <div>
      <div className="relative inline-flex">
        <Button
          variant="outline"
          className="relative size-16 overflow-hidden p-0"
          onClick={openFileDialog}
          aria-label={previewUrl ? "Change image" : "Upload image"}
        >
          {previewUrl ? (
            <img
              className="h-full w-full object-cover"
              src={previewUrl}
              alt="Preview of uploaded image"
              width={40}
              height={40}
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
            className="border-background absolute -top-1.5 -right-1.5 size-5 rounded-full shadow-none"
            aria-label="Remove image"
          >
            <XIcon size={16} />
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
