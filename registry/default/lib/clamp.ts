/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param value - The number to clamp
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns The clamped value
 *
 * @example
 * clamp(5, 0, 10)  // returns 5
 * clamp(-1, 0, 10) // returns 0
 * clamp(15, 0, 10) // returns 10
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
