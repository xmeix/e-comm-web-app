import { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [chosenImage, setChosenImage] = useState(null);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setProduct(data);
            setChosenImage(data.images[0]);
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="product">
      <div className="product-info">
        <div className="product-aside">
          {product?.images.map((img, i) => (
            <div className="aside-image" onClick={() => setChosenImage(img)}>
              <img key={i} src={img} alt="image" />
            </div>
          ))}
        </div>
        <div className="product-info-container">
          <div className="product-image">
            <img src={chosenImage} alt="" />
          </div>
          <div className="product-details-container">
            <div className="product-details">
              <div className="product-title">
                <div className="title">{product?.title || "product title"}</div>
                <div className="product-reviews">
                  <span> reviews:</span>
                  {Array.from(
                    { length: Math.floor(product?.rating) },
                    (_, index) => (
                      <StarRateRoundedIcon className="star" key={index} />
                    )
                  )}
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
                      product?.discountPercentage !== 0
                        ? "line-through"
                        : "none",
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
                      ? (
                          (product?.price * product?.discountPercentage) /
                          100
                        ).toFixed(2)
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
                  {colors.map((color) => (
                    <div
                      className="product-color"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              )}
              {sizes.length !== 0 && (
                <div className="product-sizes">
                  <span>Sizes:</span>
                  {sizes.map((size) => (
                    <div className="product-size">{size}</div>
                  ))}
                </div>
              )}
            </div>
            <div className="quantity-container">
              <button>
                <AddRoundedIcon className="icon" />
              </button>
              <span>10</span>
              <button>
                <RemoveRoundedIcon className="icon" />
              </button>
            </div>
            <div className="product-buttons">
              <button className="special-btn">
                <span>Buy</span> <SellRoundedIcon className="icon-btn" />
              </button>
              <button>
                {" "}
                <span> Add to cart</span>{" "}
                <ShoppingCartRoundedIcon className="icon-btn" />
              </button>
              <button>
                <span>Add to wishlist</span>{" "}
                <FavoriteRoundedIcon className="icon-btn" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-comments">
        <div className="product-comment">comment section</div>
      </div>
    </div>
  );
};

export default Product;
