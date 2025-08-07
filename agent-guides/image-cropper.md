# Image Cropper Component

Image croppers let users select and extract specific portions of images. Use them for profile photos, thumbnails, banners, or any situation where users need to focus on a particular area of an image. They work great for avatar uploads, content management systems, social media posts, or e-commerce product images.

Simple image viewers just display images as-is, but croppers give users control over composition and framing. File uploaders handle the transfer, but croppers perfect the content. Pick from 11 styles below based on your needs: upload integration (with/without), preview display (live/none), zoom controls (slider/limits/none), output needs (visual/data), and crop shapes (rectangular/circular).

## Which 'Image Cropper' variant do you need?

### Need the complete upload-to-crop workflow?
Want drag-and-drop file upload with cropping in a modal? Use `AvatarUploaderCropper`

### Just cropping an existing image?

**Need to see the cropped output while editing:**
- Want a live preview panel showing the result? Use `ImagePreviewCropper`
- Just need the crop coordinate data (for debugging)? Use `CropDataOutput`

**Need special zoom features:**
- Want a zoom slider control outside the cropper? Use `ZoomSliderCropper`
- Need to limit zoom range (min/max)? Use `CustomZoomLimits`

**Need a specific crop shape:**
- Circular crop for profile photos? Use `CircularCropper`
- Fixed 16:9 ratio for videos/banners? Use `AspectRatioCropper`
- Want the crop area to fill the entire container? Use `FullSizeCropArea`

**Just want different styling:**
- Blue border around crop area? Use `CustomCropAreaColor`
- White semi-transparent overlay? Use `CustomMaskOverlay`

**None of the above - just basic cropping?**
Use `BasicCropper`

## 📊 COMPLETE COMPONENT MATRIX

### Core Interactive Croppers

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **ZoomSliderCropper** (read if you plan to implement: registry/default/components/comp-561.tsx) | 61 | External zoom slider + live zoom display | User-controlled zoom interfaces |
| **ImagePreviewCropper** (read if you plan to implement: registry/default/components/comp-564.tsx) | 182 | Live crop preview + canvas output | Real-time crop visualization |
| **AvatarUploaderCropper** (read if you plan to implement: registry/default/components/comp-554.tsx) | **338** | File upload + dialog + zoom + preview | Complete avatar/profile systems |

### Basic & Styled Croppers

| Component | LoC | Visual Style / Feature | Best For |
|-----------|:---:|------------------------|----------|
| **BasicCropper** (read if you plan to implement: registry/default/components/comp-555.tsx) | 36 | Standard rectangular crop | Default cropping needs |
| **CustomCropAreaColor** (read if you plan to implement: registry/default/components/comp-557.tsx) | 36 | Blue border crop area | Branded crop interfaces |
| **CircularCropper** (read if you plan to implement: registry/default/components/comp-560.tsx) | 36 | Rounded crop mask | Profile pictures, avatars |
| **CustomMaskOverlay** (read if you plan to implement: registry/default/components/comp-558.tsx) | 36 | White overlay with black bg | High contrast crop areas |
| **AspectRatioCropper** (read if you plan to implement: registry/default/components/comp-556.tsx) | 37 | Fixed 16:9 aspect ratio | Video thumbnails, banners |
| **FullSizeCropArea** (read if you plan to implement: registry/default/components/comp-559.tsx) | 37 | Zero padding, full crop | Maximum crop area usage |
| **CustomZoomLimits** (read if you plan to implement: registry/default/components/comp-562.tsx) | 38 | Min/max zoom constraints | Controlled zoom experiences |
| **CropDataOutput** (read if you plan to implement: registry/default/components/comp-563.tsx) | 55 | Live JSON crop coordinates | Development and debugging |

### Feature Categories

| Pattern | Examples | When to Use |
|---------|----------|-------------|
| **Basic Display** | BasicCropper, AspectRatioCropper | Simple image cropping without interaction |
| **Shape Variants** | CircularCropper, FullSizeCropArea | Specific crop shapes and sizes |
| **Style Customization** | CustomCropAreaColor, CustomMaskOverlay | Branded or themed interfaces |
| **Interactive Controls** | ZoomSliderCropper, CropDataOutput | User-controlled cropping |
| **Complete Solutions** | ImagePreviewCropper, AvatarUploaderCropper | Full-featured implementations |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicCropper (comp-555)

**Description**: The simplest image cropper component. Standard rectangular crop area with default styling and behavior.

**When to Use**:
- Basic image cropping needs
- Default starting point for cropping features
- When you need minimal code complexity
- Simple form image uploads
- Quick prototyping

