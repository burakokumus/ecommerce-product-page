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
    <div className="md:hidden fixed top-0 flex flex-row pt-8 pl-8">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger>
          <Image
            src="/images/icon-menu.svg"
            alt="menu"
            width={16}
            height={15}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col">
            {headerLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                onClick={() => setSheetOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
