interface PageHeaderProps {
  title: string;
  children: React.ReactNode;
}

export default function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        {title}
      </h1>
      <p className="text-muted-foreground">{children}</p>
    </div>
  );
}
