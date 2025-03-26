import { EclipseIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="dark bg-muted text-foreground px-4 py-3">
      <p className="text-center text-sm">
        <EclipseIcon
          className="me-3 -mt-0.5 inline-flex opacity-60"
          size={16}
          aria-hidden="true"
        />
        Get the most out of your app with real-time updates and analytics{" "}
        <span className="text-muted-foreground">·</span>{" "}
        <a href="#" className="font-medium underline hover:no-underline">
          Upgrade
        </a>
      </p>
    </div>
  )
}