**Implementation After Refactoring**:
```tsx
import BasicCropper from '@/components/BasicCropper'

const [cropData, setCropData] = useState(null)

<BasicCropper 
  image={imageUrl}
  onCropChange={setCropData}
  className="h-80"
/>
```

**Props to Implement**: `image`, `onCropChange`, `className`, `aspectRatio`, `disabled`

---

### 🔷 AvatarUploaderCropper (comp-554)

**Description**: Complete avatar upload and cropping solution with file drag & drop, modal dialog, zoom controls, and final image output.

**When to Use**:
- User profile photo upload
- Avatar management systems
- Complete image upload workflows
- Social media profile pictures
- User onboarding flows

**Implementation After Refactoring**:
```tsx
import AvatarUploaderCropper from '@/components/AvatarUploaderCropper'

const [avatarUrl, setAvatarUrl] = useState(null)

<AvatarUploaderCropper 
  onImageCropped={setAvatarUrl}
  acceptedTypes="image/*"
  maxFileSize={5000000}
  cropAspectRatio={1}
/>
```

**Props to Implement**: `onImageCropped`, `acceptedTypes`, `maxFileSize`, `cropAspectRatio`, `disabled`

---

### 🔷 ImagePreviewCropper (comp-564)

**Description**: Image cropper with live preview display. Shows real-time cropped result alongside the crop editor.

**When to Use**:
- When users need to see crop results immediately
- Image editing applications
- Content management systems
- Blog post thumbnail creation
- E-commerce product images

**Implementation After Refactoring**:
```tsx
import ImagePreviewCropper from '@/components/ImagePreviewCropper'

const [croppedBlob, setCroppedBlob] = useState(null)

<ImagePreviewCropper 
  image={imageUrl}
  onCropComplete={setCroppedBlob}
  previewSize={200}
  outputFormat="image/jpeg"
/>
```

**Props to Implement**: `image`, `onCropComplete`, `previewSize`, `outputFormat`, `quality`

---

### 🔷 ZoomSliderCropper (comp-561)

**Description**: Image cropper with external zoom slider control and numeric zoom display.

**When to Use**:
- When precise zoom control is needed
- User interfaces requiring zoom feedback
- Accessibility-focused implementations
- Advanced cropping tools
- Fine-detail image editing

**Implementation After Refactoring**:
```tsx
import ZoomSliderCropper from '@/components/ZoomSliderCropper'

const [zoom, setZoom] = useState(1)
const [cropData, setCropData] = useState(null)

<ZoomSliderCropper 
  image={imageUrl}
  zoom={zoom}
  onZoomChange={setZoom}
  onCropChange={setCropData}
  minZoom={0.5}
  maxZoom={5}
/>
```

**Props to Implement**: `image`, `zoom`, `onZoomChange`, `onCropChange`, `minZoom`, `maxZoom`

---

### 🔷 CircularCropper (comp-560)

**Description**: Image cropper with circular crop mask, perfect for profile pictures and avatars.

**When to Use**:
- Profile picture uploads
- Avatar creation systems
- Circular image displays
- Social media profile photos
- User account management

**Implementation After Refactoring**:
```tsx
import CircularCropper from '@/components/CircularCropper'

const [cropData, setCropData] = useState(null)

<CircularCropper 
  image={imageUrl}
  onCropChange={setCropData}
  diameter={200}
  showGuides={false}
/>
```

**Props to Implement**: `image`, `onCropChange`, `diameter`, `showGuides`, `className`

---

### 🔷 AspectRatioCropper (comp-556)

**Description**: Image cropper with fixed aspect ratio (16:9), ideal for consistent image dimensions.

**When to Use**:
- Video thumbnail creation
- Banner image uploads
- Card image consistency
- Social media post images
- Blog header images

**Implementation After Refactoring**:
```tsx
import AspectRatioCropper from '@/components/AspectRatioCropper'

const [cropData, setCropData] = useState(null)

<AspectRatioCropper 
  image={imageUrl}
  aspectRatio={16/9}
  onCropChange={setCropData}
  lockAspectRatio={true}
/>
```

**Props to Implement**: `image`, `aspectRatio`, `onCropChange`, `lockAspectRatio`, `className`

---

### 🔷 CropDataOutput (comp-563)

**Description**: Image cropper that displays live JSON crop coordinates for development and debugging.

**When to Use**:
- Development and testing
- API integration debugging
- Understanding crop coordinates
- Custom crop implementations
- Learning crop behavior

