import { TriangleAlert } from "lucide-react";

export default function Alert07() {
  return (
    <div className="px-4 py-3 border border-border rounded-lg">
      <p className="text-sm">
        <TriangleAlert className="text-amber-500 inline-flex -mt-0.5 me-3" size={16} strokeWidth={2} aria-hidden="true" />
        Some information is missing!
      </p>
    </div>
  );
}