"use client";

import { headerLinks } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavbar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 z-20 flex flex-row w-full pt-4 bg-white px-8 items-center justify-center gap-4">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger>
          <Image
            src="/images/icon-menu.svg"
            alt="menu"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col">

            <Link href="/" className="mb-4">
              <Image
                src="/images/logo.svg"
                alt="menu"
                width={138}
                height={20}
                className="cursor-pointer"
              />
            </Link>
            {headerLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                onClick={() => setSheetOpen(false)}
                className="font-bold text-xl mt-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/" className="mr-16">
        <Image
          src="/images/logo.svg"
          alt="menu"
          width={138}
          height={20}
          className="cursor-pointer"
        />
      </Link>
      <div className="ml-auto flex flex-row items-center">
        <Image
          src="/images/icon-cart.svg"
          alt="Cart"
          width={20}
          height={20}
          className="ml-12 mr-4 cursor-pointer"
        />
        <Image
          src="/images/image-avatar.png"
          alt="avatar"
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
