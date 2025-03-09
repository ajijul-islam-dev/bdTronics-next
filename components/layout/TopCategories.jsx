import React from "react";

import metter from "../../public/images/top_categories/testmeter.webp";
import prototype from "../../public/images/top_categories/prototype.webp";
import Image from "next/image";
import Link from "next/link";

const TopCategories = () => {
  return (
    <div>
      <div className="my-2 md:my-0 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-2.5">
        <Link className="w-full h-full" href="/">
          <Image className="w-full h-full" alt="top category" src={metter} />
        </Link>
        <Link className="w-full h-full" href="/">
          <Image className="w-full h-full" alt="top category" src={prototype} />
        </Link>
      </div>
    </div>
  );
};

export default TopCategories;
