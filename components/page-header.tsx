interface PageHeaderProps {
  title: string;
  children: React.ReactNode;
}

export default function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <h1 className="mb-3 text-4xl/[1.1] font-heading font-bold tracking-tight text-foreground md:text-5xl/[1.1]">
        {title}
      </h1>
      <p className="text-muted-foreground">{children}</p>
    </div>
  );
}
