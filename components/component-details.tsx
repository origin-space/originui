"use client"

import { JSX, useEffect, useState } from "react"
import { DialogDescription } from "@radix-ui/react-dialog"
import { CodeIcon } from "lucide-react"
import type { RegistryItem } from "shadcn/registry"

import { convertRegistryPaths } from "@/lib/utils"
import ComponentCli from "@/components/cli-commands"
import CodeBlock, { highlight } from "@/components/code-block"
import CopyButton from "@/components/copy-button"
import OpenInV0 from "@/components/open-in-v0"
import { Button } from "@/registry/default/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

export default function ComponentDetails({
  component,
}: {
  component: RegistryItem
}) {
  const [code, setCode] = useState<string | null>(null)
  const [highlightedCode, setHighlightedCode] = useState<JSX.Element | null>(
    null
  )

  useEffect(() => {
    const handleEmptyCode = () => {
      setCode("")
      setHighlightedCode(null)
    }

    const loadCode = async () => {
      try {
        const response = await fetch(`/r/${component.name}.json`)
        if (!response.ok) {
          handleEmptyCode()
          return
        }

        const contentType = response.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
          handleEmptyCode()
          return
        }

        const data = await response.json()
        const codeContent = convertRegistryPaths(data.files[0].content) || ""
        setCode(codeContent)

        // Pre-highlight the code
        const highlighted = await highlight(codeContent, "tsx")
        setHighlightedCode(highlighted)
      } catch (error) {
        console.error("Failed to load code:", error)
        handleEmptyCode()
      }
    }

    loadCode()
  }, [component.name])

  return (
    <div className="absolute top-2 right-2 flex gap-2 peer-data-comp-loading:hidden">
      <OpenInV0
        componentSource={`https://originui.com/r/${component.name}.json`}
      />
      <Dialog>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100 lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
                  >
                    <CodeIcon size={16} aria-hidden={true} />
                  </Button>
                </DialogTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent className="text-muted-foreground px-2 py-1 text-xs">
              View code
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-left">Installation</DialogTitle>
            <DialogDescription className="sr-only">
              Use the CLI to add components to your project
            </DialogDescription>
          </DialogHeader>
          <div className="min-w-0 space-y-5">
            <ComponentCli name={component.name} />
            <div className="space-y-4">
              <p className="text-lg font-semibold tracking-tight">Code</p>
              <div className="relative">
                {code === "" ? (
                  <p className="text-muted-foreground text-sm">
                    No code available. If you think this is an error, please{" "}
                    <a
                      href="https://github.com/origin-space/originui/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-medium underline hover:no-underline"
                    >
                      open an issue
                    </a>
                    .
                  </p>
                ) : (
                  <>
                    <CodeBlock
                      code={code}
                      lang="tsx"
                      preHighlighted={highlightedCode}
                    />
                    <CopyButton componentSource={code} />
                  </>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
