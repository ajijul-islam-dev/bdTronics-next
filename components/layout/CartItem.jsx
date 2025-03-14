"use client";
import React from "react";
import { IoIosTrash } from "react-icons/io";
import { VscEdit } from "react-icons/vsc";

import Image from "next/image";
import useCartsData from "@/hooks/useCartsData";
import { Button } from "../ui/button";

const CartItem = ({ cart }) => {
  const { handleCartRemove } = useCartsData();

  return (
    <div className="grid grid-cols-6 my-3 gap-5">
      <div className="col-span-3">
        <Image
          className="w-full h-full"
          width={400}
          height={400}
          src={
            "https://img.freepik.com/free-photo/electronic-computer-motherboard-wallpaper_1409-5907.jpg"
          }
          alt="cart Image"
        />
      </div>
      <div className="col-span-3 items-center">
        <h3>
          {" "}
          <strong>{cart?.quantity} X</strong> {cart?.name}{" "}
        </h3>
        <p className="text-gray-500">BTS-00004783</p>
        <strong>BDT {cart?.price}.00</strong>
        <div>
          <Button
            onClick={() => handleCartRemove(cart)}
            color="primary"
            variant="outlined"
          >
            <IoIosTrash />
          </Button>
          <Button color="primary" variant="outlined">
            <VscEdit />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
