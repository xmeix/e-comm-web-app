import "./ProductDetails.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
const colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#800080",
  "#FFA500",
  "#FFC0CB",
  "#A52A2A",
  "#008080",
  "#808080",
];
const sizes = ["XXl", "Xl", "L", "M", "S", "XS"];
const ProductDetails = ({
  product,
  onColorChoice,
  onSizeChoice,
  chosenColor,
  chosenSize,
}) => {
  return (
    <div className="product-details">
      <div className="product-title">
        <div className="title">{product?.title || "product title"}</div>
        <div className="product-reviews">
          <span> reviews:</span>
          {Array.from({ length: Math.floor(product?.rating) }, (_, index) => (
            <StarRateRoundedIcon className="star" key={index} />
          ))}
        </div>
      </div>
      <div className="product-description">
        {product?.description || "product description"}
      </div>
      <div className="product-price">
        <span>Price:</span>
        <div
          className="product-price-bd"
          style={{
            textDecoration:
              product?.discountPercentage !== 0 ? "line-through" : "none",
            color:
              product?.discountPercentage !== 0
                ? "var(--v-dark-gray)"
                : "var(--black)",
          }}
        >
          {product?.price || ""} DA
        </div>{" "}
        {product?.discountPercentage !== 0 && (
          <div className="product-price-ad">
            {product && product?.discountPercentage !== 0
              ? ((product?.price * product?.discountPercentage) / 100).toFixed(
                  2
                )
              : ""}
            DA
          </div>
        )}{" "}
        {product?.discountPercentage !== 0 && (
          <div className="product-price-ad-save">
            save {product?.discountPercentage}%
          </div>
        )}
      </div>
      {colors.length !== 0 && (
        <div className="product-colors">
          <span>Colors:</span>
          {colors.map((color, i) => (
            <div
              key={i}
              className={`product-color ${
                chosenColor && chosenColor === color && "chosen"
              }`}
              onClick={() => onColorChoice(color)}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      )}
      {sizes.length !== 0 && (
        <div className="product-sizes">
          <span>Sizes:</span>
          {sizes.map((size, i) => (
            <div
              key={i}
              className={`product-size ${
                chosenSize && chosenSize === size && "chosen"
              }`}
              onClick={() => onSizeChoice(size)}
            >
              {size}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
