"use client";
import { useState } from "react";
// import Rating from "@mui/material/Rating";
import CartBtn from "../shared/CartBtn";
import { IoCartOutline } from "react-icons/io5";

import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link.js";
import Image from "next/image.js";
import { Button } from "../ui/button";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// import useCartsData from "../hooks/useCartsData.js";

const ProductCard = ({ item: product }) => {
  const [isVisible, setIsVisible] = useState(false);
  // const { handleCart } = useCartsData();

  const [rating, setRating] = useState(3.5);

  const handleFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Added to Wishlist");
  };

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="flex flex-col items-center space-y-6 text-center p-3 bg-white shadow-lg rounded-lg relative overflow-hidden transition-all my-5"
    >
      {/* Product Image */}
      <Link href={`/products/${product?.id || 1}`} className="overflow-hidden">
        <Image
          width={400}
          height={800}
          className={`w-full h-40 duration-500 ${isVisible && "scale-150"}`}
          src={
            "https://img.freepik.com/free-photo/electronic-computer-motherboard-wallpaper_1409-5907.jpg"
          }
          alt={product?.name || "Product Image"}
        />
      </Link>
      Ra
      {/* Product Name */}
      <p className="text-sm font-medium mt-2">
        {product?.name || "UNI-T UT33B+ Palm Size Digital Pocket Multimeter"}
      </p>
      {/* Rating */}
      <div className="text-center">
        <Rating
          style={{ maxWidth: 100 }}
          value={rating}
          onChange={setRating}
          readOnly
        />
      </div>
      {/* Price */}
      <div className="flex items-center justify-between gap-6">
        <h4 className="text-sm font-semibold text-primary">
          BDT {product?.price ? product.price.toFixed(2) : "325.10"}
        </h4>
        <h4 className="text-sm font-semibold text-muted-foreground line-through ">
          BDT {product?.price ? product.price.toFixed(2) : "325.10"}
        </h4>
      </div>
      {/* Hover Actions */}
      <div
        className={` ${
          !isVisible && "hidden"
        } duration-500 absolute bottom-0 left-0 right-0 mx-auto flex flex-col justify-center items-center gap-1 p-2 bg-white shadow-md transition-all`}
      >
        <Button
          onClick={(e) => handleCart(e, product)}
          size="lg"
          variant="default"
          className=" hover:bg-yellow-600"
        >
          <IoCartOutline />
          Add to cart
        </Button>
        <Button size={"lg"} variant={"outline"} onClick={handleFav}>
          <IoIosHeartEmpty />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
