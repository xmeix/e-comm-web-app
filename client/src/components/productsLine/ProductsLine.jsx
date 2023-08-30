import { useEffect, useState } from "react";
import "./ProductsLine.css";
import SeeMore from "../seemore/SeeMore";
const ProductsLine = () => {
  const [bestSellers, setBestSellers] = useState([]);

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
  }, []);

  return (
    <div className="products-line">
      <div className="products-line-header">
        <div className="product-line-title">BEST SELLERS</div>
        <SeeMore path={""} />
      </div>
      <div className="products-line-body ">
        {bestSellers.map((bs, i) => (
          <div className="product-pline" key={i}>
            <div className="img-container">
              {" "}
              <img src={bs.images[0]} alt="" />
            </div>
            <div className="product-pline-info">
              <div className="product-title">{bs.title}</div>
              <div className="product-price">{bs.price}0</div>
              <div className="product-rating">
                {Array.from({ length: Math.floor(bs.rating) }, (_, index) => (
                  <span key={index} role="img" aria-label="star">
                    ⭐
                  </span>
                ))}
                <span>({bs.rating.toFixed(2)})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsLine;
