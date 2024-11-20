import { Info } from "lucide-react";

export default function Alert11() {
  return (
    <div className="px-4 py-3 border border-blue-500/30 text-blue-700 dark:text-blue-600 rounded-lg">
      <p className="text-sm">
        <Info className="inline-flex -mt-0.5 me-2" size={16} strokeWidth={2} aria-hidden="true" />
        Some helpful information.
      </p>
    </div>
  );
}