"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import React, { useState } from "react";

import { useCart } from "@/context/CartContext";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <div className="relative">
        <Button
          onClick={() => {
            setIsOpen((prev) => !prev);
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
        <div className="grid w-full place-self-end max-w-[328px] h-[250px] absolute z-[9999] inset-x-0 m-3 top-20 bg-white shadow-2xl rounded-md md:max-w-sm md:right-0 md:left-auto md:top-12 border-2 border-blue-light-grayish">
          {cart.length === 0 && (
            <p className=" text-darkGrayishBlue font-bold">
              Your Cart is empty
            </p>
          )}
          {cart.map((item) => (
            <div>{`${item.title}: ${item.quantity}`}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cart;
