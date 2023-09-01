import "./CategoryProducts.css";
import { useEffect, useState } from "react";
import { categories } from "../../data/categories";
import ProductLink from "../productLink/ProductLink";
import ShopParams from "../shopParams/ShopParams";

const CategoryProducts = ({ id }) => {
  const [products, setProducts] = useState([]);
  const category = categories.filter((cat) => cat._id === id)[0]; //this will be deleted once the backend works
  const [filter, setFilter] = useState("1");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${category.link}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        let parray = [...data.products]; // Create a copy of the products array
        switch (filter) {
          case "1":
            // Sort products by price in descending order
            parray.sort((a, b) => b.price - a.price);
            break;
          case "2":
            // Sort products by price in ascending order
            parray.sort((a, b) => a.price - b.price);
            break;
          case "3":
            parray.sort((a, b) => b.rating - a.rating);
            break;
          case "4":
            parray.sort((a, b) => b.discountPercentage - a.discountPercentage);
            break;
          default:
            break;
        }
        setProducts(parray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, filter, category]);

  return (
    <>
      <ShopParams prodNum={products.length || 0} setFilter={setFilter} />
      <div className="category-products">
        {products.map((prod, i) => (
          <ProductLink key={i} product={prod} discounts={true} />
        ))}
      </div>
    </>
  );
};

export default CategoryProducts;
