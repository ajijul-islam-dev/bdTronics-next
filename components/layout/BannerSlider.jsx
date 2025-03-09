"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide_1 from "../../public/images/slides/slide_1.webp";
import slide_2 from "../../public/images/slides/slide_2.webp";
import slide_3 from "../../public/images/slides/slide_3.webp";

import Image from "next/image";

const BannerSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]} // Include both Navigation and Pagination modules
        pagination={{ clickable: true }} // Enable clickable pagination dots
        spaceBetween={20}
        slidesPerView={1}
        autoplay
      >
        <SwiperSlide>
          <Image className="w-full h-full" src={slide_1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-full" src={slide_2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-full" src={slide_3} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
