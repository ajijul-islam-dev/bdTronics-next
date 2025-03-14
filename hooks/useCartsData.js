"use client";
import { CartContext } from "@/services/CartProvider";
import { useContext } from "react";

const useCartsData = () => {
  const { handleCart, cartItems, handleCartRemove } = useContext(CartContext);
  return {
    handleCart,
    handleCartRemove,
    cartItems,
  };
};

export default useCartsData;
