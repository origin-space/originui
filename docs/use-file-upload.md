# useFileUpload Hook

A flexible and feature-rich React hook for handling file uploads with drag-and-drop support, file validation, and preview generation.

> **Note:** This hook provides a solid foundation for file uploads but is designed to be extended. You can build upon it to implement additional features like pause/resume functionality, chunked uploads, retry mechanisms, or integration with specific backend services.

## Features

- 📁 Single or multiple file uploads
- 🖱️ Drag and drop support
- 🔍 File type validation
- 📏 File size validation
- 🖼️ Image preview generation
- 🧹 Duplicate file detection
- ⚠️ Error handling
- 🔄 Progress tracking integration
- 🎛️ Fully customizable UI

## Installation

This hook is part of the component library and doesn't require separate installation.

## Basic Usage

```tsx
import { useFileUpload } from "@/registry/default/hooks/use-file-upload"

function FileUploadComponent() {
  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      handleFileChange,
      openFileDialog,
      removeFile,
      clearFiles,
      getInputProps,
    },
  ] = useFileUpload({
    multiple: true,
    maxFiles: 5,
    maxSize: 5 * 1024 * 1024, // 5MB
    accept: "image/*",
  })

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input {...getInputProps()} />

      <button onClick={openFileDialog}>Select Files</button>

      {files.length > 0 && (
        <div>
          <h3>Selected Files:</h3>
          <ul>
            {files.map((file) => (
              <li key={file.id}>
                {file.file.name} ({formatBytes(file.file.size)})
                <button onClick={() => removeFile(file.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={clearFiles}>Clear All</button>
        </div>
      )}

      {errors.length > 0 && (
        <div style={{ color: 'red' }}>
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </div>
  )
}
```

## API Reference

### Hook Parameters

The `useFileUpload` hook accepts a configuration object with the following options:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `maxFiles` | `number` | `Infinity` | Maximum number of files allowed (only used when `multiple` is `true`) |
| `maxSize` | `number` | `Infinity` | Maximum file size in bytes |
| `accept` | `string` | `"*"` | Comma-separated list of accepted file types (e.g., `"image/*,application/pdf"`) |
| `multiple` | `boolean` | `false` | Whether to allow multiple file selection |
| `initialFiles` | `FileMetadata[]` | `[]` | Initial files to populate the uploader with |
| `onFilesChange` | `(files: FileWithPreview[]) => void` | `undefined` | Callback function called whenever the files array changes |
| `onFilesAdded` | `(addedFiles: FileWithPreview[]) => void` | `undefined` | Callback function called when new files are added |

### Return Value

The hook returns a tuple with two elements:

#### State Object

| Property | Type | Description |
|----------|------|-------------|
| `files` | `FileWithPreview[]` | Array of files with preview URLs |
| `isDragging` | `boolean` | Whether files are being dragged over the drop area |
| `errors` | `string[]` | Array of error messages |

#### Actions Object

| Method | Type | Description |
|--------|------|-------------|
| `addFiles` | `(files: FileList \| File[]) => void` | Add files programmatically |
| `removeFile` | `(id: string) => void` | Remove a file by its ID |
| `clearFiles` | `() => void` | Remove all files |
| `clearErrors` | `() => void` | Clear all error messages |
| `handleDragEnter` | `(e: DragEvent<HTMLElement>) => void` | Handle drag enter event |
| `handleDragLeave` | `(e: DragEvent<HTMLElement>) => void` | Handle drag leave event |
| `handleDragOver` | `(e: DragEvent<HTMLElement>) => void` | Handle drag over event |
| `handleDrop` | `(e: DragEvent<HTMLElement>) => void` | Handle drop event |
| `handleFileChange` | `(e: ChangeEvent<HTMLInputElement>) => void` | Handle file input change event |
| `openFileDialog` | `() => void` | Open the file selection dialog |
| `getInputProps` | `(props?: InputHTMLAttributes<HTMLInputElement>) => InputHTMLAttributes<HTMLInputElement> & { ref: React.Ref<HTMLInputElement> }` | Get props for the file input element |

### Types

```typescript
type FileMetadata = {
  name: string
  size: number
  type: string
  url: string
  id: string
}

type FileWithPreview = {
  file: File | FileMetadata
  id: string
  preview?: string
}
```

## Advanced Usage

