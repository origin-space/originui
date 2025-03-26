"use client"

import React, { useId, useState } from "react"
import { ChevronDownIcon, PhoneIcon } from "lucide-react"
import * as RPNInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"

import { cn } from "@/registry/default/lib/utils"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  const [value, setValue] = useState("")

  return (
    <div className="*:not-first:mt-2" dir="ltr">
      <Label htmlFor={id}>PhoneIcon number input</Label>
      <RPNInput.default
        className="flex rounded-md shadow-xs"
        international
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={PhoneInput}
        id={id}
        placeholder="Enter phone number"
        value={value}
        onChange={(newValue) => setValue(newValue ?? "")}
      />
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Built with{" "}
        <a
          className="hover:text-foreground underline"
          href="https://gitlab.com/catamphetamine/react-phone-number-input"
          target="_blank"
          rel="noopener nofollow"
        >
          react-phone-number-input
        </a>
      </p>
    </div>
  )
}

const PhoneInput = ({ className, ...props }: React.ComponentProps<"input">) => {
  return (
    <Input
      data-slot="phone-input"
      className={cn(
        "-ms-px rounded-s-none shadow-none focus-visible:z-10",
        className
      )}
      {...props}
    />
  )
}

PhoneInput.displayName = "PhoneInput"

type CountrySelectProps = {
  disabled?: boolean
  value: RPNInput.Country
  onChange: (value: RPNInput.Country) => void
  options: { label: string; value: RPNInput.Country | undefined }[]
}

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as RPNInput.Country)
  }

  return (
    <div className="border-input bg-background text-muted-foreground focus-within:border-ring focus-within:ring-ring/50 hover:bg-accent hover:text-foreground has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 relative inline-flex items-center self-stretch rounded-s-md border py-2 ps-3 pe-2 transition-[color,box-shadow] outline-none focus-within:z-10 focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:opacity-50">
      <div className="inline-flex items-center gap-1" aria-hidden="true">
        <FlagComponent country={value} countryName={value} aria-hidden="true" />
        <span className="text-muted-foreground/80">
          <ChevronDownIcon size={16} aria-hidden="true" />
        </span>
      </div>
      <select
        disabled={disabled}
        value={value}
        onChange={handleSelect}
        className="absolute inset-0 text-sm opacity-0"
        aria-label="Select country"
      >
        <option key="default" value="">
          Select a country
        </option>
        {options
          .filter((x) => x.value)
          .map((option, i) => (
            <option key={option.value ?? `empty-${i}`} value={option.value}>
              {option.label}{" "}
              {option.value &&
                `+${RPNInput.getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>
    </div>
  )
}

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country]

  return (
    <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <PhoneIcon size={16} aria-hidden="true" />
      )}
    </span>
  )
}
