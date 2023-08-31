import "./CategoriesNav.css";
import { NavLink } from "react-router-dom";
import { categories } from "../../data/categories";

const CategoriesNav = () => {
  return (
    <ul className="categories-nav">
      {categories.map((c) => (
        <NavLink to={`/categories/${c._id}`}>
          <li>{c.name}</li>
        </NavLink>
      ))}
    </ul>
  );
};

export default CategoriesNav;
