import CategoryLine from "../../components/categoryLine/CategoryLine";
import ProductsLine from "../../components/productsLine/ProductsLine";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <VideoPlayer />
      {/* CHOSEN CATEGORY */}
      <CategoryLine _id="1" />
      {/* BEST SELLERS PRODUCTS */}
      <ProductsLine />
      {/* DEALS PRODUCTS (WITH DISCOUNTS)*/}
      {/* ALL CATEGORIES : FIRST 4 PRODUCTS + VIEW MORE LINK */}
    </div>
  );
};

export default Categories;
