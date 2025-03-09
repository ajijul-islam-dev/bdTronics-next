import React from "react";

import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ image, title = "Arduino & AI tools", link = "/" }) => {
  return (
    <Link href={link} className="relative block w-full h-full">
      <Image
        className="w-full h-full object-cover"
        src={image || printer}
        alt={title}
      />
      <h1 className="absolute bottom-1 left-0 right-0 mx-auto text-center text-xs md:text-md font-semibold bg-white bg-opacity-50 p-1">
        {title}
      </h1>
    </Link>
  );
};

export default CategoryCard;
