"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import CartItem from "./CartItem";
import { Button } from "../ui/button";
import useCartsData from "../../hooks/useCartsData";

const CartDrawer = ({ children }) => {
  const { cartItems } = useCartsData();
  const totalAmount = cartItems.reduce(
    (amount, cart) => amount + cart.price * cart.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="w-full flex flex-col h-full">
        {/* Header */}
        <div className="bg-white shadow-md p-4 flex items-center justify-between">
          <SheetTitle className="text-lg md:text-2xl font-semibold">
            Your Cart
          </SheetTitle>
        </div>

        {/* Cart Items (Scrollable Section) */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8">
          {cartItems.length > 0 ? (
            cartItems.map((c, i) => <CartItem cart={c} key={i} />)
          ) : (
            <p className="text-center text-gray-500 mt-10">
              Your cart is empty
            </p>
          )}
        </div>

        {/* Checkout Section (Fixed to Bottom) */}
        <div className="sticky bottom-0 bg-white shadow-md p-4 flex items-center justify-between border-t">
          <p className="text-lg font-medium">
            Subtotal: BDT {totalAmount.toFixed(2)}
          </p>
          <Button
            className="hover:bg-yellow-600"
            variant="default"
            disabled={cartItems.length === 0}
          >
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
