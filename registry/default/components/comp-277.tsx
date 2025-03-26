import { CircleAlertIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="rounded-md border px-4 py-3">
      <div className="flex gap-3">
        <CircleAlertIcon
          className="mt-0.5 shrink-0 text-red-500 opacity-60"
          size={16}
          aria-hidden="true"
        />
        <div className="grow space-y-1">
          <p className="text-sm font-medium">
            Password does not meet requirements:
          </p>
          <ul className="text-muted-foreground list-inside list-disc text-sm">
            <li>Minimum 8 characters</li>
            <li>Inlcude a special character</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
