"use client";

import { thumbnails, productImages } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImage = () => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  return (
    <>
      <div className="relative w-full h-[33vh] top-12 overflow-hidden md:hidden">
        <Image
          src={selectedImage}
          alt="Product image"
          quality={100}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="hidden md:flex md:flex-col">
        <Image
          src={selectedImage}
          alt="Product image"
          quality={100}
          width={500}
          height={500}
          className="object-cover rounded-xl"
        />
        <div className="mt-8 flex flex-row justify-around px-4">
          {thumbnails.map((thumbnail, index) => (
            <Image
              key={thumbnail}
              src={thumbnail}
              alt="thumbnail"
              quality={100}
              width={90}
              height={90}
              className="rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
              onClick={() => setSelectedImage(productImages[index])}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductImage;
