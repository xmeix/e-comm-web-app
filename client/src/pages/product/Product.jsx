import { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [chosenImage, setChosenImage] = useState(null);
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
                {product?.title || "product title"}
              </div>
              <div className="product-description">
                {" "}
                {product?.description || "product description"}
              </div>
              <div className="product-price">
                Price:
                <div className="product-price-ad">
                  {product
                    ? (
                        (product?.price * product?.discountPercentage) /
                        100
                      ).toFixed(2)
                    : "product price after discount"}{" "}
                  DA
                </div>
                <div className="product-price-bd">
                  {product?.price || "product price"} DA
                </div>
              </div>
              <div className="product-colors">Colors: </div>
              <div className="product-sizes">Sizes: </div>
            </div>
            <div className="product-buttons">
              <button>Buy</button>
              <button>Add to cart</button>
              <button>Add to wishlist</button>
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
