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
    <div className="grid grid-cols-5 bg-white border-t items-center text-center fixed bottom-0 w-full z-50 md:hidden pt-3">
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
          <MenuDrawer key={i}>
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl">{link.icon}</span>
              <span>{link.title}</span>
            </div>
          </MenuDrawer>
        ) : (
          <CartDrawer key={i}>
            <div key={i} className="flex flex-col items-center justify-center ">
              <span className="relative text-2xl">{link.icon}</span>
              <span>
                {link.title}
                {cartItems.length > 0 && (
                  <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 right-5 p-1">
                    {cartItems.length}
                  </div>
                )}
              </span>
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
