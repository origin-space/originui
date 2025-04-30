"use client"

import { useState, useEffect, useRef, useCallback, useId } from 'react';

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
  keyboardStep = 10,
  className,
  onCropChange
}: {
  image: string
  cropPadding?: number
  aspectRatio?: number
  minZoom?: number
  maxZoom?: number
  zoomSensitivity?: number
  keyboardStep?: number
  className?: string
  onCropChange?: (pixels: Area | null) => void
}) {
  const id = useId();
  const [imgWidth, setImgWidth] = useState<number | null>(null);
  const [imgHeight, setImgHeight] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // State for calculated dimensions
  const [cropAreaWidth, setCropAreaWidth] = useState<number>(0);
  const [cropAreaHeight, setCropAreaHeight] = useState<number>(0);
  const [imageWrapperWidth, setImageWrapperWidth] = useState<number>(0);
  const [imageWrapperHeight, setImageWrapperHeight] = useState<number>(0);

  // State for dragging
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(minZoom);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartPointRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const dragStartOffsetRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const latestRestrictedOffsetRef = useRef<{ x: number, y: number }>({ x: offsetX, y: offsetY });
  const latestZoomRef = useRef<number>(zoom);
  const isInitialSetupDoneRef = useRef<boolean>(false);
  const initialPinchDistanceRef = useRef<number>(0);
  const initialPinchZoomRef = useRef<number>(1);
  const isPinchingRef = useRef<boolean>(false);

  // Update latest zoom ref whenever zoom state changes
  useEffect(() => {
    latestZoomRef.current = zoom;
  }, [zoom]);

  // Effect to reset state when image changes
  useEffect(() => {
    setOffsetX(0);
    setOffsetY(0);
    setZoom(minZoom);
    isInitialSetupDoneRef.current = false;

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
  }, [image, minZoom]);

  // Callback to calculate and set crop area dimensions based on container size
  const updateCropAreaDimensions = useCallback((containerWidth: number, containerHeight: number) => {
    if (containerWidth <= 0 || containerHeight <= 0) {
      setCropAreaWidth(0);
      setCropAreaHeight(0);
      return;
    }

    const maxPossibleWidth = Math.max(0, containerWidth - cropPadding * 2);
    const maxPossibleHeight = Math.max(0, containerHeight - cropPadding * 2);

    let targetCropW = 0;
    let targetCropH = 0;

    // Determine limiting dimension based on aspect ratio
    if (maxPossibleWidth / aspectRatio >= maxPossibleHeight) {
      // Height is limiting
      targetCropH = maxPossibleHeight;
      targetCropW = targetCropH * aspectRatio;
    } else {
      // Width is limiting
      targetCropW = maxPossibleWidth;
      targetCropH = targetCropW / aspectRatio;
    }

    setCropAreaWidth(targetCropW);
    setCropAreaHeight(targetCropH);

  }, [aspectRatio, cropPadding]);

  // Effect to observe container size and update crop area dimensions
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        // Get width and height from contentRect
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          updateCropAreaDimensions(width, height);
        }
      }
    });

    observer.observe(element);

    // Initial check
    const initialWidth = element.clientWidth;
    const initialHeight = element.clientHeight;
    if (initialWidth > 0 && initialHeight > 0) {
      updateCropAreaDimensions(initialWidth, initialHeight);
    }

    return () => observer.disconnect();
  }, [updateCropAreaDimensions]);

  // Effect to calculate image wrapper sizes based on crop area size
  useEffect(() => {
    if (cropAreaWidth <= 0 || cropAreaHeight <= 0) {
      // Reset if crop area dimensions are invalid
      setImageWrapperWidth(0);
      setImageWrapperHeight(0);
      return;
    }

    // Calculate Image Wrapper Dimensions (if image loaded)
    if (imgWidth && imgHeight) {
      const naturalAspect = imgWidth / imgHeight;
      const cropAspect = cropAreaWidth / cropAreaHeight; // Use crop area aspect

      let targetWrapperWidth = 0;
      let targetWrapperHeight = 0;

      if (naturalAspect >= cropAspect) {
        // Image is wider or same aspect as crop area: Match height
        targetWrapperHeight = cropAreaHeight; // Use state variable
        targetWrapperWidth = targetWrapperHeight * naturalAspect;
      } else {
        // Image is taller than crop area: Match width
        targetWrapperWidth = cropAreaWidth; // Use state variable
        targetWrapperHeight = targetWrapperWidth / naturalAspect;
      }

      setImageWrapperWidth(targetWrapperWidth);
      setImageWrapperHeight(targetWrapperHeight);
    } else {
      // Reset if image dimensions are not available (e.g., image not loaded yet)
      setImageWrapperWidth(0);
      setImageWrapperHeight(0);
    }
  }, [cropAreaWidth, cropAreaHeight, imgWidth, imgHeight]);

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

  // Effect to handle initial setup AND recalculate crop on dimension changes
  useEffect(() => {
    if (imageWrapperWidth > 0 && imageWrapperHeight > 0 && cropAreaWidth > 0 && cropAreaHeight > 0) {

      if (!isInitialSetupDoneRef.current) {
        // --- Initial Setup Path --- 
        const initialX = 0;
        const initialY = 0;
        const initialZoom = minZoom; // Start at minZoom

        const restrictedInitial = restrictOffset(initialX, initialY, initialZoom);

        setOffsetX(restrictedInitial.x);
        setOffsetY(restrictedInitial.y);
        setZoom(initialZoom); // Set initial zoom state

        dragStartOffsetRef.current = { x: restrictedInitial.x, y: restrictedInitial.y };
        latestRestrictedOffsetRef.current = { x: restrictedInitial.x, y: restrictedInitial.y };
        latestZoomRef.current = initialZoom;

        if (onCropChange) {
          const initialCropData = calculateCropData(restrictedInitial.x, restrictedInitial.y, initialZoom);
          onCropChange(initialCropData);
        }
        isInitialSetupDoneRef.current = true; // Mark initial setup as done

      } else {
        // --- Resize Path (after initial setup) --- 
        // Dimensions changed, recalculate crop data with current offset/zoom

        // First, ensure the current offset is still valid for the new dimensions/zoom
        const restrictedCurrent = restrictOffset(
          latestRestrictedOffsetRef.current.x,
          latestRestrictedOffsetRef.current.y,
          latestZoomRef.current
        );

        // Update state/refs if restriction changed something (optional, but safer)
        if (restrictedCurrent.x !== latestRestrictedOffsetRef.current.x || restrictedCurrent.y !== latestRestrictedOffsetRef.current.y) {
          setOffsetX(restrictedCurrent.x);
          setOffsetY(restrictedCurrent.y);
          latestRestrictedOffsetRef.current = restrictedCurrent;
          dragStartOffsetRef.current = restrictedCurrent; // Keep drag start consistent
        }

        // Now, recalculate and emit crop data based on potentially re-restricted offset and current zoom
        if (onCropChange) {
          const updatedCropData = calculateCropData(
            latestRestrictedOffsetRef.current.x,
            latestRestrictedOffsetRef.current.y,
            latestZoomRef.current
          );
          onCropChange(updatedCropData);
        }
      }

    } else {
      // Reset if dimensions become invalid - also reset initial setup flag
      isInitialSetupDoneRef.current = false;
      setOffsetX(0);
      setOffsetY(0);
      setZoom(minZoom);
      dragStartOffsetRef.current = { x: 0, y: 0 };
      latestRestrictedOffsetRef.current = { x: 0, y: 0 };
      latestZoomRef.current = minZoom;
      if (onCropChange) {
        onCropChange(null);
      }
    }
  }, [
    imageWrapperWidth,
    imageWrapperHeight,
    cropAreaWidth,
    cropAreaHeight,
    restrictOffset,
    onCropChange,
    calculateCropData,
    minZoom // Added minZoom as it affects initial state
  ]);

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
    const currentX = e.clientX;
    const currentY = e.clientY;

    const deltaX = currentX - dragStartPointRef.current.x;
    const deltaY = currentY - dragStartPointRef.current.y;

    const targetOffsetX = dragStartOffsetRef.current.x + deltaX;
    const targetOffsetY = dragStartOffsetRef.current.y + deltaY;

    const restricted = restrictOffset(targetOffsetX, targetOffsetY, latestZoomRef.current);

    latestRestrictedOffsetRef.current = restricted;

    setOffsetX(restricted.x);
    setOffsetY(restricted.y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    // Call onCropChange when dragging stops
    if (onCropChange) {
      const finalData = calculateCropData(
        latestRestrictedOffsetRef.current.x,
        latestRestrictedOffsetRef.current.y,
        latestZoomRef.current
      );
      onCropChange(finalData);
    }
  };

  // Wheel Handler for Zoom
  const handleWheel = useCallback((e: WheelEvent) => {
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
    latestZoomRef.current = newZoom;
    latestRestrictedOffsetRef.current = restrictedNewOffset;

    // Trigger crop complete callback during zoom
    if (onCropChange) {
      const finalData = calculateCropData(
        restrictedNewOffset.x,
        restrictedNewOffset.y,
        newZoom
      );
      onCropChange(finalData);
    }
  }, [
    restrictOffset,
    calculateCropData,
    imageWrapperWidth,
    imageWrapperHeight,
    onCropChange,
    minZoom,
    maxZoom,
    zoomSensitivity
  ]);

  // --- Touch Event Handlers ---

  // Helper function to calculate distance between two touches
  const getPinchDistance = (touches: TouchList): number => {
    const touch1 = touches[0];
    const touch2 = touches[1];
    return Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) +
      Math.pow(touch2.clientY - touch1.clientY, 2)
    );
  };

  // Helper function to calculate the center point between two touches
  const getPinchCenter = (touches: TouchList): { x: number, y: number } => {
    const touch1 = touches[0];
    const touch2 = touches[1];
    return {
      x: (touch1.clientX + touch2.clientX) / 2,
      y: (touch1.clientY + touch2.clientY) / 2,
    };
  };

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!containerRef.current || imageWrapperWidth <= 0 || imageWrapperHeight <= 0) return;

    const touches = e.touches;

    if (touches.length === 1) {
      // Start panning (drag)
      setIsDragging(true);
      isPinchingRef.current = false;
      const touch = touches[0];
      dragStartPointRef.current = { x: touch.clientX, y: touch.clientY };
      dragStartOffsetRef.current = { x: latestRestrictedOffsetRef.current.x, y: latestRestrictedOffsetRef.current.y };
    } else if (touches.length === 2) {
      // Start pinching (zoom)
      setIsDragging(false);
      isPinchingRef.current = true;
      initialPinchDistanceRef.current = getPinchDistance(touches);
      initialPinchZoomRef.current = latestZoomRef.current;
      dragStartOffsetRef.current = { x: latestRestrictedOffsetRef.current.x, y: latestRestrictedOffsetRef.current.y };
    }
  }, [imageWrapperWidth, imageWrapperHeight]);


  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!containerRef.current || imageWrapperWidth <= 0 || imageWrapperHeight <= 0) return;

    const touches = e.touches;

    if (touches.length === 1 && isDragging && !isPinchingRef.current) {
      // Panning
      const touch = touches[0];
      const currentX = touch.clientX;
      const currentY = touch.clientY;

      const deltaX = currentX - dragStartPointRef.current.x;
      const deltaY = currentY - dragStartPointRef.current.y;

      const targetOffsetX = dragStartOffsetRef.current.x + deltaX;
      const targetOffsetY = dragStartOffsetRef.current.y + deltaY;

      const restricted = restrictOffset(targetOffsetX, targetOffsetY, latestZoomRef.current);
      latestRestrictedOffsetRef.current = restricted;

      setOffsetX(restricted.x);
      setOffsetY(restricted.y);

    } else if (touches.length === 2 && isPinchingRef.current) {
      // Pinching
      const currentPinchDistance = getPinchDistance(touches);
      const scale = currentPinchDistance / initialPinchDistanceRef.current;
      const newZoom = clamp(initialPinchZoomRef.current * scale, minZoom, maxZoom);

      if (newZoom === latestZoomRef.current) return;

      const pinchCenter = getPinchCenter(touches);
      const rect = containerRef.current.getBoundingClientRect();
      const pinchCenterX = pinchCenter.x - rect.left - rect.width / 2;
      const pinchCenterY = pinchCenter.y - rect.top - rect.height / 2;

      const currentZoom = latestZoomRef.current;
      const currentOffsetX = latestRestrictedOffsetRef.current.x;
      const currentOffsetY = latestRestrictedOffsetRef.current.y;
      const imagePointX = (pinchCenterX - currentOffsetX) / currentZoom;
      const imagePointY = (pinchCenterY - currentOffsetY) / currentZoom;

      const newOffsetX = pinchCenterX - (imagePointX * newZoom);
      const newOffsetY = pinchCenterY - (imagePointY * newZoom);

      const restrictedNewOffset = restrictOffset(newOffsetX, newOffsetY, newZoom);

      setZoom(newZoom);
      setOffsetX(restrictedNewOffset.x);
      latestZoomRef.current = newZoom;
      latestRestrictedOffsetRef.current = restrictedNewOffset;
    }
  }, [isDragging, restrictOffset, minZoom, maxZoom, imageWrapperWidth, imageWrapperHeight]);


  const handleTouchEnd = useCallback((e: TouchEvent) => {
    const touches = e.touches;

    if (isPinchingRef.current && touches.length < 2) {
      // Pinch ended
      isPinchingRef.current = false;
      if (touches.length === 1) {
        // Transition to drag
        setIsDragging(true);
        const touch = touches[0];
        dragStartPointRef.current = { x: touch.clientX, y: touch.clientY };
        dragStartOffsetRef.current = { x: latestRestrictedOffsetRef.current.x, y: latestRestrictedOffsetRef.current.y };
      } else {
        // Pinch ended, zero fingers remain
        setIsDragging(false);
        if (onCropChange) {
          const finalData = calculateCropData(
            latestRestrictedOffsetRef.current.x,
            latestRestrictedOffsetRef.current.y,
            latestZoomRef.current
          );
          onCropChange(finalData);
        }
      }
    } else if (isDragging && touches.length === 0) {
      // Drag ended
      setIsDragging(false);
      if (onCropChange) {
        const finalData = calculateCropData(
          latestRestrictedOffsetRef.current.x,
          latestRestrictedOffsetRef.current.y,
          latestZoomRef.current
        );
        onCropChange(finalData);
      }
    }

  }, [isDragging, onCropChange, calculateCropData]);


  // Cleanup drag listeners on unmount
  useEffect(() => {
    // Ensure listeners are removed if component unmounts during drag
    const removeDragListeners = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
    return removeDragListeners;
  }, []);

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
  }, [handleWheel]);

  // Effect to attach non-passive touch listeners
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    // Attach touch listeners manually with passive: false
    // Cast options to 'any' to bypass potential TS errors
    node.addEventListener('touchstart', handleTouchStart, { passive: false } as any);
    node.addEventListener('touchmove', handleTouchMove, { passive: false } as any);
    node.addEventListener('touchend', handleTouchEnd, { passive: false } as any);
    node.addEventListener('touchcancel', handleTouchEnd, { passive: false } as any); // Handle cancellation too

    // Cleanup function to remove the listeners
    return () => {
      node.removeEventListener('touchstart', handleTouchStart, { passive: false } as any);
      node.removeEventListener('touchmove', handleTouchMove, { passive: false } as any);
      node.removeEventListener('touchend', handleTouchEnd, { passive: false } as any);
      node.removeEventListener('touchcancel', handleTouchEnd, { passive: false } as any);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  // Keyboard Handlers
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    // Require focus on the container and valid dimensions
    if (document.activeElement !== containerRef.current || imageWrapperWidth <= 0) {
      return;
    }

    let targetOffsetX = latestRestrictedOffsetRef.current.x;
    let targetOffsetY = latestRestrictedOffsetRef.current.y;
    let moved = false;

    switch (e.key) {
      case 'ArrowUp':
        targetOffsetY += keyboardStep;
        moved = true;
        break;
      case 'ArrowDown':
        targetOffsetY -= keyboardStep;
        moved = true;
        break;
      case 'ArrowLeft':
        targetOffsetX += keyboardStep;
        moved = true;
        break;
      case 'ArrowRight':
        targetOffsetX -= keyboardStep;
        moved = true;
        break;
      default:
        return;
    }

    if (moved) {
      e.preventDefault(); // Prevent default arrow key scroll

      const currentZoom = latestZoomRef.current;
      const restricted = restrictOffset(targetOffsetX, targetOffsetY, currentZoom);

      // Only update if position actually changed after restriction
      if (restricted.x !== latestRestrictedOffsetRef.current.x || restricted.y !== latestRestrictedOffsetRef.current.y) {
        latestRestrictedOffsetRef.current = restricted;
        setOffsetX(restricted.x);
        setOffsetY(restricted.y);
      }
    }

  }, [keyboardStep, imageWrapperWidth, restrictOffset, onCropChange, calculateCropData]);

  const handleKeyUp = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    // Only trigger on arrow keys
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      if (onCropChange) {
        // Use latest refs for final data calculation
        const finalData = calculateCropData(
          latestRestrictedOffsetRef.current.x,
          latestRestrictedOffsetRef.current.y,
          latestZoomRef.current
        );
        onCropChange(finalData);
      }
    }
  }, [onCropChange, calculateCropData]);

  return (
    <div
      ref={containerRef}
      data-slot="crop-container"
      className={`relative h-120 w-full flex flex-col items-center justify-center bg-muted overflow-hidden cursor-move focus:outline-none ${className ?? ''}`}
      onMouseDown={handleMouseDown}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      style={{ touchAction: 'none' }}
      role="application"
      aria-label="Interactive image cropper"
      aria-describedby={id}
      aria-valuemin={minZoom}
      aria-valuemax={maxZoom}
      aria-valuenow={zoom}
      aria-valuetext={`Zoom: ${Math.round(zoom * 100)}%`}
    >
      <div id={id} className="sr-only">
        Use mouse wheel or pinch gesture to zoom. Drag with mouse or touch, or use arrow keys to pan the image within the crop area.
      </div>      
      {(imageWrapperWidth > 0 && imageWrapperHeight > 0) && (
        <div
          data-slot="crop-image"
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
            alt="Image being cropped"
            draggable="false"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          />
        </div>
      )}
      {(cropAreaWidth > 0 && cropAreaHeight > 0) && (
        <div
          data-slot="crop-area"
          className="border-2 border-blue-500 absolute rounded-xs shadow-[0_0_0_9999px_rgba(0,0,0,0.2)] pointer-events-none in-[[data-slot=crop-container]:focus-visible]:ring-[3px] in-[[data-slot=crop-container]:focus-visible]:ring-white/50"
          style={{
            width: cropAreaWidth,
            height: cropAreaHeight,
          }}
        ></div>
      )}
    </div>
  )
}