**Implementation After Refactoring**:
```tsx
import CropDataOutput from '@/components/CropDataOutput'

const [cropData, setCropData] = useState(null)

<CropDataOutput 
  image={imageUrl}
  onCropChange={setCropData}
  showCoordinates={true}
  formatData={(data) => JSON.stringify(data, null, 2)}
/>
```

**Props to Implement**: `image`, `onCropChange`, `showCoordinates`, `formatData`, `className`

---

## 🎨 SPECIALIZED VARIANTS & LAYOUTS

### CustomCropAreaColor (comp-557)
```tsx
// Custom border color for branded interfaces
<CustomCropAreaColor image={imageUrl} borderColor="blue" />
```

### CustomMaskOverlay (comp-558)
```tsx
// High contrast overlay for better crop visibility
<CustomMaskOverlay image={imageUrl} overlayColor="rgba(255,255,255,0.5)" />
```

### FullSizeCropArea (comp-559)
```tsx
// Maximum crop area with zero padding
<FullSizeCropArea image={imageUrl} cropPadding={0} />
```

### CustomZoomLimits (comp-562)
```tsx
// Controlled zoom experience with limits
<CustomZoomLimits image={imageUrl} minZoom={2} maxZoom={10} />
```

---

## 🚀 QUICK START TEMPLATES

### Basic Image Cropping
```tsx
// Start here for simple cropping needs
import BasicCropper from '@/components/BasicCropper'

<BasicCropper 
  image="https://example.com/image.jpg"
  onCropChange={(cropData) => console.log(cropData)}
/>
```

### Profile Picture Upload
```tsx
// Complete avatar solution with upload
import AvatarUploaderCropper from '@/components/AvatarUploaderCropper'

<AvatarUploaderCropper 
  onImageCropped={(imageBlob) => uploadToServer(imageBlob)}
  acceptedTypes="image/*"
/>
```

### Content Management System
```tsx
// Image editing with live preview
import ImagePreviewCropper from '@/components/ImagePreviewCropper'

<ImagePreviewCropper 
  image={selectedImage}
  onCropComplete={(blob) => setProcessedImage(blob)}
  outputFormat="image/jpeg"
/>
```

### Advanced Crop Controls
```tsx
// Precise control with zoom slider
import ZoomSliderCropper from '@/components/ZoomSliderCropper'

<ZoomSliderCropper 
  image={imageUrl}
  minZoom={0.5}
  maxZoom={3}
  onCropChange={handleCropChange}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 40 LoC**: Basic styling variants, simple display croppers
- **40-80 LoC**: Interactive controls, data output features
- **80-200 LoC**: Live preview, canvas output functionality
- **200+ LoC**: Complete solutions with file upload, dialogs

**Why LoC matters**: Image cropping can range from simple display components to complex upload workflows. Choose the simplest solution that meets your needs to minimize maintenance overhead.

### Component Architecture
Image croppers are built on the shared cropper components from `/registry/default/ui/cropper`:
- `Cropper` - Main container with image handling
- `CropperImage` - Image display component
- `CropperCropArea` - Interactive crop selection area
- `CropperDescription` - Accessibility descriptions

**Pro tip**: All variants use the same base components with different configurations and styling.

### Crop Data Structure
All interactive croppers provide crop data in this format:
```typescript
type CropArea = {
  x: number      // Left position in pixels
  y: number      // Top position in pixels  
  width: number  // Crop width in pixels
  height: number // Crop height in pixels
}
```

### Performance Tips
1. Start with BasicCropper for simple needs
2. Use canvas-based cropping for image output (ImagePreviewCropper, AvatarUploaderCropper)
3. Implement lazy loading for crop preview generation
4. Consider image size limits for better performance
5. Use object URL cleanup to prevent memory leaks

### Accessibility
- All croppers include proper ARIA labels and descriptions
- Keyboard navigation supported for interactive elements
- Screen reader announcements for crop area changes
- Focus management for modal dialogs
- Touch-friendly controls for mobile devices

### File Handling Best Practices
For components with file upload (AvatarUploaderCropper):
- Always validate file types and sizes
- Implement proper error handling
- Clean up object URLs to prevent memory leaks
- Provide user feedback during upload/processing
- Consider progressive enhancement for older browsers

### Migration Path
```
BasicCropper → ZoomSliderCropper → ImagePreviewCropper → AvatarUploaderCropper
   (36 LoC)        (61 LoC)            (182 LoC)           (338 LoC)
```

Start simple, add features as user needs become more sophisticated!