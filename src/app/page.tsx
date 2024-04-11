"use client";

import { thumbnails, productImages } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

import Counter from "@/components/Counter";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-between py-6 overflow-hidden md:grid md:grid-cols-2 md:max-w-screen-lg md:mx-auto md:py-16">
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
        <div className="mt-24 px-8 md:px-16 md:mt-0">
          <p className="text-orange-primary font-semibold uppercase text-xs tracking-widest mb-4">
            Sneaker Company
          </p>
          <p className="text-3xl font-bold mb-4">
            Fall Limited Edition Sneakers
          </p>
          <p className="text-blue-dark-grayish text-md mb-8 leading-7">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="grid grid-cols-3 items-center gap-24 mb-4 md:gap-0">
            <p className="text-3xl font-bold">$125.00</p>
            <p className="text-orange-primary font-bold bg-orange-pale px-2 py-0.5 rounded-lg md:w-12">
              50%
            </p>
            <p className="line-through font-semibold text-blue-grayish md:row-start-2">
              $250.00
            </p>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-5 md:items-end gap-2">
            <Counter />
            <Button className="w-full mt-4 h-12 bg-orange-primary rounded-lg color-white font-semibold text-lg gap-4  md:col-span-3">
              <Image
                src="/images/icon-cart-white.svg"
                alt="cart-icon"
                width={20}
                height={20}
              />
              <p>Add to cart</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 hidden">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Implemented by <a href="#">Burak Okumus</a>.
      </div>
    </main>
  );
}
