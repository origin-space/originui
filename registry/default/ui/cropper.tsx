import * as React from 'react'
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
  zoom: number
  rotation: number
  aspect: number
  minZoom: number
  maxZoom: number
  cropShape: 'rect' | 'round'
  cropSize?: Size
  objectFit?: 'contain' | 'cover' | 'horizontal-cover' | 'vertical-cover'
  showGrid?: boolean
  zoomSpeed: number
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
  style: {
    containerStyle?: React.CSSProperties
    mediaStyle?: React.CSSProperties
    cropAreaStyle?: React.CSSProperties
  }
  classes: {
    containerClassName?: string
    mediaClassName?: string
    cropAreaClassName?: string
  }
  restrictPosition: boolean
  mediaProps: React.ImgHTMLAttributes<HTMLElement> | React.VideoHTMLAttributes<HTMLElement>
  cropperProps: React.HTMLAttributes<HTMLDivElement>
  disableAutomaticStylesInjection?: boolean
  initialCroppedAreaPixels?: Area
  initialCroppedAreaPercentages?: Area
  onTouchRequest?: (e: React.TouchEvent<HTMLDivElement>) => boolean
  onWheelRequest?: (e: WheelEvent) => boolean
  setCropperRef?: (ref: React.RefObject<HTMLDivElement>) => void
  setImageRef?: (ref: React.RefObject<HTMLImageElement>) => void
  setVideoRef?: (ref: React.RefObject<HTMLVideoElement>) => void
  setMediaSize?: (size: MediaSize) => void
  setCropSize?: (size: Size) => void
  nonce?: string
  keyboardStep: number
}

