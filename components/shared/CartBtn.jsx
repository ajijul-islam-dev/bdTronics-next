"use client";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

// import useCartsData from '../hooks/useCartsData.js'
import { Button } from "../ui/button";
import { Badge } from "lucide-react";

const CartBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const {handleCart,cartItems} = useCartsData();

  return (
    <div>
      <button
        variant={"secondary"}
        onClick={() => setIsOpen(true)}
        className="bg-secondary p-2 rounded-md hover:bg-gray-200 text-2xl flex items-center justify-center"
      >
        <IoCartOutline />
      </button>
      {/* <Drawer isOpen={isOpen} setIsOpen={setIsOpen}/> */}
    </div>
  );
};

export default CartBtn;
