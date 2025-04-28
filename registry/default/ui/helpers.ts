import { Area, MediaSize, Point, Size } from './types'

/**
 * Compute the dimension of the crop area based on media size and aspect ratio
 */
export function getCropSize(
  mediaWidth: number,
  mediaHeight: number,
  containerWidth: number,
  containerHeight: number,
  aspect: number,
): Size {
  const width = mediaWidth;
  const height = mediaHeight;
  const fittingWidth = Math.min(width, containerWidth)
  const fittingHeight = Math.min(height, containerHeight)

  if (fittingWidth > fittingHeight * aspect) {
    return {
      width: fittingHeight * aspect,
      height: fittingHeight,
    }
  }

  return {
    width: fittingWidth,
    height: fittingWidth / aspect,
  }
}

/**
 * Compute media zoom.
 * We fit the media into the container with "max-width: 100%; max-height: 100%;"
 */
export function getMediaZoom(mediaSize: MediaSize) {
  // Take the axis with more pixels to improve accuracy
  return mediaSize.width > mediaSize.height
    ? mediaSize.width / mediaSize.naturalWidth
    : mediaSize.height / mediaSize.naturalHeight
}

/**
 * Ensure a new media position stays in the crop area.
 */
export function restrictPosition(
  position: Point,
  mediaSize: Size,
  cropSize: Size,
  zoom: number,
): Point {
  return {
    x: clamp(
      position.x,
      -(mediaSize.width * zoom / 2 - cropSize.width / 2),
      mediaSize.width * zoom / 2 - cropSize.width / 2
    ),
    y: clamp(
      position.y,
      -(mediaSize.height * zoom / 2 - cropSize.height / 2),
      mediaSize.height * zoom / 2 - cropSize.height / 2
    ),
  }
}

export function getDistanceBetweenPoints(pointA: Point, pointB: Point) {
  return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2))
}

/**
 * Compute the output cropped area of the media in percentages and pixels.
 * x/y are the top-left coordinates on the src media
 */
export function computeCroppedArea(
  crop: Point,
  mediaSize: MediaSize,
  cropSize: Size,
  aspect: number,
  zoom: number,
): { croppedAreaPercentages: Area; croppedAreaPixels: Area } {

  // calculate the crop area in percentages
  const croppedAreaPercentages = {
    x: limitArea(
      100,
      (((mediaSize.width - cropSize.width / zoom) / 2 - crop.x / zoom) / mediaSize.width) *
        100
    ),
    y: limitArea(
      100,
      (((mediaSize.height - cropSize.height / zoom) / 2 - crop.y / zoom) / mediaSize.height) *
        100
    ),
    width: limitArea(100, ((cropSize.width / mediaSize.width) * 100) / zoom),
    height: limitArea(100, ((cropSize.height / mediaSize.height) * 100) / zoom),
  }

  // we compute the pixels size naively
  const widthInPixels = Math.round(
    limitArea(
      mediaSize.naturalWidth,
      (croppedAreaPercentages.width * mediaSize.naturalWidth) / 100
    )
  )
  const heightInPixels = Math.round(
    limitArea(
      mediaSize.naturalHeight,
      (croppedAreaPercentages.height * mediaSize.naturalHeight) / 100
    )
  )
  const isImgWiderThanHigh = mediaSize.naturalWidth >= mediaSize.naturalHeight * aspect

  // then we ensure the width and height exactly match the aspect (to avoid rounding approximations)
  // if the media is wider than high, when zoom is 0, the crop height will be equals to image height
  // thus we want to compute the width from the height and aspect for accuracy.
  // Otherwise, we compute the height from width and aspect.
  const sizePixels = isImgWiderThanHigh
    ? {
        width: Math.round(heightInPixels * aspect),
        height: heightInPixels,
      }
    : {
        width: widthInPixels,
        height: Math.round(widthInPixels / aspect),
      }

  const croppedAreaPixels = {
    ...sizePixels,
    x: Math.round(
      limitArea(
        mediaSize.naturalWidth - sizePixels.width,
        (croppedAreaPercentages.x * mediaSize.naturalWidth) / 100
      )
    ),
    y: Math.round(
      limitArea(
        mediaSize.naturalHeight - sizePixels.height,
        (croppedAreaPercentages.y * mediaSize.naturalHeight) / 100
      )
    ),
  }

  return { croppedAreaPercentages, croppedAreaPixels }
}

/**
 * Ensure the returned value is between 0 and max
 */
function limitArea(max: number, value: number): number {
  return Math.min(max, Math.max(0, value))
}

/**
 * Compute crop and zoom from the croppedAreaPercentages.
 */
export function getInitialCropFromCroppedAreaPercentages(
  croppedAreaPercentages: Area,
  mediaSize: MediaSize,
  cropSize: Size,
  minZoom: number,
  maxZoom: number
) {
  const mediaBBoxSize = { width: mediaSize.width, height: mediaSize.height }; // Use original dimensions

  // This is the inverse process of computeCroppedArea
  const zoom = clamp(
    (cropSize.width / mediaBBoxSize.width) * (100 / croppedAreaPercentages.width),
    minZoom,
    maxZoom
  )

  const crop = {
    x:
      (zoom * mediaBBoxSize.width) / 2 -
      cropSize.width / 2 -
      mediaBBoxSize.width * zoom * (croppedAreaPercentages.x / 100),
    y:
      (zoom * mediaBBoxSize.height) / 2 -
      cropSize.height / 2 -
      mediaBBoxSize.height * zoom * (croppedAreaPercentages.y / 100),
  }

  return { crop, zoom }
}

/**
 * Compute zoom from the croppedAreaPixels
 */
function getZoomFromCroppedAreaPixels(
  croppedAreaPixels: Area,
  mediaSize: MediaSize,
  cropSize: Size
): number {
  const mediaZoom = getMediaZoom(mediaSize)

  return cropSize.height > cropSize.width
    ? cropSize.height / (croppedAreaPixels.height * mediaZoom)
    : cropSize.width / (croppedAreaPixels.width * mediaZoom)
}

/**
 * Compute crop and zoom from the croppedAreaPixels
 */
export function getInitialCropFromCroppedAreaPixels(
  croppedAreaPixels: Area,
  mediaSize: MediaSize,
  cropSize: Size,
  minZoom: number,
  maxZoom: number
): { crop: Point; zoom: number } {
  const mediaNaturalBBoxSize = { width: mediaSize.naturalWidth, height: mediaSize.naturalHeight }; // Use original dimensions

  const zoom = clamp(
    getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize),
    minZoom,
    maxZoom
  )

  const cropZoom =
    cropSize.height > cropSize.width
      ? cropSize.height / croppedAreaPixels.height
      : cropSize.width / croppedAreaPixels.width

  const crop = {
    x:
      ((mediaNaturalBBoxSize.width - croppedAreaPixels.width) / 2 - croppedAreaPixels.x) * cropZoom,
    y:
      ((mediaNaturalBBoxSize.height - croppedAreaPixels.height) / 2 - croppedAreaPixels.y) *
      cropZoom,
  }
  return { crop, zoom }
}

/**
 * Return the point that is the center of point a and b
 */
export function getCenter(a: Point, b: Point): Point {
  return {
    x: (b.x + a.x) / 2,
    y: (b.y + a.y) / 2,
  }
}

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

/**
 * Combine multiple class names into a single string.
 */
export function classNames(...args: (boolean | string | number | undefined | void | null)[]) {
  return args
    .filter((value) => {
      if (typeof value === 'string' && value.length > 0) {
        return true
      }

      return false
    })
    .join(' ')
    .trim()
}