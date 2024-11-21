import { Info } from "lucide-react";

export default function Alert10() {
  return (
    <div className="rounded-lg bg-blue-400 bg-opacity-20 px-4 py-3 text-blue-700 dark:bg-opacity-10 dark:text-blue-600">
      <p className="text-sm">
        <Info
          className="-mt-0.5 me-3 inline-flex opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Just a quick note!
      </p>
    </div>
  );
}
