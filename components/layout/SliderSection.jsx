import React from "react";
import SeeAll from "./SeeAll";
import Slider from "../shared/Slider";
const SliderSection = ({ title, btnText, items }) => {
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
          <Slider items={items} />
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
