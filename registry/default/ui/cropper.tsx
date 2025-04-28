import * as React from 'react'
import { useState, useRef, useEffect, useCallback } from 'react'
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
  const [internalMediaObjectFit, setInternalMediaObjectFit] = useState<string | undefined>(objectFit) // Initialize with prop

  // DOM Refs
  const cropperDomRef = useRef<HTMLDivElement>(null)
  const imageDomRef = useRef<HTMLImageElement>(null)
  const videoDomRef = useRef<HTMLVideoElement>(null)
  const containerDomRef = useRef<HTMLDivElement>(null)

  // Mutable instance variables refs
  const mediaSizeRef = useRef<MediaSize>({ width: 0, height: 0, naturalWidth: 0, naturalHeight: 0 })
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


  // --- Static-like Helpers (defined outside or as simple functions) ---
  const getMousePoint = (e: MouseEvent | React.MouseEvent | GestureEvent): Point => ({
    x: Number(e.clientX),
    y: Number(e.clientY),
  })

  const getTouchPoint = (touch: Touch | React.Touch): Point => ({
    x: Number(touch.clientX),
    y: Number(touch.clientY),
  })

   // --- Core Logic Callbacks (Order matters for dependencies) ---

  const saveContainerPosition = useCallback(() => {
    if (containerDomRef.current) {
      const bounds = containerDomRef.current.getBoundingClientRect()
      containerPositionRef.current = { x: bounds.left, y: bounds.top }
    }
  }, [])

  const getObjectFit = useCallback(() => {
    if (objectFit === 'cover') {
      const mediaRefValue = imageDomRef.current || videoDomRef.current;
      const containerRefValue = containerDomRef.current;

      if (mediaRefValue && containerRefValue) {
          const containerRect = containerRefValue.getBoundingClientRect();
          // Ensure height is not zero to avoid division by zero
          if (containerRect.height === 0) return 'contain'; // Or a default value

          const containerAspect = containerRect.width / containerRect.height;
          const naturalWidth = imageDomRef.current?.naturalWidth || videoDomRef.current?.videoWidth || 0;
          const naturalHeight = imageDomRef.current?.naturalHeight || videoDomRef.current?.videoHeight || 0;
          // Ensure naturalHeight is not zero
          const mediaAspect = naturalHeight === 0 ? 1 : naturalWidth / naturalHeight;

          return mediaAspect < containerAspect ? 'horizontal-cover' : 'vertical-cover';
      }
      // Default if refs not ready
      return 'horizontal-cover';
    }
    return objectFit;
  }, [objectFit]) // Removed refs from dependencies, calculated inside

  const getCropData = useCallback(() => {
    if (!cropSizeState) return null
    const restrictedPos = shouldRestrictPosition
      ? restrictPosition(crop, mediaSizeRef.current, cropSizeState, zoom, rotation)
      : crop
    return computeCroppedArea(restrictedPos, mediaSizeRef.current, cropSizeState, aspect, zoom, rotation, shouldRestrictPosition)
  }, [cropSizeState, crop, zoom, rotation, aspect, shouldRestrictPosition])

  const emitCropData = useCallback(() => {
    const cropData = getCropData()
    if (!cropData) return
    if (onCropComplete) onCropComplete(cropData.croppedAreaPercentages, cropData.croppedAreaPixels)
    if (onCropAreaChange) onCropAreaChange(cropData.croppedAreaPercentages, cropData.croppedAreaPixels)
  }, [getCropData, onCropComplete, onCropAreaChange])

  const emitCropAreaChange = useCallback(() => {
    const cropData = getCropData()
    if (!cropData) return
    if (onCropAreaChange) onCropAreaChange(cropData.croppedAreaPercentages, cropData.croppedAreaPixels)
  }, [getCropData, onCropAreaChange])

  const recomputeCropPosition = useCallback(() => {
    if (!cropSizeState) return
    const newPosition = shouldRestrictPosition
      ? restrictPosition(crop, mediaSizeRef.current, cropSizeState, zoom, rotation)
      : crop
    if (newPosition.x !== crop.x || newPosition.y !== crop.y) {
      onCropChange(newPosition)
    } else {
      // Ensure crop data is emitted even if position doesn't change (e.g., after zoom/rotate)
      emitCropData();
    }
  }, [crop, cropSizeState, zoom, rotation, shouldRestrictPosition, onCropChange, emitCropData])

  const computeSizes = useCallback(() => {
    const mediaRefValue = imageDomRef.current || videoDomRef.current;
    const containerRefValue = containerDomRef.current;

    if (mediaRefValue && containerRefValue) {
        const containerRect = containerRefValue.getBoundingClientRect();
        // Ensure width/height > 0
        if (containerRect.width === 0 || containerRect.height === 0) return null;

        saveContainerPosition();
        const containerAspect = containerRect.width / containerRect.height;
        const naturalWidth = imageDomRef.current?.naturalWidth || videoDomRef.current?.videoWidth || 0;
        const naturalHeight = imageDomRef.current?.naturalHeight || videoDomRef.current?.videoHeight || 0;
         // Ensure naturalHeight > 0
        const mediaAspect = naturalHeight === 0 ? 1 : naturalWidth / naturalHeight;
        const isMediaScaledDown = mediaRefValue.offsetWidth < naturalWidth || mediaRefValue.offsetHeight < naturalHeight;

        let renderedMediaSize: Size;
        const currentObjectFit = getObjectFit(); // Use the helper

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

        // Ensure rendered sizes are valid numbers
        if (isNaN(renderedMediaSize.width) || isNaN(renderedMediaSize.height)) return null;


        mediaSizeRef.current = { ...renderedMediaSize, naturalWidth, naturalHeight };

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

        // Ensure newCropSize values are valid
        if (isNaN(newCropSize.width) || isNaN(newCropSize.height)) return null;


        if (cropSizeState?.height !== newCropSize.height || cropSizeState?.width !== newCropSize.width) {
            if (onCropSizeChange) onCropSizeChange(newCropSize);
            if (setCropSizeProp) setCropSizeProp(newCropSize);
            setCropSizeState(newCropSize);
        } else {
            // Trigger recompute even if size is the same, as media dimensions might change
             recomputeCropPosition();
        }

        return newCropSize;
    }
    return null;
  }, [
      aspect, rotation, cropSizeProp, onCropSizeChange, setCropSizeProp,
      setMediaSizeProp, saveContainerPosition, getObjectFit, cropSizeState, // Removed recomputeCropPosition from here
      // Add recomputeCropPosition as dependency in the effect below
    ]);

  // Define this after computeSizes and emitCropData are defined
  const handleMediaLoad = useCallback(() => {
    const newCropSize = computeSizes();
    if (newCropSize) {
      emitCropData();
      setInitialCrop(newCropSize); // setInitialCrop depends on props/refs only
    }
    if (onMediaLoaded) {
      onMediaLoaded(mediaSizeRef.current);
    }
  }, [computeSizes, emitCropData, onMediaLoaded]); // Removed setInitialCrop dependency

  const setInitialCrop = useCallback((newCropSize: Size) => {
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
  }, [
      initialCroppedAreaPercentages, initialCroppedAreaPixels, rotation, minZoom, maxZoom,
      onCropChange, onZoomChange, crop.x, crop.y, zoom // Depend on current crop/zoom to avoid unnecessary calls
    ]);

  // --- Event Handlers (Order matters for dependencies) ---

  const getPointOnContainer = useCallback((point: Point): Point => {
    if (!containerDomRef.current) return point;
    const containerRect = containerDomRef.current.getBoundingClientRect();
    return {
      x: point.x - containerRect.left,
      y: point.y - containerRect.top,
    };
  }, []);

  const getPointOnMedia = useCallback((point: Point): Point => {
     if (!cropSizeState) return point;
    // Simplified calculation based on point relative to container, zoom, and crop offset
    return {
        x: (point.x + crop.x) / zoom,
        y: (point.y + crop.y) / zoom,
    };
  }, [crop.x, crop.y, zoom, cropSizeState]);


  const handleDrag = useCallback((point: Point) => {
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
  }, [cropSizeState, zoom, rotation, shouldRestrictPosition, onCropChange]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    handleDrag(getMousePoint(e));
  }, [handleDrag]);


  const setNewZoom = useCallback((newZoomValue: number, point: Point, { shouldUpdatePosition = true } = {}) => {
    if (!cropSizeState || !onZoomChange) return;
    const newZoomClamped = clamp(newZoomValue, minZoom, maxZoom);

    if (shouldUpdatePosition) {
      const zoomPoint = getPointOnContainer(point); // Use already defined callback
      const zoomTarget = getPointOnMedia(zoomPoint); // Use already defined callback
      const requestedPosition = {
          x: zoomTarget.x * newZoomClamped - zoomPoint.x,
          y: zoomTarget.y * newZoomClamped - zoomPoint.y,
      };
      const newPosition = shouldRestrictPosition
        ? restrictPosition(requestedPosition, mediaSizeRef.current, cropSizeState, newZoomClamped, rotation)
        : requestedPosition;
      onCropChange(newPosition);
    }
    // Only call onZoomChange if zoom actually changed
    if (newZoomClamped !== zoom) {
        onZoomChange(newZoomClamped);
    }
  }, [
      cropSizeState, onZoomChange, minZoom, maxZoom, getPointOnContainer, getPointOnMedia,
      shouldRestrictPosition, rotation, onCropChange, zoom // Added zoom dependency
    ]);


  const handlePinchMove = useCallback((e: TouchEvent) => {
    if (typeof window === 'undefined') return;
    const pointA = getTouchPoint(e.touches[0]);
    const pointB = getTouchPoint(e.touches[1]);
    const center = getCenter(pointA, pointB);
    handleDrag(center);
    if (rafPinchTimeoutRef.current) window.cancelAnimationFrame(rafPinchTimeoutRef.current);
    rafPinchTimeoutRef.current = window.requestAnimationFrame(() => {
      const distance = getDistanceBetweenPoints(pointA, pointB);
       // Prevent division by zero or invalid distance
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
  }, [zoom, rotation, onRotationChange, handleDrag, setNewZoom]);


  const handleTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      handlePinchMove(e);
    } else if (e.touches.length === 1) {
      handleDrag(getTouchPoint(e.touches[0]));
    }
  }, [handlePinchMove, handleDrag]);


  const handleGestureMove = useCallback((e: GestureEvent) => {
    e.preventDefault();
    if (isTouchingRef.current) return;
    const point = getMousePoint(e);
     // Ensure e.scale is a valid number
    if (typeof e.scale === 'number' && isFinite(e.scale)) {
        const newZoom = gestureZoomStartRef.current - 1 + e.scale;
        setNewZoom(newZoom, point, { shouldUpdatePosition: true });
    }
    if (onRotationChange && typeof e.rotation === 'number' && isFinite(e.rotation)) {
        const newRotation = gestureRotationStartRef.current + e.rotation;
        onRotationChange(newRotation);
    }
  }, [onRotationChange, setNewZoom]);

  // Define cleanEvents after all handlers it depends on are defined
  const cleanEvents = useCallback(() => {
    const currentDoc = containerDomRef.current?.ownerDocument ?? document;
    currentDoc.removeEventListener('mousemove', handleMouseMove);
    currentDoc.removeEventListener('mouseup', handleDragStopped); // handleDragStopped needs definition
    currentDoc.removeEventListener('touchmove', handleTouchMove);
    currentDoc.removeEventListener('touchend', handleDragStopped); // handleDragStopped needs definition
    currentDoc.removeEventListener('gesturemove', handleGestureMove as EventListener);
    currentDoc.removeEventListener('gestureend', handleGestureEnd as EventListener); // handleGestureEnd needs definition
    currentDoc.removeEventListener('scroll', handleScroll); // handleScroll needs definition
  }, []); // Add dependencies later when they are defined

  const handleDragStopped = useCallback(() => {
    isTouchingRef.current = false;
    cleanEvents();
    emitCropData();
    if (onInteractionEnd) onInteractionEnd();
  }, [cleanEvents, emitCropData, onInteractionEnd]);

  const handleGestureEnd = useCallback((e: GestureEvent) => {
    cleanEvents();
  }, [cleanEvents]);

  const handleScroll = useCallback((e: Event) => {
    if (!containerDomRef.current?.ownerDocument) return;
    e.preventDefault();
    saveContainerPosition();
  }, [saveContainerPosition]);

   // Now update cleanEvents dependencies
   useEffect(() => {
      cleanEvents(); // Re-assign to capture the latest handlers
   }, [handleMouseMove, handleDragStopped, handleTouchMove, handleGestureMove, handleGestureEnd, handleScroll]);



  const handleDragStart = useCallback((point: Point) => {
    dragStartPositionRef.current = point;
    dragStartCropRef.current = { ...crop };
    if (onInteractionStart) onInteractionStart();
  }, [crop, onInteractionStart]);


  const handlePinchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const pointA = getTouchPoint(e.touches[0]);
    const pointB = getTouchPoint(e.touches[1]);
    lastPinchDistanceRef.current = getDistanceBetweenPoints(pointA, pointB);
    lastPinchRotationRef.current = getRotationBetweenPoints(pointA, pointB);
    handleDragStart(getCenter(pointA, pointB));
  }, [handleDragStart]);


  const handleGestureStart = useCallback((e: GestureEvent) => {
    if (!containerDomRef.current?.ownerDocument) return;
    e.preventDefault();
    const currentDoc = containerDomRef.current.ownerDocument;
    currentDoc.addEventListener('gesturechange', handleGestureMove as EventListener);
    currentDoc.addEventListener('gestureend', handleGestureEnd as EventListener);
    gestureZoomStartRef.current = zoom;
    gestureRotationStartRef.current = rotation;
  }, [zoom, rotation, handleGestureMove, handleGestureEnd]);


  const preventZoomSafari = useCallback((e: Event) => e.preventDefault(), []);


  const handleWheel = useCallback((e: WheelEvent) => {
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
  }, [zoom, zoomSpeed, hasWheelJustStarted, onWheelRequest, onInteractionStart, onInteractionEnd, setNewZoom]);


  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
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
  }, [onTouchRequest, saveContainerPosition, handlePinchStart, handleDragStart, handleTouchMove, handleDragStopped]);


  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerDomRef.current?.ownerDocument) return;
    e.preventDefault();
    const currentDoc = containerDomRef.current.ownerDocument;
    currentDoc.addEventListener('mousemove', handleMouseMove);
    currentDoc.addEventListener('mouseup', handleDragStopped);
    saveContainerPosition();
    handleDragStart(getMousePoint(e));
  }, [saveContainerPosition, handleDragStart, handleMouseMove, handleDragStopped]);


  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
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
  }, [keyboardStep, cropSizeState, crop, shouldRestrictPosition, zoom, rotation, onInteractionStart, onCropChange]);


  const handleKeyUp = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowUp': case 'ArrowDown': case 'ArrowLeft': case 'ArrowRight':
        event.preventDefault(); break;
      default: return;
    }
    emitCropData();
    if (onInteractionEnd) onInteractionEnd();
  }, [emitCropData, onInteractionEnd]);


  // --- Effects ---
  useEffect(() => {
    const currentContainer = containerDomRef.current;
    const currentDoc = currentContainer?.ownerDocument ?? document;
    const currentWindow = currentDoc?.defaultView ?? window;

    // Initial setup based on objectFit prop
     setInternalMediaObjectFit(getObjectFit());

    if (currentContainer) {
      // Init Resize Observer
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

    // Callbacks for parent refs
     if (setCropperRef) setCropperRef(cropperDomRef.current);
     if (setImageRef) setImageRef(imageDomRef.current);
     if (setVideoRef) setVideoRef(videoDomRef.current);

    // Initial size computation if media already loaded
    if (imageDomRef.current?.complete || videoDomRef.current?.readyState === 4) {
      handleMediaLoad();
    }

    // Cleanup
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
  }, [ // Include all stable functions used in setup/cleanup
      zoomWithScroll, setCropperRef, setImageRef, setVideoRef, computeSizes,
      handleWheel, handleGestureStart, preventZoomSafari, handleScroll, handleMediaLoad,
      cleanEvents, getObjectFit
    ]);

  // Effect for recomputing sizes when relevant props change
  useEffect(() => {
    computeSizes();
  }, [aspect, objectFit, cropSizeProp, computeSizes]); // Rerun if these change

  // Effect for recomputing position when relevant props change
  useEffect(() => {
    recomputeCropPosition();
  }, [rotation, zoom, recomputeCropPosition]); // Rerun if these change

  // Effect to emit crop area change when crop prop changes externally
  useEffect(() => {
    emitCropAreaChange();
  }, [crop, emitCropAreaChange]); // Rerun if crop changes

  // Effect to handle video source change
  useEffect(() => {
    if (videoDomRef.current && video) {
      videoDomRef.current.load();
    }
  }, [video]);

  // Effect to update internal object fit state and recompute sizes if needed
  useEffect(() => {
    const calculatedFit = getObjectFit();
    if (calculatedFit !== internalMediaObjectFit) {
      setInternalMediaObjectFit(calculatedFit);
      // computeSizes will be called by the dependency change in the effect above
    }
  }, [getObjectFit, internalMediaObjectFit, computeSizes]);

  // Effect to set initial crop after cropSize is computed
  useEffect(() => {
    if (cropSizeState) {
      setInitialCrop(cropSizeState);
    }
  }, [cropSizeState, setInitialCrop]); // Rerun when cropSizeState is ready


  // --- Render ---
  const { containerStyle, cropAreaStyle, mediaStyle } = style
  const { containerClassName, cropAreaClassName, mediaClassName } = classes
  const finalObjectFit = internalMediaObjectFit ?? objectFit // Use internal state if calculated

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