"use client";
import BrandCard from "../shared/BrandCard";
import SeeAll from "./SeeAll";

import { Navigation, FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";

const BrandSliderSection = ({ title, btnText }) => {
  return (
    <div>
      <div className="container mx-auto my-16">
        <div className="flex items-center justify-between md:justify-start md:gap-10">
          <h1 className="text-lg md:text-2xl font-semibold">
            {title || "Popular Categories"}
          </h1>
          {btnText && <SeeAll btnText={btnText} />}
        </div>
        <div className="my-3">
          <Swiper
            modules={[Navigation, FreeMode]} // Include both Navigation and Pagination modules
            navigation
            freeMode
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              // Breakpoints for responsive settings
              320: {
                slidesPerView: 4.1, // 1 slide on small screens
              },
              576: {
                slidesPerView: 5.1, // 2 slides on tablets
              },
              768: {
                slidesPerView: 6.1, // 3 slides on medium devices
              },
              992: {
                slidesPerView: 8.1, // 4 slides on desktops
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 9, // 5 slides on large desktops
                spaceBetween: 30,
              },
            }}
          >
            {brands ? (
              brands.map((item) => (
                <SwiperSlide key={item.id}>
                  <BrandCard item={item} />
                </SwiperSlide>
              ))
            ) : (
              <div>Products Not Found</div>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandSliderSection;

const brands = [
  {
    id: 1,
    image: "/images/brands/brand-anycub.webp",
  },
  {
    id: 2,
    image: "/images/brands/brand-bambu.webp",
  },
  {
    id: 3,
    image: "/images/brands/brand-eve.webp",
  },
  {
    id: 4,
    image: "/images/brands/brand-eve.webp",
  },
  {
    id: 5,
    image: "/images/brands/brand-eve.webp",
  },
  {
    id: 6,
    image: "/images/brands/brand-eve.webp",
  },
  {
    id: 7,
    image: "/images/brands/brand-eve.webp",
  },
];
