import { TriangleAlert } from "lucide-react";

export default function Alert04() {
  return (
    <div className="px-4 py-3 border border-amber-500/30 text-amber-700 dark:text-amber-600 rounded-lg">
      <p className="text-sm">
        <TriangleAlert className="inline-flex -mt-0.5 me-2" size={16} strokeWidth={2} aria-hidden="true" />
        Some warning information.
      </p>
    </div>
  );
}