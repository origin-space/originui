"use client";

import { Label } from "@/components/ui/label";
import Avatar01 from "@/public/avatar-40-01.jpg";
import Image from "next/image";
import { useState } from "react";

const fileUpload11 = () => {
  const [inputPhotoUrl, setInputPhotoUrl] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setInputPhotoUrl(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      <Label>Profile section</Label>
      <div className="flex w-full items-center justify-start gap-x-4">
        <Image
          src={inputPhotoUrl || Avatar01}
          alt={"profile"}
          width={64}
          height={64}
          className="aspect-square w-full max-w-20 rounded-full object-cover"
        />
        <label
          htmlFor="fileInput"
          className={
            "inline-flex h-9 cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-sm shadow-black/5 ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
          }
        >
          Upload Image
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default fileUpload11;
