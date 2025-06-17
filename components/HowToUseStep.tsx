import Image, { StaticImageData } from "next/image";

type StepProps = {
  stepInfo: {
    title: string;
    description: string;
    imgUrl: string | StaticImageData;
    imageAlt?: string;
    reverse?: boolean;
  };
};

export function HowToUseStep({ stepInfo }: StepProps) {
  const {
    title,
    description,
    imgUrl,
    imageAlt = "Step image",
    reverse = false,
  } = stepInfo;
  return (
    <div className="py-4 lg:py-10 px-4 relative z-3 ">
      <div
        className={`flex flex-col md:flex-row items-center gap-10  mx-auto md:gap-32 ${
          reverse ? "md:flex-row-reverse " : ""
        }`}
      >
        <div className="flex-1 relative w-full  aspect-[10/8] ">
          <Image
            src={imgUrl}
            alt={imageAlt}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-base font-medium text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
