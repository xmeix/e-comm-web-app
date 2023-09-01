import "./CategoryProducts.css";
import { useEffect, useState } from "react";
import { categories } from "../../data/categories";
import ProductLink from "../productLink/ProductLink";

const CategoryProducts = ({ id }) => {
  const [products, setProducts] = useState([]);
  const category = categories.filter((cat) => cat._id === id)[0]; //this will be deleted once the backend works
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category.link}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [id]);

  return (
    <>
      
      <div className="category-products">
        {products.map((prod, i) => (
          <ProductLink key={i} product={prod} />
        ))}
      </div>
    </>
  );
};

export default CategoryProducts;
