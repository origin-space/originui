import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export default function Component() {
  return (
    <div className="relative">
      <Avatar>
        <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
      <span className="border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-emerald-500">
        <span className="sr-only">Online</span>
      </span>
    </div>
  )
}
