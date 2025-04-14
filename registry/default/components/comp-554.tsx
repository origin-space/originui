"use client"

import type React from "react"
import { useCallback, useEffect, useState } from "react"
import { useFileUpload, formatBytes } from "@/registry/default/hooks/use-file-upload"
import { X, Upload, AlertCircle, File, Plus } from "lucide-react"

export default function Component() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const maxSize = 10 * 1024 * 1024 // 10MB default
  const accept = "*"
  const maxFiles = 10

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      clearFiles,
      getInputProps,
    },
  ] = useFileUpload({
    maxFiles,
    accept,
    multiple: true,
    maxSize,
  })

  // Update selected files when files change
  useEffect(() => {
    setSelectedFiles(files.map((f) => f.file))
  }, [files])

  const handleRemoveFile = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.stopPropagation()
      e.preventDefault()
      removeFile(id)
    },
    [removeFile],
  )

  const handleClearFiles = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      clearFiles()
    },
    [clearFiles],
  )

  const handleAddMore = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      openFileDialog()
    },
    [openFileDialog],
  )

  return (
    <div className="w-full">
      <div
        role="button"
        onClick={openFileDialog}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`
          w-full
          rounded-lg
          flex flex-col items-center justify-center
          border-2 border-dashed
          transition-all duration-200
          p-6
          ${isDragging ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary"}
          cursor-pointer
        `}
      >
        <input {...getInputProps({ disabled: false, multiple: true })} />

        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-gray-100 rounded-full p-3 mb-3">
            <Upload className="w-6 h-6 text-gray-500" />
          </div>
          <p className="text-sm font-medium text-gray-700 mb-1">Upload multiple files</p>
          <p className="text-xs text-gray-500 mb-2">Drag & drop or click to browse</p>
          <div className="flex flex-wrap justify-center gap-1 text-xs text-gray-400">
            <span>{accept === "*" ? "All files" : accept.split(",").join(", ")}</span>
            <span>•</span>
            <span>Max {maxFiles} files</span>
            <span>•</span>
            <span>Up to {formatBytes(maxSize)} each</span>
          </div>
        </div>
      </div>

      {errors.length > 0 && (
        <div className="flex items-center text-red-500 text-xs mt-2">
          <AlertCircle className="w-3 h-3 mr-1 flex-shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}

      <div className="mt-4">
        {files.length > 0 ? (
          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-center overflow-hidden">
                  <File className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-700 truncate">{file.file.name}</p>
                    <p className="text-xs text-gray-500">{formatBytes(file.file.size)}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => handleRemoveFile(e, file.id)}
                  className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Remove file"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}

            {files.length < maxFiles && (
              <button
                type="button"
                onClick={handleAddMore}
                className="flex items-center justify-center w-full p-3 mt-2 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors"
              >
                <Plus className="w-4 h-4 mr-1" />
                <span className="text-sm">Add more files</span>
              </button>
            )}

            {files.length > 1 && (
              <button
                type="button"
                onClick={handleClearFiles}
                className="text-xs text-red-500 hover:text-red-700 transition-colors mt-2"
              >
                Remove all files
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}
