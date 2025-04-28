import * as React from 'react'
import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import normalizeWheel from 'normalize-wheel'
import { Area, MediaSize, Point, Size, VideoSrc } from './types'
import {
  getCropSize,
  restrictPosition,
  getDistanceBetweenPoints,
  getRotationBetweenPoints,
  computeCroppedArea,
  getCenter,
  getInitialCropFromCroppedAreaPixels,
  getInitialCropFromCroppedAreaPercentages,
  classNames,
  clamp,
} from './helpers'
import './styles.css'

export type CropperProps = {
  image?: string
  video?: string | VideoSrc[]
  transform?: string
  crop: Point
  zoom?: number
  rotation?: number
  aspect?: number
  minZoom?: number
  maxZoom?: number
  cropShape?: 'rect' | 'round'
  cropSize?: Size
  objectFit?: 'contain' | 'cover' | 'horizontal-cover' | 'vertical-cover'
  showGrid?: boolean
  zoomSpeed?: number
  zoomWithScroll?: boolean
  onCropChange: (location: Point) => void
  onZoomChange?: (zoom: number) => void
  onRotationChange?: (rotation: number) => void
  onCropComplete?: (croppedArea: Area, croppedAreaPixels: Area) => void
  onCropAreaChange?: (croppedArea: Area, croppedAreaPixels: Area) => void
  onCropSizeChange?: (cropSize: Size) => void
  onInteractionStart?: () => void
  onInteractionEnd?: () => void
  onMediaLoaded?: (mediaSize: MediaSize) => void
  style?: { // Optional style prop
    containerStyle?: React.CSSProperties
    mediaStyle?: React.CSSProperties
    cropAreaStyle?: React.CSSProperties
  }
  classes?: { // Optional classes prop
    containerClassName?: string
    mediaClassName?: string
    cropAreaClassName?: string
  }
  restrictPosition?: boolean // Optional prop
  mediaProps?: React.ImgHTMLAttributes<HTMLElement> | React.VideoHTMLAttributes<HTMLElement>
  cropperProps?: React.HTMLAttributes<HTMLDivElement>
  disableAutomaticStylesInjection?: boolean
  initialCroppedAreaPixels?: Area
  initialCroppedAreaPercentages?: Area
  onTouchRequest?: (e: React.TouchEvent<HTMLDivElement>) => boolean
  onWheelRequest?: (e: WheelEvent) => boolean
  setCropperRef?: (ref: HTMLDivElement | null) => void
  setImageRef?: (ref: HTMLImageElement | null) => void
  setVideoRef?: (ref: HTMLVideoElement | null) => void
  setMediaSize?: (size: MediaSize) => void
  setCropSize?: (size: Size) => void
  nonce?: string
  keyboardStep?: number // Optional prop
}

const MIN_ZOOM = 1
const MAX_ZOOM = 3
const KEYBOARD_STEP = 1

type GestureEvent = UIEvent & {
  rotation: number
  scale: number
  clientX: number
  clientY: number
}

// Helper hook to keep refs updated with the latest callbacks
function useEventCallback<T extends (...args: any[]) => any>(fn: T): T {
  const ref = useRef<T>(fn)
  useEffect(() => {
    ref.current = fn
  }, [fn])
  return useCallback((...args: Parameters<T>): ReturnType<T> => {
    return ref.current(...args)
  }, []) as T
}

