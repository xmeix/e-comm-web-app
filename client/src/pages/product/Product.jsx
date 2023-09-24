import { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

import ProductImageGallery from "../../components/productImageGallery/ProductImageGallery";
import ProductDetails from "../../components/productDetails/ProductDetails";
import ProductActions from "../../components/productActions/ProductActions";
import { Toaster } from "react-hot-toast";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [chosenImage, setChosenImage] = useState(null);
  const [chosenColor, setChosenColor] = useState(null);
  const [chosenSize, setChosenSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

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
            <ProductDetails
              product={product}
              onColorChoice={setChosenColor}
              onSizeChoice={setChosenSize}
              chosenColor={chosenColor}
              chosenSize={chosenSize}
            />
            <div className="quantity-container">
              <button
                onClick={() =>
                  setQuantity((prev) =>
                    prev <= product.stock ? prev + 1 : prev
                  )
                }
              >
                <AddRoundedIcon className="icon" />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                <RemoveRoundedIcon className="icon" />
              </button>
            </div>
            <ProductActions
              item={{
                product: product,
                quantity: quantity,
                chosenColor: chosenColor,
                chosenSize: chosenSize,
              }}
            />
          </div>
        </div>
      </div>
      <div className="product-comments">
        <div className="product-comment">comment section</div>
      </div>{" "}
      <Toaster />
    </div>
  );
};

export default Product;
