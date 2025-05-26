import {
  BoltIcon,
  BookOpenIcon,
  ChevronsUpDown,
  Layers2Icon,
  LogOutIcon,
  PinIcon,
  SettingsIcon,
  UserPenIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"
import { Button } from "@/registry/default/ui/button"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "@/registry/default/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/registry/default/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"
import { Select, SelectContent, SelectItem, SelectValue } from "@/registry/default/ui/select"
import { SelectTrigger } from "@radix-ui/react-select"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "#", label: "Dashboard" },
  { href: "#", label: "Docs" },
  { href: "#", label: "API reference" },
]

export default function Component() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink href={link.href} className="py-1.5">
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Left side */}
          <div className="flex items-center gap-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Select defaultValue="personal">
                    <SelectTrigger 
                      aria-label="Select account type"
                      asChild
                    >
                      <Button variant="ghost" className="p-1.5 h-8 focus-visible:ring-0 focus-visible:bg-accent text-foreground">
                        <SelectValue placeholder="Select account type" />
                        <ChevronsUpDown size={14} className="text-muted-foreground/80" />
                      </Button>
                    </SelectTrigger>
                    <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2">
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="team">Team</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </BreadcrumbItem>
                <BreadcrumbSeparator> / </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <Select defaultValue="1">
                    <SelectTrigger 
                      aria-label="Select project"
                      asChild
                    >
                      <Button variant="ghost" className="p-1.5 h-8 focus-visible:ring-0 focus-visible:bg-accent text-foreground">
                        <SelectValue placeholder="Select project" />
                        <ChevronsUpDown size={14} className="text-muted-foreground/80" />
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
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {/* Nav menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            {/* Settings */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full shadow-none"
                  aria-label="Open edit menu"
                >
                  <SettingsIcon size={16} aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-w-64">
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
                <DropdownMenuItem>Option 4</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto p-0 hover:bg-transparent"
              >
                <Avatar>
                  <AvatarImage src="./avatar.jpg" alt="Profile image" />
                  <AvatarFallback>KK</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-64" align="end">
              <DropdownMenuLabel className="flex min-w-0 flex-col">
                <span className="text-foreground truncate text-sm font-medium">
                  Keith Kennedy
                </span>
                <span className="text-muted-foreground truncate text-xs font-normal">
                  k.kennedy@originui.com
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <BoltIcon
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 1</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Layers2Icon
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 2</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BookOpenIcon
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 3</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <PinIcon
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 4</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserPenIcon
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Option 5</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
