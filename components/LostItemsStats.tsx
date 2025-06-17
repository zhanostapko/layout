import React from "react";
import Image from "next/image";

type Props = {
  item: {
    img: string;
    title: string;
    description: string;
  };
};

const LostItemsStat = ({ item }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 max-w-[270px] ">
      <div className="relative w-19 h-19">
        <Image src={item.img} alt="Icon" fill />
      </div>

      <p className="text-lg text-center font-bold text-center text-neutral-900">
        {item.title}
      </p>

      <p className="text-base text-center font-medium text-muted-foreground max-w-xs">
        {item.description}
      </p>
    </div>
  );
};

export default LostItemsStat;
