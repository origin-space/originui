"use client"

import { useState } from "react"
import {
  MinusIcon,
  PlusIcon,
  Volume1Icon,
  Volume2Icon,
  VolumeIcon,
  VolumeXIcon,
} from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const [volume, setVolume] = useState(3) // Initialize volume state (0-9)

  const decreaseVolume = () => setVolume((prev) => Math.max(0, prev - 1))
  const increaseVolume = () => setVolume((prev) => Math.min(6, prev + 1))

  // Optimized volume icon selection
  const Icon =
    volume === 0
      ? VolumeXIcon
      : volume < 3
        ? VolumeIcon
        : volume < 5
          ? Volume1Icon
          : Volume2Icon

  return (
    <div
      className="inline-flex items-center"
      role="group"
      aria-labelledby="volume-control"
    >
      <span id="volume-control" className="sr-only">
        Volume Control
      </span>
      <Button
        className="rounded-full"
        variant="outline"
        size="icon"
        aria-label="Decrease volume"
        onClick={decreaseVolume}
        disabled={volume === 0}
      >
        <MinusIcon size={16} aria-hidden="true" />
      </Button>
      <div
        className="flex items-center px-3 text-sm font-medium tabular-nums"
        aria-live="polite"
      >
        <Icon className="opacity-60" size={16} aria-hidden="true" />
        <span className="ms-2" aria-label={`Current volume is ${volume}`}>
          {volume}
        </span>
      </div>
      <Button
        className="rounded-full"
        variant="outline"
        size="icon"
        aria-label="Increase volume"
        onClick={increaseVolume}
        disabled={volume === 6}
      >
        <PlusIcon size={16} aria-hidden="true" />
      </Button>
    </div>
  )
}
