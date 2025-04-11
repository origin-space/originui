"use client"

import { useCallback, useState } from "react"
import { ImageIcon, UploadIcon, XIcon } from "lucide-react"

import { useFileUpload } from "@/registry/default/hooks/use-file-upload-p"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const {
    previewUrl,
    fileInputRef,
    handleFileChange,
    handleRemove,
    fileName,
  } = useFileUpload()

  const [isDragging, setIsDragging] = useState(false)

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isDragging) {
      setIsDragging(true)
    }
  }, [isDragging])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files && files.length > 0 && fileInputRef.current) {
      // Create a new DataTransfer object
      const dataTransfer = new DataTransfer()
      // Add the first file
      dataTransfer.items.add(files[0])
      // Set the files property of the input element
      fileInputRef.current.files = dataTransfer.files
      // Trigger the onChange event
      const event = new Event('change', { bubbles: true })
      fileInputRef.current.dispatchEvent(event)
    }
  }, [fileInputRef])

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="w-full max-w-md">
      <div
        className={`border-input bg-background relative flex min-h-[200px] w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-4 transition-colors ${
          isDragging ? "border-primary bg-primary/5" : ""
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {previewUrl ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={previewUrl}
              alt="Uploaded image preview"
              className="max-h-[180px] max-w-full object-contain rounded"
            />
            <Button
              onClick={() => handleRemove()}
              size="icon"
              variant="destructive"
              className="absolute -top-2 -right-2 size-7"
              aria-label="Remove image"
            >
              <XIcon size={14} />
            </Button>
          </div>
        ) : (
          <>
            <div className="bg-muted text-muted-foreground flex size-12 items-center justify-center rounded-full">
              <ImageIcon size={24} />
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-sm font-medium">
                <span className="text-primary font-medium">Click to upload</span> or drag and drop
              </p>
              <p className="text-muted-foreground text-xs">
                SVG, PNG, JPG or GIF (max. 2MB)
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              className="mt-2"
              onClick={handleButtonClick}
            >
              <UploadIcon size={16} className="mr-2" />
              Select Image
            </Button>
          </>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
          aria-label="Upload image file"
        />
      </div>
      {fileName && (
        <div className="mt-2 flex items-center justify-between text-sm">
          <p className="text-muted-foreground truncate max-w-[300px]">
            {fileName}
          </p>
          <button
            onClick={() => handleRemove()}
            className="text-xs font-medium text-red-500 hover:underline"
            aria-label={`Remove ${fileName}`}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  )
}
