import "./ProductLink.css";
import { NavLink } from "react-router-dom";

const ProductLink = ({ product, discounts }) => {
  return (
    <NavLink to={`/products/${product.id}`} className="product-pline">
      {/* id to change to _id */}
      {discounts && (
        <div className="product-pline-discount-percentage">
          {"-" + product.discountPercentage + "%"}
        </div>
      )}
      <div className="img-container">
        <img src={product.images[0]} alt="" />
      </div>
      <div className="product-pline-info">
        <div className="product-title">{product.title}</div>
        <div className="product-price">{product.price}0DA</div>
        <div className="product-rating">
          {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
            <span key={index} role="img" aria-label="star">
              ⭐
            </span>
          ))}
          <span>({product.rating.toFixed(2)})</span>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductLink;
