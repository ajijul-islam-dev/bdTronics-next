"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard.jsx";

const ReviewSlideSection = ({ title, btnText }) => {
  return (
    <div>
      <div className="container mx-auto my-16">
        <div className="flex items-center justify-between md:justify-start md:gap-10">
          <h1 className="text-lg md:text-2xl font-semibold">
            {title || "Popular Categories"}
          </h1>
          {btnText && <SeeAll btnText={btnText} />}
        </div>

        <div className="my-3 py-10">
          <Swiper
            modules={[Navigation, FreeMode]} // Include both Navigation and Pagination modules
            navigation
            freeMode
            spaceBetween={10}
            slidesPerView={1.3}
            breakpoints={{
              // Breakpoints for responsive settings
              320: {
                slidesPerView: 1.3, // 1 slide on small screens
              },
              576: {
                slidesPerView: 1.3, // 2 slides on tablets
              },
              768: {
                slidesPerView: 2.1, // 3 slides on medium devices
              },
              992: {
                slidesPerView: 3.1, // 4 slides on desktops
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3.1, // 5 slides on large desktops
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlideSection;
