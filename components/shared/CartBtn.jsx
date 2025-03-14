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
    <div className="relative">
      <span className="bg-secondary p-2 rounded-md hover:bg-gray-200 text-2xl flex items-center justify-center">
        <IoCartOutline />
      </span>
      <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2 p-1">
        5
      </div>
    </div>
  );
};

export default CartBtn;
