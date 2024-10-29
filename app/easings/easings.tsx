"use client";

import React, { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import CopyClass from "./copy-class";

interface Easing {
  name: string;
  points: number[];
}

interface EasingsProps {
  easings: Easing[];
}

type EasingFilter = 'all' | 'in' | 'out' | 'in-out';

const defaultConfig = {
  width: 140,
  height: 140,
  padding: 20,
  plotSize: 100,
  animationDuration: 1000,
  pauseDuration: 1000,
};

type AnimationType = 'translate' | 'scale' | 'rotate';

function useAnimationKey(duration: number, pauseDuration: number, animationType: AnimationType) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setKey(prevKey => prevKey + 1);
    }, (duration + pauseDuration) * 1000);

    return () => clearInterval(timer);
  }, [duration, pauseDuration, animationType]);

  return key;
}

const EasingSVG = ({ easing, config, duration, animationType, pauseDuration }: { easing: Easing; config: typeof defaultConfig; duration: number; animationType: AnimationType; pauseDuration: number }) => {
  const key = useAnimationKey(duration, pauseDuration, animationType);

  const getAnimationStyle = () => {
    if (!easing.points.length || duration <= 0) return {};

    return {
      ['--bezier-coordinates' as string]: easing.points.join(','),
      ['--animation-duration' as string]: `${duration}s`,
      ['--total-duration' as string]: `${duration + pauseDuration}s`,
      animationName: 'moveCircleVertically',
      animationDuration: `${duration}s`,
      animationTimingFunction: `cubic-bezier(${easing.points.join(',')})`,
      animationIterationCount: '1',
      animationFillMode: 'forwards',
      animationDelay: '0s',
    };
  };

  return (
    <svg
      width={config.width}
      height={config.height}
      viewBox={`0 0 ${config.width} ${config.height}`}
      className="w-full"
    >
      {/* Grid */}
      <rect
        x={config.padding}
        y={config.padding}
        width={config.plotSize}
        height={config.plotSize}
        className="stroke-muted-foreground/20 fill-none"
        strokeWidth="1"
      />

      {/* Diagonal line */}
      <line
        x1={config.padding}
        y1={config.height - config.padding}
        x2={config.width - config.padding}
        y2={config.padding}
        className="stroke-muted-foreground/20"
        strokeWidth="1"
      />

      {/* Bezier curve */}
      <path
        d={`M${config.padding},${config.height - config.padding} C${config.padding + easing.points[0] * config.plotSize},${config.height - config.padding - easing.points[1] * config.plotSize
          } ${config.padding + easing.points[2] * config.plotSize},${config.height - config.padding - easing.points[3] * config.plotSize
          } ${config.padding + config.plotSize},${config.height - config.padding - config.plotSize}`}
        fill="none"
        className="stroke-muted-foreground"
        strokeWidth="2"
      />

      {/* Start point */}
      <circle
        cx={config.padding}
        cy={config.height - config.padding}
        r="4"
        className="fill-muted-foreground"
      />

      {/* End point */}
      <circle
        cx={config.width - config.padding}
        cy={config.padding}
        r="4"
        className="fill-muted-foreground"
      />

      {/* Animated circle */}
      <g
        className="animated-circle"
        key={`${key}-${duration}-${pauseDuration}-${animationType}`}
        style={getAnimationStyle()}
      >
        <circle
          cx={config.padding}
          cy={config.height - config.padding}
          r="4"
          className="fill-primary"
          style={{
            animationName: 'moveCircleHorizontally',
            animationDuration: `${duration}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: '1',
            animationFillMode: 'forwards',
            animationDelay: '0s',
          }}
        />
      </g>
      <style jsx>{`
        @keyframes moveCircleHorizontally {
          0% { transform: translateX(0); }
          100% { transform: translateX(${config.plotSize}px); }
        }
        @keyframes moveCircleVertically {
          0% { transform: translateY(0); }
          100% { transform: translateY(-${config.plotSize}px); }
        }
      `}</style>
    </svg>
  );
};

const AnimatedSquare = ({ easing, duration, animationType, pauseDuration }: { easing: Easing; duration: number; animationType: AnimationType; pauseDuration: number }) => {
  const key = useAnimationKey(duration, pauseDuration, animationType);

  const getAnimationStyle = () => {
    if (!easing.points.length || duration <= 0) return {};

    const baseStyle = {
      ['--bezier-coordinates' as string]: easing.points.join(','),
      ['--animation-duration' as string]: `${duration}s`,
      ['--total-duration' as string]: `${duration + pauseDuration}s`,
    };

    const animationName = {
      'translate': 'translateSquare',
      'scale': 'scaleSquare',
      'rotate': 'rotateSquare',
    }[animationType];

    return {
      ...baseStyle,
      animationName,
      animationDuration: `${duration}s`,
      animationTimingFunction: `cubic-bezier(${easing.points.join(',')})`,
      animationIterationCount: '1',
      animationFillMode: 'forwards',
      animationDelay: '0s',
    };
  };

  const animationStyle = getAnimationStyle();

  return (
    <div
      key={`${key}-${duration}-${pauseDuration}-${animationType}`}
      className={`w-full flex items-center ${animationType === 'translate' ? 'justify-start' : 'justify-center'}`}
      style={animationType === 'translate' ? animationStyle : undefined}
    >
      <div
        className="animated-square w-10 h-10 bg-gradient-to-tr from-primary to-primary/80 rounded-lg shadow-lg shadow-primary/10"
        style={animationType !== 'translate' ? animationStyle : undefined}
      />
      <style jsx>{`
        @keyframes translateSquare {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100% - 2.5rem)); }
        }
        @keyframes scaleSquare {
          0% { transform: scale(0); }
          100% { transform: scale(1); }
        }
        @keyframes rotateSquare {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default function Easings({ easings }: EasingsProps) {
  const [duration, setDuration] = useState(defaultConfig.animationDuration);
  const [tempDuration, setTempDuration] = useState(defaultConfig.animationDuration);
  const [pauseDuration, setPauseDuration] = useState(defaultConfig.pauseDuration);
  const [tempPauseDuration, setTempPauseDuration] = useState(defaultConfig.pauseDuration);
  const [animationType, setAnimationType] = useState<AnimationType>('translate');
  const [easingFilter, setEasingFilter] = useState<EasingFilter>('all');

  const handleSliderChangeEnd = (value: number[]) => {
    setDuration(value[0]);
  };

  const handleSliderChange = (value: number[]) => {
    setTempDuration(value[0]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 5000) {
      setTempDuration(value);
    }
  };

  const handleInputBlur = () => {
    if (tempDuration >= 0 && tempDuration <= 5000) {
      setDuration(tempDuration);
    } else {
      setTempDuration(duration);
    }
  };

  const handlePauseSliderChangeEnd = (value: number[]) => {
    setPauseDuration(value[0]);
  };

  const handlePauseSliderChange = (value: number[]) => {
    setTempPauseDuration(value[0]);
  };

  const handlePauseInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 5000) {
      setTempPauseDuration(value);
    }
  };

  const handlePauseInputBlur = () => {
    if (tempPauseDuration >= 0 && tempPauseDuration <= 5000) {
      setPauseDuration(tempPauseDuration);
    } else {
      setTempPauseDuration(pauseDuration);
    }
  };

  const getFilteredEasings = () => {
    if (easingFilter === 'all') return easings;
    
    return easings.filter(easing => {
      const name = easing.name.toLowerCase();
      switch (easingFilter) {
        case 'in':
          return (name.startsWith('easein') && !name.includes('inout')) || 
                 name === 'ease-in';
        case 'out':
          return name.startsWith('easeout') || name === 'ease-out';
        case 'in-out':
          return name.startsWith('easeinout') || 
                 name === 'ease-in-out' || 
                 name === 'ease';
        default:
          return true;
      }
    });
  };

  return (
    <div className="space-y-6 mb-12">
      <div className="md:sticky top-0 z-10 bg-background/95 py-4 backdrop-blur-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Label>Duration</Label>
            <div className="flex items-center gap-4">
              <Slider
                value={[tempDuration]}
                min={0}
                max={5000}
                step={1}
                onValueChange={handleSliderChange}
                onValueCommit={handleSliderChangeEnd}
                className="w-[180px]"
              />
              <Input
                type="number"
                value={tempDuration}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className="w-[90px]"
                min={0}
                max={5000}
              />
              <span className="text-sm text-muted-foreground">ms</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
              <Label>Filter</Label>
              <Select value={easingFilter} onValueChange={(value: EasingFilter) => setEasingFilter(value)}>
                <SelectTrigger className="w-[100px] h-9">
                  <SelectValue placeholder="Select animation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="in">In</SelectItem>
                  <SelectItem value="out">Out</SelectItem>
                  <SelectItem value="in-out">In-Out</SelectItem>
                </SelectContent>
              </Select>
            </div>              
            <div className="flex flex-col gap-2">
              <Label>Animation type</Label>
              <Select value={animationType} onValueChange={(value: AnimationType) => setAnimationType(value)}>
                <SelectTrigger className="w-[180px] h-9">
                  <SelectValue placeholder="Select animation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="translate">Translate</SelectItem>
                  <SelectItem value="scale">Scale</SelectItem>
                  <SelectItem value="rotate">Rotate</SelectItem>
                </SelectContent>
              </Select>
            </div>        
          </div>

        </div>
      </div>

      <div id="grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 [&>*:last-child:nth-child(2n-1)]:sm:col-span-2 [&>*:last-child:nth-child(3n-1)]:lg:col-start-2 [&>*:last-child:nth-child(3n-2)]:lg:col-span-3">
        {getFilteredEasings().map((easing) => (
          <div
            key={`${easing.name}-${easingFilter}`}
            className="relative aspect-square bg-muted/65 rounded-xl flex flex-col gap-4 items-center justify-center group"
          >
            <div className="text-sm font-medium text-center pt-6">
              {easing.name}
            </div>

            <div className="grow flex flex-col items-start w-full justify-center px-8">
              <div className="w-full flex justify-center mb-4">
                <EasingSVG 
                  easing={easing} 
                  config={defaultConfig} 
                  duration={duration / 1000} 
                  pauseDuration={pauseDuration / 1000} 
                  animationType={animationType}
                  key={`svg-${easing.name}-${easingFilter}`}
                />
              </div>
              <AnimatedSquare
                easing={easing}
                duration={duration / 1000}
                pauseDuration={pauseDuration / 1000}
                animationType={animationType}
                key={`square-${easing.name}-${easingFilter}`}
              />
            </div>

            <div className="flex items-center gap-2 justify-center pb-5">
              {/* Using decodeURIComponent to properly escape special characters in the class name.
                  Without this, Tailwind shows a warning: The class ... is ambiguous and matches multiple utilities. */}
              <CopyClass value={`[transition-timing-function:cubic-bezier(${easing.points.join(',')})]`} />
            </div>
          </div>      
        ))}
          <div className="relative bg-muted/65 rounded-xl p-6">
            <p className="mb-4"><strong className="block font-medium text-foreground text-sm">Technical note</strong></p>
            <p className="text-sm text-muted-foreground leading-relaxed">
             We use class names with arbitrary properties like <code className="font-mono text-foreground text-[13px]">[transition-timing-function:cubic-bezier(...)]</code> instead of <code className="font-mono text-foreground text-[13px]">ease-[cubic-bezier(...)]</code> as recommended in the Tailwind CSS documentation, because the latter won't work with the tailwindcss-animate plugin. See{" "}
            <a
              href="https://github.com/jamiebuilds/tailwindcss-animate/pull/46"
              className="underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              this GitHub issue
            </a> for technical details.
          </p> 
          </div>           
      </div>
      <style global jsx>{`
        @media (min-width: 768px) {
          .group,
          .animated-circle,
          .animated-square {
            transition: opacity 0.25s ease;
          }
          #grid:hover .group {
            opacity: 0.5;
          }
          #grid:hover .group .animated-circle,
          #grid:hover .group .animated-square {
            opacity: 0;
          }
          #grid .group:hover,
          #grid .group:hover .animated-circle,
          #grid .group:hover .animated-square {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}