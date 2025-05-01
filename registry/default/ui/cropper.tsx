import * as React from 'react';
import { useState, useEffect, useRef, useCallback, useId, createContext, useContext } from 'react';

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

type Area = { x: number; y: number; width: number; height: number };

interface CropperContextValue {
  containerRef: React.RefObject<HTMLDivElement | null>;
  image: string | null;
  imgWidth: number | null;
  imgHeight: number | null;
  cropAreaWidth: number;
  cropAreaHeight: number;
  imageWrapperWidth: number;
  imageWrapperHeight: number;
  offsetX: number;
  offsetY: number;
  effectiveZoom: number;
  minZoom: number;
  maxZoom: number;
  getRootProps: () => React.HTMLAttributes<HTMLDivElement>;
  getImageProps: () => React.ImgHTMLAttributes<HTMLImageElement>;
  getImageWrapperStyle: () => React.CSSProperties;
  getCropAreaProps: () => React.HTMLAttributes<HTMLDivElement>;
  getCropAreaStyle: () => React.CSSProperties;
  descriptionId: string;
}

const CropperContext = createContext<CropperContextValue | null>(null);

const useCropperContext = () => {
  const context = useContext(CropperContext);
  if (!context) {
    throw new Error('useCropperContext must be used within a Cropper.Root');
  }
  return context;
};

const CROPPPER_DESC_WARN_MESSAGE = `Warning: \`Cropper.Root\` requires a \`Cropper.Description\` child for the component to be accessible for screen reader users.

If you want to hide the description visually, you can either pass your own className with sr-only styles.

Example:
<Cropper.Root>
  ...
  <Cropper.Description className="sr-only">
    Instructions for using the cropper.
  </Cropper.Description>
  ...
</Cropper.Root>
`;

interface CropperRootProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  cropPadding?: number;
  aspectRatio?: number;
  minZoom?: number;
  maxZoom?: number;
  zoomSensitivity?: number;
  keyboardStep?: number;
  zoom?: number; // Controlled zoom
  onCropChange?: (pixels: Area | null) => void;
  onZoomChange?: (zoom: number) => void;
  children: React.ReactNode;
}

