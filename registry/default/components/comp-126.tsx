"use client"

import { CircleUserRoundIcon, XIcon } from "lucide-react"

import { useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const [{ files }, { removeFile, openFileDialog, getInputProps }] =
    useFileUpload({
      accept: "image/*",
    })

  const previewUrl = files[0]?.preview || null
  const fileName = files[0]?.file.name || null

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative inline-flex">
        <Button
          variant="outline"
          className="relative size-16 overflow-hidden p-0 shadow-none"
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
              <CircleUserRoundIcon className="size-4 opacity-60" />
            </div>
          )}
        </Button>
        {previewUrl && (
          <Button
            onClick={() => removeFile(files[0]?.id)}
            size="icon"
            className="border-background focus-visible:border-background absolute -top-2 -right-2 size-6 rounded-full border-2 shadow-none"
            aria-label="Remove image"
          >
            <XIcon className="size-3.5" />
          </Button>
        )}
        <input
          {...getInputProps()}
          className="sr-only"
          aria-label="Upload image file"
          tabIndex={-1}
        />
      </div>
      {fileName && <p className="text-muted-foreground text-xs">{fileName}</p>}
      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Avatar upload button
      </p>
    </div>
  )
}
