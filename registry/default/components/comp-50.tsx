"use client"

import { useId } from "react"
import { CreditCardIcon } from "lucide-react"
import { usePaymentInputs } from "react-payment-inputs"
import images, { type CardImages } from "react-payment-inputs/images"

import { Input } from "@/registry/default/ui/input"

export default function Component() {
  const id = useId()
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
  } = usePaymentInputs()

  return (
    <div className="*:not-first:mt-2">
      <legend className="text-foreground text-sm font-medium">
        Card Details
      </legend>
      <div className="rounded-md shadow-xs">
        <div className="relative focus-within:z-10">
          <Input
            className="peer rounded-b-none pe-9 shadow-none [direction:inherit]"
            {...getCardNumberProps()}
            id={`number-${id}`}
          />
          <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
            {meta.cardType ? (
              <svg
                className="overflow-hidden rounded-sm"
                {...getCardImageProps({
                  images: images as unknown as CardImages,
                })}
                width={20}
              />
            ) : (
              <CreditCardIcon size={16} aria-hidden="true" />
            )}
          </div>
        </div>
        <div className="-mt-px flex">
          <div className="min-w-0 flex-1 focus-within:z-10">
            <Input
              className="rounded-e-none rounded-t-none shadow-none [direction:inherit]"
              {...getExpiryDateProps()}
              id={`expiry-${id}`}
            />
          </div>
          <div className="-ms-px min-w-0 flex-1 focus-within:z-10">
            <Input
              className="rounded-s-none rounded-t-none shadow-none [direction:inherit]"
              {...getCVCProps()}
              id={`cvc-${id}`}
            />
          </div>
        </div>
      </div>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Built with{" "}
        <a
          className="hover:text-foreground underline"
          href="https://github.com/medipass/react-payment-inputs"
          target="_blank"
          rel="noopener nofollow"
        >
          React Payment Inputs
        </a>
      </p>
    </div>
  )
}
