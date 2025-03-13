"use client";
import { Navigation, FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const Slider = ({ items }) => {
  return (
    <Swiper
      modules={[Navigation, FreeMode]} // Include both Navigation and Pagination modules
      navigation
      freeMode
      spaceBetween={10}
      slidesPerView={3}
      breakpoints={{
        // Breakpoints for responsive settings
        320: {
          slidesPerView: 2.1, // 1 slide on small screens
        },
        576: {
          slidesPerView: 3.1, // 2 slides on tablets
        },
        768: {
          slidesPerView: 4.1, // 3 slides on medium devices
        },
        992: {
          slidesPerView: 6.1, // 4 slides on desktops
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 6, // 5 slides on large desktops
          spaceBetween: 20,
        },
      }}
    >
      {items ? (
        items.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard item={item} />
          </SwiperSlide>
        ))
      ) : (
        <div>Products Not Found</div>
      )}
    </Swiper>
  );
};

export default Slider;
