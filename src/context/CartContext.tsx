"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface CartItem {
  title: string;
  img: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    console.log("addToCart");
    setCart((prev) => {
      const itemIndex = prev.findIndex((i) => i.title === item.title);

      if (itemIndex === -1) {
        console.log("item not found");
        return [...prev, item];
      }

      const updatedCart = [...prev];
      updatedCart[itemIndex].quantity += item.quantity;

      return updatedCart;
    });
  };

  const removeFromCart = (item: CartItem) => {
    setCart((prev) => {
      const itemIndex = prev.findIndex((i) => i.title === item.title);

      if (itemIndex === -1) {
        return prev;
      }

      const updatedCart = [...prev];
      updatedCart[itemIndex].quantity -= item.quantity;

      if (updatedCart[itemIndex].quantity <= 0) {
        updatedCart.splice(itemIndex, 1);
      }

      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};
