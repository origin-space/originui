import { Info } from "lucide-react";

export default function Alert10() {
  return (
    <div className="px-4 py-3 bg-blue-400 bg-opacity-20 dark:bg-opacity-10 text-blue-700 dark:text-blue-600 rounded-lg">
      <p className="text-sm">
        <Info className="inline-flex -mt-0.5 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        Some helpful information.
      </p>
    </div>
  );
}