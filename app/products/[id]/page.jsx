"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import ProductImageSlide from "../../../components/layout/ProductImageSlide";
import { Button } from "@/components/ui/button";
import useCartsData from "@/hooks/useCartsData";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";

const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { handleCart } = useCartsData();

  // Fetch product function with useCallback to prevent re-creation
  const fetchProduct = useCallback(async () => {
    try {
      const res = await axios.get(`/api/products/${id}`);
      setProduct(res.data.product);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }, [id]);

  useEffect(() => {
    if (id) fetchProduct();
  }, [id, fetchProduct]);

  // Memoized price display logic
  const discountPrice = useMemo(() => {
    return product?.originalPrice ? product?.originalPrice : product?.price;
  }, [product]);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center w-full bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-3 text-gray-600 text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-20 container mx-auto px-2">
      <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side - Product Image */}
        <div className="md:col-span-2">
          <ProductImageSlide product={product} />
        </div>

        {/* Right Side - Product Details */}
        <div className="flex flex-col gap-4">
          <h5 className="font-bold text-2xl">{product?.name}</h5>

          <div className="flex items-center gap-4 justify-between">
            <Rating
              style={{ maxWidth: 100 }}
              value={product?.rating}
              readOnly
            />
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>In Stock</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            {product?.description}
          </p>

          {/* Pricing Section */}
          <div className="flex items-center gap-3 text-xl font-bold my-6">
            <span className="text-red-500">৳ {product?.price}</span>
            {product?.originalPrice &&
              product?.originalPrice !== product?.price && (
                <span className="text-gray-500 line-through text-lg">
                  ৳ {discountPrice}
                </span>
              )}
          </div>

          {/* Purchase Section */}
          <form
            onSubmit={(e) => handleCart(e, product, e.target.qty.value)}
            className="fixed w-full md:static bottom-16 grid grid-cols-3 z-50 items-center gap-3 bg-white md:bg-transparent p-2 shadow-md md:shadow-none"
          >
            <div className="flex items-center gap-2 border rounded-md p-2">
              <span className="text-sm">Qty</span>
              <input
                name="qty"
                className="w-12 h-10 text-center border rounded-md"
                type="number"
                min="1"
                defaultValue="1"
              />
            </div>
            <Button
              color="success"
              variant="secondary"
              className="w-full h-12 md:text-md"
            >
              Buy Now
            </Button>
            <Button
              type="submit"
              className="w-full h-12 md:text-md bg-yellow-500 hover:bg-yellow-600"
            >
              Add to Cart
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
