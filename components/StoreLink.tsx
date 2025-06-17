import Image from "next/image";
import Link from "next/link";

interface StoreLinkProps {
  href: string;
  imgSrc: string;
  alt: string;
}

export const StoreLink = ({ href, imgSrc, alt }: StoreLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:opacity-90"
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={160}
        height={50}
        className="h-auto w-auto"
      />
    </Link>
  );
};
