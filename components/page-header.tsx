import { cn } from "@/registry/default/lib/utils";

interface PageHeaderProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export default function PageHeader({
  title,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-16 text-center", className)}>
      <h1 className="mb-3 font-heading text-4xl/[1.1] font-bold tracking-tight text-foreground md:text-5xl/[1.1]">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground">{children}</p>
    </div>
  );
}
