import { useEffect, useState } from "react";
import CategoryLine from "../../components/categoryLine/CategoryLine";
import ProductsLine from "../../components/productsLine/ProductsLine";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import "./Categories.css";

const Categories = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [bestDeals, setBestDeals] = useState([]);

  useEffect(() => {
    // sort all products by rating and get only the 5 best rating products

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const products = data.products;

        // Sort products by rating in descending order
        products.sort((a, b) => b.rating - a.rating);

        // Get the top 5 highest-rated products
        const top5Products = products.slice(0, 5);
        setBestSellers(top5Products);
      });
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const products = data.products;

        // Sort products by rating in descending order
        products.sort((a, b) => b.discountPercentage - a.discountPercentage);

        // Get the top 5 highest-rated products
        const top5Products = products.slice(0, 5);
        setBestDeals(top5Products);
      });
  }, []);
  return (
    <div className="categories">
      <VideoPlayer />
      {/* CHOSEN CATEGORY */}
      <CategoryLine _id="1" />
      {/* BEST SELLERS PRODUCTS */}
      <ProductsLine
        products={bestSellers}
        title={"Best sellers"}
        discounts={false}
      />
      {/* DEALS PRODUCTS (WITH DISCOUNTS)*/}
      <ProductsLine
        products={bestDeals}
        title={"Best deals"}
        discounts={true}
      />
      {/* ALL CATEGORIES : FIRST 4 PRODUCTS + VIEW MORE LINK */}
    </div>
  );
};

export default Categories;
