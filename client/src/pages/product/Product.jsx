import "./Product.css";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  return (
    <div className="product">
      <div className="product-info">
        <div className="product-aside">
          <p>products pictures preview</p>
          <p>products pictures preview</p>
          <p>products pictures preview</p>
          <p>products pictures preview</p>
        </div>
        <div className="product-info-container">
          <div className="product-image">image</div>
          <div className="product-details">
            <div className="product-title">title</div>
            <div className="product-description">description</div>
            <div className="product-price">price</div>
            <div className="product-colors">colors</div>
            <div className="product-sizes">sizes</div>
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
