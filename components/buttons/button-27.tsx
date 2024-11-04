// Dependencies: pnpm install lucide-react

"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus, Volume, Volume1, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export default function Button27() {
  const [volume, setVolume] = useState(3); // Initialize volume state (0-9)

  const decreaseVolume = () => setVolume((prev) => Math.max(0, prev - 1));
  const increaseVolume = () => setVolume((prev) => Math.min(6, prev + 1));

  // Optimized volume icon selection
  const VolumeIcon = volume === 0 ? VolumeX : volume < 3 ? Volume : volume < 5 ? Volume1 : Volume2;

  return (
    <div className="inline-flex items-center" role="group" aria-labelledby="volume-control">
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
        <Minus size={16} strokeWidth={2} aria-hidden="true" />
        <span className="sr-only">Decrease</span>
      </Button>
      <div className="flex items-center px-3 text-sm font-medium tabular-nums" aria-live="polite">
        <VolumeIcon className="opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
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
        <Plus size={16} strokeWidth={2} aria-hidden="true" />
        <span className="sr-only">Increase</span>
      </Button>
    </div>
  );
}
