import { NavLink, useParams } from "react-router-dom";
import { categories } from "../../data/categories";
import "./Shop.css";
import CategoriesNav from "../../components/categoriesNav/CategoriesNav";
import Category from "../category/Category";
const Shop = () => {
  const { id } = useParams();
  return (
    <div className="shop">
      <CategoriesNav />
      <Category id={id} />
    </div>
  );
};

export default Shop;
