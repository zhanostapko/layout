import React from "react";
import Image from "next/image";

import { AvatarBubble } from "./AvatarBubble";
import { StoreLink } from "./StoreLink";
import Header from "./Header";

import bagIcon from "@/public/assets/images/bag.svg";
import stickerIcon from "@/public/assets/images/sticker.svg";
import installIcon from "@/public/assets/images/installNow.svg";
import foundItemlIcon from "@/public/assets/images/itemFound.svg";
import googleIcon from "@/public/assets/images/google.svg";
import appleIcon from "@/public/assets/images/apple.svg";
import walletIcon from "@/public/assets/images/wallet.svg";
import { HeroSection } from "@/types/content";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

type Props = {
  content: HeroSection;
};

const Hero = ({ content }: Props) => {
  const {
    heroBuyButtonText,
    headline,
    subheadline,
    socialProof,
    notificationMessage,
    notificationTitle,
  } = content;

  return (
    <div id="hero">
      <section className="p-4 md:p-8 relative max-w-[1440px] mx-auto">
        <Image
          src={stickerIcon}
          alt="Sticker icon"
          className="absolute  left-[-160px] bottom-[-140px] md:bottom-[-240px]   md:left-[-100px]  z-2 w-[360px] h-[209px] md:w-[420px] md:h-[244px]"
        />

        <Image
          src={bagIcon}
          alt="Bag icon"
          className="absolute right-[-40px] sm:right-[0] top-[60%] w-[112px] h-[141px] lg:w-[164px] lg:h-[207px] lg:top-[20%]"
        />

        <div className="absolute bottom-[-7%]  right-[-15%] sm:right-0 sm:bottom-[-10%]  lg:right-[10px] lg:bottom-[0%] ">
          <Image
            src={foundItemlIcon}
            alt="Found item icon"
            className="w-[250px] h-[100px] lg:w-[300px] lg:h-[120px] relative"
          />
          <div className="absolute top-[20%] left-[32%] rotate-[-5.819deg] flex gap-2 flex-col">
            <p className=" text-neutral-900 font-sans text-[9px] lg:test-xs font-bold leading-4">
              {notificationTitle}
            </p>

            <span className=" inline-block  max-w-[150px] lg:max-w-[183px] text-gray-500 font-sans text-[8px] lg:text-[10px] font-medium ">
              {notificationMessage}
            </span>
          </div>
        </div>
        <Image
          src={walletIcon}
          alt="Wallet icon"
          className="absolute w-[78px] h-[64px] left-[-5%] top-[30%] sm:left-0 sm:top-[30%] lg:w-[114px] lg:h-[93px] lg:left-[6%] "
        />
        <div className="max-w-[1440px] mx-auto flex flex-col justify-center">
          <Header />
          <div className="flex flex-col items-center text-center px-4 py-16 pb-0 gap-17 max-w-3xl mx-auto">
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center leading-tight">
                {headline}
              </h1>
              <p className="text-center text-gray-800 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                {subheadline}
              </p>
            </div>

            {/* Links */}

            <Link
              href="https://shop.findacow.com"
              className="flex gap-4 items-center justify-center px-8 py-4 w-full max-w-[180px] bg-black text-white text-lg font-bold rounded-full shadow-md hover:bg-gray-800 transition duration-200"
            >
              {heroBuyButtonText} <ShoppingCart />
            </Link>

            {/* Avatars */}
            <div className="flex flex-col md:flex-row items-center relative z-10 gap-4">
              <div className="flex">
                <AvatarBubble src="/images/users/user-1.jpg" alt="User 1" />
                <div className="-ml-7">
                  <AvatarBubble src="/images/users/user-2.jpg" alt="User 2" />
                </div>
                <div className="-ml-7">
                  <AvatarBubble src="/images/users/user-3.jpg" alt="User 3" />
                </div>
                <div className="-ml-7">
                  <AvatarBubble src="/images/users/user-4.jpg" alt="User 4" />
                </div>
              </div>
              <p className=" max-w-[285px] text-center text-base font-normal leading-6 text-black font-manrope md:text-left">
                {socialProof}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div id="ellipse" />
    </div>
  );
};

export default Hero;
