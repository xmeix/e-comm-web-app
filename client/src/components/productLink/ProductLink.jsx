import "./ProductLink.css";
import { NavLink } from "react-router-dom";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
const ProductLink = ({ product, discounts }) => {
  return (
    <NavLink to={`/products/${product.id}`} className="product-pline navlink">
      {/* id to change to _id */}
      {discounts && product.discountPercentage !== 0 && (
        <div className="product-pline-discount-percentage">
          {"-" + product.discountPercentage + "%"}
        </div>
      )}
      <div className="img-container">
        <img src={product.images[0]} alt="" />
      </div>
      <div className="product-pline-info">
        <div className="product-title">{product.title}</div>
        <div className="product-price">
          {product.discountPercentage && product.discountPercentage !== 0 && (
            <span style={{ color: "red" }}>
              {((product.price * product.discountPercentage) / 100).toFixed(2)}
              DA
            </span>
          )}{" "}
          <span
            style={{
              color: "var(--light-gray)",
              textDecoration: "line-through",
            }}
          >
            {" "}
            {product.price}0DA
          </span>
        </div>
        <div className="product-rating">
          <div>
            {" "}
            {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
              <StarRateRoundedIcon className="star" key={index} />
            ))}
          </div>

          <span>({product.rating.toFixed(2)})</span>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductLink;
