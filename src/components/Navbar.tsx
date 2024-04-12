import Cart from "./cart/Cart";
import { headerLinks } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center">
      <nav className="sticky mt-16 hidden w-3/4 items-center border-b-2 border-blue-grayish pb-8 md:flex">
        <Link href="/" className="mr-16">
          <Image
            src="/images/logo.svg"
            alt="menu"
            width={138}
            height={20}
            className="cursor-pointer"
          />
        </Link>
        <div className="*:mx-4 *:text-blue-dark-grayish">
          {headerLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="hover:border-b-4 hover:border-orange-primary hover:pb-8">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex flex-row items-center">
          <Cart />
          <Image
            src="/images/image-avatar.png"
            alt="avatar"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