type State = {
  cropSize: Size | null
  hasWheelJustStarted: boolean
  mediaObjectFit: String | undefined
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

class Cropper extends React.Component<CropperProps, State> {
  static defaultProps = {
    zoom: 1,
    rotation: 0,
    aspect: 4 / 3,
    maxZoom: MAX_ZOOM,
    minZoom: MIN_ZOOM,
    cropShape: 'rect' as const,
    objectFit: 'contain' as const,
    showGrid: true,
    style: {},
    classes: {},
    mediaProps: {},
    cropperProps: {},
    zoomSpeed: 1,
    restrictPosition: true,
    zoomWithScroll: true,
    keyboardStep: KEYBOARD_STEP,
  }

  cropperRef = React.createRef<HTMLDivElement>()
  imageRef = React.createRef<HTMLImageElement>()
  videoRef = React.createRef<HTMLVideoElement>()
  containerPosition: Point = { x: 0, y: 0 }
  containerRef: HTMLDivElement | null = null
  styleRef: HTMLStyleElement | null = null
  containerRect: DOMRect | null = null
  mediaSize: MediaSize = { width: 0, height: 0, naturalWidth: 0, naturalHeight: 0 }
  dragStartPosition: Point = { x: 0, y: 0 }
  dragStartCrop: Point = { x: 0, y: 0 }
  gestureZoomStart = 0
  gestureRotationStart = 0
  isTouching = false
  lastPinchDistance = 0
  lastPinchRotation = 0
  rafDragTimeout: number | null = null
  rafPinchTimeout: number | null = null
  wheelTimer: number | null = null
  currentDoc: Document | null = typeof document !== 'undefined' ? document : null
  currentWindow: Window | null = typeof window !== 'undefined' ? window : null
  resizeObserver: ResizeObserver | null = null

  state: State = {
    cropSize: null,
    hasWheelJustStarted: false,
    mediaObjectFit: undefined,
  }

  componentDidMount() {
    if (!this.currentDoc || !this.currentWindow) return
    if (this.containerRef) {
      if (this.containerRef.ownerDocument) {
        this.currentDoc = this.containerRef.ownerDocument
      }
      if (this.currentDoc.defaultView) {
        this.currentWindow = this.currentDoc.defaultView
      }

      this.initResizeObserver()
      // only add window resize listener if ResizeObserver is not supported. Otherwise, it would be redundant
      if (typeof window.ResizeObserver === 'undefined') {
        this.currentWindow.addEventListener('resize', this.computeSizes)
      }
      this.props.zoomWithScroll &&
        this.containerRef.addEventListener('wheel', this.onWheel, { passive: false })
      this.containerRef.addEventListener('gesturestart', this.onGestureStart as EventListener)
    }

    this.currentDoc.addEventListener('scroll', this.onScroll)

    if (!this.props.disableAutomaticStylesInjection) {
      // Removed style injection logic
    }

    // when rendered via SSR, the image can already be loaded and its onLoad callback will never be called
    if (this.imageRef.current && this.imageRef.current.complete) {
      this.onMediaLoad()
    }

    // set image and video refs in the parent if the callbacks exist
    if (this.props.setImageRef && this.imageRef) {
      this.props.setImageRef(this.imageRef as React.RefObject<HTMLImageElement>)
    }

    if (this.props.setVideoRef && this.videoRef) {
      this.props.setVideoRef(this.videoRef as React.RefObject<HTMLVideoElement>)
    }

    if (this.props.setCropperRef && this.cropperRef) {
      this.props.setCropperRef(this.cropperRef as React.RefObject<HTMLDivElement>)
    }
  }

  componentWillUnmount() {
    if (!this.currentDoc || !this.currentWindow) return
    if (typeof window.ResizeObserver === 'undefined') {
      this.currentWindow.removeEventListener('resize', this.computeSizes)
    }
    this.resizeObserver?.disconnect()
    if (this.containerRef) {
      this.containerRef.removeEventListener('gesturestart', this.preventZoomSafari)
    }

    // Removed styleRef removal logic

    this.cleanEvents()
    this.props.zoomWithScroll && this.clearScrollEvent()
  }

  componentDidUpdate(prevProps: CropperProps) {
    if (prevProps.rotation !== this.props.rotation) {
      this.computeSizes()
      this.recomputeCropPosition()
    } else if (prevProps.aspect !== this.props.aspect) {
      this.computeSizes()
    } else if (prevProps.objectFit !== this.props.objectFit) {
      this.computeSizes()
    } else if (prevProps.zoom !== this.props.zoom) {
      this.recomputeCropPosition()
    } else if (
      prevProps.cropSize?.height !== this.props.cropSize?.height ||
      prevProps.cropSize?.width !== this.props.cropSize?.width
    ) {
      this.computeSizes()
    } else if (
      prevProps.crop?.x !== this.props.crop?.x ||
      prevProps.crop?.y !== this.props.crop?.y
    ) {
      this.emitCropAreaChange()
    }
    if (prevProps.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef) {
      this.props.zoomWithScroll
        ? this.containerRef.addEventListener('wheel', this.onWheel, { passive: false })
        : this.clearScrollEvent()
    }
    if (prevProps.video !== this.props.video) {
      this.videoRef.current?.load()
    }

    const objectFit = this.getObjectFit()
    if (objectFit !== this.state.mediaObjectFit) {
      this.setState({ mediaObjectFit: objectFit }, this.computeSizes)
    }
  }

  initResizeObserver = () => {
    if (typeof window.ResizeObserver === 'undefined' || !this.containerRef) {
      return
    }
    let isFirstResize = true
    this.resizeObserver = new window.ResizeObserver((entries) => {
      if (isFirstResize) {
        isFirstResize = false // observe() is called on mount, we don't want to trigger a recompute on mount
        return
      }
      this.computeSizes()
    })
    this.resizeObserver.observe(this.containerRef)
  }

  // this is to prevent Safari on iOS >= 10 to zoom the page
  preventZoomSafari = (e: Event) => e.preventDefault()

  cleanEvents = () => {
    if (!this.currentDoc) return
    this.currentDoc.removeEventListener('mousemove', this.onMouseMove)
    this.currentDoc.removeEventListener('mouseup', this.onDragStopped)
    this.currentDoc.removeEventListener('touchmove', this.onTouchMove)
    this.currentDoc.removeEventListener('touchend', this.onDragStopped)
    this.currentDoc.removeEventListener('gesturemove', this.onGestureMove as EventListener)
    this.currentDoc.removeEventListener('gestureend', this.onGestureEnd as EventListener)
    this.currentDoc.removeEventListener('scroll', this.onScroll)
  }

  clearScrollEvent = () => {
    if (this.containerRef) this.containerRef.removeEventListener('wheel', this.onWheel)
    if (this.wheelTimer) {
      clearTimeout(this.wheelTimer)
    }
  }

  onMediaLoad = () => {
    const cropSize = this.computeSizes()

    if (cropSize) {
      this.emitCropData()
      this.setInitialCrop(cropSize)
    }

    if (this.props.onMediaLoaded) {
      this.props.onMediaLoaded(this.mediaSize)
    }
  }

  setInitialCrop = (cropSize: Size) => {
    if (this.props.initialCroppedAreaPercentages) {
      const { crop, zoom } = getInitialCropFromCroppedAreaPercentages(
        this.props.initialCroppedAreaPercentages,
        this.mediaSize,
        this.props.rotation,
        cropSize,
        this.props.minZoom,
        this.props.maxZoom
      )

      this.props.onCropChange(crop)
      this.props.onZoomChange && this.props.onZoomChange(zoom)
    } else if (this.props.initialCroppedAreaPixels) {
      const { crop, zoom } = getInitialCropFromCroppedAreaPixels(
        this.props.initialCroppedAreaPixels,
        this.mediaSize,
        this.props.rotation,
        cropSize,
        this.props.minZoom,
        this.props.maxZoom
      )

      this.props.onCropChange(crop)
      this.props.onZoomChange && this.props.onZoomChange(zoom)
    }
  }

  getAspect() {
    const { cropSize, aspect } = this.props
    if (cropSize) {
      return cropSize.width / cropSize.height
    }
    return aspect
  }

  getObjectFit() {
    if (this.props.objectFit === 'cover') {
      const mediaRef = this.imageRef.current || this.videoRef.current

      if (mediaRef && this.containerRef) {
        this.containerRect = this.containerRef.getBoundingClientRect()
        const containerAspect = this.containerRect.width / this.containerRect.height
        const naturalWidth =
          this.imageRef.current?.naturalWidth || this.videoRef.current?.videoWidth || 0
        const naturalHeight =
          this.imageRef.current?.naturalHeight || this.videoRef.current?.videoHeight || 0
        const mediaAspect = naturalWidth / naturalHeight

        return mediaAspect < containerAspect ? 'horizontal-cover' : 'vertical-cover'
      }
      return 'horizontal-cover'
    }

    return this.props.objectFit
  }

  computeSizes = () => {
    const mediaRef = this.imageRef.current || this.videoRef.current

    if (mediaRef && this.containerRef) {
      this.containerRect = this.containerRef.getBoundingClientRect()
      this.saveContainerPosition()
      const containerAspect = this.containerRect.width / this.containerRect.height
      const naturalWidth =
        this.imageRef.current?.naturalWidth || this.videoRef.current?.videoWidth || 0
      const naturalHeight =
        this.imageRef.current?.naturalHeight || this.videoRef.current?.videoHeight || 0
      const isMediaScaledDown =
        mediaRef.offsetWidth < naturalWidth || mediaRef.offsetHeight < naturalHeight
      const mediaAspect = naturalWidth / naturalHeight

      // We do not rely on the offsetWidth/offsetHeight if the media is scaled down
      // as the values they report are rounded. That will result in precision losses
      // when calculating zoom. We use the fact that the media is positionned relative
      // to the container. That allows us to use the container's dimensions
      // and natural aspect ratio of the media to calculate accurate media size.
      // However, for this to work, the container should not be rotated
      let renderedMediaSize: Size

      if (isMediaScaledDown) {
        switch (this.state.mediaObjectFit) {
          default:
          case 'contain':
            renderedMediaSize =
              containerAspect > mediaAspect
                ? {
                    width: this.containerRect.height * mediaAspect,
                    height: this.containerRect.height,
                  }
                : {
                    width: this.containerRect.width,
                    height: this.containerRect.width / mediaAspect,
                  }
            break
          case 'horizontal-cover':
            renderedMediaSize = {
              width: this.containerRect.width,
              height: this.containerRect.width / mediaAspect,
            }
            break
          case 'vertical-cover':
            renderedMediaSize = {
              width: this.containerRect.height * mediaAspect,
              height: this.containerRect.height,
            }
            break
        }
      } else {
        renderedMediaSize = {
          width: mediaRef.offsetWidth,
          height: mediaRef.offsetHeight,
        }
      }

      this.mediaSize = {
        ...renderedMediaSize,
        naturalWidth,
        naturalHeight,
      }

      // set media size in the parent
      if (this.props.setMediaSize) {
        this.props.setMediaSize(this.mediaSize)
      }

      const cropSize = this.props.cropSize
        ? this.props.cropSize
        : getCropSize(
            this.mediaSize.width,
            this.mediaSize.height,
            this.containerRect.width,
            this.containerRect.height,
            this.props.aspect,
            this.props.rotation
          )

      if (
        this.state.cropSize?.height !== cropSize.height ||
        this.state.cropSize?.width !== cropSize.width
      ) {
        this.props.onCropSizeChange && this.props.onCropSizeChange(cropSize)
      }
      this.setState({ cropSize }, this.recomputeCropPosition)
      // pass crop size to parent
      if (this.props.setCropSize) {
        this.props.setCropSize(cropSize)
      }

      return cropSize
    }
  }

  saveContainerPosition = () => {
    if (this.containerRef) {
      const bounds = this.containerRef.getBoundingClientRect()
      this.containerPosition = { x: bounds.left, y: bounds.top }
    }
  }

  static getMousePoint = (e: MouseEvent | React.MouseEvent | GestureEvent) => ({
    x: Number(e.clientX),
    y: Number(e.clientY),
  })

  static getTouchPoint = (touch: Touch | React.Touch) => ({
    x: Number(touch.clientX),
    y: Number(touch.clientY),
  })

  onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!this.currentDoc) return
    e.preventDefault()
    this.currentDoc.addEventListener('mousemove', this.onMouseMove)
    this.currentDoc.addEventListener('mouseup', this.onDragStopped)
    this.saveContainerPosition()
    this.onDragStart(Cropper.getMousePoint(e))
  }

  onMouseMove = (e: MouseEvent) => this.onDrag(Cropper.getMousePoint(e))

  onScroll = (e: Event) => {
    if (!this.currentDoc) return
    e.preventDefault()
    this.saveContainerPosition()
  }

  onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!this.currentDoc) return
    this.isTouching = true
    if (this.props.onTouchRequest && !this.props.onTouchRequest(e)) {
      return
    }

    this.currentDoc.addEventListener('touchmove', this.onTouchMove, { passive: false }) // iOS 11 now defaults to passive: true
    this.currentDoc.addEventListener('touchend', this.onDragStopped)

    this.saveContainerPosition()

    if (e.touches.length === 2) {
      this.onPinchStart(e)
    } else if (e.touches.length === 1) {
      this.onDragStart(Cropper.getTouchPoint(e.touches[0]))
    }
  }

  onTouchMove = (e: TouchEvent) => {
    // Prevent whole page from scrolling on iOS.
    e.preventDefault()
    if (e.touches.length === 2) {
      this.onPinchMove(e)
    } else if (e.touches.length === 1) {
      this.onDrag(Cropper.getTouchPoint(e.touches[0]))
    }
  }

  onGestureStart = (e: GestureEvent) => {
    if (!this.currentDoc) return
    e.preventDefault()
    this.currentDoc.addEventListener('gesturechange', this.onGestureMove as EventListener)
    this.currentDoc.addEventListener('gestureend', this.onGestureEnd as EventListener)
    this.gestureZoomStart = this.props.zoom
    this.gestureRotationStart = this.props.rotation
  }

  onGestureMove = (e: GestureEvent) => {
    e.preventDefault()
    if (this.isTouching) {
      // this is to avoid conflict between gesture and touch events
      return
    }

    const point = Cropper.getMousePoint(e)
    const newZoom = this.gestureZoomStart - 1 + e.scale
    this.setNewZoom(newZoom, point, { shouldUpdatePosition: true })
    if (this.props.onRotationChange) {
      const newRotation = this.gestureRotationStart + e.rotation
      this.props.onRotationChange(newRotation)
    }
  }

  onGestureEnd = (e: GestureEvent) => {
    this.cleanEvents()
  }

  onDragStart = ({ x, y }: Point) => {
    this.dragStartPosition = { x, y }
    this.dragStartCrop = { ...this.props.crop }
    this.props.onInteractionStart?.()
  }

  onDrag = ({ x, y }: Point) => {
    if (!this.currentWindow) return
    if (this.rafDragTimeout) this.currentWindow.cancelAnimationFrame(this.rafDragTimeout)

    this.rafDragTimeout = this.currentWindow.requestAnimationFrame(() => {
      if (!this.state.cropSize) return
      if (x === undefined || y === undefined) return
      const offsetX = x - this.dragStartPosition.x
      const offsetY = y - this.dragStartPosition.y
      const requestedPosition = {
        x: this.dragStartCrop.x + offsetX,
        y: this.dragStartCrop.y + offsetY,
      }

      const newPosition = this.props.restrictPosition
        ? restrictPosition(
            requestedPosition,
            this.mediaSize,
            this.state.cropSize,
            this.props.zoom,
            this.props.rotation
          )
        : requestedPosition
      this.props.onCropChange(newPosition)
    })
  }

  onDragStopped = () => {
    this.isTouching = false
    this.cleanEvents()
    this.emitCropData()
    this.props.onInteractionEnd?.()
  }

  onPinchStart(e: React.TouchEvent<HTMLDivElement>) {
    const pointA = Cropper.getTouchPoint(e.touches[0])
    const pointB = Cropper.getTouchPoint(e.touches[1])
    this.lastPinchDistance = getDistanceBetweenPoints(pointA, pointB)
    this.lastPinchRotation = getRotationBetweenPoints(pointA, pointB)
    this.onDragStart(getCenter(pointA, pointB))
  }

  onPinchMove(e: TouchEvent) {
    if (!this.currentDoc || !this.currentWindow) return
    const pointA = Cropper.getTouchPoint(e.touches[0])
    const pointB = Cropper.getTouchPoint(e.touches[1])
    const center = getCenter(pointA, pointB)
    this.onDrag(center)

    if (this.rafPinchTimeout) this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout)
    this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(() => {
      const distance = getDistanceBetweenPoints(pointA, pointB)
      const newZoom = this.props.zoom * (distance / this.lastPinchDistance)
      this.setNewZoom(newZoom, center, { shouldUpdatePosition: false })
      this.lastPinchDistance = distance

      const rotation = getRotationBetweenPoints(pointA, pointB)
      const newRotation = this.props.rotation + (rotation - this.lastPinchRotation)
      this.props.onRotationChange && this.props.onRotationChange(newRotation)
      this.lastPinchRotation = rotation
    })
  }

  onWheel = (e: WheelEvent) => {
    if (!this.currentWindow) return
    if (this.props.onWheelRequest && !this.props.onWheelRequest(e)) {
      return
    }

    e.preventDefault()
    const point = Cropper.getMousePoint(e)
    const { pixelY } = normalizeWheel(e)
    const newZoom = this.props.zoom - (pixelY * this.props.zoomSpeed) / 200
    this.setNewZoom(newZoom, point, { shouldUpdatePosition: true })

    if (!this.state.hasWheelJustStarted) {
      this.setState({ hasWheelJustStarted: true }, () => this.props.onInteractionStart?.())
    }

    if (this.wheelTimer) {
      clearTimeout(this.wheelTimer)
    }
    this.wheelTimer = this.currentWindow.setTimeout(
      () => this.setState({ hasWheelJustStarted: false }, () => this.props.onInteractionEnd?.()),
      250
    )
  }

  getPointOnContainer = ({ x, y }: Point, containerTopLeft: Point): Point => {
    if (!this.containerRect) {
      throw new Error('The Cropper is not mounted')
    }
    return {
      x: this.containerRect.width / 2 - (x - containerTopLeft.x),
      y: this.containerRect.height / 2 - (y - containerTopLeft.y),
    }
  }

  getPointOnMedia = ({ x, y }: Point) => {
    const { crop, zoom } = this.props
    return {
      x: (x + crop.x) / zoom,
      y: (y + crop.y) / zoom,
    }
  }

  setNewZoom = (zoom: number, point: Point, { shouldUpdatePosition = true } = {}) => {
    if (!this.state.cropSize || !this.props.onZoomChange) return

    const newZoom = clamp(zoom, this.props.minZoom, this.props.maxZoom)

    if (shouldUpdatePosition) {
      const zoomPoint = this.getPointOnContainer(point, this.containerPosition)
      const zoomTarget = this.getPointOnMedia(zoomPoint)
      const requestedPosition = {
        x: zoomTarget.x * newZoom - zoomPoint.x,
        y: zoomTarget.y * newZoom - zoomPoint.y,
      }

      const newPosition = this.props.restrictPosition
        ? restrictPosition(
            requestedPosition,
            this.mediaSize,
            this.state.cropSize,
            newZoom,
            this.props.rotation
          )
        : requestedPosition

      this.props.onCropChange(newPosition)
    }
    this.props.onZoomChange(newZoom)
  }

  getCropData = () => {
    if (!this.state.cropSize) {
      return null
    }

    // this is to ensure the crop is correctly restricted after a zoom back (https://github.com/ValentinH/react-easy-crop/issues/6)
    const restrictedPosition = this.props.restrictPosition
      ? restrictPosition(
          this.props.crop,
          this.mediaSize,
          this.state.cropSize,
          this.props.zoom,
          this.props.rotation
        )
      : this.props.crop
    return computeCroppedArea(
      restrictedPosition,
      this.mediaSize,
      this.state.cropSize,
      this.getAspect(),
      this.props.zoom,
      this.props.rotation,
      this.props.restrictPosition
    )
  }

  emitCropData = () => {
    const cropData = this.getCropData()
    if (!cropData) return

    const { croppedAreaPercentages, croppedAreaPixels } = cropData
    if (this.props.onCropComplete) {
      this.props.onCropComplete(croppedAreaPercentages, croppedAreaPixels)
    }

    if (this.props.onCropAreaChange) {
      this.props.onCropAreaChange(croppedAreaPercentages, croppedAreaPixels)
    }
  }

  emitCropAreaChange = () => {
    const cropData = this.getCropData()
    if (!cropData) return

    const { croppedAreaPercentages, croppedAreaPixels } = cropData
    if (this.props.onCropAreaChange) {
      this.props.onCropAreaChange(croppedAreaPercentages, croppedAreaPixels)
    }
  }

  recomputeCropPosition = () => {
    if (!this.state.cropSize) return

    const newPosition = this.props.restrictPosition
      ? restrictPosition(
          this.props.crop,
          this.mediaSize,
          this.state.cropSize,
          this.props.zoom,
          this.props.rotation
        )
      : this.props.crop

    this.props.onCropChange(newPosition)
    this.emitCropData()
  }

  onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { crop, onCropChange, keyboardStep, zoom, rotation } = this.props
    let step = keyboardStep

    if (!this.state.cropSize) return

    // if the shift key is pressed, reduce the step to allow finer control
    if (event.shiftKey) {
      step *= 0.2
    }

    let newCrop = { ...crop }

    switch (event.key) {
      case 'ArrowUp':
        newCrop.y -= step
        event.preventDefault()
        break
      case 'ArrowDown':
        newCrop.y += step
        event.preventDefault()
        break
      case 'ArrowLeft':
        newCrop.x -= step
        event.preventDefault()
        break
      case 'ArrowRight':
        newCrop.x += step
        event.preventDefault()
        break
      default:
        return
    }

    if (this.props.restrictPosition) {
      newCrop = restrictPosition(newCrop, this.mediaSize, this.state.cropSize, zoom, rotation)
    }

    if (!event.repeat) {
      this.props.onInteractionStart?.()
    }

    onCropChange(newCrop)
  }

  onKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        event.preventDefault()
        break
      default:
        return
    }
    this.emitCropData()
    this.props.onInteractionEnd?.()
  }

  render() {
    const {
      image,
      video,
      mediaProps,
      cropperProps,
      transform,
      crop: { x, y },
      rotation,
      zoom,
      cropShape,
      showGrid,
      style: { containerStyle, cropAreaStyle, mediaStyle },
      classes: { containerClassName, cropAreaClassName, mediaClassName },
    } = this.props

    const objectFit = this.state.mediaObjectFit ?? this.getObjectFit()

    return (
      <div
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onTouchStart}
        ref={(el) => { this.containerRef = el }}
        data-testid="container"
        style={containerStyle}
        className={classNames('reactEasyCrop_Container', containerClassName)}
      >
        {image ? (
          <img
            alt=""
            className={classNames(
              'reactEasyCrop_Image',
              objectFit === 'contain' && 'reactEasyCrop_Contain',
              objectFit === 'horizontal-cover' && 'reactEasyCrop_Cover_Horizontal',
              objectFit === 'vertical-cover' && 'reactEasyCrop_Cover_Vertical',
              mediaClassName
            )}
            {...(mediaProps as React.ImgHTMLAttributes<HTMLElement>)}
            src={image}
            ref={this.imageRef}
            style={{
              ...mediaStyle,
              transform:
                transform || `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${zoom})`,
            }}
            onLoad={this.onMediaLoad}
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
                objectFit === 'contain' && 'reactEasyCrop_Contain',
                objectFit === 'horizontal-cover' && 'reactEasyCrop_Cover_Horizontal',
                objectFit === 'vertical-cover' && 'reactEasyCrop_Cover_Vertical',
                mediaClassName
              )}
              {...mediaProps}
              ref={this.videoRef}
              onLoadedMetadata={this.onMediaLoad}
              style={{
                ...mediaStyle,
                transform:
                  transform || `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${zoom})`,
              }}
              controls={false}
            >
              {(Array.isArray(video) ? video : [{ src: video }]).map((item) => (
                <source key={item.src} {...item} />
              ))}
            </video>
          )
        )}
        {this.state.cropSize && (
          <div
            ref={this.cropperRef}
            style={{
              ...cropAreaStyle,
              width: this.state.cropSize.width,
              height: this.state.cropSize.height,
            }}
            tabIndex={0}
            onKeyDown={this.onKeyDown}
            onKeyUp={this.onKeyUp}
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
}

export default Cropper