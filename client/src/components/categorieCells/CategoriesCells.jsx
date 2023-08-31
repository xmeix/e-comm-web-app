import { categories } from "../../data/categories";
import "./CategoriesCells.css";
import CategoryCell from "./CategoryCell";
const CategoriesCells = () => {
  return (
    <div className="categories-cells">
      <div className="categories-cells-title">All Categories</div>
      <div className="categories-cells-cats">
        {categories.map((c, i) => (
          <CategoryCell key={i} category={c} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesCells;
