"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import React, { useState } from "react";

import { useCart } from "@/context/CartContext";

interface AddToCartProps {
  title: string;
  img: string;
  price: number;
}

const AddToCart = ({ title, img, price }: AddToCartProps) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const plusPressed = () => {
    setQuantity(quantity + 1);
  };

  const minusPressed = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleClick = () => {
    addToCart({ title, img, quantity, price });
    setQuantity(0);
  };
  return (
    <div className="flex flex-col md:grid md:grid-cols-5 md:items-end gap-2">
      {/* Counter */}
      <div className="bg-blue-light-grayish flex flex-row justify-between px-6 rounded-lg h-12 items-center md:col-span-2">
        <p
          className="font-bold text-orange-primary text-3xl cursor-pointer"
          onClick={minusPressed}
        >
          -
        </p>
        <p className="font-bold">{quantity}</p>
        <p
          className="font-bold text-orange-primary text-3xl cursor-pointer"
          onClick={plusPressed}
        >
          +
        </p>
      </div>
      {/* Add to Cart Button */}
      <Button
        className="w-full mt-4 h-12 bg-orange-primary rounded-lg color-white font-semibold text-lg gap-4  md:col-span-3 hover:bg-orange-secondary"
        onClick={handleClick}
        disabled={quantity === 0}
      >
        <Image
          src="/images/icon-cart-white.svg"
          alt="cart-icon"
          width={20}
          height={20}
        />
        <p>Add to cart</p>
      </Button>
    </div>
  );
};

export default AddToCart;
