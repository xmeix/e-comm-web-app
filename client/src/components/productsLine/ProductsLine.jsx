import { useEffect, useState } from "react";
import "./ProductsLine.css";
import SeeMore from "../seemore/SeeMore";
const ProductsLine = ({ products, title, discounts }) => {
  return (
    <div className="products-line">
      <div className="products-line-header">
        <div className="product-line-title">{title}</div>
        <SeeMore path={""} />
      </div>
      <div className="products-line-body ">
        {products.map((bs, i) => (
          <div className="product-pline" key={i}>
            {discounts && (
              <div className="product-pline-discount-percentage">
                {"-" + bs.discountPercentage + "%"}
              </div>
            )}
            <div className="img-container">
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
