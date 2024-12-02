// Dependencies: pnpm install lucide-react react-payment-inputs

"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Wallet } from "lucide-react";
import { usePaymentInputs } from "react-payment-inputs";
import images, { type CardImages } from "react-payment-inputs/images";

export default function DialogDemo() {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps } =
    usePaymentInputs();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Card details</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
            aria-hidden="true"
          >
            <Wallet className="opacity-80" size={16} strokeWidth={2} />
          </div>
          <DialogHeader>
            <DialogTitle className="text-left">Update your card</DialogTitle>
            <DialogDescription className="text-left">
              Your new card will replace your current card.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nameOnCard">Name on card</Label>
              <Input id="nameOnCard" type="text" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <div className="relative">
                <Input {...getCardNumberProps()} className="peer pe-9 [direction:inherit]" />
                <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                  {meta.cardType ? (
                    <svg
                      className="overflow-hidden rounded-sm"
                      {...getCardImageProps({ images: images as unknown as CardImages })}
                      width={20}
                    />
                  ) : (
                    <CreditCard size={16} strokeWidth={2} aria-hidden="true" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <Label htmlFor="expiryDate">Expiry date</Label>
                <Input className="[direction:inherit]" {...getExpiryDateProps()} />
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input className="[direction:inherit]" {...getCVCProps()} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="card-primary" />
            <Label htmlFor="card-primary" className="font-normal text-muted-foreground">
              Set as default payment method
            </Label>
          </div>
          <Button type="button" className="w-full">
            Update card
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
