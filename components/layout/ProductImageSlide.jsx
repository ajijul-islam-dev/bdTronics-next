"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectFade,
  Pagination,
  Autoplay,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import Image from "next/image";

const ProductImageSlide = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="space-y-3">
      <Swiper
        modules={[Navigation, EffectFade, Thumbs]}
        effect={"fade"}
        spaceBetween={20}
        slidesPerView={1}
        lazyPreloadPrevNext={true}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {product?.image_urls?.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              width={400}
              height={400}
              className="w-full"
              src={
                "https://img.freepik.com/free-photo/electronic-computer-motherboard-wallpaper_1409-5907.jpg"
              }
              alt="Slide 1"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Thumbs]} // Include both Navigation and Pagination modules
        pagination={{ clickable: true }} // Enable clickable pagination dots
        spaceBetween={4}
        slidesPerView={4}
        autoplay
        watchSlidesProgress={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={setThumbsSwiper}
      >
        {product?.image_urls?.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              className="w-full h-full"
              src={
                "https://img.freepik.com/free-photo/electronic-computer-motherboard-wallpaper_1409-5907.jpg"
              }
              alt="Slide 1"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageSlide;
