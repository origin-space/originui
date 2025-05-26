import { SelectTrigger } from "@radix-ui/react-select"
import { ChevronsUpDown } from "lucide-react"

import NotificationMenu from "@/registry/default/components/navbar-components/notification-menu"
import UserMenu from "@/registry/default/components/navbar-components/user-menu"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb"
import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/registry/default/ui/select"

export default function Component() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {/* Left side */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-foreground">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="currentColor" />
                  </svg>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem className="md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:text-foreground">
                    <BreadcrumbEllipsis />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem asChild>
                      <a href="#">Personal Account</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="#">Projects</a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbItem className="max-md:hidden">
                <BreadcrumbLink href="#">Personal Account</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="max-md:hidden">
                {" "}
                /{" "}
              </BreadcrumbSeparator>
              <BreadcrumbItem className="max-md:hidden">
                <BreadcrumbLink href="#">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem>
                <Select defaultValue="1">
                  <SelectTrigger aria-label="Select project" asChild>
                    <Button
                      variant="ghost"
                      className="focus-visible:bg-accent text-foreground h-8 px-1.5 focus-visible:ring-0"
                    >
                      <SelectValue placeholder="Select project" />
                      <ChevronsUpDown
                        size={14}
                        className="text-muted-foreground/80"
                      />
                    </Button>
                  </SelectTrigger>
                  <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2">
                    <SelectItem value="1">Main project</SelectItem>
                    <SelectItem value="2">Origin project</SelectItem>
                  </SelectContent>
                </Select>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Notification */}
          <NotificationMenu />
          {/* User menu */}
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
