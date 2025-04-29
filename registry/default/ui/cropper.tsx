"use client"

import { useState, useEffect, useRef } from 'react';

export function Cropper({
  image,
  cropPadding = 25,
  aspectRatio = 1,
  className
}: {
  image: string
  cropPadding?: number
  aspectRatio?: number
  className?: string
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

  useEffect(() => {
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

  return (
    <div ref={containerRef} className="relative h-120 w-full flex flex-col items-center justify-center bg-muted overflow-hidden cursor-move">
      {(imageWrapperWidth > 0 && imageWrapperHeight > 0) && (
        <div
          style={{
            width: imageWrapperWidth,
            height: imageWrapperHeight,
            transform: `translate3d(0px, 0px, 0px)`,
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