import { NavLink, useParams } from "react-router-dom";
import { categories } from "../../data/categories";
import "./Shop.css";
import CategoriesNav from "../../components/categoriesNav/CategoriesNav";
import Category from "../category/Category";
import CategoryProducts from "../../components/categoryProducts/CategoryProducts";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
const Shop = () => {
  const { id } = useParams();

  return (
    <div className="shop">
      {/* <CategoriesNav /> */}
      {/* <Category id={id} /> */}
      <CategoryProducts id={id} />
      <Footer />
    </div>
  );
};

export default Shop;
