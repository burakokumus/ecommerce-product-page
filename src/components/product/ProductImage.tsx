"use client";

import ProductCarousel from "./ProductCarousel";
import { productList } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

import Lightbox from "../Lightbox";
import { Button } from "../ui/button";

const ProductImage = () => {
  const [lightboxVisible, setLightboxVisible] = useState(false);

  return (
    <>
      <MobileCarousel />
      <ProductCarousel onClick={() => setLightboxVisible(true)} />
      {lightboxVisible && (
        <Lightbox handleClose={() => setLightboxVisible(false)}>
          <ProductCarousel />
        </Lightbox>
      )}
    </>
  );
};

const MobileCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(productList[0].img);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleSelect = (id: number) => {
    productList.forEach((product) => {
      if (id === product.id) {
        setSelectedImage(product.img);
      }
    });
    setCurrentIndex(id);
  };

  return (
    <div className="relative w-full h-[34vh] top-12 overflow-hidden md:hidden">
      <Image
        src={selectedImage}
        alt="Product image"
        quality={100}
        fill={true}
        className="object-cover"
      />
      <Button
        className="absolute z-50 top-[17vh] bg-white hover:bg-blue-light-grayish w-10 aspect-square left-3 grid place-items-center rounded-full"
        onClick={() => {
          console.log("Back");
          if (currentIndex > 1) {
            handleSelect(currentIndex - 1);
          }
        }}
      >
        <Image
          src={"/images/icon-next.svg"}
          alt=""
          height={18}
          width={13}
          className="rotate-180"
        />
        <span className="sr-only">back button</span>
      </Button>
      <Button
        className="absolute z-50 top-[17vh] bg-white hover:bg-blue-light-grayish w-10 aspect-square right-3 grid place-items-center rounded-full"
        onClick={() => {
          console.log("Forward");
          if (currentIndex < productList.length) {
            handleSelect(currentIndex + 1);
          }
        }}
      >
        <Image
          src={"/images/icon-next.svg"}
          alt=""
          height={18}
          width={13}
          className=""
        />
        <span className="sr-only">back button</span>
      </Button>
    </div>
  );
};

export default ProductImage;
