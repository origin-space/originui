"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import { useFileUpload, formatBytes } from "@/registry/default/hooks/use-file-upload"
import { ImageIcon, X, Upload, AlertCircle } from "lucide-react"

export default function Component() {
  const [image, setImage] = useState<string | undefined>(undefined)
  const maxSize = 5 * 1024 * 1024 // 5MB default

  const [
    { files, isDragging, errors },
    { handleDragEnter, handleDragLeave, handleDragOver, handleDrop, openFileDialog, clearFiles, getInputProps },
  ] = useFileUpload({
    maxFiles: 1,
    accept: "image/*",
    multiple: false,
    maxSize,
  })

  // Update image when files change
  useEffect(() => {
    if (files.length > 0) {
      setImage(files[0].preview)
    }
  }, [files])

  const handleRemove = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      setImage(undefined)
      clearFiles()
    },
    [clearFiles],
  )

  return (
    <div className="w-full">
      <div
        onClick={openFileDialog}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`
          w-full
          rounded-lg
          flex flex-col items-center justify-center
          overflow-hidden
          border-2 border-dashed
          transition-all duration-200
          ${isDragging ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary"}
          cursor-pointer
          relative
          min-h-[200px]
        `}
      >
        <input {...getInputProps({ disabled: false, multiple: false })} />

        {image ? (
          <div className="relative w-full h-full">
            <img src={image || "/placeholder.svg"} alt="Uploaded image" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-white rounded-full p-2">
                <Upload className="w-5 h-5 text-gray-700" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500 mb-2">Drop your image here or click to browse</p>
            <p className="text-xs text-gray-400">Max size: {formatBytes(maxSize)}</p>
          </div>
        )}
      </div>

      {image && (
        <div className="flex justify-end mt-2">
          <button
            type="button"
            onClick={handleRemove}
            className="flex items-center text-sm text-red-500 hover:text-red-700 transition-colors"
          >
            <X className="w-4 h-4 mr-1" />
            Remove
          </button>
        </div>
      )}

      {errors.length > 0 && (
        <div className="flex items-center text-red-500 text-xs mt-2">
          <AlertCircle className="w-3 h-3 mr-1" />
          {errors[0]}
        </div>
      )}
    </div>
  )
}
