import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center">
      <nav className="hidden md:flex sticky mt-16 w-3/4 border-b-2 pb-8 border-blue-grayish items-center">
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
          <Link href="/">Collections</Link>
          <Link href="/">Men</Link>
          <Link href="/">Women</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-row items-center ml-auto">
          <Image 
          src="/images/icon-cart.svg"
          alt="Cart"
          width={25}
          height={25}
          className="cursor-pointer mx-8"
          />
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