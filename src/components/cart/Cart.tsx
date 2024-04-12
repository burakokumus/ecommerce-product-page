"use client";

import Image from "next/image";
import React, { useState } from "react";

import { useCart } from "@/context/CartContext";

import CartItemRow from "@/components/cart/CartItemRow";

import { Button } from "../ui/button";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, clearCart } = useCart();

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
        <div className="w-full place-self-end max-w-[388px] h-[250px] absolute z-[9999] inset-x-0 m-3 top-20 bg-white shadow-2xl rounded-md md:max-w-sm md:right-0 md:left-auto md:top-12 border-2 border-blue-light-grayish">
          {cart.length === 0 ? (
            <p className=" text-darkGrayishBlue font-semibold text-center mt-[110px]">
              Your Cart is empty
            </p>
          ) : (
            <div className="h-full p-2 flex flex-col justify-between">
              <p className="font-bold p-2 border-b">Cart</p>
              {cart.map((item) => (
                <CartItemRow key={item.title} onDelete={clearCart} {...item} />
              ))}
              <Button className="w-full mt-4 h-12 bg-orange-primary rounded-lg color-white font-semibold text-lg gap-4  md:col-span-3 hover:bg-orange-secondary">
                Checkout
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
