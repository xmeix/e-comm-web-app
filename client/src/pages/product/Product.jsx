import { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

import ProductImageGallery from "../../components/productImageGallery/ProductImageGallery";
import ProductDetails from "../../components/productDetails/ProductDetails";
import ProductActions from "../../components/productActions/ProductActions";

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
        <ProductImageGallery
          images={product?.images || []}
          onImageClick={setChosenImage}
        />

        <div className="product-info-container">
          <div className="product-image">
            <img src={chosenImage} alt="" />
          </div>
          <div className="product-details-container">
            <ProductDetails product={product} />
            <div className="quantity-container">
              <button>
                <AddRoundedIcon className="icon" />
              </button>
              <span>10</span>
              <button>
                <RemoveRoundedIcon className="icon" />
              </button>
            </div>
            <ProductActions />
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
