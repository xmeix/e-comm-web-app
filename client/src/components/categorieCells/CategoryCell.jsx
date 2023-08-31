import "./CategoryCell.css";
import { NavLink } from "react-router-dom";
const CategoryCell = ({ category }) => {
  return (
    <NavLink to={`/categories/${category._id}`} className="category-cell">
      <img src={category.banners[0]} alt="" />
      <div className="ovlay">
        <div className="title">{category.name}</div>
        <div className="description">{category.description}</div>
      </div>
    </NavLink>
  );
};

export default CategoryCell;
