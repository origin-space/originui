import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

import Image from "next/image";

import ContentImg from "@/public/dialog-content.png";

export default function HoverCardDemo() {
  return (
    <div className="max-w-md text-sm">
      <p className="mb-4">
        <HoverCard>
          <HoverCardTrigger asChild>
            <a className="flex size-16 overflow-hidden rounded-lg" href="#">
              <Image
                className="h-full w-full object-cover"
                src={ContentImg}
                width={382}
                height={216}
                alt="Content image"
              />
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-[320px]" showArrow>
            <div className="space-y-3">
              <h2 className="font-semibold">
                Building a Design System with Next.js and Tailwind CSS
              </h2>
              <p className="text-sm text-muted-foreground">
                Learn how to build a comprehensive design system using Tailwind CSS, including
                component architecture, and theme customization.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>8 min read</span>
                <span>·</span>
                <span>Updated 2 days ago</span>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </p>
    </div>
  );
}
