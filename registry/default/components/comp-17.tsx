import { useId } from "react"

import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import { SelectNative } from "@/registry/default/ui/select-native"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with start select</Label>
      <div className="flex rounded-md shadow-xs">
        <SelectNative className="text-muted-foreground hover:text-foreground w-fit rounded-e-none shadow-none">
          <option value="https://">https://</option>
          <option value="http://">http://</option>
          <option value="ftp://">ftp://</option>
          <option value="sftp://">sftp://</option>
          <option value="ws://">ws://</option>
          <option value="wss://">wss://</option>
        </SelectNative>
        <Input
          id={id}
          className="-ms-px rounded-s-none shadow-none focus-visible:z-10"
          placeholder="192.168.1.1"
          type="text"
        />
      </div>
    </div>
  )
}
