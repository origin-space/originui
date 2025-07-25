"use client"

import { useState } from "react"
import { Loader2, Send } from "lucide-react"
import { toast } from "sonner"

import { IconButton } from "@/registry/default/ui/icon-button"

export default function SubmitButton() {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    if (loading) return
    setLoading(true)

    await new Promise((res) => setTimeout(res, 1500))
    toast.success("Message sent!")

    setLoading(false)
  }

  return (
    <div className="flex min-h-[120px] w-full items-center justify-center">
      <IconButton
        onClick={handleClick}
        disabled={loading}
        iconPosition="left"
        variant="outline"
        icon={
          loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )
        }
      >
        {loading ? "Sending..." : "Send Message"}
      </IconButton>
    </div>
  )
}
