import type { RegistryItem } from "shadcn/registry"

import { cn } from "@/registry/default/lib/utils"

export default function ComponentCard({
  isSearchPage = false,
  children,
  component,
  className,
}: {
  isSearchPage?: boolean
  children: React.ReactNode
  component: RegistryItem
  className?: string
}) {
  const getColSpanClasses = (includeStart = false) => {
    const baseClasses =
      component.meta?.colSpan === 2
        ? "col-span-12 sm:col-span-6 lg:col-span-6"
        : component.meta?.colSpan === 3
          ? "col-span-12 sm:col-span-12 lg:col-span-12"
          : "col-span-12 sm:col-span-6 lg:col-span-4"

    const startClasses =
      includeStart && component.meta?.colSpan !== 3
        ? component.meta?.colSpan === 2
          ? "sm:col-start-4 lg:col-start-4"
          : "sm:col-start-4 lg:col-start-5"
        : ""

    return cn(baseClasses, startClasses)
  }

  const styleClasses =
    component.meta?.style === 1
      ? "flex justify-center items-center"
      : component.meta?.style === 2
        ? "text-center"
        : ""

  return (
    <div
      className={cn(
        "group/item relative border has-[[data-comp-loading=true]]:border-none",
        isSearchPage
          ? "col-span-12 grid grid-cols-12"
          : cn(getColSpanClasses(), styleClasses),
        className
      )}
      data-slot={component.name}
    >
      {isSearchPage ? (
        <div className={cn(getColSpanClasses(true), styleClasses)}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  )
}
