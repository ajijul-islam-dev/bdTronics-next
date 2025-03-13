import Link from "next/link";
import React from "react";

import { IoMdArrowDropright } from "react-icons/io";

const SeeAll = ({ btnText }) => {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-between text-sm md:text-[16px] bg-primary p-1 px-1.5 rounded"
    >
      <span>{btnText || "View all categories"}</span>
      <IoMdArrowDropright />
    </Link>
  );
};

export default SeeAll;
