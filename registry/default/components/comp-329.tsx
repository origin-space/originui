"use client"

import { useEffect, useId, useRef, useState } from "react"
import { CreditCardIcon, StoreIcon } from "lucide-react"
import { usePaymentInputs } from "react-payment-inputs"
import images, { type CardImages } from "react-payment-inputs/images"

import { Badge } from "@/registry/default/ui/badge"
import { Button } from "@/registry/default/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group"

export default function Component() {
  const id = useId()
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
  } = usePaymentInputs()
  const couponInputRef = useRef<HTMLInputElement>(null)
  const [showCouponInput, setShowCouponInput] = useState(false)
  const [couponCode, setCouponCode] = useState("")

  // Auto-focus the coupon input when it's shown
  useEffect(() => {
    if (showCouponInput && couponInputRef.current) {
      couponInputRef.current.focus()
    }
  }, [showCouponInput])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Checkout</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="mb-2 flex flex-col gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <StoreIcon className="opacity-80" size={16} />
          </div>
          <DialogHeader>
            <DialogTitle className="text-left">Confirm and pay</DialogTitle>
            <DialogDescription className="text-left">
              Pay securely and cancel any time.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <RadioGroup className="grid-cols-2" defaultValue="yearly">
              {/* Monthly */}
              <label className="border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col gap-1 rounded-md border px-4 py-3 shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
                <RadioGroupItem
                  id="radio-monthly"
                  value="monthly"
                  className="sr-only after:absolute after:inset-0"
                />
                <p className="text-foreground text-sm font-medium">Monthly</p>
                <p className="text-muted-foreground text-sm">$32/month</p>
              </label>
              {/* Yearly */}
              <label className="border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col gap-1 rounded-md border px-4 py-3 shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
                <RadioGroupItem
                  id="radio-yearly"
                  value="yearly"
                  className="sr-only after:absolute after:inset-0"
                />
                <div className="inline-flex items-start justify-between gap-2">
                  <p className="text-foreground text-sm font-medium">Yearly</p>
                  <Badge>Popular</Badge>
                </div>
                <p className="text-muted-foreground text-sm">$320/month</p>
              </label>
            </RadioGroup>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`name-${id}`}>Name on card</Label>
              <Input id={`name-${id}`} type="text" required />
            </div>
            <div className="*:not-first:mt-2">
              <legend className="text-foreground text-sm font-medium">
                Card Details
              </legend>
              <div className="rounded-md shadow-xs">
                <div className="relative focus-within:z-10">
                  <Input
                    className="peer rounded-b-none pe-9 shadow-none [direction:inherit]"
                    {...getCardNumberProps()}
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
                    />
                  </div>
                  <div className="-ms-px min-w-0 flex-1 focus-within:z-10">
                    <Input
                      className="rounded-s-none rounded-t-none shadow-none [direction:inherit]"
                      {...getCVCProps()}
                    />
                  </div>
                </div>
              </div>
            </div>
            {!showCouponInput ? (
              <button
                type="button"
                onClick={() => setShowCouponInput(true)}
                className="text-sm underline hover:no-underline"
              >
                + Add coupon
              </button>
            ) : (
              <div className="*:not-first:mt-2">
                <Label htmlFor={`coupon-${id}`}>Coupon code</Label>
                <Input
                  id={`coupon-${id}`}
                  ref={couponInputRef}
                  placeholder="Enter your code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
              </div>
            )}
          </div>
          <Button type="button" className="w-full">
            Subscribe
          </Button>
        </form>

        <p className="text-muted-foreground text-center text-xs">
          Payments are non-refundable. Cancel anytime.
        </p>
      </DialogContent>
    </Dialog>
  )
}
