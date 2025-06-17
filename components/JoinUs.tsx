import Image from "next/image";
import React from "react";
import ufoIcon from "@/public/assets/images/ufo.svg";
import walletIcon from "@/public/assets/images/wallet.svg";
import airpodsIcon from "@/public/assets/images/airpods.svg";
import { ActionSection } from "@/types/content";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

type Props = {
  content: ActionSection;
};

const JoinUs = ({ content }: Props) => {
  const { headline, subheadline, socialProof, actionBuyButton } = content;
  return (
    <section className=" py-8 pb-0 md:py-14 md:pb-0 max-w-[1440px] overflow-hidden w-full mx-auto flex flex-col items-center text-center px-0 lg:px-4  gap-12 ">
      <p className="max-w-[40rem] px-4 text-center font-manrope text-xl font-bold leading-8 text-neutral-900">
        {socialProof}
      </p>

      <div className="lg:rounded justify-center py-14  relative w-full max-w-6xl lg:rounded-2xl bg-[url('/assets/images/lastGroup.svg')] bg-cover bg-center p-6 md:p-11  flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Content */}
        <div className="text-left flex gap-8 flex-col  z-10">
          <div className="">
            <h2 className=" text-3xl text-center leading-8 font-extrabold text-neutral-900 font-manrope">
              {headline}
            </h2>
            <p className=" max-w-md mx-auto text-base leading-7 font-medium text-neutral-900 text-center font-manrope mt-6 ">
              {subheadline}
            </p>
          </div>
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://shop.findacow.com"
              className="flex gap-4 items-center justify-center px-8 py-4 w-full max-w-[180px] bg-black text-white text-lg font-bold rounded-full shadow-md hover:bg-gray-800 transition duration-200"
            >
              {actionBuyButton} <ShoppingCart />
            </Link>
          </div>
        </div>

        {/* UFO image */}
        <Image
          src={ufoIcon}
          alt="UFO"
          className="absolute top-[-15%] lg:top-[-25px] left-[-1%] w-38 h-38 lg:w-[209px] lg:h-[209px]"
        />

        {/* AirPods + Wallet */}

        <Image
          src={airpodsIcon}
          alt="AirPods"
          className="absolute left-[-2%] top-[20%] md:top-[40%] lg:top-[60%] lg:left-[20%] rotate-[10deg] md:w-[80px] h-[95px] w-[64px] h-[83px] lg:w-[110px] lg:h-[143px]"
        />
        <Image
          src={walletIcon}
          alt="Wallet"
          width={110}
          height={140}
          className="absolute w-[82px] h-[68px] top-[25%] right-[-5%] md:top-[40%] md:right-[0] lg:right-[15%] lg:w-[87px] lg:h-[72px] rotate-[10deg]"
        />
      </div>
    </section>
  );
};

export default JoinUs;
