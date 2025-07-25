# File Uploader Component

File uploaders let users add files to your app. Use them for profile photos, document uploads, image galleries, or any file-based content. They handle drag-and-drop, file validation, previews, and progress tracking. Pick from simple buttons to advanced multi-file systems with 14 variants below.

File uploaders differ from file inputs by providing visual feedback, validation, and better UX. Unlike basic HTML inputs, these components show previews, handle errors gracefully, support drag-and-drop, and can track upload progress. Choose based on your file types (images vs documents), quantity (single vs multiple), and features needed (cropping, progress bars, tables).

## Which 'File Uploader' variant do you need?

### Uploading a profile photo or avatar?

**Need image cropping to get the perfect shot?**
- Use `AvatarUploaderWithCropper`

**Just want drag-and-drop on the avatar?**
- Use `AvatarUploaderDroppable`

**Simple click-to-upload is enough?**
- Use `AvatarUploadButton`

### Uploading a single image (not avatar)?

**Want the image to fill the entire drop zone (hero/banner style)?**
- Use `SingleImageDropzone`

**Need BOTH a drop zone AND a separate button for flexibility?**
- Use `SingleImageUploader`

**Just need a simple button (no drag-and-drop)?**
- Use `BasicImageUploader`

### Uploading multiple images at once?

**Want them in a grid layout (gallery style)?**
- Use `MultipleImageGrid`

**Prefer a vertical list with file details (compact)?**
- Use `MultipleImageList`

### Working with documents and mixed file types?

**Need a professional table with columns (enterprise style)?**
- Use `FileUploaderTable`

**Want visual cards with file previews and metadata?**
- Use `MixedContentCards`

**Need files to appear inside the drop zone (space-saving)?**
- Use `MultiFileDropzone`

**Just want a standard file list with type icons?**
- Use `MultiFileUploader`

### Have special requirements?

**Need upload progress bars (large files or slow connections)?**
- Use `FileUploaderWithProgress`

**Just attaching a file to a form (paperclip style)?**
- Use `SingleAttachmentUploader`

## 📊 COMPLETE COMPONENT MATRIX

### Core File Uploaders

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **AvatarUploadButton** (read if you plan to implement: registry/default/components/comp-126.tsx) | 69 | Circular avatar, click-only | User profile photos |
| **BasicImageUploader** (read if you plan to implement: registry/default/components/comp-125.tsx) | 82 | Minimal UI, inline preview | Simple forms |
| **AvatarUploaderDroppable** (read if you plan to implement: registry/default/components/comp-543.tsx) | 88 | Circular drop zone | Enhanced profile upload |
| **SingleImageDropzone** (read if you plan to implement: registry/default/components/comp-544.tsx) | 113 | Full area drop/click, 5MB limit | Hero images, banners |
| **SingleImageUploader** (read if you plan to implement: registry/default/components/comp-545.tsx) | 122 | Drop area + button, 2MB limit | Product images |
| **SingleAttachmentUploader** (read if you plan to implement: registry/default/components/comp-548.tsx) | 135 | Paperclip icon, compact | Form attachments |
| **MultipleImageGrid** (read if you plan to implement: registry/default/components/comp-546.tsx) | 170 | Grid layout, 5MB limit, add more button | Image galleries |
| **MultipleImageList** (read if you plan to implement: registry/default/components/comp-547.tsx) | 171 | List view, max 6 files | Photo collections |
| **MultiFileUploader** (read if you plan to implement: registry/default/components/comp-549.tsx) | 222 | File type icons, 100MB limit | Document management |
| **MultiFileDropzone** (read if you plan to implement: registry/default/components/comp-550.tsx) | 235 | Files list inside drop area | Email attachments |
| **FileUploaderTable** (read if you plan to implement: registry/default/components/comp-551.tsx) | 252 | Table format, download option | Enterprise file management |
| **MixedContentCards** (read if you plan to implement: registry/default/components/comp-552.tsx) | 272 | Card previews with metadata | Content management |
| **AvatarUploaderWithCropper** (read if you plan to implement: registry/default/components/comp-554.tsx) | 339 | Built-in image cropping | Professional profiles |
| **FileUploaderWithProgress** (read if you plan to implement: registry/default/components/comp-553.tsx) | **447** | Progress bars, upload simulation | Large file uploads |

### Upload Patterns by Use Case

| Pattern | Examples | When to Use |
|---------|----------|-------------|
| **Avatar-Specific** | AvatarUploadButton, AvatarUploaderDroppable, AvatarUploaderWithCropper | User profiles, team members |
| **Single Image** | BasicImageUploader, SingleImageDropzone, SingleImageUploader | Product images, hero banners |
| **Multiple Images** | MultipleImageList, MultipleImageGrid | Galleries, portfolios |
| **Mixed Files** | MultiFileUploader, FileUploaderTable, MixedContentCards | Document systems, CMS |
| **Progress Tracking** | FileUploaderWithProgress | Large files, cloud storage |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicImageUploader (comp-125)

