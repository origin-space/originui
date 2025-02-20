export default function Cta() {
  return (
    <div className="mt-16 text-center md:mt-20">
      <h2 className="font-heading text-foreground mb-6 text-3xl/[1.1] font-bold tracking-tight">
        Didn&apos;t find what you were looking for?
      </h2>
      <a
        className="bg-primary text-primary-foreground hover:bg-primary/90 outline-ring/30 dark:outline-ring/40 inline-flex h-9 items-center justify-center rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap shadow-xs outline-offset-2 transition-colors focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50"
        href="https://github.com/origin-space/originui/discussions/categories/suggestions"
        target="_blank"
      >
        <span className="text-primary-foreground">Suggest component</span>
      </a>
    </div>
  );
}
