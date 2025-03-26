import { CircleAlertIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="rounded-md border border-red-500/50 px-4 py-3 text-red-600">
      <div className="flex gap-3">
        <CircleAlertIcon
          className="mt-0.5 shrink-0 opacity-60"
          size={16}
          aria-hidden="true"
        />
        <div className="grow space-y-1">
          <p className="text-sm font-medium">
            Password does not meet requirements:
          </p>
          <ul className="list-inside list-disc text-sm opacity-80">
            <li>Minimum 8 characters</li>
            <li>Inlcude a special character</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
