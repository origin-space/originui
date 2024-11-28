"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { useCharacterLimit } from "@/hooks/use-character-limit";
import { useImageUpload } from "@/hooks/use-image-upload";
import Image, { StaticImageData } from "next/image"
import AvatarImg from "@/public/avatar-72-01.jpg"
import ProfileBgImg from "@/public/profile-bg.jpg"
import { Check, ImagePlus, X } from "lucide-react";
import React, { useState } from "react";

export default function DialogDemo() {
  const maxLength = 180;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({ maxLength, initialValue: "Hey, I am Margaret, a web developer who loves turning ideas into amazing websites!" });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-lg flex flex-col gap-0 [&>button:last-child]:top-3.5 overflow-y-visible">
        <DialogHeader className="text-left contents space-y-0">
          <DialogTitle className="px-6 py-4 border-b border-border text-base">Edit profile</DialogTitle>
          <ProfileBg defaultImage={ProfileBgImg} />
        </DialogHeader>
        <DialogDescription className="sr-only">
          Make changes to your profile here. You can change your photo and set a username.
        </DialogDescription>
        <Avatar defaultImage={AvatarImg} />
        <div className="overflow-y-auto">
          <div className="px-6 pt-4 pb-6">
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="edit-first-name">First name</Label>
                  <Input id="edit-first-name" placeholder="Matt" defaultValue="Margaret" type="text" required />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="edit-last-name">Last name</Label>
                  <Input id="edit-last-name" placeholder="Welsh" defaultValue="Villard" type="text" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-username">Username</Label>
                <div className="relative">
                  <Input id="edit-username" className="peer pe-9" placeholder="Username" defaultValue="margaret-villard-69" type="text" required />
                  <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <Check size={16} strokeWidth={2} className="text-emerald-500" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-website">Website</Label>
                <div className="flex rounded-lg shadow-sm shadow-black/5">
                  <span className="-z-10 inline-flex items-center rounded-s-lg border border-input bg-background px-3 text-sm text-muted-foreground">
                    https://
                  </span>
                  <Input
                    id="edit-website"
                    className="-ms-px rounded-s-none shadow-none"
                    placeholder="yourwebsite.com"
                    defaultValue="www.margaret.com"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-bio">Biography</Label>
                <Textarea
                  id="edit-bio"
                  placeholder="Write a few sentences about yourself"
                  defaultValue={value}
                  maxLength={maxLength}
                  onChange={handleChange}
                  aria-describedby="characters-left-textarea"
                />
                <p
                  id="characters-left-textarea"
                  className="mt-2 text-right text-xs text-muted-foreground"
                  role="status"
                  aria-live="polite"
                >
                  <span className="tabular-nums">{limit - characterCount}</span> characters left
                </p>
              </div>
            </form>
          </div>
        </div>
        <DialogFooter className="px-6 py-4 border-t border-border">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button">
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function ProfileBg({ defaultImage }: {
  defaultImage?: StaticImageData;
}) {
  const [hideDefault, setHideDefault] = useState(false);
  const {
    previewUrl,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
  } = useImageUpload();

  const currentImage = previewUrl || (!hideDefault ? defaultImage : null);

  const handleImageRemove = () => {
    handleRemove();
    setHideDefault(true);
  };

  return (
    <div className="h-24 -mx-px">
      <div
        className="relative w-full h-full flex items-center justify-center bg-muted overflow-hidden"
      >
        {currentImage && (
          <Image
            className="h-full w-full object-cover"
            src={currentImage}
            alt={previewUrl ? "Preview of uploaded image" : "Default profile background"}
            width={512}
            height={96}
          />
        )}
        <div className="flex items-center justify-center gap-2 absolute inset-0">
          <button type="button" className="size-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 cursor-pointer z-50"
            onClick={handleThumbnailClick}
            aria-label={currentImage ? "Change image" : "Upload image"}>
            <ImagePlus size={16} strokeWidth={2} aria-hidden="true" />
          </button>
          {currentImage && (
            <button type="button" className="size-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 cursor-pointer z-50"
              onClick={handleImageRemove}
              aria-label="Remove image">
              <X size={16} strokeWidth={2} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
        aria-label="Upload image file"
      />
    </div>
  );
}

function Avatar({ defaultImage }: {
  defaultImage?: StaticImageData;
}) {
  const {
    previewUrl,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
  } = useImageUpload();

  const currentImage = previewUrl || defaultImage;

  return (
    <div className="px-6 -mt-10">
      <div className="relative flex items-center justify-center size-20 rounded-full bg-muted border-4 border-background shadow-sm shadow-black/10 overflow-hidden">
        {currentImage && (
          <Image
            src={currentImage}
            className="h-full w-full object-cover"
            width={80}
            height={80}
            alt="Profile image"
          />
        )}
        <button
          type="button"
          className="absolute size-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 cursor-pointer"
          onClick={handleThumbnailClick}
          aria-label="Change profile picture"
        >
          <ImagePlus size={16} strokeWidth={2} aria-hidden="true" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
          aria-label="Upload profile picture"
        />
      </div>
    </div>
  );
}
