import { TriangleAlert } from "lucide-react";

export default function Alert01() {
  return (
    <div className="px-4 py-3 bg-amber-400 bg-opacity-20 dark:bg-opacity-10 text-amber-700 dark:text-amber-600 rounded-lg">
      <p className="text-sm">
        <TriangleAlert className="inline-flex -mt-0.5 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        Some warning information.
      </p>
    </div>
  );
}