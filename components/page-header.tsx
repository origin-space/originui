import { cn } from "@/registry/default/lib/utils"

interface PageHeaderProps {
  title: string
  className?: string
  children: React.ReactNode
}

export default function PageHeader({
  title,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-16 text-center", className)}>
      <h1 className="font-heading text-foreground mb-3 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
        {title}
      </h1>
      <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
        {children}
      </p>
    </div>
  )
}
