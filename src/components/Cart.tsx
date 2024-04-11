"use client";

import { Button } from "./ui/button";
import React, { useState } from "react";
import Image from "next/image";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "bg-orange-300" : ""}>
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
        <span className="sr-only">Cart</span></Button>
    </div>
  );
};

export default Cart;
