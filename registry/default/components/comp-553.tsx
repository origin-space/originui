"use client"

import type React from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import {
  AlertCircleIcon,
  FileIcon,
  Trash2Icon,
  UploadIcon,
  XIcon,
} from "lucide-react"

import {
  formatBytes,
  useFileUpload,
} from "@/registry/default/hooks/use-file-upload"
import { Button } from "@/registry/default/ui/button"

interface UseProgressTimerProps {
  duration: number
  interval?: number
  onComplete?: () => void
}

function useProgressTimer({
  duration,
  interval = 100,
  onComplete,
}: UseProgressTimerProps) {
  const [progress, setProgress] = useState(duration)
  const timerRef = useRef(0)
  const timerState = useRef({
    startTime: 0,
    remaining: duration,
    isPaused: false,
  })

  const cleanup = useCallback(() => {
    window.clearInterval(timerRef.current)
  }, [])

  const reset = useCallback(() => {
    cleanup()
    setProgress(duration)
    timerState.current = {
      startTime: 0,
      remaining: duration,
      isPaused: false,
    }
  }, [duration, cleanup])

  const start = useCallback(() => {
    const state = timerState.current
    state.startTime = Date.now()
    state.isPaused = false

    timerRef.current = window.setInterval(() => {
      const elapsedTime = Date.now() - state.startTime
      const remaining = Math.max(0, state.remaining - elapsedTime)

      setProgress(remaining)

      if (remaining <= 0) {
        cleanup()
        onComplete?.()
      }
    }, interval)
  }, [interval, cleanup, onComplete])

  const pause = useCallback(() => {
    const state = timerState.current
    if (!state.isPaused) {
      cleanup()
      state.remaining = Math.max(
        0,
        state.remaining - (Date.now() - state.startTime)
      )
      state.isPaused = true
    }
  }, [cleanup])

  const resume = useCallback(() => {
    const state = timerState.current
    if (state.isPaused && state.remaining > 0) {
      start()
    }
  }, [start])

  useEffect(() => {
    return cleanup
  }, [cleanup])

  return {
    progress,
    start,
    pause,
    resume,
    reset,
  }
}

export default function Component() {
  const maxSize = 10 * 1024 * 1024 // 10MB default
  const maxFiles = 10
  const uploadDuration = 3000 // 3 seconds for simulation

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
    multiple: true,
    maxFiles,
    maxSize,
  })

  const [uploadingFiles, setUploadingFiles] = useState<Record<string, number>>({})
  const progressTimers = useRef<Record<string, ReturnType<typeof useProgressTimer>>>({})

  const handleFileChange = useCallback(
    (newFiles: FileList | File[]) => {
      if (!newFiles || newFiles.length === 0) return

      const newFilesArray = Array.from(newFiles)
      const newUploadingFiles: Record<string, number> = {}

      newFilesArray.forEach((file) => {
        const id = `${file.name}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
        newUploadingFiles[id] = 0

        const timer = useProgressTimer({
          duration: uploadDuration,
          onComplete: () => {
            setUploadingFiles((prev) => {
              const newState = { ...prev }
              delete newState[id]
              return newState
            })
          },
        })

        progressTimers.current[id] = timer
        timer.start()
      })

      setUploadingFiles(newUploadingFiles)
    },
    [uploadDuration]
  )

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
        className="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 flex min-h-56 flex-col items-center rounded-xl border border-dashed p-4 transition-colors not-data-[files]:justify-center has-[input:focus]:ring-[3px]"
      >
        <input {...getInputProps()} aria-label="Upload files" />

        {files.length > 0 ? (
          <div className="flex w-full flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="truncate text-sm font-medium">
                Uploaded Files ({files.length})
              </h3>
              <Button variant="outline" size="sm" onClick={clearFiles}>
                <Trash2Icon
                  className="-ms-0.5 size-3.5 opacity-60"
                  aria-hidden="true"
                />
                Remove all
              </Button>
            </div>
            <div className="w-full space-y-2">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="bg-background flex flex-col gap-2 rounded-lg border p-2 pe-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="flex aspect-square size-10 shrink-0 items-center justify-center rounded border">
                        <FileIcon className="size-4 opacity-60" />
                      </div>
                      <div className="flex min-w-0 flex-col gap-0.5">
                        <p className="truncate text-[13px] font-medium">
                          {file.file instanceof File
                            ? file.file.name
                            : file.file.name}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {formatBytes(
                            file.file instanceof File
                              ? file.file.size
                              : file.file.size
                          )}
                        </p>
                      </div>
                    </div>

                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-muted-foreground/80 hover:text-foreground -me-2 size-8 hover:bg-transparent"
                      onClick={() => removeFile(file.id)}
                      aria-label="Remove file"
                    >
                      <XIcon className="size-4" aria-hidden="true" />
                    </Button>
                  </div>

                  {uploadingFiles[file.id] !== undefined && (
                    <div className="flex items-center gap-2">
                      <div
                        className="bg-border h-1.5 w-full overflow-hidden rounded-full"
                        role="progressbar"
                        aria-valuenow={
                          ((uploadDuration - uploadingFiles[file.id]) /
                            uploadDuration) *
                          100
                        }
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="bg-primary h-full transition-all duration-100 ease-linear"
                          style={{
                            width: `${
                              ((uploadDuration - uploadingFiles[file.id]) /
                                uploadDuration) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                      <span className="text-muted-foreground text-xs tabular-nums">
                        {Math.round(
                          ((uploadDuration - uploadingFiles[file.id]) /
                            uploadDuration) *
                            100
                        )}
                        %
                      </span>
                    </div>
                  )}
                </div>
              ))}

              {files.length < maxFiles && (
                <Button
                  variant="outline"
                  className="mt-2 w-full"
                  onClick={openFileDialog}
                >
                  <UploadIcon className="-ms-1 opacity-60" aria-hidden="true" />
                  Add more
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <div
              className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
              aria-hidden="true"
            >
              <FileIcon className="size-4 opacity-60" />
            </div>
            <p className="mb-1.5 text-sm font-medium">Upload files</p>
            <p className="text-muted-foreground text-xs">
              Max {maxFiles} files ∙ Up to {formatBytes(maxSize)}
            </p>
            <Button variant="outline" className="mt-4" onClick={openFileDialog}>
              <UploadIcon className="-ms-1 opacity-60" aria-hidden="true" />
              Select files
            </Button>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div
          className="text-destructive flex items-center gap-1 text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-center text-xs"
      >
        Multiple files uploader w/ progress bar
      </p>
    </div>
  )
} 