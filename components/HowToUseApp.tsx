import Image from "next/image";
import React from "react";

import downloadStepIcon from "@/public/assets/images/downloadApp.png";
import addQrCodeIcon from "@/public/assets/images/addQrCode.png";
import getMessageIcon from "@/public/assets/images/getMessage.png";

import { HowToUseStep } from "./HowToUseStep";

import blurPoint from "@/public/assets/images/blur.svg";
import { StepsSection } from "@/types/content";

type Props = {
  content: StepsSection;
};

export const howToUseSteps = [downloadStepIcon, addQrCodeIcon, getMessageIcon];

const HowToUseApp = ({ content }: Props) => {
  const items = content.items.map((item, index) => ({
    imgUrl: howToUseSteps[index],
    title: item.headline,
    description: item.subheadline,
  }));
  return (
    <section className="relative py-8 pb-0 md:py-14 md:pb-0 px-6 md:px-14 lg:px-30  text-center max-w-[1440px] mx-auto ">
      <div className="absolute top-[0%] left-0">
        <div className=" relative w-[250px] h-[250px]">
          <Image
            src={blurPoint}
            alt="Blur point"
            className="absolute rotate-y-[-0deg] left-[20%] "
          />
          <Image
            src={blurPoint}
            alt="Blur point"
            className="absolute rotate-y-[-180deg] left-[120%]"
          />
        </div>
      </div>
      <div className="absolute top-[50%] right-0">
        <div className=" relative w-[250px] h-[250px]">
          <Image
            src={blurPoint}
            alt="Blur point"
            className="absolute rotate-y-[-0deg] left-[20%] "
          />
          <Image
            src={blurPoint}
            alt="Blur point"
            className="absolute rotate-y-[-180deg] left-[120%]"
          />
        </div>
      </div>
      <div className="absolute bottom-[10%] left-[-10%]">
        <div className=" relative w-[250px] h-[250px]">
          <Image
            src={blurPoint}
            alt="Blur point"
            className="absolute rotate-y-[-0deg] left-[20%] "
          />
          <Image
            src={blurPoint}
            alt="Blur point"
            className="absolute rotate-y-[-180deg] left-[120%]"
          />
        </div>
      </div>

      <h2 className="text-3xl  font-extrabold leading-[130%] text-center text-gray-900 font-manrope">
        {content.headline}
      </h2>

      {items.map((step, index) => (
        <HowToUseStep
          key={index}
          stepInfo={{ ...step, reverse: index % 2 === 0 && true }}
        />
      ))}
      <div className="bg-gray-200 h-px w-full mt-4 md:mt-10 lg:mt-4 " />
    </section>
  );
};

export default HowToUseApp;
