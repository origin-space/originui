import { CircleCheck } from "lucide-react";

export default function Alert03() {
  return (
    <div className="px-4 py-3 border border-emerald-500/30 text-emerald-700 dark:text-emerald-600 rounded-lg">
      <p className="text-sm">
        <CircleCheck className="inline-flex -mt-0.5 me-2" size={16} strokeWidth={2} aria-hidden="true" />
        Some success information.
      </p>
    </div>
  );
}