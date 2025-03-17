import PopularCategories from "../components/layout/PopularCategories";
import ProductsSection from "../components/layout/SliderSection";
import BrandSliderSection from "../components/layout/BrandSliderSection";
import Banner from "../components/layout/Banner";
import axios from "axios";

const Home = async () => {
  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/api/products");
    return res.data.products;
  };

  const products = await getProducts();

  return (
    <div className="my-14 container mx-auto px-2">
      <Banner />
      <PopularCategories />
      <BrandSliderSection title={"Shop By Brand"} btnText={"View All"} />

      <ProductsSection
        title={"Best Seller Product"}
        btnText={"View All"}
        items={products}
      />
    </div>
  );
};
export default Home;