### Tracking Upload Progress with Server Integration

Here's a real-world example of tracking file upload progress with server integration:

```tsx
import { useState } from "react"
import { useFileUpload, type FileWithPreview } from "./use-file-upload"

// Type for tracking upload progress
type UploadProgress = {
  fileId: string
  progress: number
  completed: boolean
  error?: string
}

function FileUploader() {
  const maxSize = 5 * 1024 * 1024 // 5MB

  // State to track upload progress for each file
  const [uploadProgress, setUploadProgress] = useState<UploadProgress[]>([])

  // Function to handle file upload to server
  const uploadFileToServer = async (file: File): Promise<{ url: string }> => {
    return new Promise(async (resolve, reject) => {
      try {
        // Create FormData
        const formData = new FormData()
        formData.append('file', file)

        // Create XMLHttpRequest to track progress
        const xhr = new XMLHttpRequest()

        // Track upload progress
        xhr.upload.addEventListener('progress', (event) => {
          if (event.lengthComputable) {
            const progressPercent = Math.round((event.loaded / event.total) * 100)
            // Update progress state for this file
            setUploadProgress(prev => prev.map(item =>
              item.fileId === file.name ? { ...item, progress: progressPercent } : item
            ))
          }
        })

        // Handle completion
        xhr.addEventListener('load', () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText)
            // Mark as completed
            setUploadProgress(prev => prev.map(item =>
              item.fileId === file.name ? { ...item, completed: true } : item
            ))
            resolve(response)
          } else {
            // Handle error
            setUploadProgress(prev => prev.map(item =>
              item.fileId === file.name ? { ...item, error: 'Upload failed' } : item
            ))
            reject(new Error('Upload failed'))
          }
        })

        // Handle error
        xhr.addEventListener('error', () => {
          setUploadProgress(prev => prev.map(item =>
            item.fileId === file.name ? { ...item, error: 'Network error' } : item
          ))
          reject(new Error('Network error'))
        })

        // Open and send the request
        xhr.open('POST', '/api/upload', true)
        xhr.send(formData)
      } catch (error) {
        reject(error)
      }
    })
  }

  // Handle newly added files
  const handleFilesAdded = (addedFiles: FileWithPreview[]) => {
    // Initialize progress tracking for each new file
    const newProgressItems = addedFiles.map(file => ({
      fileId: file.id,
      progress: 0,
      completed: false
    }))

    // Add new progress items to state
    setUploadProgress(prev => [...prev, ...newProgressItems])

    // Start upload for each file
    addedFiles.forEach(file => {
      if (file.file instanceof File) {
        uploadFileToServer(file.file)
          .then(response => {
            console.log('Upload successful:', response.url)
          })
          .catch(error => {
            console.error('Upload failed:', error)
          })
      }
    })
  }

  // Remove the progress tracking for the file
  const handleFileRemoved = (fileId: string) => {
    setUploadProgress(prev => prev.filter(item => item.fileId !== fileId))
  }

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
    maxSize,
    onFilesAdded: handleFilesAdded,
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
        className="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors not-data-[files]:justify-center has-[input:focus]:ring-[3px]"
      >
        <input
          {...getInputProps()}
          className="sr-only"
          aria-label="Upload image file"
        />
        {files.length > 0 ? (
          <div className="flex w-full flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="truncate text-sm font-medium">
                Files ({files.length})
              </h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={openFileDialog}>
                  <UploadIcon
                    className="-ms-0.5 size-3.5 opacity-60"
                    aria-hidden="true"
                  />
                  Add files
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Clear all progress tracking
                    setUploadProgress([])
                    clearFiles()
                  }}
                >
                  <Trash2Icon
                    className="-ms-0.5 size-3.5 opacity-60"
                    aria-hidden="true"
                  />
                  Remove all
                </Button>
              </div>
            </div>

            <div className="w-full space-y-2">
              {files.map((file) => {
                const fileProgress = uploadProgress.find(
                  (p) => p.fileId === file.id
                )
                const isUploading = fileProgress && !fileProgress.completed

                return (
                  <div
                    key={file.id}
                    data-uploading={isUploading || undefined}
                    className="bg-background flex flex-col gap-1 rounded-lg border p-2 pe-3 transition-opacity duration-300"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3 overflow-hidden in-data-[uploading=true]:opacity-50">
                        <div className="flex aspect-square size-10 shrink-0 items-center justify-center rounded border">
                          {getFileIcon(file)}
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
                        onClick={() => {
                          handleFileRemoved(file.id)
                          removeFile(file.id)
                        }}
                        aria-label="Remove file"
                      >
                        <XIcon className="size-4" aria-hidden="true" />
                      </Button>
                    </div>

                    {/* Upload progress bar */}
                    {fileProgress &&
                      (() => {
                        const progress = fileProgress.progress || 0
                        const completed = fileProgress.completed || false

                        if (completed) return null

                        return (
                          <div className="mt-1 flex items-center gap-2">
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                              <div
                                className="bg-primary h-full transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                            <span className="text-muted-foreground w-10 text-xs tabular-nums">
                              {progress}%
                            </span>
                          </div>
                        )
                      })()}
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
            <div
              className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
              aria-hidden="true"
            >
              <ImageIcon className="size-4 opacity-60" />
            </div>
            <p className="mb-1.5 text-sm font-medium">Drop your files here</p>
            <p className="text-muted-foreground text-xs">
              Max {maxFiles} files ∙ Up to {maxSizeMB}MB
            </p>
            <Button variant="outline" className="mt-4" onClick={openFileDialog}>
              <UploadIcon className="-ms-1 opacity-60" aria-hidden="true" />
              Select images
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
    </div>
  )
}
```

