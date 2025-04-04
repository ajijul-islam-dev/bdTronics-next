"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/bdtronics_logo_8.webp";
import { IoIosSearch, IoIosHeartEmpty } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import CartBtn from "../shared/CartBtn";
import CartDrawer from "./CartDrawer";
import MenuDrawer from "./MenuDrawer";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup function
  }, []);

  return (
    <nav
      className={`fixed bg-white top-0 right-0 left-0 mx-auto z-20 shadow px-2 transition-all duration-300 ${
        scrollY > 0 ? "py-2 md:pt-3" : "pt-3 pb-2 md:pb-0"
      }`}
    >
      <div className="md:container mx-auto">
        <div className="flex items-center justify-between gap-5 md:gap-0">
          {/* Logo */}
          <Link href="/" className="md:hidden">
            <Image
              width={200}
              height={100}
              className="w-32"
              src={logo}
              alt="logo"
            />
          </Link>
          <div className="hidden md:block">
            {scrollY === 0 ? (
              <Link href="/">
                <Image
                  width={200}
                  height={100}
                  className="w-32"
                  src={logo}
                  alt="logo"
                />
              </Link>
            ) : (
              <ShopByCategoryBtn bottom={false} />
            )}
          </div>

          {/* Search Bar */}
          <div className="md:w-[60%]">
            <form className="grid grid-cols-12 border border-primary rounded-full overflow-hidden">
              <input
                className="col-span-10 md:col-span-11 outline-none py-2.5 px-4"
                type="text"
                placeholder="Search here"
              />
              <button
                className="col-span-2 md:col-span-1 bg-primary text-2xl flex items-center justify-center md:py-2"
                type="submit"
              >
                <IoIosSearch />
              </button>
            </form>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center justify-end gap-5">
            <button className="bg-secondary p-2 rounded-md hover:bg-gray-200 text-2xl flex items-center justify-center">
              <IoIosHeartEmpty />
            </button>
            <CartDrawer>
              <CartBtn />
            </CartDrawer>
            <div className="flex items-center justify-center gap-1">
              <button className="rounded-full bg-primary hover:bg-yellow-400 text-2xl flex items-center justify-center p-2">
                <GoPerson />
              </button>
              <span>My Account</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        {scrollY === 0 && (
          <div className="md:flex items-center justify-start lg:gap-4 gap-2 mt-4 font-semibold px-2 hidden">
            <div className="self-end">
              <ShopByCategoryBtn bottom />
            </div>
            <Link className="hover:text-primary text-sm" href={"/"}>
              New Products
            </Link>
            <Link className="hover:text-primary text-sm" href={"/"}>
              How to Order
            </Link>
            <Link className="hover:text-primary text-sm" href={"/"}>
              3D Printing Services
            </Link>
            <Link className="hover:text-primary text-sm" href={"/"}>
              Solar Calculator
            </Link>
            <Link className="hover:text-primary text-sm" href={"/"}>
              Blog
            </Link>
            <Link
              className="hover:text-primary flex items-center justify-center gap-1"
              href={"/"}
            >
              <FaFacebook className="text-blue-500 text-sm lg:text-2xl" />
              <p>Page</p>
            </Link>
            <Link
              className="hover:text-primary flex items-center justify-center gap-1"
              href={"/"}
            >
              <BsYoutube className="text-red-500 text-sm lg:text-2xl" />
              <p>Channel</p>
            </Link>
            <Link className="hover:text-primary text-sm" href={"/"}>
              Contacts
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const ShopByCategoryBtn = ({ bottom }) => {
  return (
    <div
      className={`bg-primary flex items-center justify-center gap-2 rounded-md ${
        bottom ? "rounded-bl-none rounded-br-none" : ""
      } px-2.5 py-1.5 lg:py-2 transition-all duration-300`}
    >
      <div className="relative">
        <MenuDrawer>
          <HiOutlineMenu className="text-xl lg:text-2xl" />
          <div className="w-5 h-5 bg-blue-500 rounded-full animate-ping absolute top-1"></div>
        </MenuDrawer>
      </div>
      <p className="text-sm font-semibold">Shop by Categories</p>
    </div>
  );
};
