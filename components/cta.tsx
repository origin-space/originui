export default function Cta() {
  return (
    <div className="mt-16 md:mt-20 text-center">
      <h2 className="mb-6 font-heading text-3xl/[1.1] tracking-tight font-bold text-foreground">Didn't find what you were looking for?</h2>
      <a
        className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50"
        href="https://github.com/origin-space/originui/discussions/categories/suggestions"
        target="_blank"
      >
        <span className="text-primary-foreground">Suggest component</span>
      </a>
    </div>
  );
}
