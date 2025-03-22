"use client";
import Link from "next/link";
import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import CartDrawer from "./CartDrawer";
import MenuDrawer from "./MenuDrawer";
import useCartsData from "@/hooks/useCartsData";

const BottomNavigation = () => {
  const { cartItems } = useCartsData();

  return (
    <div className="grid grid-cols-5 bg-white border-t items-center text-center fixed bottom-0 w-full z-50 md:hidden py-2 shadow-md">
      {links.map((link, i) =>
        link.path ? (
          <Link
            key={i}
            href={link.path}
            className="flex flex-col items-center justify-center gap-0.5 text-gray-700 hover:text-primary transition-all"
          >
            <span className="text-2xl">{link.icon}</span>
            <span className="text-xs font-medium">{link.title}</span>
          </Link>
        ) : link.title === "Menu" ? (
          <MenuDrawer key={i}>
            <div className="flex flex-col items-center justify-center gap-0.5 text-gray-700 hover:text-primary transition-all">
              <span className="text-2xl">{link.icon}</span>
              <span className="text-xs font-medium">{link.title}</span>
            </div>
          </MenuDrawer>
        ) : (
          <CartDrawer key={i}>
            <div className="relative flex flex-col items-center justify-center gap-0.5 text-gray-700 hover:text-primary transition-all">
              <span className="text-2xl">{link.icon}</span>
              <span className="text-xs font-medium">{link.title}</span>
              {cartItems.length > 0 && (
                <div className="bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center absolute -top-1 right-3 shadow-md">
                  {cartItems.length}
                </div>
              )}
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
    path: "/account",
  },
  {
    title: "Cart",
    icon: <IoCartOutline />,
  },
];
