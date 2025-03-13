import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandCard = ({ item }) => {
  return (
    <Link href={"/"}>
      <Image
        width={400}
        height={400}
        className="h-16 md:h-24 w-full filter duration-300 grayscale hover:grayscale-0"
        src={item.image}
        alt="Slide 1"
      />
    </Link>
  );
};

export default BrandCard;
