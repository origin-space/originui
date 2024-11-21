import { Eclipse, ArrowRight } from "lucide-react";

export default function Banner19() {
  return (
    <div className="px-4 py-3 bg-muted text-foreground dark">
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="grow flex gap-3">
          <Eclipse className="shrink-0 mt-0.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          <div className="grow flex flex-col md:flex-row justify-between md:items-center gap-2">
            <p className="text-sm">
              We just added something awesome to make your experience even better.
            </p>
            <a href="#" className="text-sm font-medium whitespace-nowrap group">
              Learn more
              <ArrowRight
                className="inline-flex -mt-0.5 ms-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}