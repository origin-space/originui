import { InfoIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="rounded-md border border-blue-500/50 px-4 py-3 text-blue-600">
      <p className="text-sm">
        <InfoIcon
          className="me-3 -mt-0.5 inline-flex opacity-60"
          size={16}
          aria-hidden="true"
        />
        Just a quick note!
      </p>
    </div>
  )
}
