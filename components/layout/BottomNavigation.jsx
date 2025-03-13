import Link from "next/link";
import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import CartBtn from "../shared/CartBtn";
import CartDrawer from "./CartDrawer";
import MenuDrawer from "./MenuDrawer";

const BottomNavigation = () => {
  return (
    <div className="grid grid-cols-5 bg-white border-t items-center text-center fixed bottom-0 w-full z-50 md:hidden">
      {links?.map((link, i) =>
        link.path ? (
          <Link
            key={i}
            href={link.path}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-2xl">{link.icon}</span>
            <span> {link.title}</span>
          </Link>
        ) : link.title == "Menu" ? (
          <MenuDrawer
            key={i}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-2xl">{link.icon}</span>
            <span>{link.title}</span>
          </MenuDrawer>
        ) : (
          <CartDrawer key={i}>
            <div key={i} className="flex flex-col items-center justify-center">
              <span className="text-2xl">{link.icon}</span>
              <span>{link.title}</span>
            </div>
          </CartDrawer>
        )
      )}
    </div>
  );
};

export default BottomNavigation;

const links = [
  {
    title: "Home",
    icon: <RiHomeLine />,
    path: "/",
  },
  {
    title: "Contacts",
    icon: <FiPhoneCall />,
    path: "/contacts",
  },
  {
    title: "Menu",
    icon: <HiOutlineMenu />,
  },
  {
    title: "Account",
    icon: <IoPersonOutline />,
    path: "/",
  },
  {
    title: "Cart",
    icon: <IoCartOutline />,
  },
];