const CropperRoot: React.FC<CropperRootProps> = ({
  image,
  cropPadding = 25,
  aspectRatio = 1,
  minZoom = 1,
  maxZoom = 3,
  zoomSensitivity = 0.005,
  keyboardStep = 10,
  className,
  style,
  zoom: zoomProp,
  onCropChange,
  onZoomChange,
  children,
  ...restProps
}) => {
  const descriptionId = useId();
  const [imgWidth, setImgWidth] = useState<number | null>(null);
  const [imgHeight, setImgHeight] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [cropAreaWidth, setCropAreaWidth] = useState<number>(0);
  const [cropAreaHeight, setCropAreaHeight] = useState<number>(0);
  const [imageWrapperWidth, setImageWrapperWidth] = useState<number>(0);
  const [imageWrapperHeight, setImageWrapperHeight] = useState<number>(0);

  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [internalZoom, setInternalZoom] = useState<number>(minZoom);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartPointRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const dragStartOffsetRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const latestRestrictedOffsetRef = useRef<{ x: number, y: number }>({ x: offsetX, y: offsetY });
  const latestZoomRef = useRef<number>(internalZoom);
  const isInitialSetupDoneRef = useRef<boolean>(false);
  const initialPinchDistanceRef = useRef<number>(0);
  const initialPinchZoomRef = useRef<number>(1);
  const isPinchingRef = useRef<boolean>(false);

  // Warning state
  const hasWarnedRef = useRef(false);

  const isZoomControlled = zoomProp !== undefined;
  const effectiveZoom = isZoomControlled ? zoomProp : internalZoom;

  const updateZoom = useCallback((newZoomValue: number) => {
    const clampedZoom = clamp(newZoomValue, minZoom, maxZoom);
    if (onZoomChange) {
      onZoomChange(clampedZoom);
    } else if (!isZoomControlled) {
      setInternalZoom(clampedZoom);
    }
    return clampedZoom;
  }, [minZoom, maxZoom, onZoomChange, isZoomControlled]);

  useEffect(() => {
    latestZoomRef.current = effectiveZoom;
  }, [effectiveZoom]);

  useEffect(() => {
    setOffsetX(0);
    setOffsetY(0);
    if (!isZoomControlled) {
      setInternalZoom(minZoom);
    }
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

    return () => { isMounted = false; };
  }, [image, minZoom, isZoomControlled]);

  const updateCropAreaDimensions = useCallback((containerWidth: number, containerHeight: number) => {
    if (containerWidth <= 0 || containerHeight <= 0) {
      setCropAreaWidth(0); setCropAreaHeight(0); return;
    }
    const maxPossibleWidth = Math.max(0, containerWidth - cropPadding * 2);
    const maxPossibleHeight = Math.max(0, containerHeight - cropPadding * 2);
    let targetCropW = 0, targetCropH = 0;
    if (maxPossibleWidth / aspectRatio >= maxPossibleHeight) {
      targetCropH = maxPossibleHeight; targetCropW = targetCropH * aspectRatio;
    } else {
      targetCropW = maxPossibleWidth; targetCropH = targetCropW / aspectRatio;
    }
    setCropAreaWidth(targetCropW); setCropAreaHeight(targetCropH);
  }, [aspectRatio, cropPadding]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) updateCropAreaDimensions(width, height);
      }
    });
    observer.observe(element);
    const initialWidth = element.clientWidth;
    const initialHeight = element.clientHeight;
    if (initialWidth > 0 && initialHeight > 0) updateCropAreaDimensions(initialWidth, initialHeight);
    return () => observer.disconnect();
  }, [updateCropAreaDimensions]);

  useEffect(() => {
    if (cropAreaWidth <= 0 || cropAreaHeight <= 0 || !imgWidth || !imgHeight) {
      setImageWrapperWidth(0); setImageWrapperHeight(0); return;
    }
    const naturalAspect = imgWidth / imgHeight;
    const cropAspect = cropAreaWidth / cropAreaHeight;
    let targetWrapperWidth = 0, targetWrapperHeight = 0;
    if (naturalAspect >= cropAspect) {
      targetWrapperHeight = cropAreaHeight; targetWrapperWidth = targetWrapperHeight * naturalAspect;
    } else {
      targetWrapperWidth = cropAreaWidth; targetWrapperHeight = targetWrapperWidth / naturalAspect;
    }
    setImageWrapperWidth(targetWrapperWidth); setImageWrapperHeight(targetWrapperHeight);
  }, [cropAreaWidth, cropAreaHeight, imgWidth, imgHeight]);

  const restrictOffset = useCallback((dragOffsetX: number, dragOffsetY: number, currentZoom: number): { x: number, y: number } => {
    if (imageWrapperWidth <= 0 || imageWrapperHeight <= 0 || cropAreaWidth <= 0 || cropAreaHeight <= 0) return { x: 0, y: 0 };
    const effectiveWrapperWidth = imageWrapperWidth * currentZoom;
    const effectiveWrapperHeight = imageWrapperHeight * currentZoom;
    const maxDragX = Math.max(0, (effectiveWrapperWidth - cropAreaWidth) / 2);
    const maxDragY = Math.max(0, (effectiveWrapperHeight - cropAreaHeight) / 2);
    return { x: clamp(dragOffsetX, -maxDragX, maxDragX), y: clamp(dragOffsetY, -maxDragY, maxDragY) };
  }, [imageWrapperWidth, imageWrapperHeight, cropAreaWidth, cropAreaHeight]);

  const calculateCropData = useCallback((
    finalOffsetX?: number, finalOffsetY?: number, finalZoom?: number
  ): Area | null => {
    const currentOffsetX = finalOffsetX !== undefined ? finalOffsetX : latestRestrictedOffsetRef.current.x;
    const currentOffsetY = finalOffsetY !== undefined ? finalOffsetY : latestRestrictedOffsetRef.current.y;
    const currentZoom = finalZoom !== undefined ? finalZoom : effectiveZoom;
    if (!imgWidth || !imgHeight || imageWrapperWidth <= 0 || imageWrapperHeight <= 0 || cropAreaWidth <= 0 || cropAreaHeight <= 0) return null;

    const scaledWrapperWidth = imageWrapperWidth * currentZoom;
    const scaledWrapperHeight = imageWrapperHeight * currentZoom;
    const topLeftOffsetX = currentOffsetX + (cropAreaWidth - scaledWrapperWidth) / 2;
    const topLeftOffsetY = currentOffsetY + (cropAreaHeight - scaledWrapperHeight) / 2;
    const baseScale = imgWidth / imageWrapperWidth;
    if (isNaN(baseScale) || baseScale === 0) return null;

    const sx = -topLeftOffsetX * baseScale / currentZoom;
    const sy = -topLeftOffsetY * baseScale / currentZoom;
    const sWidth = cropAreaWidth * baseScale / currentZoom;
    const sHeight = cropAreaHeight * baseScale / currentZoom;

    const finalX = clamp(Math.round(sx), 0, imgWidth);
    const finalY = clamp(Math.round(sy), 0, imgHeight);
    const finalWidth = clamp(Math.round(sWidth), 0, imgWidth - finalX);
    const finalHeight = clamp(Math.round(sHeight), 0, imgHeight - finalY);

    if (finalWidth <= 0 || finalHeight <= 0) return null;
    return { x: finalX, y: finalY, width: finalWidth, height: finalHeight };
  }, [imgWidth, imgHeight, imageWrapperWidth, imageWrapperHeight, cropAreaWidth, cropAreaHeight, effectiveZoom]);

  useEffect(() => {
    if (imageWrapperWidth > 0 && imageWrapperHeight > 0 && cropAreaWidth > 0 && cropAreaHeight > 0) {
      const currentZoomForSetup = effectiveZoom;
      if (!isInitialSetupDoneRef.current) {
        const initialX = 0, initialY = 0;
        const restrictedInitial = restrictOffset(initialX, initialY, currentZoomForSetup);
        setOffsetX(restrictedInitial.x); setOffsetY(restrictedInitial.y);
        if (!isZoomControlled) setInternalZoom(currentZoomForSetup);
        dragStartOffsetRef.current = restrictedInitial;
        latestRestrictedOffsetRef.current = restrictedInitial;
        latestZoomRef.current = currentZoomForSetup;
        if (onCropChange) onCropChange(calculateCropData(restrictedInitial.x, restrictedInitial.y, currentZoomForSetup));
        isInitialSetupDoneRef.current = true;
      } else {
        const restrictedCurrent = restrictOffset(latestRestrictedOffsetRef.current.x, latestRestrictedOffsetRef.current.y, currentZoomForSetup);
        if (restrictedCurrent.x !== latestRestrictedOffsetRef.current.x || restrictedCurrent.y !== latestRestrictedOffsetRef.current.y) {
          setOffsetX(restrictedCurrent.x); setOffsetY(restrictedCurrent.y);
          latestRestrictedOffsetRef.current = restrictedCurrent;
          dragStartOffsetRef.current = restrictedCurrent;
        }
        if (onCropChange) onCropChange(calculateCropData(restrictedCurrent.x, restrictedCurrent.y, currentZoomForSetup));
      }
    } else {
      isInitialSetupDoneRef.current = false;
      setOffsetX(0); setOffsetY(0);
      if (!isZoomControlled) setInternalZoom(minZoom);
      dragStartOffsetRef.current = { x: 0, y: 0 };
      latestRestrictedOffsetRef.current = { x: 0, y: 0 };
      latestZoomRef.current = effectiveZoom;
      if (onCropChange) onCropChange(null);
    }
  }, [imageWrapperWidth, imgHeight, cropAreaWidth, cropAreaHeight, restrictOffset, onCropChange, calculateCropData, minZoom, effectiveZoom, isZoomControlled, updateZoom]);


  // Effect to check for Description component
  useEffect(() => {
    // Check only once after initial mount and layout effects
    const checkTimeout = setTimeout(() => {
      if (containerRef.current && !hasWarnedRef.current) {
        const hasDescription = document.getElementById(descriptionId);
        if (!hasDescription) {
          console.warn(CROPPPER_DESC_WARN_MESSAGE);
          hasWarnedRef.current = true; // Prevent repeated warnings
        }
      }
    }, 100); // Small delay to allow children to render

    return () => clearTimeout(checkTimeout);
  }, [descriptionId]); // Only depends on descriptionId


  const handleInteractionEnd = useCallback(() => {
    if (onCropChange) {
      const finalData = calculateCropData(
        latestRestrictedOffsetRef.current.x,
        latestRestrictedOffsetRef.current.y,
        effectiveZoom
      );
      onCropChange(finalData);
    }
  }, [onCropChange, calculateCropData, effectiveZoom]);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0 || !containerRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    isPinchingRef.current = false;
    dragStartPointRef.current = { x: e.clientX, y: e.clientY };
    dragStartOffsetRef.current = { x: latestRestrictedOffsetRef.current.x, y: latestRestrictedOffsetRef.current.y };
    containerRef.current?.focus();

    const handleMouseMove = (ev: MouseEvent) => {
      const deltaX = ev.clientX - dragStartPointRef.current.x;
      const deltaY = ev.clientY - dragStartPointRef.current.y;
      const targetOffsetX = dragStartOffsetRef.current.x + deltaX;
      const targetOffsetY = dragStartOffsetRef.current.y + deltaY;
      const restricted = restrictOffset(targetOffsetX, targetOffsetY, effectiveZoom);
      latestRestrictedOffsetRef.current = restricted;
      setOffsetX(restricted.x); setOffsetY(restricted.y);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      handleInteractionEnd();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [restrictOffset, effectiveZoom, handleInteractionEnd]);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault(); e.stopPropagation();
    if (!containerRef.current || imageWrapperWidth <= 0 || imageWrapperHeight <= 0) return;

    const currentZoom = latestZoomRef.current;
    const currentOffsetX = latestRestrictedOffsetRef.current.x;
    const currentOffsetY = latestRestrictedOffsetRef.current.y;
    const delta = e.deltaY * -zoomSensitivity;
    const targetZoom = currentZoom + delta;

    if (clamp(targetZoom, minZoom, maxZoom) === currentZoom) return;

    const rect = containerRef.current.getBoundingClientRect();
    const pointerX = e.clientX - rect.left - rect.width / 2;
    const pointerY = e.clientY - rect.top - rect.height / 2;
    const imagePointX = (pointerX - currentOffsetX) / currentZoom;
    const imagePointY = (pointerY - currentOffsetY) / currentZoom;

    const finalNewZoom = updateZoom(targetZoom);

    const newOffsetX = pointerX - (imagePointX * finalNewZoom);
    const newOffsetY = pointerY - (imagePointY * finalNewZoom);
    const restrictedNewOffset = restrictOffset(newOffsetX, newOffsetY, finalNewZoom);

    setOffsetX(restrictedNewOffset.x); setOffsetY(restrictedNewOffset.y);
    latestRestrictedOffsetRef.current = restrictedNewOffset;

    if (onCropChange) {
      const finalData = calculateCropData(restrictedNewOffset.x, restrictedNewOffset.y, finalNewZoom);
      onCropChange(finalData);
    }

  }, [restrictOffset, calculateCropData, imageWrapperWidth, imageWrapperHeight, onCropChange, minZoom, maxZoom, zoomSensitivity, updateZoom]);

  const getPinchDistance = (touches: TouchList): number => Math.sqrt(Math.pow(touches[1].clientX - touches[0].clientX, 2) + Math.pow(touches[1].clientY - touches[0].clientY, 2));
  const getPinchCenter = (touches: TouchList): { x: number, y: number } => ({ x: (touches[0].clientX + touches[1].clientX) / 2, y: (touches[0].clientY + touches[1].clientY) / 2 });

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!containerRef.current || imageWrapperWidth <= 0 || imageWrapperHeight <= 0) return;
    e.preventDefault();
    const touches = e.touches;
    containerRef.current?.focus();

    if (touches.length === 1) {
      setIsDragging(true); isPinchingRef.current = false;
      dragStartPointRef.current = { x: touches[0].clientX, y: touches[0].clientY };
      dragStartOffsetRef.current = { x: latestRestrictedOffsetRef.current.x, y: latestRestrictedOffsetRef.current.y };
    } else if (touches.length === 2) {
      setIsDragging(false); isPinchingRef.current = true;
      initialPinchDistanceRef.current = getPinchDistance(touches);
      initialPinchZoomRef.current = latestZoomRef.current;
      dragStartOffsetRef.current = { x: latestRestrictedOffsetRef.current.x, y: latestRestrictedOffsetRef.current.y };
    }
  }, [imageWrapperWidth, imageWrapperHeight]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!containerRef.current || imageWrapperWidth <= 0 || imageWrapperHeight <= 0) return;
    e.preventDefault();
    const touches = e.touches;

    if (touches.length === 1 && isDragging && !isPinchingRef.current) { // Panning
      const deltaX = touches[0].clientX - dragStartPointRef.current.x;
      const deltaY = touches[0].clientY - dragStartPointRef.current.y;
      const targetOffsetX = dragStartOffsetRef.current.x + deltaX;
      const targetOffsetY = dragStartOffsetRef.current.y + deltaY;
      const restricted = restrictOffset(targetOffsetX, targetOffsetY, effectiveZoom);
      latestRestrictedOffsetRef.current = restricted;
      setOffsetX(restricted.x); setOffsetY(restricted.y);
    } else if (touches.length === 2 && isPinchingRef.current) { // Pinching
      const currentPinchDistance = getPinchDistance(touches);
      const scale = currentPinchDistance / initialPinchDistanceRef.current;
      const currentZoom = initialPinchZoomRef.current;
      const targetZoom = currentZoom * scale;

      if (clamp(targetZoom, minZoom, maxZoom) === latestZoomRef.current) return;

      const pinchCenter = getPinchCenter(touches);
      const rect = containerRef.current.getBoundingClientRect();
      const pinchCenterX = pinchCenter.x - rect.left - rect.width / 2;
      const pinchCenterY = pinchCenter.y - rect.top - rect.height / 2;
      const currentOffsetX = dragStartOffsetRef.current.x;
      const currentOffsetY = dragStartOffsetRef.current.y;
      const imagePointX = (pinchCenterX - currentOffsetX) / currentZoom;
      const imagePointY = (pinchCenterY - currentOffsetY) / currentZoom;

      const finalNewZoom = updateZoom(targetZoom);

      const newOffsetX = pinchCenterX - (imagePointX * finalNewZoom);
      const newOffsetY = pinchCenterY - (imagePointY * finalNewZoom);
      const restrictedNewOffset = restrictOffset(newOffsetX, newOffsetY, finalNewZoom);

      setOffsetX(restrictedNewOffset.x); setOffsetY(restrictedNewOffset.y);
      latestRestrictedOffsetRef.current = restrictedNewOffset;

      if (onCropChange) {
        const finalData = calculateCropData(restrictedNewOffset.x, restrictedNewOffset.y, finalNewZoom);
        onCropChange(finalData);
      }
    }
  }, [isDragging, restrictOffset, minZoom, maxZoom, imageWrapperWidth, imageWrapperHeight, effectiveZoom, updateZoom, onCropChange, calculateCropData]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    e.preventDefault();
    const touches = e.touches;
    if (isPinchingRef.current && touches.length < 2) {
      isPinchingRef.current = false;
      if (touches.length === 1) { // Transition to drag
        setIsDragging(true);
        dragStartPointRef.current = { x: touches[0].clientX, y: touches[0].clientY };
        dragStartOffsetRef.current = { x: latestRestrictedOffsetRef.current.x, y: latestRestrictedOffsetRef.current.y };
      } else { // Pinch ended
        setIsDragging(false);
        handleInteractionEnd();
      }
    } else if (isDragging && touches.length === 0) { // Drag ended
      setIsDragging(false);
      handleInteractionEnd();
    }
  }, [isDragging, handleInteractionEnd]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (imageWrapperWidth <= 0) return;
    let targetOffsetX = latestRestrictedOffsetRef.current.x;
    let targetOffsetY = latestRestrictedOffsetRef.current.y;
    let moved = false;
    switch (e.key) {
      case 'ArrowUp': targetOffsetY += keyboardStep; moved = true; break;
      case 'ArrowDown': targetOffsetY -= keyboardStep; moved = true; break;
      case 'ArrowLeft': targetOffsetX += keyboardStep; moved = true; break;
      case 'ArrowRight': targetOffsetX -= keyboardStep; moved = true; break;
      default: return;
    }
    if (moved) {
      e.preventDefault();
      const restricted = restrictOffset(targetOffsetX, targetOffsetY, effectiveZoom);
      if (restricted.x !== latestRestrictedOffsetRef.current.x || restricted.y !== latestRestrictedOffsetRef.current.y) {
        latestRestrictedOffsetRef.current = restricted;
        setOffsetX(restricted.x); setOffsetY(restricted.y);
      }
    }
  }, [keyboardStep, imageWrapperWidth, restrictOffset, effectiveZoom]);

  const handleKeyUp = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      handleInteractionEnd();
    }
  }, [handleInteractionEnd]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const options = { passive: false } as any;
    node.addEventListener('wheel', handleWheel, options);
    node.addEventListener('touchstart', handleTouchStart, options);
    node.addEventListener('touchmove', handleTouchMove, options);
    node.addEventListener('touchend', handleTouchEnd, options);
    node.addEventListener('touchcancel', handleTouchEnd, options);
    return () => {
      node.removeEventListener('wheel', handleWheel, options);
      node.removeEventListener('touchstart', handleTouchStart, options);
      node.removeEventListener('touchmove', handleTouchMove, options);
      node.removeEventListener('touchend', handleTouchEnd, options);
      node.removeEventListener('touchcancel', handleTouchEnd, options);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);

  const getRootProps = useCallback((): Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> => ({
    className: className,
    style: style,
    onMouseDown: handleMouseDown,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    tabIndex: 0,
    role: "application",
    "aria-label": "Interactive image cropper",
    "aria-describedby": descriptionId,
    "aria-valuemin": minZoom,
    "aria-valuemax": maxZoom,
    "aria-valuenow": effectiveZoom,
    "aria-valuetext": `Zoom: ${Math.round(effectiveZoom * 100)}%`,
  }), [className, style, handleMouseDown, handleKeyDown, handleKeyUp, descriptionId, minZoom, maxZoom, effectiveZoom]);

  const getImageWrapperStyle = useCallback((): React.CSSProperties => ({
    width: imageWrapperWidth,
    height: imageWrapperHeight,
    transform: `translate3d(${offsetX}px, ${offsetY}px, 0px) scale(${effectiveZoom})`,
    position: 'absolute',
    left: `calc(50% - ${imageWrapperWidth / 2}px)`,
    top: `calc(50% - ${imageWrapperHeight / 2}px)`,
    willChange: 'transform',
  }), [imageWrapperWidth, imageWrapperHeight, offsetX, offsetY, effectiveZoom]);

  const getImageProps = useCallback((): React.ImgHTMLAttributes<HTMLImageElement> => ({
    src: image,
    alt: "Image being cropped",
    draggable: false,
    "aria-hidden": true,
  }), [image]);

  const getCropAreaStyle = useCallback((): React.CSSProperties => ({
    width: cropAreaWidth,
    height: cropAreaHeight,
  }), [cropAreaWidth, cropAreaHeight]);

  const getCropAreaProps = useCallback((): React.HTMLAttributes<HTMLDivElement> => ({
    style: getCropAreaStyle(),
    "aria-hidden": true,
  }), [getCropAreaStyle]);

  const contextValue: CropperContextValue = {
    containerRef,
    image,
    imgWidth,
    imgHeight,
    cropAreaWidth,
    cropAreaHeight,
    imageWrapperWidth,
    imageWrapperHeight,
    offsetX,
    offsetY,
    effectiveZoom,
    minZoom,
    maxZoom,
    getRootProps,
    getImageProps,
    getImageWrapperStyle,
    getCropAreaProps,
    getCropAreaStyle,
    descriptionId,
  };

  return (
    <CropperContext.Provider value={contextValue}>
      <div ref={containerRef} {...getRootProps()} {...restProps}>
        {/* Children are rendered here, including the expected Cropper.Description */}
        {children}
      </div>
    </CropperContext.Provider>
  );
};