**Description**: The simplest image uploader with a button and inline preview. Minimal UI for basic needs.

**When to Use**:
- Simple forms with image fields
- When space is limited
- Quick image additions
- Basic upload requirements
- No drag-and-drop needed

**Implementation After Refactoring**:
```tsx
import BasicImageUploader from '@/components/BasicImageUploader'
import { useState } from 'react'

const [image, setImage] = useState<File | null>(null)

<BasicImageUploader 
  image={image}
  onImageChange={setImage}
  maxSize={5 * 1024 * 1024} // 5MB
  accept="image/*"
/>
```

**Props to Implement**: `image`, `onImageChange`, `maxSize`, `accept`, `disabled`

---

### 🔷 SingleImageDropzone (comp-544)

**Description**: Large clickable and droppable area for single image upload. Preview fills the entire drop zone.

**When to Use**:
- Hero image uploads
- Banner uploads
- Featured images
- When visual feedback is important
- Large preview requirements

**Implementation After Refactoring**:
```tsx
import SingleImageDropzone from '@/components/SingleImageDropzone'
import { useState } from 'react'

const [file, setFile] = useState<File | null>(null)

<SingleImageDropzone 
  file={file}
  onFileChange={setFile}
  maxSize={5 * 1024 * 1024}
  className="aspect-video"
/>
```

**Props to Implement**: `file`, `onFileChange`, `maxSize`, `className`, `accept`

---

### 🔷 MultipleImageGrid (comp-546)

**Description**: Grid layout for multiple image uploads with visual preview tiles and add more functionality.

**When to Use**:
- Product image galleries
- Portfolio uploads
- Real estate listings
- Multiple product angles
- Visual-heavy content

**Implementation After Refactoring**:
```tsx
import MultipleImageGrid from '@/components/MultipleImageGrid'
import { useState } from 'react'

const [images, setImages] = useState<File[]>([])

<MultipleImageGrid 
  images={images}
  onImagesChange={setImages}
  maxFiles={10}
  maxSize={2 * 1024 * 1024}
  gridCols={3}
/>
```

**Props to Implement**: `images`, `onImagesChange`, `maxFiles`, `maxSize`, `gridCols`

---

### 🔷 MultiFileUploader (comp-549)

**Description**: Comprehensive file uploader supporting all file types with appropriate icons and 100MB limit.

**When to Use**:
- Document management systems
- File sharing platforms
- Support ticket attachments
- Mixed content uploads
- Enterprise file handling

**Implementation After Refactoring**:
```tsx
import MultiFileUploader from '@/components/MultiFileUploader'
import { useState } from 'react'

const [files, setFiles] = useState<File[]>([])

<MultiFileUploader 
  files={files}
  onFilesChange={setFiles}
  maxSize={100 * 1024 * 1024}
  accept="*"
  maxFiles={20}
/>
```

**Props to Implement**: `files`, `onFilesChange`, `maxSize`, `accept`, `maxFiles`

---

### 🔷 FileUploaderTable (comp-551)

**Description**: Professional table view for uploaded files with sortable columns and download functionality.

**When to Use**:
- Enterprise file management
- Admin dashboards
- Document repositories
- Detailed file information needed
- Download functionality required

**Implementation After Refactoring**:
```tsx
import FileUploaderTable from '@/components/FileUploaderTable'
import { useState } from 'react'

const [files, setFiles] = useState<File[]>([])

<FileUploaderTable 
  files={files}
  onFilesChange={setFiles}
  onDownload={(file) => downloadFile(file)}
  showActions={true}
/>
```

**Props to Implement**: `files`, `onFilesChange`, `onDownload`, `showActions`, `sortable`

---

### 🔷 AvatarUploaderWithCropper (comp-554)

**Description**: Advanced avatar uploader with built-in image cropping dialog for precise control.

**When to Use**:
- Professional profile photos
- Strict image requirements
- User avatars needing consistency
- Social media profiles
- When aspect ratio matters

**Implementation After Refactoring**:
```tsx
import AvatarUploaderWithCropper from '@/components/AvatarUploaderWithCropper'
import { useState } from 'react'

const [avatar, setAvatar] = useState<string | null>(null)

<AvatarUploaderWithCropper 
  avatar={avatar}
  onAvatarChange={setAvatar}
  aspectRatio={1}
  cropShape="round"
/>
```

**Props to Implement**: `avatar`, `onAvatarChange`, `aspectRatio`, `cropShape`, `minZoom`, `maxZoom`

---

### 🔷 FileUploaderWithProgress (comp-553)

**Description**: Advanced uploader with realistic progress tracking and upload simulation for each file.

