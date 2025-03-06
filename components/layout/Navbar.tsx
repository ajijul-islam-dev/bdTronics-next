import logo from "../../public/images/bdtronics_logo_8.webp";
import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import CartBtn from "../shared/CartBtn";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  return (
    <nav className="fixed bg-white top-0 right-0 left-0 mx-auto z-20 shadow p-2">
      <div className="md:container mx-auto flex items-center justify-between gap-5 md:gap-0">
        <div className="">
          <Link href="/">
            <Image
              width={200}
              height={100}
              className="w-32"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="md:w-[60%]">
          <form className="grid grid-cols-12 border border-primary rounded-full overflow-hidden">
            <input
              className="col-span-9 outline-none py-1 px-4"
              type="text"
              placeholder="Search here"
            />
            <button
              className="col-span-3 bg-primary text-2xl flex items-center justify-center md:py-2"
              type="submit"
            >
              <IoIosSearch />
            </button>
          </form>
        </div>
        <div className="hidden md:flex items-center justify-end gap-5">
          <button className="bg-secondary p-2 rounded-md hover:bg-gray-200 text-2xl flex items-center justify-center">
            <IoIosHeartEmpty />
          </button>
          <CartDrawer>
            <CartBtn />
          </CartDrawer>
          <div className="flex items-center justify-center gap-1">
            <button className="rounded-full bg-primary hover:bg-yellow-400 text-2xl flex items-center justify-center p-2">
              <VscAccount />
            </button>
            <span>My Account</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
