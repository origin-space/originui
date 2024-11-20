import { CircleCheck } from "lucide-react";

export default function Alert03() {
  return (
    <div className="px-4 py-3 border border-eborder rounded-lg">
      <p className="text-sm">
        <CircleCheck className="text-emerald-500 inline-flex -mt-0.5 me-2" size={16} strokeWidth={2} aria-hidden="true" />
        Some success information.
      </p>
    </div>
  );
}