**When to Use**:
- Large file uploads
- Cloud storage interfaces
- Video/media uploads
- When upload feedback is crucial
- Professional file management

**Implementation After Refactoring**:
```tsx
import FileUploaderWithProgress from '@/components/FileUploaderWithProgress'
import { useState } from 'react'

const [uploads, setUploads] = useState<UploadFile[]>([])

<FileUploaderWithProgress 
  uploads={uploads}
  onUploadsChange={setUploads}
  onUploadComplete={(file) => console.log('Uploaded:', file)}
  simulateDelay={true}
/>
```

**Props to Implement**: `uploads`, `onUploadsChange`, `onUploadComplete`, `simulateDelay`, `maxConcurrent`

---

## 🎨 SPECIALIZED VARIANTS

### AvatarUploadButton (comp-126)
```tsx
// Simple circular avatar button without drag-drop
<AvatarUploadButton size="lg" />
```

### SingleAttachmentUploader (comp-548)
```tsx
// Paperclip-style attachment for forms
<SingleAttachmentUploader label="Attach document" />
```

### MultipleImageList (comp-547)
```tsx
// List view with thumbnails and file info
<MultipleImageList maxFiles={6} />
```

### MixedContentCards (comp-552)
```tsx
// Card-based preview for mixed content types
<MixedContentCards showMetadata={true} />
```

### MultiFileDropzone (comp-550)
```tsx
// Files list integrated within drop area
<MultiFileDropzone hideDropzoneWhenFiles={false} />
```

---

## 🚀 QUICK START TEMPLATES

### Basic Image Upload
```tsx
// Start here for simple image needs
import BasicImageUploader from '@/components/BasicImageUploader'

<BasicImageUploader 
  onImageChange={handleImageUpload}
/>
```

### User Profile Avatar
```tsx
// For user profile photos with cropping
import AvatarUploaderWithCropper from '@/components/AvatarUploaderWithCropper'

<AvatarUploaderWithCropper 
  avatar={userAvatar}
  onAvatarChange={updateUserAvatar}
/>
```

### Document Management
```tsx
// For file systems with multiple file types
import MultiFileUploader from '@/components/MultiFileUploader'

<MultiFileUploader 
  files={documents}
  onFilesChange={setDocuments}
  maxSize={100 * 1024 * 1024}
/>
```

### Gallery Upload
```tsx
// For image galleries and portfolios
import MultipleImageGrid from '@/components/MultipleImageGrid'

<MultipleImageGrid 
  images={galleryImages}
  onImagesChange={updateGallery}
  maxFiles={20}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 100 LoC**: Basic uploaders for simple needs (AvatarUploadButton, BasicImageUploader)
- **100-150 LoC**: Standard single file uploaders (SingleImageDropzone, SingleAttachmentUploader)
- **150-250 LoC**: Multi-file uploaders with previews (MultipleImageGrid, MultiFileUploader)
- **250-350 LoC**: Advanced features like tables and cards (FileUploaderTable, MixedContentCards)
- **> 350 LoC**: Complex uploaders with progress or cropping (AvatarUploaderWithCropper, FileUploaderWithProgress)

**Why LoC matters**: Smaller components are easier to customize and debug. Choose the simplest uploader that meets your requirements to minimize complexity and maintenance overhead.

### File Type Handling
File uploaders in this collection handle different file types intelligently:
- **Images**: Show visual previews (JPEG, PNG, GIF, WebP)
- **Documents**: Display file type icons (PDF, DOC, XLS)
- **Media**: Special icons for audio/video files
- **Archives**: ZIP, RAR icons with file count if available
- **Unknown**: Generic file icon for unrecognized types

Always validate file types on both client and server for security.

### Drag and Drop Patterns
Most components support drag-and-drop with consistent visual feedback:
1. **Idle State**: Dashed border or subtle background
2. **Drag Over**: Blue border, highlighted background
3. **Drop**: Immediate file processing
4. **Error**: Red border with error message

Components without drag-drop (like AvatarUploadButton) are intentionally click-only for simplicity.

### Performance Tips
1. Start with the simplest uploader that meets your needs
2. Implement file size validation before upload
3. Use image compression for large images
4. Show progress for files over 1MB
5. Consider chunked uploads for very large files
6. Lazy load the file uploader component when possible

### Accessibility
- All uploaders include proper ARIA labels
- Keyboard navigation fully supported (Tab, Enter, Space)
- Screen reader announcements for file selection
- Error messages are announced to screen readers
- Focus management after file operations
- Alternative text for image previews

### Migration Path
```
BasicImageUploader → SingleImageDropzone → MultipleImageGrid → FileUploaderWithProgress
     (82 LoC)           (113 LoC)            (170 LoC)           (447 LoC)
```

Start with basic uploaders and upgrade as your requirements grow!