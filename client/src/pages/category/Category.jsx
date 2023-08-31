import "./Category.css";
import { categories } from "../../data/categories";

const Category = ({ id }) => {
  const category = categories.filter((c) => c._id === id)[0];
  return (
    <div className="category">
      <div className="cat-banner">
        <img className="cat-img" src={category.banners[0]} alt="" />
        <div className="cat-ban-overlay">
          <div className="title1">{category.name}</div>
          <div className="title2">{category.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
