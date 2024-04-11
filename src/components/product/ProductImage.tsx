"use client";

import { cn, productList } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImage = () => {
  const [selectedImage, setSelectedImage] = useState(productList[0].img);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [products, setProducts] = useState(productList);

  const handleSelect = (id: number) => {
    const updatedProducts = productList.map((product) => {
      if (id === product.id) {
        setSelectedImage(product.img);
        return { ...product, isActive: true };
      }

      return { ...product, isActive: false };
    });

    setCurrentIndex(id);
    setProducts(updatedProducts);
  };

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
          {products.map((product) => (
            <Image
              key={product.id}
              src={product.thumbnail}
              alt="thumbnail"
              quality={100}
              width={90}
              height={90}
              className={cn(
                product.isActive
                  ? " opacity-50 border-orange-primary border-2"
                  : "",
                "rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
              )}
              onClick={() => handleSelect(product.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductImage;