import { useEffect, useState } from "react";
import "./ProductsLine.css";
import SeeMore from "../seemore/SeeMore";
import LineHeader from "../categoryLineHeader/LineHeader";
import { NavLink } from "react-router-dom";
const ProductsLine = ({ products, title, discounts }) => {
  return (
    <div className="products-line">
      <LineHeader path={""} title={title} />
      <div className="products-line-body ">
        {products.map((bs, i) => (
          <NavLink to={`/products/${bs.id}`} className="product-pline" key={i}>
            {/* id to change to _id */}
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
              <div className="product-price">{bs.price}0DA</div>
              <div className="product-rating">
                {Array.from({ length: Math.floor(bs.rating) }, (_, index) => (
                  <span key={index} role="img" aria-label="star">
                    ⭐
                  </span>
                ))}
                <span>({bs.rating.toFixed(2)})</span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ProductsLine;
