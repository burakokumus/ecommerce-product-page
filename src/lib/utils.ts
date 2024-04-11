import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const headerLinks = [
  { href: "/", label: "Collections" },
  { href: "/", label: "Men" },
  { href: "/", label: "Women" },
  { href: "/", label: "About" },
  { href: "/", label: "Contact" },
];

export const productList = [
  {
    id: 1,
    img: "/images/image-product-1.jpg",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
    isActive: true,
  },
  {
    id: 2,
    img: "/images/image-product-2.jpg",
    thumbnail: "/images/image-product-2-thumbnail.jpg",
    isActive: false,
  },
  {
    id: 3,
    img: "/images/image-product-3.jpg",
    thumbnail: "/images/image-product-3-thumbnail.jpg",
    isActive: false,
  },
  {
    id: 4,
    img: "/images/image-product-4.jpg",
    thumbnail: "/images/image-product-4-thumbnail.jpg",
    isActive: false,
  },
];
