import { TriangleAlert, ArrowRight } from "lucide-react";

export default function Alert15() {
  return (
    <div className="px-4 py-3 border border-border rounded-lg">
        <div className="flex gap-2">
          <TriangleAlert className="text-amber-500 hrink-0 mt-0.5" size={16} strokeWidth={2} aria-hidden="true" />
          <div className="grow flex justify-between gap-3">
            <p className="text-sm">
              Some warning information.
            </p>
            <a href="#" className="text-sm font-medium whitespace-nowrap group">
              Link
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
  );
}