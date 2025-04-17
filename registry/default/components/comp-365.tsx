import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/default/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <div className="max-w-md text-sm">
      <HoverCard>
        <HoverCardTrigger asChild>
          <a className="flex size-16 overflow-hidden rounded-md" href="#">
            <img
              className="size-full object-cover"
              src="/dialog-content.png"
              width={382}
              height={216}
              alt="Content image"
            />
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-[320px]" showArrow>
          <div className="space-y-3">
            <div className="space-y-1">
              <h2 className="font-semibold">
                Building a Design System with Next.js and Tailwind CSS
              </h2>
              <p className="text-muted-foreground text-sm">
                Learn how to build a comprehensive design system using Tailwind
                CSS, including component architecture, and theme customization.
              </p>
            </div>
            <div className="text-muted-foreground flex items-center gap-2 text-xs">
              <span>8 min read</span>
              <span>·</span>
              <span>Updated 2 days ago</span>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