const CropperImage: React.FC<Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'draggable' | 'style'>> = ({ className, ...restProps }) => {
  const { image, getImageProps, getImageWrapperStyle } = useCropperContext();

  if (!image) return null;

  const imageProps = getImageProps();

  return (
    <div data-slot="crop-image-wrapper" style={getImageWrapperStyle()}>
      <img
        {...imageProps}
        className={className}
        {...restProps}
      />
    </div>
  );
};

const CropperCropArea: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, style, ...restProps }) => {
  const { cropAreaWidth, cropAreaHeight, getCropAreaProps, getCropAreaStyle } = useCropperContext();

  if (cropAreaWidth <= 0 || cropAreaHeight <= 0) return null;

  const areaProps = getCropAreaProps();
  const areaStyle = getCropAreaStyle();

  return (
    <div
      data-slot="crop-area"
      {...areaProps}
      style={{ ...areaProps.style, ...style, ...areaStyle }}
      className={className}
      {...restProps}
    ></div>
  );
};

const CropperDescription: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...restProps }) => {
  const { descriptionId } = useCropperContext();

  return (
    <div id={descriptionId} className={className} {...restProps}>
      {children ?? (
        // Default description if none provided by user
        "Use mouse wheel or pinch gesture to zoom. Drag with mouse or touch, or use arrow keys to pan the image within the crop area."
      )}
    </div>
  );
};


export const Cropper = {
  Root: CropperRoot,
  Image: CropperImage,
  CropArea: CropperCropArea,
  Description: CropperDescription,
};
