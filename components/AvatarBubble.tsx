import Image from "next/image";

interface AvatarBubbleProps {
  src: string;
  alt: string;
  size?: number;
}

export const AvatarBubble = ({ src, alt, size = 60 }: AvatarBubbleProps) => {
  return (
    <div
      className="rounded-full bg-white p-1"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full object-cover w-full h-full"
      />
    </div>
  );
};
