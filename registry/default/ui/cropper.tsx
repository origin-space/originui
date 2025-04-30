"use client"

// Removed WheelEvent import from 'react'
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
  minZoom = 1,
  maxZoom = 3,
  zoomSensitivity = 0.005,
  className,
  onCropComplete
}: {
  image: string
  cropPadding?: number
  aspectRatio?: number
  className?: string
  minZoom?: number
  maxZoom?: number
  zoomSensitivity?: number
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
  const [zoom, setZoom] = useState<number>(minZoom); // Zoom state
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartPointRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const dragStartOffsetRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const latestRestrictedOffsetRef = useRef<{ x: number, y: number }>({ x: offsetX, y: offsetY }); // Ref for latest offset
  const latestZoomRef = useRef<number>(zoom); // Ref for latest zoom

  // Update latest zoom ref whenever zoom state changes
  useEffect(() => {
    latestZoomRef.current = zoom;
  }, [zoom]);

  useEffect(() => {
    // Reset offset and zoom immediately when image prop changes, before loading
    setOffsetX(0);
    setOffsetY(0);
    setZoom(minZoom);

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

  // Function to restrict the drag offset state (relative to center), considering zoom
  const restrictOffset = useCallback((dragOffsetX: number, dragOffsetY: number, currentZoom: number): { x: number, y: number } => {
    if (imageWrapperWidth <= 0 || imageWrapperHeight <= 0 || cropAreaWidth <= 0 || cropAreaHeight <= 0) {
      return { x: 0, y: 0 }; // Cannot restrict if dimensions are invalid
    }

    // Calculate the *effective* size of the image wrapper at the current zoom level
    const effectiveWrapperWidth = imageWrapperWidth * currentZoom;
    const effectiveWrapperHeight = imageWrapperHeight * currentZoom;

    // Calculate maximum distance the center can move from the center point (0,0)
    // This is half the difference between the effective wrapper size and the crop area size
    const maxDragX = Math.max(0, (effectiveWrapperWidth - cropAreaWidth) / 2);
    const maxDragY = Math.max(0, (effectiveWrapperHeight - cropAreaHeight) / 2);

    // Clamp the drag offset state
    const restrictedX = clamp(dragOffsetX, -maxDragX, maxDragX);
    const restrictedY = clamp(dragOffsetY, -maxDragY, maxDragY);

    return { x: restrictedX, y: restrictedY };
  }, [imageWrapperWidth, imageWrapperHeight, cropAreaWidth, cropAreaHeight]);

  // Function to calculate the crop area in pixels relative to the original image
  // Function to calculate the crop area in pixels relative to the original image, considering zoom
  const calculateCropData = useCallback((
    finalOffsetX?: number, // Optional final offset X
    finalOffsetY?: number, // Optional final offset Y
    finalZoom?: number     // Optional final zoom
  ): Area | null => {
    // Use provided final values if available, otherwise use state/ref (fallback)
    const currentOffsetX = finalOffsetX !== undefined ? finalOffsetX : latestRestrictedOffsetRef.current.x;
    const currentOffsetY = finalOffsetY !== undefined ? finalOffsetY : latestRestrictedOffsetRef.current.y;
    const currentZoom = finalZoom !== undefined ? finalZoom : latestZoomRef.current; // Use latest zoom ref

    if (!imgWidth || !imgHeight || imageWrapperWidth <= 0 || imageWrapperHeight <= 0 || cropAreaWidth <= 0 || cropAreaHeight <= 0) {
      return null;
    }

    // Calculate the top-left position of the *scaled* image wrapper relative to the crop area center
    // The wrapper's visual top-left corner shifts due to both offset and scaling from its center
    const scaledWrapperWidth = imageWrapperWidth * currentZoom;
    const scaledWrapperHeight = imageWrapperHeight * currentZoom;
    const topLeftOffsetX = currentOffsetX + (cropAreaWidth - scaledWrapperWidth) / 2;
    const topLeftOffsetY = currentOffsetY + (cropAreaHeight - scaledWrapperHeight) / 2;

    // Calculate the scale factor between the *unscaled* wrapper and the natural image size
    // This determines how much the base wrapper was scaled down from the original image
    const baseScale = imgWidth / imageWrapperWidth; // Assuming width determines scale, adjust if needed

    // If baseScale is somehow invalid, exit
    if (isNaN(baseScale) || baseScale === 0) return null;

    // Calculate the source rectangle (sx, sy, sWidth, sHeight) on the original image
    // sx/sy: top-left corner of crop area relative to top-left of the *scaled* image wrapper,
    //        then scaled back to original image dimensions.
    // sWidth/sHeight: size of crop area, scaled back to original image dimensions.
    const sx = -topLeftOffsetX * baseScale / currentZoom;
    const sy = -topLeftOffsetY * baseScale / currentZoom;
    const sWidth = cropAreaWidth * baseScale / currentZoom;
    const sHeight = cropAreaHeight * baseScale / currentZoom;

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
      // Calculate initial centered offset (relative to unzoomed wrapper)
      // Note: Centering logic might need adjustment if initial zoom isn't 1
      const initialX = 0; // Center X offset is 0 when zoom is 1 and wrapper covers crop area
      const initialY = 0; // Center Y offset is 0 when zoom is 1 and wrapper covers crop area

      // Restrict initial offset based on initial zoom (minZoom)
      const restrictedInitial = restrictOffset(initialX, initialY, minZoom);

      // Set the initial state for offset
      setOffsetX(restrictedInitial.x);
      setOffsetY(restrictedInitial.y);

      // Update refs for dragging and zooming consistency
      dragStartOffsetRef.current = { x: restrictedInitial.x, y: restrictedInitial.y };
      latestRestrictedOffsetRef.current = { x: restrictedInitial.x, y: restrictedInitial.y };
      latestZoomRef.current = minZoom; // Ensure zoom ref is also reset

      // Trigger initial crop complete callback with initial offset and zoom
      if (onCropComplete) {
        const initialCropData = calculateCropData(restrictedInitial.x, restrictedInitial.y, minZoom);
        onCropComplete(initialCropData);
      }
    } else {
      // Reset offsets and zoom if dimensions become invalid
      setOffsetX(0);
      setOffsetY(0);
      setZoom(minZoom); // Reset zoom state
      dragStartOffsetRef.current = { x: 0, y: 0 };
      latestRestrictedOffsetRef.current = { x: 0, y: 0 };
      latestZoomRef.current = minZoom; // Reset zoom ref
      // Optionally call onCropComplete with null if dimensions are lost?
      // if (onCropComplete) {
      //   onCropComplete(null);
      // }
    }
  }, [
    imageWrapperWidth,
    imageWrapperHeight,
    cropAreaWidth,
    cropAreaWidth, // Added cropAreaWidth as it's used in calculation now
    cropAreaHeight,
    restrictOffset, // restrictOffset dependency list includes zoom now indirectly
    onCropComplete,
    calculateCropData // calculateCropData dependency list includes zoom now indirectly
  ]); // Dependencies - zoom state is implicitly handled via refs/initial value

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

    // Restrict using the *current* zoom level from the ref
    const restricted = restrictOffset(targetOffsetX, targetOffsetY, latestZoomRef.current);

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
    // Call onCropComplete when dragging stops, using the latest offset and zoom from refs
    if (onCropComplete) {
      const finalData = calculateCropData(
        latestRestrictedOffsetRef.current.x,
        latestRestrictedOffsetRef.current.y,
        latestZoomRef.current // Pass the current zoom
      );
      onCropComplete(finalData);
    }
  };

  // Wheel Handler for Zoom - Use DOM WheelEvent type for addEventListener
  const handleWheel = useCallback((e: WheelEvent) => { // Changed type here
    e.preventDefault(); // Prevent default scroll behavior
    e.stopPropagation(); // Stop the event from bubbling up

    if (!containerRef.current || imageWrapperWidth <= 0 || imageWrapperHeight <= 0) return;

    const currentZoom = latestZoomRef.current;
    const currentOffsetX = latestRestrictedOffsetRef.current.x;
    const currentOffsetY = latestRestrictedOffsetRef.current.y;

    // Calculate new zoom level
    const delta = e.deltaY * -zoomSensitivity;
    const newZoom = clamp(currentZoom + delta, minZoom, maxZoom);

    // If zoom didn't change, do nothing
    if (newZoom === currentZoom) return;

    // Calculate pointer position relative to the container center
    const rect = containerRef.current.getBoundingClientRect();
    const pointerX = e.clientX - rect.left - rect.width / 2;
    const pointerY = e.clientY - rect.top - rect.height / 2;

    // Calculate the point on the image wrapper (relative to its center) that is under the pointer
    // Adjust for current offset and zoom
    const imagePointX = (pointerX - currentOffsetX) / currentZoom;
    const imagePointY = (pointerY - currentOffsetY) / currentZoom;

    // Calculate the new offset required to keep the image point under the pointer after zoom
    // New Offset = Pointer Position - (Image Point Position * New Zoom)
    const newOffsetX = pointerX - (imagePointX * newZoom);
    const newOffsetY = pointerY - (imagePointY * newZoom);

    // Restrict the calculated new offset based on the new zoom level
    const restrictedNewOffset = restrictOffset(newOffsetX, newOffsetY, newZoom);

    // Update state and refs
    setZoom(newZoom);
    setOffsetX(restrictedNewOffset.x);
    setOffsetY(restrictedNewOffset.y);
    latestZoomRef.current = newZoom; // Update ref immediately for next potential event
    latestRestrictedOffsetRef.current = restrictedNewOffset; // Update ref immediately

    // Trigger crop complete callback with the final state after zoom
    if (onCropComplete) {
      const finalData = calculateCropData(
        restrictedNewOffset.x,
        restrictedNewOffset.y,
        newZoom
      );
      onCropComplete(finalData);
    }
  }, [ // Added useCallback and dependencies for handleWheel
    restrictOffset,
    calculateCropData,
    imageWrapperWidth,
    imageWrapperHeight,
    onCropComplete,
    // Refs are stable and don't need to be dependencies
    // State values (zoom, offsetX, offsetY) are accessed via refs inside or passed as args
  ]);

  // Cleanup drag listeners on unmount
  useEffect(() => {
    // Ensure listeners are removed if component unmounts during drag
    const removeDragListeners = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
    return removeDragListeners;
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  // Effect to attach non-passive wheel listener
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    // Attach the wheel listener manually with passive: false
    // Cast options to 'any' to bypass TS error about 'passive' property
    node.addEventListener('wheel', handleWheel, { passive: false } as any);

    // Cleanup function to remove the listener
    return () => {
      // Cast options to 'any' here too for consistency
      node.removeEventListener('wheel', handleWheel, { passive: false } as any);
    };
  }, [handleWheel]); // Re-attach if handleWheel changes (due to useCallback dependencies)


  return (
    <div
      ref={containerRef}
      className={`relative h-120 w-full flex flex-col items-center justify-center bg-muted overflow-hidden cursor-move ${className ?? ''}`}
      onMouseDown={handleMouseDown}
      // onWheel is removed here - managed by useEffect now
    >
      {(imageWrapperWidth > 0 && imageWrapperHeight > 0) && (
        <div
          style={{
            width: imageWrapperWidth,
            height: imageWrapperHeight,
            transform: `translate3d(${offsetX}px, ${offsetY}px, 0px) scale(${zoom})`,
            position: 'absolute',
            left: `calc(50% - ${imageWrapperWidth / 2}px)`,
            top: `calc(50% - ${imageWrapperHeight / 2}px)`,
            willChange: 'transform',
          } as React.CSSProperties}
        >
          <img
            src={image}
            alt="Image to crop"
            draggable="false"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
          />
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
      {/* Debug display - remove later */}
      {/* <div className="absolute bottom-2 left-2 bg-black/50 text-white p-1 text-xs rounded">
        Zoom: {zoom.toFixed(2)} | Offset: ({offsetX.toFixed(1)}, {offsetY.toFixed(1)})
      </div> */}
    </div>
  )
}
