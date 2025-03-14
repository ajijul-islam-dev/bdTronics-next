"use client";
import { createContext, useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const products = useAxios("/products"); // Fetch the full products array
  console.log(products);
  const [cart, setCart] = useState([]);

  // Map cart items to full product details
  const cartItems = cart
    .map((product) => {
      const matchedProduct = products?.find(
        (p) => p?.id === product?.productId
      ); // Use `find` instead of `filter`
      return matchedProduct
        ? { ...matchedProduct, quantity: product.quantity } // Merge product details with quantity
        : null;
    })
    .filter(Boolean); // Remove `null` values if no match is found

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cart data:", error);
        setCart([]); // Reset to an empty array if parsing fails
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add or update cart items
  const handleCart = (e, product, qty = 1) => {
    e.preventDefault();
    e.stopPropagation();

    const cartObj = {
      productId: product.id,
      quantity: 1,
    };

    setCart((prev) => {
      const isExist = prev.find((c) => c.productId === product.id);
      if (isExist) {
        // Update quantity for the existing product
        return prev.map((c) =>
          c.productId === product.id
            ? Number(qty) > 1
              ? { ...c, quantity: c.quantity + Number(qty) }
              : { ...c, quantity: c.quantity + 1 }
            : c
        );
      } else {
        // Add the new product to the cart
        // Number(qty) > 1 ? [...prev, {...cartObj,quantity : Number(qty)}] : [...prev, cartObj] ;
        return [...prev, { ...cartObj, quantity: Number(qty) }];
      }
    });
  };

  //remove cart items
  const handleCartRemove = (product) => {
    const remainingCart = cart.filter((c) => c.productId !== product.id);
    setCart(remainingCart);
  };

  // Provide `handleCart` and `cartItems` to the context
  const cartInfo = {
    handleCart,
    handleCartRemove,
    cartItems,
  };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
