import { CircleAlert } from "lucide-react";

export default function Alert05() {
  return (
    <div className="px-4 py-3 border border-red-500/30 text-red-700 dark:text-red-600 rounded-lg">
      <p className="text-sm">
        <CircleAlert className="inline-flex -mt-0.5 me-2" size={16} strokeWidth={2} aria-hidden="true" />
        Some error information.
      </p>
    </div>
  );
}