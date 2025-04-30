"use client"

import { useState, useEffect, useRef, useCallback } from 'react';

// Clamp utility function
function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// Define type for pixel crop area passed to callback
type Area = { x: number; y: number; width: number; height: number };

export function Cropper({
  image,
  cropPadding = 25,
  aspectRatio = 1,
  className,
  onCropComplete
}: {
  image: string
  cropPadding?: number
  aspectRatio?: number
  className?: string
  onCropComplete?: (pixels: Area | null) => void
}) {
  const [imgWidth, setImgWidth] = useState<number | null>(null);
  const [imgHeight, setImgHeight] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // State for calculated dimensions
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [cropAreaWidth, setCropAreaWidth] = useState<number>(0);
  const [cropAreaHeight, setCropAreaHeight] = useState<number>(0);
  const [imageWrapperWidth, setImageWrapperWidth] = useState<number>(0);
  const [imageWrapperHeight, setImageWrapperHeight] = useState<number>(0);

  // State for dragging
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartPointRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const dragStartOffsetRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const latestRestrictedOffsetRef = useRef<{ x: number, y: number }>({ x: offsetX, y: offsetY }); // Ref for latest offset

  useEffect(() => {
    // Reset offset immediately when image prop changes, before loading
    setOffsetX(0);
    setOffsetY(0);

    if (!image) {
      setImgWidth(null);
      setImgHeight(null);
      return;
    }

    let isMounted = true;
    const img = new Image();

    img.onload = () => {
      if (isMounted) {
        setImgWidth(img.naturalWidth);
        setImgHeight(img.naturalHeight);
      }
    };

    img.onerror = () => {
      if (isMounted) {
        setImgWidth(null);
        setImgHeight(null);
      }
    };

    img.src = image;

    return () => {
      isMounted = false;
    };
  }, [image]);

  // Effect to observe container size and calculate dimensions
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { height } = entry.contentRect;
        if (height > 0) {
          setContainerHeight(height); // Update container height state
        }
      }
    });

    observer.observe(element);

    // Initial check in case observer doesn't fire immediately
    const initialHeight = element.clientHeight;
    if (initialHeight > 0) {
      setContainerHeight(initialHeight);
    }

    return () => observer.disconnect();
  }, []); // Run only once on mount

  // Effect to calculate crop area and image wrapper sizes
  useEffect(() => {
    if (containerHeight <= 0) return; // Wait for container height

    // 1. Calculate Crop Area Dimensions
    const targetCropHeight = Math.max(0, containerHeight - cropPadding * 2);
    const targetCropWidth = Math.max(0, targetCropHeight * aspectRatio);

    setCropAreaHeight(targetCropHeight);
    setCropAreaWidth(targetCropWidth);

    // 2. Calculate Image Wrapper Dimensions (if image loaded)
    if (imgWidth && imgHeight && targetCropWidth > 0 && targetCropHeight > 0) {
      const naturalAspect = imgWidth / imgHeight;
      const cropAspect = targetCropWidth / targetCropHeight;

      let targetWrapperWidth = 0;
      let targetWrapperHeight = 0;

      if (naturalAspect >= cropAspect) {
        // Image is wider or same aspect as crop area: Match height
        targetWrapperHeight = targetCropHeight;
        targetWrapperWidth = targetWrapperHeight * naturalAspect;
      } else {
        // Image is taller than crop area: Match width
        targetWrapperWidth = targetCropWidth;
        targetWrapperHeight = targetWrapperWidth / naturalAspect;
      }

      setImageWrapperWidth(targetWrapperWidth);
      setImageWrapperHeight(targetWrapperHeight);
    } else {
      // Reset if image dimensions are not available
      setImageWrapperWidth(0);
      setImageWrapperHeight(0);
    }
  }, [containerHeight, cropPadding, aspectRatio, imgWidth, imgHeight]); // Recalculate when these change

  // Function to restrict the drag offset state (relative to center)
  const restrictOffset = useCallback((dragOffsetX: number, dragOffsetY: number): { x: number, y: number } => {
    if (imageWrapperWidth <= 0 || imageWrapperHeight <= 0 || cropAreaWidth <= 0 || cropAreaHeight <= 0) {
      return { x: 0, y: 0 }; // Cannot restrict if dimensions are invalid
    }

    // Calculate maximum distance the center can move from the center point (0,0)
    const maxDragX = (imageWrapperWidth - cropAreaWidth) / 2;
    const maxDragY = (imageWrapperHeight - cropAreaHeight) / 2;

    // Clamp the drag offset state
    // If image wrapper is smaller than crop area, max drag is 0 (it stays centered)
    const restrictedX = imageWrapperWidth >= cropAreaWidth ? clamp(dragOffsetX, -maxDragX, maxDragX) : 0;
    const restrictedY = imageWrapperHeight >= cropAreaHeight ? clamp(dragOffsetY, -maxDragY, maxDragY) : 0;

    return { x: restrictedX, y: restrictedY };
  }, [imageWrapperWidth, imageWrapperHeight, cropAreaWidth, cropAreaHeight]);

  // Function to calculate the crop area in pixels relative to the original image
  const calculateCropData = useCallback((
    finalOffsetX?: number, // Optional final offset X
    finalOffsetY?: number  // Optional final offset Y
  ): Area | null => {
    // Use provided final offsets if available, otherwise use state (fallback)
    const currentOffsetX = finalOffsetX !== undefined ? finalOffsetX : offsetX;
    const currentOffsetY = finalOffsetY !== undefined ? finalOffsetY : offsetY;

    // Need all dimensions and the *current zoom* (assuming zoom=1 for now)
    // TODO: Add zoom state and factor it in
    const zoom = 1;
    if (!imgWidth || !imgHeight || imageWrapperWidth <= 0 || cropAreaWidth <= 0) {
      return null;
    }

    // Calculate the top-left position of the image wrapper relative to the crop area center
    const topLeftOffsetX = currentOffsetX + (cropAreaWidth - imageWrapperWidth) / 2; // Use currentOffsetX
    const topLeftOffsetY = currentOffsetY + (cropAreaHeight - imageWrapperHeight) / 2; // Use currentOffsetY

    // Calculate the scale factor between the wrapper and the natural image size
    // This assumes the wrapper was calculated correctly to cover the crop area
    const scale = imgWidth > imgHeight
      ? imageWrapperWidth / imgWidth // Scaled by width
      : imageWrapperHeight / imgHeight; // Scaled by height

    // If scale is somehow invalid, exit
    if (isNaN(scale) || scale === 0) return null;

    // Calculate the source rectangle (sx, sy, sWidth, sHeight) on the original image
    // sx/sy: top-left corner of crop area relative to top-left of image, scaled back to original dims
    // sWidth/sHeight: size of crop area, scaled back to original dims
    const sx = (-topLeftOffsetX / scale) / zoom; // Adjust for zoom
    const sy = (-topLeftOffsetY / scale) / zoom; // Adjust for zoom
    const sWidth = (cropAreaWidth / scale) / zoom; // Adjust for zoom
    const sHeight = (cropAreaHeight / scale) / zoom; // Adjust for zoom

    // Clamp/round values to be within natural image bounds
    const finalX = clamp(Math.round(sx), 0, imgWidth);
    const finalY = clamp(Math.round(sy), 0, imgHeight);
    const finalWidth = clamp(Math.round(sWidth), 0, imgWidth - finalX);
    const finalHeight = clamp(Math.round(sHeight), 0, imgHeight - finalY);

    if (finalWidth <= 0 || finalHeight <= 0) return null;

    return {
      x: finalX,
      y: finalY,
      width: finalWidth,
      height: finalHeight
    };

  }, [
    imgWidth, imgHeight, imageWrapperWidth, imageWrapperHeight, cropAreaWidth, cropAreaHeight
  ]);

  // Effect to calculate and set the initial centered offset AND trigger initial crop complete
  useEffect(() => {
    if (imageWrapperWidth > 0 && imageWrapperHeight > 0 && cropAreaWidth > 0 && cropAreaHeight > 0) {
      // Calculate initial centered offset
      const initialX = (cropAreaWidth - imageWrapperWidth) / 2;
      const initialY = (cropAreaHeight - imageWrapperHeight) / 2;

      // Restrict initial offset (though centering should be within bounds if image covers crop area)
      const restrictedInitial = restrictOffset(initialX, initialY);

      // Set the initial state for offset
      setOffsetX(restrictedInitial.x);
      setOffsetY(restrictedInitial.y);

      // Update refs for dragging consistency
      dragStartOffsetRef.current = { x: restrictedInitial.x, y: restrictedInitial.y };
      latestRestrictedOffsetRef.current = { x: restrictedInitial.x, y: restrictedInitial.y };

      // Trigger initial crop complete callback
      if (onCropComplete) {
        const initialCropData = calculateCropData(restrictedInitial.x, restrictedInitial.y);
        onCropComplete(initialCropData);
      }
    } else {
      // Reset offsets if dimensions become invalid
      setOffsetX(0);
      setOffsetY(0);
      dragStartOffsetRef.current = { x: 0, y: 0 };
      latestRestrictedOffsetRef.current = { x: 0, y: 0 };
      // Optionally call onCropComplete with null if dimensions are lost?
      // if (onCropComplete) {
      //   onCropComplete(null);
      // }
    }
  }, [
    imageWrapperWidth,
    imageWrapperHeight,
    cropAreaWidth,
    cropAreaHeight,
    restrictOffset,
    onCropComplete,
    calculateCropData
  ]); // Dependencies

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent text selection, etc.
    setIsDragging(true);
    dragStartPointRef.current = { x: e.clientX, y: e.clientY };
    dragStartOffsetRef.current = { x: offsetX, y: offsetY };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    // No need to check isDragging state here as listener is removed on mouseup
    const currentX = e.clientX;
    const currentY = e.clientY;

    const deltaX = currentX - dragStartPointRef.current.x;
    const deltaY = currentY - dragStartPointRef.current.y;

    const targetOffsetX = dragStartOffsetRef.current.x + deltaX;
    const targetOffsetY = dragStartOffsetRef.current.y + deltaY;

    const restricted = restrictOffset(targetOffsetX, targetOffsetY);

    // Update ref with the latest restricted offset
    latestRestrictedOffsetRef.current = restricted;

    // Update state for visual feedback
    setOffsetX(restricted.x);
    setOffsetY(restricted.y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    // Call onCropComplete when dragging stops, using the latest offset from the ref
    if (onCropComplete) {
      const finalData = calculateCropData(
        latestRestrictedOffsetRef.current.x,
        latestRestrictedOffsetRef.current.y
      );
      onCropComplete(finalData);
    }
  };

  // Cleanup listeners on unmount
  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []); // Empty dependency array ensures this runs only on unmount

  return (
    <div
      ref={containerRef}
      className="relative h-120 w-full flex flex-col items-center justify-center bg-muted overflow-hidden cursor-move"
      onMouseDown={handleMouseDown}
    >
      {(imageWrapperWidth > 0 && imageWrapperHeight > 0) && (
        <div
          style={{
            width: imageWrapperWidth,
            height: imageWrapperHeight,
            // Apply ONLY the drag offset state to transform (relative to CSS centered position)
            transform: `translate3d(${offsetX}px, ${offsetY}px, 0px)`,
            position: 'absolute',
            left: `calc(50% - ${imageWrapperWidth / 2}px)`,
          } as React.CSSProperties}
        >
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="bg-cover bg-center bg-no-repeat absolute inset-0"
          ></div>
          <img src={image} draggable="false" alt="Crop image" className="sr-only" />
        </div>
      )}
      {(cropAreaWidth > 0 && cropAreaHeight > 0) && (
        <div
          className="border-2 border-blue-500 absolute rounded-xs shadow-[0_0_0_9999px_rgba(0,0,0,0.2)] pointer-events-none"
          style={{
            width: cropAreaWidth,
            height: cropAreaHeight,
          }}
        ></div>
      )}
    </div>
  )
}