"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";

import usaIcon from "@/public/assets/images/usa.svg";
import ruIcon from "@/public/assets/images/ru.svg";
import uaIcon from "@/public/assets/images/ua.svg";
import lvIcon from "@/public/assets/images/lv.svg";
import plIcon from "@/public/assets/images/pl.svg";

const locales = ["en", "lv", "ru", "uk", "pl"];

export function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const pathLocale = pathname.split("/")[1];
  const currentLocale = locales.includes(pathLocale) ? pathLocale : "lv";

  function switchLocale(locale: string) {
    const segments = pathname.split("/");

    if (segments[0] === "") segments.shift();

    if (locales.includes(segments[0])) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }

    const newPath = "/" + segments.join("/");
    router.replace(newPath);
  }

  return (
    <>
      <Select onValueChange={switchLocale} defaultValue={currentLocale}>
        <SelectTrigger className="w-[80px] rounded-md px-3 py-2 text-xl font-medium border-none shadow-none focus:ring-0 focus:outline-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="rounded-md bg-gray-100 ">
          <SelectItem value="lv" className="h-8 ">
            <Image src={lvIcon} alt="lv icon" className="w-7 h-7" /> Latvian
          </SelectItem>
          <SelectItem value="en" className="h-8 ">
            <Image src={usaIcon} alt="usa icon" className="w-7 h-7 " />
            English
          </SelectItem>
          <SelectItem value="ru" className="h-8 ">
            <Image src={ruIcon} alt="ru icon" className="w-7 h-7" /> Russian
          </SelectItem>
          <SelectItem value="uk" className="h-8 ">
            <Image src={uaIcon} alt="ua icon" className="w-7 h-7" /> Ukrainian
          </SelectItem>
          <SelectItem value="pl" className="h-8 ">
            <Image src={plIcon} alt="pl icon" className="w-7 h-7" /> Poland
          </SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
