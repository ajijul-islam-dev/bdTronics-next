import CartDrawer from "@/components/layout/CartDrawer";
import { Button } from "@/components/ui/button";
import BannerSlider from "@/components/layout/BannerSlider";
import Image from "next/image";
import TopCategories from "../components/layout/TopCategories";
import PopularCategories from "../components/layout/PopularCategories";

export default function Home() {
  return (
    <div className="my-14 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-8  md:my-20 md:gap-2">
        <div className="md:col-span-6">
          <BannerSlider />
        </div>
        <div className="md:col-span-2">
          <TopCategories />
        </div>
      </div>
      <PopularCategories />
    </div>
  );
}
