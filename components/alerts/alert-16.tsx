import { TriangleAlert, ArrowRight } from "lucide-react";

export default function Alert15() {
  return (
    <div className="px-4 py-3 bg-amber-400 bg-opacity-20 dark:bg-opacity-10 text-amber-700 dark:text-amber-600 rounded-lg">
        <div className="flex gap-3">
          <TriangleAlert className="shrink-0 mt-0.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          <div className="grow flex justify-between gap-3">
            <p className="text-sm">
              Some information is missing!
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