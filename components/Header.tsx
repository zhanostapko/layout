"use client";

import Image from "next/image";
import { LocaleSwitcher } from "./LocaleSwitcher";

export default function Header() {
  return (
    <header className="w-full px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={120}
            height={30}
          />
        </div>
        <LocaleSwitcher />
      </div>
    </header>
  );
}
