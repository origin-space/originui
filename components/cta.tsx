import { Button } from "@/registry/default/ui/button"

export default function Cta() {
  return (
    <div className="mt-16 text-center md:mt-20">
      <h2 className="font-heading text-foreground mb-6 text-3xl/[1.1] font-bold tracking-tight">
        Didn&apos;t find what you were looking for?
      </h2>
      <Button asChild className="rounded-full">
        <a
          href="https://github.com/origin-space/originui/discussions/categories/suggestions"
          target="_blank"
        >
          <span className="text-primary-foreground">Suggest component</span>
        </a>
      </Button>
    </div>
  )
}
