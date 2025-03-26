import Link from "next/link"
import { RiArrowRightUpLine } from "@remixicon/react"

import { cn } from "@/registry/default/lib/utils"

export default function HeaderLink({
  text,
  href,
  external = false,
  className,
  isNew = false,
}: {
  text: string
  href: string
  external?: boolean
  className?: string
  isNew?: boolean
}) {
  return (
    <div className="flex items-start gap-1.5">
      {external ? (
        <a
          className={cn(
            "inline-flex gap-0.5 text-sm hover:underline",
            className
          )}
          href={href}
          target="_blank"
        >
          {text}
          <span className="hidden sm:inline">
            {" "}
            <RiArrowRightUpLine
              className="text-muted-foreground/80"
              size={14}
              aria-hidden="true"
            />
          </span>
        </a>
      ) : (
        <>
          <Link
            href={href}
            className={cn(
              "inline-flex gap-0.5 text-sm hover:underline",
              className
            )}
          >
            {text}
          </Link>
          {isNew && (
            <span className="text-muted-foreground/80 text-xs text-[10px] font-medium uppercase">
              New
            </span>
          )}
        </>
      )}
    </div>
  )
}
