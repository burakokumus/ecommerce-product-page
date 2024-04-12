"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "./ui/button";
import Image from "next/image";
import React, { useState } from "react";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <div className="relative">
        <Button
          onClick={() => {
            setIsOpen((prev) => !prev);
            console.log(isOpen);
          }}
          className={"hover:bg-transparent bg-transparent"}
        >
          <Image
            src={"/images/icon-cart.svg"}
            width={22}
            height={20}
            alt="cart"
          />
          <span className="sr-only">Cart</span>
        </Button>
      </div>
      {isOpen && (
        <div className="grid absolute z-[9999] left-0 right-0 m-3 top-20 bg-white shadow-2xl rounded-md md:max-w-sm md:right-0 md:left-auto md:top-12 border-2 border-blue-light-grayish">
          <p className="w-[328px] h-[250px] grid place-items-center text-darkGrayishBlue font-bold">
            {cart.length === 0 ? "Your Cart is empty" : cart.length}
          </p>
        </div>
      )}
    </>
  );
};

export default Cart;
