import { CircleAlert } from "lucide-react";

export default function Alert02() {
  return (
    <div className="px-4 py-3 bg-red-400 bg-opacity-20 dark:bg-opacity-10 text-red-700 dark:text-red-600 rounded-lg">
      <p className="text-sm">
        <CircleAlert className="inline-flex -mt-0.5 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        Some error information.
      </p>
    </div>
  );
}