## Helper Functions

### formatBytes

Formats a byte value into a human-readable string.

```typescript
function formatBytes(bytes: number, decimals = 2): string
```

Example:
```tsx
formatBytes(1024) // "1 KB"
formatBytes(1536, 1) // "1.5 KB"
```

## Extending the Hook

The `useFileUpload` hook is designed as a starting point that handles the core functionality of file selection and validation. You can extend it to build more advanced features:

### Pause and Resume Uploads

You can implement pause/resume functionality by using the XMLHttpRequest abort method and tracking upload progress:

```tsx
const uploadWithPauseResume = (file: File) => {
  let xhr: XMLHttpRequest | null = new XMLHttpRequest();
  let isPaused = false;
  let uploadedBytes = 0;

  const pause = () => {
    if (xhr && !isPaused) {
      xhr.abort();
      isPaused = true;
    }
  };

  const resume = () => {
    if (isPaused) {
      // Create a new request
      xhr = new XMLHttpRequest();

      // Set up a Content-Range header to resume from where we left off
      const formData = new FormData();
      formData.append('file', file);

      xhr.open('POST', '/api/upload', true);
      xhr.setRequestHeader('Content-Range', `bytes ${uploadedBytes}-${file.size-1}/${file.size}`);

      // Set up progress tracking again
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          uploadedBytes = event.loaded;
          // Update progress UI
        }
      });

      xhr.send(formData);
      isPaused = false;
    }
  };

  return { pause, resume };
};
```

### Chunked Uploads

For large files, you might want to implement chunked uploads:

```tsx
const uploadInChunks = (file: File, chunkSize = 1024 * 1024) => {
  let currentChunk = 0;
  const totalChunks = Math.ceil(file.size / chunkSize);

  const uploadNextChunk = async () => {
    if (currentChunk >= totalChunks) {
      // All chunks uploaded
      return;
    }

    const start = currentChunk * chunkSize;
    const end = Math.min(file.size, start + chunkSize);
    const chunk = file.slice(start, end);

    const formData = new FormData();
    formData.append('file', chunk);
    formData.append('fileName', file.name);
    formData.append('chunkIndex', currentChunk.toString());
    formData.append('totalChunks', totalChunks.toString());

    try {
      await fetch('/api/upload-chunk', {
        method: 'POST',
        body: formData
      });

      currentChunk++;
      // Update progress UI
      const progress = Math.round((currentChunk / totalChunks) * 100);

      // Continue with next chunk
      uploadNextChunk();
    } catch (error) {
      // Handle error, implement retry logic
    }
  };

  // Start the upload process
  uploadNextChunk();
};
```

## More Examples

For more examples and live demos of the `useFileUpload` hook in action, visit the [Origin UI File Uploader page](https://originui.com/file-uploader).

The documentation site includes various implementations and use cases, including:

- Basic file uploaders
- Image galleries
- Document uploaders with progress tracking
- Drag and drop interfaces
- Custom validation examples
- And more
