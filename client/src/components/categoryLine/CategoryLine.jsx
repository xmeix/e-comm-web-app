import { categories } from "../../data/categories";
import { products } from "../../data/products";
import "./CategoryLine.css";
const CategoryLine = ({ _id }) => {
  const chosenCategoryProducts = products
    .filter((e) => e.categories.includes(_id))
    .slice(0, 5);
  const chosenCategory = categories.filter((e) => e._id === _id)[0];
  return (
    <div className="categoryLine">
      {/* <div className="category-line-title">BEST CATEGORY</div> */}
      <div className="category-details">
        <img
          className="category-banner"
          src={chosenCategory.banners[0]}
          alt=""
        />

        <div className="category-info">
          <div className="category-name">{chosenCategory.name}</div>
          <div className="category-description">
            {chosenCategory.description}
          </div>
        </div>
      </div>
      <div className="categoryProducts">
        {chosenCategoryProducts.map((p, i) => (
          <div className="category-products-p" key={i}>
            <img className="category-products-p-img" src={p.images[0]} alt="" />
            <div className="category-products-p-title">{p.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryLine;
