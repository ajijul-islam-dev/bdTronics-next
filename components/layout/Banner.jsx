import React from "react";
import BannerSlider from "./BannerSlider";
import TopCategories from "./TopCategories";

const Banner = () => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <div className="grid grid-cols-1 md:grid-cols-8  md:my-20 md:gap-2">
      <div className="md:col-span-6">
        <BannerSlider />
      </div>
      <div className="md:col-span-2">
        <TopCategories />
      </div>
    </div>
  );
};

export default Banner;
