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
