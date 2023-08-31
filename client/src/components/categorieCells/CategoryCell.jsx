import "./CategoryCell.css";
const CategoryCell = ({ category }) => {
  return (
    <div className="category-cell">
      <img src={category.banners[0]} alt="" />
      <div className="ovlay">
        <div className="title">{category.name}</div>
        <div className="description">{category.description}</div>
      </div>
    </div>
  );
};

export default CategoryCell;
