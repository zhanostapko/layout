import Image from "next/image";
import React from "react";

import blurPoint from "@/public/assets/images/blur.svg";
import ReviewSlider from "./ReviewSlider";
import { TestimonialsSection } from "@/types/content";

type Props = { content: TestimonialsSection };

const Reviews = ({ content }: Props) => {
  const { headline, subheadline, items } = content;
  return (
    <section className=" relative py-8  pb-0 md:py-14 md:pb-0  bg-white mx-auto max-w-[1440px] w-full overflow-hidden">
      <div className="absolute top-[0%] left-[50%]">
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
      <div className="absolute bottom-[0%] left-[0%]">
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
        {headline}
      </h2>
      <p className="mx-auto max-w-md text-center text-base font-medium text-gray-500 mt-7">
        {subheadline}
      </p>

      <ReviewSlider items={items} />
    </section>
  );
};

export default Reviews;
