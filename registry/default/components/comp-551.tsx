"use client"

import React, { useState, useCallback, useEffect } from "react"
import { useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { Camera, X, Upload } from 'lucide-react'

export default function Component() {
  const [image, setImage] = useState<string | undefined>(undefined)

  const [
    { files, isDragging, errors },
    { handleDragEnter, handleDragLeave, handleDragOver, handleDrop, openFileDialog, clearFiles, getInputProps },
  ] = useFileUpload({
    accept: "image/*",
    maxSize: 5 * 1024 * 1024, // 5MB
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
      setImage(undefined)
      clearFiles()
    },
    [clearFiles],
  )

  return (
    <div className="relative">
      <input {...getInputProps({ disabled: false })} />

      <div
        onClick={openFileDialog}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`
          w-24 h-24
          rounded-full
          flex items-center justify-center
          overflow-hidden
          border-2 border-dashed
          transition-all duration-200
          ${isDragging ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary"}
          cursor-pointer
        `}
      >
        {image ? (
          <div className="relative w-full h-full">
            <img src={image || "/placeholder.svg"} alt="Avatar" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500">
            <Upload className="w-6 h-6" />
            <span className="text-xs mt-1">Upload</span>
          </div>
        )}
      </div>

      {image && (
        <button
          type="button"
          onClick={handleRemove}
          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
          aria-label="Remove avatar"
        >
          <X className="w-3 h-3" />
        </button>
      )}

      {errors.length > 0 && <div className="text-red-500 text-xs mt-1">{errors[0]}</div>}
    </div>
  )
}
