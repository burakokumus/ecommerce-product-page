import Image from "next/image";
import React from "react";

interface CartItemRowProps {
  title: string;
  img: string;
  price: number;
  quantity: number;
  onDelete: () => void;
}

const CartItemRow = (props: CartItemRowProps) => {
  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <div className="flex flex-row gap-2">
        <Image
          src={props.img}
          alt="product image"
          width={56}
          height={56}
          className="rounded-lg  max-h-14"
        />
        <div className="flex flex-col">
          <p className="text-blue-dark-grayish">{props.title}</p>
          <div className="flex flex-row">
            <p className="text-blue-grayish font-semibold mr-2">{`$${props.price} x ${props.quantity}`}</p>
            <p className="text-black font-bold">{`$${props.price * props.quantity}.00`}</p>
          </div>
        </div>
      </div>
      <Image
        src={"/images/icon-delete.svg"}
        width={14}
        height={14}
        alt="delete"
        onClick={props.onDelete}
      />
    </div>
  );
};

export default CartItemRow;
