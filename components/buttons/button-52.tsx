"use client";

import { Button } from "@/components/ui/button";
import { stagger, useAnimate } from "framer-motion";
import React from "react";

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

type AnimationSegment = [string, any, { duration: number; at?: string }];
type AnimationSequence = AnimationSegment[];

interface SparkleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export default function SparkleButton({
  label = "Button",
  className,
  ...props
}: SparkleButtonProps) {
  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    const sparkles = Array.from({ length: 20 });

    const sparklesAnimation: AnimationSequence = sparkles.map(
      (_, index): AnimationSegment => [
        `.sparkle-${index}`,
        {
          x: randomNumberBetween(-100, 100),
          y: randomNumberBetween(-100, 100),
          scale: randomNumberBetween(1.5, 2.5),
          opacity: 1,
        },
        {
          duration: 0.4,
          at: "<",
        },
      ],
    );

    const sparklesFadeOut: AnimationSequence = sparkles.map(
      (_, index): AnimationSegment => [
        `.sparkle-${index}`,
        {
          opacity: 0,
          scale: 0,
        },
        {
          duration: 0.3,
          at: "<",
        },
      ],
    );

    const sparklesReset: AnimationSequence = sparkles.map(
      (_, index): AnimationSegment => [
        `.sparkle-${index}`,
        {
          x: 0,
          y: 0,
        },
        {
          duration: 0.000001,
        },
      ],
    );

    animate([
      ...sparklesReset,
      [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...sparklesFadeOut,
    ]);
  };

  return (
    <div ref={scope}>
      <Button onClick={onButtonClick} className={`relative text-lg ${className}`} {...props}>
        <span className="sr-only">{label}</span>
        <span className="block h-8 overflow-hidden" aria-hidden>
          {(label || "").split("").map((letter, index) => (
            <span
              data-letter={letter}
              className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
              key={`${letter}-${index}`}
            >
              {letter}
            </span>
          ))}
        </span>
        <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 block">
          {Array.from({ length: 20 }).map((_, index) => (
            <svg
              className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
              key={index}
              viewBox="0 0 122 117"
              width="10"
              height="10"
            >
              <path
                className="fill-primary"
                d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
              />
            </svg>
          ))}
        </span>
      </Button>
    </div>
  );
}
