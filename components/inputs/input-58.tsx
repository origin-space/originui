"use client";
import { PlusCircle } from 'lucide-react';
import React from 'react';

const Input58= () => {
    const [image, setImage] = React.useState<File | null>(null);
    const [imagePreview, setImagePreview] = React.useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setImage(file);
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      };




    return (
        <div>
               <div className="flex justify-center">
          <label htmlFor="image-upload" className="cursor-pointer">
            <div className="w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              {image ? (
                <img src={imagePreview ?? ''} alt="Uploaded" className="max-w-full max-h-full object-contain" />
              ) : (
                <span className="text-gray-500"><PlusCircle></PlusCircle></span>
              )}
            </div>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="sr-only"
              aria-label="Upload an image"
            />
          </label>
        </div>
        </div>
    );
};

export default Input58;