export function Cropper({
  image,
  video,
  transform,
  crop, // Required prop, no default here
  zoom = 1,
  rotation = 0,
  aspect = 4 / 3,
  minZoom = MIN_ZOOM,
  maxZoom = MAX_ZOOM,
  cropShape = 'rect',
  cropSize: cropSizeProp,
  objectFit = 'contain',
  showGrid = true,
  zoomSpeed = 1,
  zoomWithScroll = true,
  onCropChange, // Required prop
  onZoomChange,
  onRotationChange,
  onCropComplete,
  onCropAreaChange,
  onCropSizeChange,
  onInteractionStart,
  onInteractionEnd,
  onMediaLoaded,
  style = {}, // Default to empty object if not provided
  classes = {}, // Default to empty object
  restrictPosition: shouldRestrictPosition = true,
  mediaProps = {}, // Default to empty object
  cropperProps = {}, // Default to empty object
  disableAutomaticStylesInjection, // Keep optional, handle logic if needed
  initialCroppedAreaPixels,
  initialCroppedAreaPercentages,
  onTouchRequest,
  onWheelRequest,
  setCropperRef,
  setImageRef,
  setVideoRef,
  setMediaSize: setMediaSizeProp,
  setCropSize: setCropSizeProp,
  nonce, // Keep optional
  keyboardStep = KEYBOARD_STEP, // Use default constant
}: CropperProps) {
  const [cropSizeState, setCropSizeState] = useState<Size | null>(null)
  const [hasWheelJustStarted, setHasWheelJustStarted] = useState(false)

  // DOM Refs
  const cropperDomRef = useRef<HTMLDivElement>(null)
  const imageDomRef = useRef<HTMLImageElement>(null)
  const videoDomRef = useRef<HTMLVideoElement>(null)
  const containerDomRef = useRef<HTMLDivElement>(null)

  // Mutable instance variables refs
  const mediaSizeRef = useRef<MediaSize & { objectFit?: string }>({ width: 0, height: 0, naturalWidth: 0, naturalHeight: 0, objectFit: undefined })
  const containerPositionRef = useRef<Point>({ x: 0, y: 0 })
  const dragStartPositionRef = useRef<Point>({ x: 0, y: 0 })
  const dragStartCropRef = useRef<Point>({ x: 0, y: 0 })
  const gestureZoomStartRef = useRef(0)
  const gestureRotationStartRef = useRef(0)
  const isTouchingRef = useRef(false)
  const lastPinchDistanceRef = useRef(0)
  const lastPinchRotationRef = useRef(0)
  const rafDragTimeoutRef = useRef<number | null>(null)
  const rafPinchTimeoutRef = useRef<number | null>(null)
  const wheelTimerRef = useRef<number | null>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)
  const isInitialCropSetRef = useRef(false); // Ref to track initial crop setup

  // --- Static-like Helpers (defined outside or as simple functions) ---
  const getMousePoint = (e: MouseEvent | React.MouseEvent | GestureEvent): Point => ({
    x: Number(e.clientX),
    y: Number(e.clientY),
  })

  const getTouchPoint = (touch: Touch | React.Touch): Point => ({
    x: Number(touch.clientX),
    y: Number(touch.clientY),
  })

  // --- Core Logic Callbacks (Memoized with useCallback or useEventCallback) ---

  const saveContainerPosition = useEventCallback(() => {
    if (containerDomRef.current) {
      const bounds = containerDomRef.current.getBoundingClientRect()
      containerPositionRef.current = { x: bounds.left, y: bounds.top }
    }
  })

  const getObjectFit = useCallback(() => {
    if (objectFit === 'cover') {
      const mediaRefValue = imageDomRef.current || videoDomRef.current;
      const containerRefValue = containerDomRef.current;

      console.log('getObjectFit', mediaRefValue, containerRefValue);
      
      if (mediaRefValue && containerRefValue) {
        const containerRect = containerRefValue.getBoundingClientRect();
        if (containerRect.height === 0) return 'contain';

        const containerAspect = containerRect.width / containerRect.height;
        const naturalWidth = imageDomRef.current?.naturalWidth || videoDomRef.current?.videoWidth || 0;
        const naturalHeight = imageDomRef.current?.naturalHeight || videoDomRef.current?.videoHeight || 0;
        const mediaAspect = naturalHeight === 0 ? 1 : naturalWidth / naturalHeight;

        return mediaAspect < containerAspect ? 'horizontal-cover' : 'vertical-cover';
      }
      return 'horizontal-cover';
    }
    return objectFit;
  }, [objectFit])

  const getCropData = useCallback(() => {
    if (!cropSizeState) return null;

    const restrictedPos = shouldRestrictPosition
      ? restrictPosition(crop, mediaSizeRef.current, cropSizeState, zoom, rotation)
      : crop
    return computeCroppedArea(restrictedPos, mediaSizeRef.current, cropSizeState, aspect, zoom, rotation, shouldRestrictPosition)
  }, [cropSizeState, crop, zoom, rotation, aspect, shouldRestrictPosition])

  const emitCropData = useEventCallback(() => {
    const cropData = getCropData()
    if (!cropData) return
    if (onCropComplete) onCropComplete(cropData.croppedAreaPercentages, cropData.croppedAreaPixels)
    if (onCropAreaChange) onCropAreaChange(cropData.croppedAreaPercentages, cropData.croppedAreaPixels)
  })

  const emitCropAreaChange = useEventCallback(() => {
    const cropData = getCropData()
    if (!cropData) return
    if (onCropAreaChange) onCropAreaChange(cropData.croppedAreaPercentages, cropData.croppedAreaPixels)
  })

  const recomputeCropPosition = useEventCallback(() => {
    if (!cropSizeState) return
    const newPosition = shouldRestrictPosition
      ? restrictPosition(crop, mediaSizeRef.current, cropSizeState, zoom, rotation)
      : crop
    if (newPosition.x !== crop.x || newPosition.y !== crop.y) {
      onCropChange(newPosition)
    }
    emitCropData();
  })

  const computeSizes = useEventCallback(() => {
    const mediaRefValue = imageDomRef.current || videoDomRef.current;
    const containerRefValue = containerDomRef.current;

    if (mediaRefValue && containerRefValue) {
      const containerRect = containerRefValue.getBoundingClientRect();
      if (containerRect.width === 0 || containerRect.height === 0) return null;

      saveContainerPosition();
      const containerAspect = containerRect.width / containerRect.height;
      const naturalWidth = imageDomRef.current?.naturalWidth || videoDomRef.current?.videoWidth || 0;
      const naturalHeight = imageDomRef.current?.naturalHeight || videoDomRef.current?.videoHeight || 0;
      const mediaAspect = naturalHeight === 0 ? 1 : naturalWidth / naturalHeight;
      const isMediaScaledDown = mediaRefValue.offsetWidth < naturalWidth || mediaRefValue.offsetHeight < naturalHeight;

      let renderedMediaSize: Size;
      const currentObjectFit = getObjectFit();

      if (isMediaScaledDown) {
        switch (currentObjectFit) {
          default:
          case 'contain':
            renderedMediaSize =
              containerAspect > mediaAspect
                ? { width: containerRect.height * mediaAspect, height: containerRect.height }
                : { width: containerRect.width, height: containerRect.width / mediaAspect };
            break;
          case 'horizontal-cover':
            renderedMediaSize = { width: containerRect.width, height: containerRect.width / mediaAspect };
            break;
          case 'vertical-cover':
            renderedMediaSize = { width: containerRect.height * mediaAspect, height: containerRect.height };
            break;
        }
      } else {
        renderedMediaSize = { width: mediaRefValue.offsetWidth, height: mediaRefValue.offsetHeight };
      }

      if (isNaN(renderedMediaSize.width) || isNaN(renderedMediaSize.height)) return null;

      mediaSizeRef.current = { ...renderedMediaSize, naturalWidth, naturalHeight, objectFit: currentObjectFit };

      if (setMediaSizeProp) setMediaSizeProp(mediaSizeRef.current);

      const newCropSize = cropSizeProp
        ? cropSizeProp
        : getCropSize(
          mediaSizeRef.current.width,
          mediaSizeRef.current.height,
          containerRect.width,
          containerRect.height,
          aspect,
          rotation
        );

      if (isNaN(newCropSize.width) || isNaN(newCropSize.height)) return null;

      if (cropSizeState?.height !== newCropSize.height || cropSizeState?.width !== newCropSize.width) {
        if (onCropSizeChange) onCropSizeChange(newCropSize);
        if (setCropSizeProp) setCropSizeProp(newCropSize);
        setCropSizeState(newCropSize);
      }

      return newCropSize;
    }
    return null;
  })

  const setInitialCrop = useEventCallback((newCropSize: Size) => {
    let initialCrop: Point | null = null;
    let initialZoom: number | null = null;

    if (initialCroppedAreaPercentages) {
      const result = getInitialCropFromCroppedAreaPercentages(
        initialCroppedAreaPercentages,
        mediaSizeRef.current,
        rotation,
        newCropSize,
        minZoom,
        maxZoom
      );
      initialCrop = result.crop;
      initialZoom = result.zoom;
    } else if (initialCroppedAreaPixels) {
      const result = getInitialCropFromCroppedAreaPixels(
        initialCroppedAreaPixels,
        mediaSizeRef.current,
        rotation,
        newCropSize,
        minZoom,
        maxZoom
      );
      initialCrop = result.crop;
      initialZoom = result.zoom;
    }

    if (initialCrop && (initialCrop.x !== crop.x || initialCrop.y !== crop.y)) {
      onCropChange(initialCrop);
    }
    if (initialZoom !== null && initialZoom !== zoom && onZoomChange) {
      onZoomChange(initialZoom);
    }
  })

  const handleMediaLoad = useEventCallback(() => {
    isInitialCropSetRef.current = false;
    const newCropSize = computeSizes();
    if (onMediaLoaded) {
      onMediaLoaded(mediaSizeRef.current);
    }
  })

  // --- Event Handlers (useEventCallback used extensively here) ---

  const getPointOnContainer = useEventCallback((point: Point): Point => {
    if (!containerDomRef.current) return point;
    const containerRect = containerDomRef.current.getBoundingClientRect();
    return {
      x: point.x - containerRect.left,
      y: point.y - containerRect.top,
    };
  })

  const getPointOnMedia = useEventCallback((point: Point): Point => {
    if (!cropSizeState) return point;
    return {
      x: (point.x + crop.x) / zoom,
      y: (point.y + crop.y) / zoom,
    };
  })

  const handleDrag = useEventCallback((point: Point) => {
    if (typeof window === 'undefined') return;
    if (rafDragTimeoutRef.current) window.cancelAnimationFrame(rafDragTimeoutRef.current);
    rafDragTimeoutRef.current = window.requestAnimationFrame(() => {
      if (!cropSizeState || point.x === undefined || point.y === undefined) return;
      const offsetX = point.x - dragStartPositionRef.current.x;
      const offsetY = point.y - dragStartPositionRef.current.y;
      const requestedPosition = { x: dragStartCropRef.current.x + offsetX, y: dragStartCropRef.current.y + offsetY };
      const newPosition = shouldRestrictPosition
        ? restrictPosition(requestedPosition, mediaSizeRef.current, cropSizeState, zoom, rotation)
        : requestedPosition;
      onCropChange(newPosition);
    });
  })

  const handleMouseMove = useEventCallback((e: MouseEvent) => {
    handleDrag(getMousePoint(e));
  })

  const setNewZoom = useEventCallback((newZoomValue: number, point: Point, { shouldUpdatePosition = true } = {}) => {
    if (!cropSizeState || !onZoomChange) return;
    const newZoomClamped = clamp(newZoomValue, minZoom, maxZoom);

    if (shouldUpdatePosition) {
      const zoomPoint = getPointOnContainer(point);
      const zoomTarget = getPointOnMedia(zoomPoint);
      const requestedPosition = {
        x: zoomTarget.x * newZoomClamped - zoomPoint.x,
        y: zoomTarget.y * newZoomClamped - zoomPoint.y,
      };
      const newPosition = shouldRestrictPosition
        ? restrictPosition(requestedPosition, mediaSizeRef.current, cropSizeState, newZoomClamped, rotation)
        : requestedPosition;
      onCropChange(newPosition);
    }
    if (newZoomClamped !== zoom) {
      onZoomChange(newZoomClamped);
    }
  })

  const handlePinchMove = useEventCallback((e: TouchEvent) => {
    if (typeof window === 'undefined') return;
    const pointA = getTouchPoint(e.touches[0]);
    const pointB = getTouchPoint(e.touches[1]);
    const center = getCenter(pointA, pointB);
    handleDrag(center);
    if (rafPinchTimeoutRef.current) window.cancelAnimationFrame(rafPinchTimeoutRef.current);
    rafPinchTimeoutRef.current = window.requestAnimationFrame(() => {
      const distance = getDistanceBetweenPoints(pointA, pointB);
      if (lastPinchDistanceRef.current > 0) {
        const newZoom = zoom * (distance / lastPinchDistanceRef.current);
        setNewZoom(newZoom, center, { shouldUpdatePosition: false });
      }
      lastPinchDistanceRef.current = distance;
      if (onRotationChange) {
        const rotationVal = getRotationBetweenPoints(pointA, pointB);
        const newRotation = rotation + (rotationVal - lastPinchRotationRef.current);
        onRotationChange(newRotation);
        lastPinchRotationRef.current = rotationVal;
      }
    });
  })

  const handleTouchMove = useEventCallback((e: TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      handlePinchMove(e);
    } else if (e.touches.length === 1) {
      handleDrag(getTouchPoint(e.touches[0]));
    }
  })

  const handleGestureMove = useEventCallback((e: GestureEvent) => {
    e.preventDefault();
    if (isTouchingRef.current) return;
    const point = getMousePoint(e);
    if (typeof e.scale === 'number' && isFinite(e.scale)) {
      const newZoom = gestureZoomStartRef.current - 1 + e.scale;
      setNewZoom(newZoom, point, { shouldUpdatePosition: true });
    }
    if (onRotationChange && typeof e.rotation === 'number' && isFinite(e.rotation)) {
      const newRotation = gestureRotationStartRef.current + e.rotation;
      onRotationChange(newRotation);
    }
  })

  // Define cleanEvents after all handlers it depends on are defined (now using useEventCallback)
  // Note: We still need handleDragStopped, handleGestureEnd, handleScroll to be defined *before* cleanEvents
  // because cleanEvents references them directly during its definition.
  // useEventCallback only helps when *calling* potentially stale functions.

  const handleDragStopped = useEventCallback(() => {
    isTouchingRef.current = false;
    cleanEvents();
    emitCropData();
    if (onInteractionEnd) onInteractionEnd();
  })

  const handleGestureEnd = useEventCallback((e: GestureEvent) => {
    cleanEvents();
  })

  const handleScroll = useEventCallback((e: Event) => {
    if (!containerDomRef.current?.ownerDocument) return;
    e.preventDefault();
    saveContainerPosition();
  })

  const cleanEvents = useEventCallback(() => {
    const currentDoc = containerDomRef.current?.ownerDocument ?? document;
    currentDoc.removeEventListener('mousemove', handleMouseMove);
    currentDoc.removeEventListener('mouseup', handleDragStopped);
    currentDoc.removeEventListener('touchmove', handleTouchMove);
    currentDoc.removeEventListener('touchend', handleDragStopped);
    currentDoc.removeEventListener('gesturemove', handleGestureMove as EventListener);
    currentDoc.removeEventListener('gestureend', handleGestureEnd as EventListener);
    currentDoc.removeEventListener('scroll', handleScroll);
  })

  const handleDragStart = useEventCallback((point: Point) => {
    dragStartPositionRef.current = point;
    dragStartCropRef.current = { ...crop };
    if (onInteractionStart) onInteractionStart();
  })

  const handlePinchStart = useEventCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const pointA = getTouchPoint(e.touches[0]);
    const pointB = getTouchPoint(e.touches[1]);
    lastPinchDistanceRef.current = getDistanceBetweenPoints(pointA, pointB);
    lastPinchRotationRef.current = getRotationBetweenPoints(pointA, pointB);
    handleDragStart(getCenter(pointA, pointB));
  })

  const handleGestureStart = useEventCallback((e: GestureEvent) => {
    if (!containerDomRef.current?.ownerDocument) return;
    e.preventDefault();
    const currentDoc = containerDomRef.current.ownerDocument;
    currentDoc.addEventListener('gesturechange', handleGestureMove as EventListener);
    currentDoc.addEventListener('gestureend', handleGestureEnd as EventListener);
    gestureZoomStartRef.current = zoom;
    gestureRotationStartRef.current = rotation;
  })

  const preventZoomSafari = useCallback((e: Event) => e.preventDefault(), []);

  const handleWheel = useEventCallback((e: WheelEvent) => {
    if (typeof window === 'undefined') return;
    if (onWheelRequest && !onWheelRequest(e)) return;
    e.preventDefault();
    const point = getMousePoint(e);
    const { pixelY } = normalizeWheel(e);
    const newZoom = zoom - (pixelY * zoomSpeed) / 200;
    setNewZoom(newZoom, point, { shouldUpdatePosition: true });
    if (!hasWheelJustStarted) {
      setHasWheelJustStarted(true);
      if (onInteractionStart) onInteractionStart();
    }
    if (wheelTimerRef.current) window.clearTimeout(wheelTimerRef.current);
    wheelTimerRef.current = window.setTimeout(() => {
      setHasWheelJustStarted(false);
      if (onInteractionEnd) onInteractionEnd();
    }, 250);
  })

  const handleTouchStart = useEventCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerDomRef.current?.ownerDocument) return;
    isTouchingRef.current = true;
    if (onTouchRequest && !onTouchRequest(e)) return;
    const currentDoc = containerDomRef.current.ownerDocument;
    currentDoc.addEventListener('touchmove', handleTouchMove, { passive: false });
    currentDoc.addEventListener('touchend', handleDragStopped);
    saveContainerPosition();
    if (e.touches.length === 2) {
      handlePinchStart(e);
    } else if (e.touches.length === 1) {
      handleDragStart(getTouchPoint(e.touches[0]));
    }
  })

  const handleMouseDown = useEventCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerDomRef.current?.ownerDocument) return;
    e.preventDefault();
    const currentDoc = containerDomRef.current.ownerDocument;
    currentDoc.addEventListener('mousemove', handleMouseMove);
    currentDoc.addEventListener('mouseup', handleDragStopped);
    saveContainerPosition();
    handleDragStart(getMousePoint(e));
  })

  const handleKeyDown = useEventCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    let step = keyboardStep;
    if (!cropSizeState) return;
    if (event.shiftKey) step *= 0.2;
    let newCrop = { ...crop };
    switch (event.key) {
      case 'ArrowUp': newCrop.y -= step; event.preventDefault(); break;
      case 'ArrowDown': newCrop.y += step; event.preventDefault(); break;
      case 'ArrowLeft': newCrop.x -= step; event.preventDefault(); break;
      case 'ArrowRight': newCrop.x += step; event.preventDefault(); break;
      default: return;
    }
    if (shouldRestrictPosition) {
      newCrop = restrictPosition(newCrop, mediaSizeRef.current, cropSizeState, zoom, rotation);
    }
    if (!event.repeat && onInteractionStart) onInteractionStart();
    onCropChange(newCrop);
  })

  const handleKeyUp = useEventCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowUp': case 'ArrowDown': case 'ArrowLeft': case 'ArrowRight':
        event.preventDefault(); break;
      default: return;
    }
    emitCropData();
    if (onInteractionEnd) onInteractionEnd();
  })

  // --- Effects ---
  useEffect(() => {
    const currentContainer = containerDomRef.current;
    const currentDoc = currentContainer?.ownerDocument ?? document;
    const currentWindow = currentDoc?.defaultView ?? window;

    if (currentContainer) {
      if (typeof ResizeObserver !== 'undefined') {
        let isFirstResize = true;
        resizeObserverRef.current = new ResizeObserver(() => {
          if (isFirstResize) { isFirstResize = false; return; }
          computeSizes();
        });
        resizeObserverRef.current.observe(currentContainer);
      } else {
        currentWindow.addEventListener('resize', computeSizes);
      }

      if (zoomWithScroll) {
        currentContainer.addEventListener('wheel', handleWheel, { passive: false });
      }
      currentContainer.addEventListener('gesturestart', handleGestureStart as EventListener);
      currentContainer.addEventListener('gesturestart', preventZoomSafari);
    }

    currentDoc.addEventListener('scroll', handleScroll);

    if (setCropperRef) setCropperRef(cropperDomRef.current);
    if (setImageRef) setImageRef(imageDomRef.current);
    if (setVideoRef) setVideoRef(videoDomRef.current);

    if (imageDomRef.current?.complete || videoDomRef.current?.readyState === 4) {
      handleMediaLoad();
    }

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      } else {
        currentWindow.removeEventListener('resize', computeSizes);
      }
      if (currentContainer) {
        if (zoomWithScroll) currentContainer.removeEventListener('wheel', handleWheel);
        currentContainer.removeEventListener('gesturestart', handleGestureStart as EventListener);
        currentContainer.removeEventListener('gesturestart', preventZoomSafari);
      }
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
      cleanEvents();
    };
  }, [
    zoomWithScroll, setCropperRef, setImageRef, setVideoRef, getObjectFit,
    preventZoomSafari, handleMediaLoad, computeSizes, handleWheel, handleGestureStart, handleScroll, cleanEvents
  ]);

  useEffect(() => {
    computeSizes();
  }, [aspect, objectFit, cropSizeProp, computeSizes]);

  useEffect(() => {
    if (cropSizeState) {
      if (!isInitialCropSetRef.current) {
        setInitialCrop(cropSizeState);
        emitCropData();
        isInitialCropSetRef.current = true;
      } else {
        recomputeCropPosition();
      }
    }
  }, [cropSizeState]);

  useEffect(() => {
    emitCropAreaChange();
  }, [crop, emitCropAreaChange]);

  useEffect(() => {
    if (videoDomRef.current && video) {
      videoDomRef.current.load();
    }
  }, [video]);

  // --- Render ---
  const { containerStyle, cropAreaStyle, mediaStyle } = style
  const { containerClassName, cropAreaClassName, mediaClassName } = classes

  // Get finalObjectFit primarily from the ref, fallback to calculation if ref not ready
  const finalObjectFit = mediaSizeRef.current.objectFit ?? getObjectFit();

  return (
    <div
      ref={containerDomRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      data-testid="container"
      style={containerStyle}
      className={classNames('reactEasyCrop_Container', containerClassName)}
    >
      {image ? (
        <img
          alt=""
          className={classNames(
            'reactEasyCrop_Image',
            finalObjectFit === 'contain' && 'reactEasyCrop_Contain',
            finalObjectFit === 'horizontal-cover' && 'reactEasyCrop_Cover_Horizontal',
            finalObjectFit === 'vertical-cover' && 'reactEasyCrop_Cover_Vertical',
            mediaClassName
          )}
          {...(mediaProps as React.ImgHTMLAttributes<HTMLElement>)}
          src={image}
          ref={imageDomRef}
          style={{
            ...mediaStyle,
            transform: transform || `translate(${crop.x}px, ${crop.y}px) rotate(${rotation}deg) scale(${zoom})`,
          }}
          onLoad={handleMediaLoad}
        />
      ) : (
        video && (
          <video
            autoPlay
            playsInline
            loop
            muted={true}
            className={classNames(
              'reactEasyCrop_Video',
              finalObjectFit === 'contain' && 'reactEasyCrop_Contain',
              finalObjectFit === 'horizontal-cover' && 'reactEasyCrop_Cover_Horizontal',
              finalObjectFit === 'vertical-cover' && 'reactEasyCrop_Cover_Vertical',
              mediaClassName
            )}
            {...mediaProps}
            ref={videoDomRef}
            onLoadedMetadata={handleMediaLoad}
            style={{
              ...mediaStyle,
              transform: transform || `translate(${crop.x}px, ${crop.y}px) rotate(${rotation}deg) scale(${zoom})`,
            }}
            controls={false}
          >
            {(Array.isArray(video) ? video : [{ src: video }]).map((item) => (
              <source key={item.src} {...item} />
            ))}
          </video>
        )
      )}
      {cropSizeState && (
        <div
          ref={cropperDomRef}
          style={{
            ...cropAreaStyle,
            width: cropSizeState.width,
            height: cropSizeState.height,
          }}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          data-testid="cropper"
          className={classNames(
            'reactEasyCrop_CropArea',
            cropShape === 'round' && 'reactEasyCrop_CropAreaRound',
            showGrid && 'reactEasyCrop_CropAreaGrid',
            cropAreaClassName
          )}
          {...cropperProps}
        />
      )}
    </div>
  )
}

export default Cropper