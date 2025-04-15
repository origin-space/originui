"use client"

import type React from "react"
import { useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { ImageIcon, AlertCircleIcon, UploadIcon, XIcon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"

// Create a dummy image file
const initialFiles = [
  {
    name: "image-01.jpg",
    size: 1528737,
    type: "image/jpeg",
    url: "https://picsum.photos/1000/800?grayscale&random=1",
    id: "image-01-123456789"
  },
  {
    name: "image-02.jpg",
    size: 1528737,
    type: "image/jpeg",
    url: "https://picsum.photos/1000/800?grayscale&random=2",
    id: "image-02-123456789"
  },
  {
    name: "image-03.jpg",
    size: 1528737,
    type: "image/jpeg",
    url: "https://picsum.photos/1000/800?grayscale&random=3",
    id: "image-03-123456789"
  },
  {
    name: "image-04.jpg",
    size: 1528737,
    type: "image/jpeg",
    url: "https://picsum.photos/1000/800?grayscale&random=4",
    id: "image-04-123456789"
  }
]

export default function Component() {
  const maxSizeMB = 5
  const maxSize = maxSizeMB * 1024 * 1024 // 5MB default
  const maxFiles = 6

  const [
    { files, isDragging, errors },
    { handleDragEnter, handleDragLeave, handleDragOver, handleDrop, openFileDialog, removeFile, getInputProps },
  ] = useFileUpload({
    accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
    maxSize,
    multiple: true,
    maxFiles,
    initialFiles,
  })

  return (
    <div className="flex flex-col gap-2">

      {/* Drop area */}
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-dragging={isDragging || undefined}
        data-files={files.length > 0 || undefined}
        className="relative rounded-xl flex flex-col items-center not-data-[files]:justify-center border border-dashed border-input transition-colors p-4 data-[dragging=true]:bg-accent/50 min-h-52 overflow-hidden has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 has-[input:focus]:ring-[3px]"
      >
        <input {...getInputProps()} aria-label="Upload image file" />
        {files.length > 0 ? (
          <div className="w-full flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-medium truncate">Uploaded Files ({files.length})</h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={openFileDialog}
                disabled={files.length >= maxFiles}
              >
                <UploadIcon className="opacity-60 -ms-0.5 size-3.5" aria-hidden="true" />
                Add more
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {files.map((file) => (
                <div key={file.id} className="relative aspect-square rounded-md bg-accent">
                  <img 
                    src={file.preview} 
                    alt={file.file.name}
                    className="size-full object-cover rounded-[inherit]"
                  />
                  <Button
                    onClick={() => removeFile(file.id)}
                    size="icon"
                    className="absolute -top-2 -right-2 size-6 rounded-full border-2 border-background shadow-none focus-visible:border-background"
                    aria-label="Remove image"
                  >
                    <XIcon className="size-3.5" />
                  </Button>                  
                </div>
              ))}
            </div>
          </div>          
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
            <div className="bg-background flex size-11 shrink-0 items-center justify-center rounded-full border mb-2" aria-hidden="true">
              <ImageIcon className="size-4 opacity-60" />
            </div>
            <p className="text-sm font-medium mb-1.5">Drop your images here</p>
            <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (max. {maxSizeMB}MB)</p>
            <Button variant="outline" className="mt-4" onClick={openFileDialog}>
              <UploadIcon className="opacity-60 -ms-1" aria-hidden="true" />
              Select images
            </Button>            
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div className="flex items-center text-destructive text-xs gap-1" role="alert">
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
      
      <p aria-live="polite" role="region" className="text-muted-foreground text-xs mt-2 text-center">
        Multiple image uploader w/ image grid
      </p>        
    </div>
  )
}
