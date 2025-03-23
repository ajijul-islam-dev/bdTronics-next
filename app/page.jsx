"use client";
import { useEffect, useState } from "react";
import PopularCategories from "../components/layout/PopularCategories";
import ProductsSection from "../components/layout/SliderSection";
import BrandSliderSection from "../components/layout/BrandSliderSection";
import Banner from "../components/layout/Banner";
import axios from "axios";
import ReviewSlideSection from "../components/layout/ReviewSlideSection";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="my-14 container mx-auto px-2">
      <Banner />
      <PopularCategories />
      <BrandSliderSection title={"Shop By Brand"} btnText={"View All"} />
      <ReviewSlideSection title="Reviews from Our Customers" />
      <ProductsSection
        title={"Best Seller Product"}
        btnText={"View All"}
        items={products}
      />
    </div>
  );
};

export default Home;
