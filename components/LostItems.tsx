import React from "react";
import LostItemsStat from "./LostItemsStats";
import { FeatureItem } from "@/types/content";
import phoneIcon from "@/public/assets/images/phone.svg";
import globeIcon from "@/public/assets/images/globe.svg";
import qrCodeIcon from "@/public/assets/images/qrCode.svg";

type Props = {
  content: FeatureItem[];
};

const LostItems = ({ content }: Props) => {
  const lostItemsImages = [qrCodeIcon, globeIcon, phoneIcon];
  const data = content?.map((item, index) => ({
    title: item.headline,
    description: item.subheadline,
    img: lostItemsImages[index],
  }));
  return (
    <section className="py-8 pb-0 md:py-14 md:pb-0 max-w-[1440px] z-1 mx-auto w-full px-8 ">
      <div className="max-w-7xl mx-auto flex flex-col items-center  gap-12 py-8 md:py-14 md:justify-between md:items-start md:flex-row  ">
        {data?.map((item, index) => (
          <LostItemsStat key={index} item={item} />
        ))}
      </div>
      <div className="bg-gray-200 h-px w-full " />
    </section>
  );
};

export default LostItems;
