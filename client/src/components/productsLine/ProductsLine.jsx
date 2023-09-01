import { useEffect, useState } from "react";
import "./ProductsLine.css";
import SeeMore from "../seemore/SeeMore";
import LineHeader from "../categoryLineHeader/LineHeader";
import { NavLink } from "react-router-dom";
import ProductLink from "../productLink/ProductLink";
const ProductsLine = ({ products, title, discounts }) => {
  return (
    <div className="products-line">
      <LineHeader path={""} title={title} />
      <div className="products-line-body ">
        {products.map((bs, i) => (
          <ProductLink key={i} product={bs} discounts={discounts} />
        ))}
      </div>
    </div>
  );
};

export default ProductsLine;
